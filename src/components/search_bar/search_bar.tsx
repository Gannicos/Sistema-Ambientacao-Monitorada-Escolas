import React, { useState } from "react";
import "./search_bar.css";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const contacts = [
        { name: "Davi Fortes", email: "davi.araujo@ifrj.edu.br", phone: "123-456-7890", sub: "Matemática" },
        { name: "Isabel Santos", email: "isabel.santos@ifrj.edu.br", phone: "987-654-3210", sub: "Matemática"},
        { name: "Zé Marcello", email: "marcello.veloso@ifrj.edu.br", phone: "555-555-5555", sub: "Matemática" },
        { name: "Glaucia Marise", email: "glaucia.amaral@ifrj.edu.br", phone: "222-333-4444", sub: "Sociologia" },
        { name: "Ana Cristina Lourenço", email: "ana.lourenco@ifrj.edu.br", phone: "444-555-6666", sub: "Sociologia" },
        { name: "Vanessa Mota", email: "vanessa.mota@ifrj.edu.br", phone: "777-888-9999", sub: "Português" },
        { name: "Secretaria CNIT", email: "sa.cnit@ifrj.edu.br", phone: "2027-7004", hora: "Segunda à Quinta: 10h - 14h"}
    ];

    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.sub?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.hora?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone?.includes(searchTerm)
    );

    return (
        <div className="search-container">
            <button className="search-icon-button" onClick={toggleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>

            {showSearch && (
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder="Search for names, emails, or phones..."
                        title="Type in a name, email, or phone"
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="myInput"
                    />
                    {searchTerm && (
                        <ul className="myUL">
                            {filteredContacts.map((contact, index) => (
                                <li key={index}>
                                    <div><strong>Nome:</strong> {contact.name}</div>
                                    {contact.email && <div><strong>Email:</strong> {contact.email}</div>}
                                    {contact.phone && <div><strong>Número:</strong> {contact.phone}</div>}
                                    {contact.sub && <div><strong>Matéria:</strong> {contact.sub}</div>}
                                    {contact.hora && <div><strong>Horário de funcionamento:</strong> {contact.hora}</div>}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
