import React, { useRef, useState, useEffect } from 'react';
import './map.css';

interface MapProps {
    mapImage: string;
}

export default function Map({ mapImage }: MapProps) {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const lastMousePosition = useRef({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        isDragging.current = true;
        lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging.current) return;

        const dx = e.clientX - lastMousePosition.current.x;
        const dy = e.clientY - lastMousePosition.current.y;

        setTranslate(prev => ({
            x: prev.x + dx,
            y: prev.y + dy,
        }));

        lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();

        const rect = mapContainerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const deltaScale = e.deltaY < 0 ? 0.1 : -0.1;
        let newScale = scale + deltaScale;
        newScale = Math.min(Math.max(newScale, 0.5), 3);

        // Adjust position to keep the point under the cursor stationary after zooming
        const scaleRatio = newScale / scale;

        const newTranslateX = (1 - scaleRatio) * (mouseX - translate.x) + translate.x;
        const newTranslateY = (1 - scaleRatio) * (mouseY - translate.y) + translate.y;

        setScale(newScale);
        setTranslate({
            x: newTranslateX,
            y: newTranslateY,
        });
    };

    useEffect(() => {
        const handleWindowMouseMove = (e: MouseEvent) => handleMouseMove(e);
        const handleWindowMouseUp = () => handleMouseUp();

        window.addEventListener('mousemove', handleWindowMouseMove);
        window.addEventListener('mouseup', handleWindowMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
            window.removeEventListener('mouseup', handleWindowMouseUp);
        };
    }, []);

    useEffect(() => {
        const mapContainer = mapContainerRef.current;
        if (!mapContainer) return;

        mapContainer.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            mapContainer.removeEventListener('wheel', handleWheel);
        };
    }, [scale, translate]);

    return (
        <div
            ref={mapContainerRef}
            className="map-container"
            onMouseDown={handleMouseDown}
            style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
        >
            <img
                src={mapImage}
                alt="Map"
                className="map-image"
                style={{
                    transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
                    transformOrigin: '0 0',
                }}
            />
        </div>
    );
}
