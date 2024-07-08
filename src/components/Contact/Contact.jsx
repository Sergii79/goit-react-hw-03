import css from "../Contact/Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contact, onDeleteContact }) {
  return (
    <li className={css.container}>
      <div className={css.list}>
        <p className={css.contactItem}>
          <FaUser />
          {contact.name}
        </p>
        <p className={css.contactItem}>
          <FaPhoneAlt />
          {contact.number}
        </p>
      </div>

      <button
        className={css.button}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}
