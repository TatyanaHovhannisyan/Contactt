const ContactListItem = ({id, name, surname, phone, onRemove}) => {
    return (
        <li>
            {name} {surname}: {phone} <button onClick={() => onRemove(id)}>delete</button>
        </li>
    )
}



const ContactsList = ({contacts, onRemove}) => {
    if(contacts.length === 0) {
        return null; //No contacts UI
    }
    return (
        <ul>
            {contacts.map((contact) => (
                <ContactListItem {...contact} onRemove={onRemove} key={contact.id}/>
            ))}
        </ul>
    )
}

export default ContactsList
