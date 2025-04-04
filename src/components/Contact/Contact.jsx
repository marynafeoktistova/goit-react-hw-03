import s from './Contact.module.css';

const Contact = ({ data, onDelete }) => {
  return (
    <div className={s.containerContac}>
      <div className={s.thumbContact}>
        <p className={s.nameContact}>{data.name}</p>
        <p className={s.nameContact}>{data.number}</p>
      </div>
      <button className={s.buttonDelete} onClick={() => onDelete(data.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
