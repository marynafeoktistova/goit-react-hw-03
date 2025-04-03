const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type='text' placeholder='Search contacts' value={value} onChange={e => onChange(e.target.value)}></input>
    </div>
  );
};

export default SearchBox;
