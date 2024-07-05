import css from "../Contact/Contact.module.css";

export default function Contact({ contact }) {
  return (
    <li className={css.list}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button>Delete</button>
    </li>
  );
}
