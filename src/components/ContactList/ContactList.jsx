import { ContactListItem } from "components/ContactListItem/ContactListItem"
import css from './ContactList.module.css';

export const ContactList = ({contacts, deleteContact}) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact =>
        <ContactListItem
          contacts={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
    )}
    </ul>
  )
}

