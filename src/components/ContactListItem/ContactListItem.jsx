import css from './ContactListItem.module.css';

export const ContactListItem = ({contacts, deleteContact}) => {
  return <>
    <li className={css.item}>{contacts.name}: {contacts.number}
    <button
      className={css.btn}
      onClick={()=>deleteContact(contacts.id)}
      type="button">
      Delete
    </button>
    </li>
    
  </>
  
  
  
}
