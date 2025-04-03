import s from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.container}>
      <p className={s.text}>Find contacts by name</p>
      <div className={s.container}>
        <input className={s.formInput} type='text' placeholder='Search contacts' value={value} onChange={e => onChange(e.target.value)}></input>
      </div>
    </div>
  );
};

export default SearchBox;
