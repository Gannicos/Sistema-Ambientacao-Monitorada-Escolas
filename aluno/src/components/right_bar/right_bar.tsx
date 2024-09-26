import './right_bar.css';
import Icon from '../Icon/icon';
import { useState } from 'react';

interface RightBarProps {
    onToggleMapImage: () => void;
}

export default function RightBar({ onToggleMapImage }: RightBarProps) {

    const [search, setSearch] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const contacts = [
        { name: "Adele", email: "adele@example.com", phone: "123-456-7890" },
        { name: "Agnes", email: "agnes@example.com", phone: "987-654-3210" },
        { name: "Billy", email: "billy@example.com", phone: "555-555-5555" },
        { name: "Bob", email: "bob@example.com", phone: "222-333-4444" },
        { name: "Calvin", email: "calvin@example.com", phone: "444-555-6666" },
        { name: "Christina", email: "christina@example.com", phone: "777-888-9999" },
        { name: "Cindy", email: "cindy@example.com", phone: "000-111-2222" },
        { name: "David", email: "david@example.com", phone: "101-202-3030" },
        { name: "Emma", email: "emma@example.com", phone: "404-505-6060" },
        { name: "Frank", email: "frank@example.com", phone: "707-808-9090" },
        { name: "Grace", email: "grace@example.com", phone: "010-111-1212" },
        { name: "Henry", email: "henry@example.com", phone: "131-415-1617" },
        { name: "Isabella", email: "isabella@example.com", phone: "181-920-2122" },
        { name: "Jack", email: "jack@example.com", phone: "232-425-2627" },
        { name: "Karen", email: "karen@example.com", phone: "282-930-3132" },
        { name: "Liam", email: "liam@example.com", phone: "333-435-3637" },
        { name: "Mia", email: "mia@example.com", phone: "383-940-4142" },
        { name: "Noah", email: "noah@example.com", phone: "434-445-4647" },
        { name: "Olivia", email: "olivia@example.com", phone: "484-950-5152" },
        { name: "Peter", email: "peter@example.com", phone: "535-455-5657" },
        { name: "Quincy", email: "quincy@example.com", phone: "585-960-6162" },
        { name: "Rachel", email: "rachel@example.com", phone: "636-465-6667" },
        { name: "Steve", email: "steve@example.com", phone: "686-970-7172" },
        { name: "Tina", email: "tina@example.com", phone: "737-475-7677" },
        { name: "Uma", email: "uma@example.com", phone: "787-980-8182" },
        { name: "Victor", email: "victor@example.com", phone: "838-485-8687" },
        { name: "Wendy", email: "wendy@example.com", phone: "888-990-9192" },
        { name: "Xavier", email: "xavier@example.com", phone: "939-495-9697" },
        { name: "Yvonne", email: "yvonne@example.com", phone: "989-000-0203" },
        { name: "Zach", email: "zach@example.com", phone: "040-505-0607" },
        { name: "Alice", email: "alice@example.com", phone: "090-010-1213" },
        { name: "Brian", email: "brian@example.com", phone: "141-515-1617" },
        { name: "Clara", email: "clara@example.com", phone: "191-020-2223" }
    ];
    

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm)
    );

    const toggleSearchBar = () => {
        setSearch(!search);
    }

    return (
        <div className={`right-bar-container-heigth ${search ? 'collapsed' : ''}`}>
            <div className='search-input-container'>
                <input
                    className={`search-input ${search ? 'collapsed' : ''}`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && !search && (
                    <ul className="results-list">
                        {filteredContacts.map((contact, index) => (
                            <li key={index}>
                                <div>
                                    <strong>Name:</strong> {contact.name}
                                </div>
                                <div>
                                    <strong>Email:</strong> {contact.email}
                                </div>
                                <div>
                                    <strong>Phone:</strong> {contact.phone}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className='backpack-input-container'>
                <div className={`backpack-input ${search ? 'collapsed' : ''}`}>
                </div>
            </div>
            <div className='right-bar-container'>
                <div className='right-bar-guide-icons'>
                    <p className="guide-container">
                        <button className="icon" onClick={toggleSearchBar}><Icon value="Search" /></button>
                    </p>
                    <p className="guide-container">
                        <button className="icon"><Icon value="BackPack" /></button>
                    </p>
                    <p className="guide-container">
                        <button className="icon" onClick={onToggleMapImage}><Icon value="UpDown" /></button>
                    </p>
                </div>
            </div>
        </div>
    );
}
