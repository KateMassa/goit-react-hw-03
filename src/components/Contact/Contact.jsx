const Contact = ({ id, name, number, onDelete }) => (
  <li key={id}>
    {name}: {number}
    <button onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default Contact;
