const Contact = ({ name, number }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{number}</p>

      <button> Delete </button>
    </div>
  );
};
export default Contact;
