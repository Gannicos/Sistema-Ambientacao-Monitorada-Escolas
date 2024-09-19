import React, { useState } from "react";
import "./search_bar.css";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const contacts = [
        { name: "Adele", email: "adele@example.com", phone: "123-456-7890" },
        { name: "Agnes", email: "agnes@example.com", phone: "987-654-3210" },
        { name: "Billy", email: "billy@example.com", phone: "555-555-5555" },
        { name: "Bob", email: "bob@example.com", phone: "222-333-4444" },
        { name: "Calvin", email: "calvin@example.com", phone: "444-555-6666" },
        { name: "Christina", email: "christina@example.com", phone: "777-888-9999" },
        { name: "Cindy", email: "cindy@example.com", phone: "000-111-2222" }
    ];

    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm)
    );

    return (
        <div className="search-container">
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
    );
}
