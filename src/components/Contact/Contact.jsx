import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => (
  <li className={css.contactListItem} key={id}>
    <div className={css.infoContainer}>
      <div className={css.contactInfo}>
        <FaUser className={css.icon} /> {name}
      </div>
      <div className={css.contactInfo}>
        <FaPhone className={css.icon} />
        {number}
      </div>
    </div>
    <button className={css.deleteButton} onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

export default Contact;
