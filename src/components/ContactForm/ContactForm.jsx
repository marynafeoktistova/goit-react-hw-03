import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });

    actions.resetForm();
  };
  const handleNumberInput = e => {
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart;
    if (e.key === '+' && cursorPosition !== 0) {
      e.preventDefault();
      return;
    }
    if (!/[0-9+]/.test(e.key) || (e.key === '+' && value.includes('+'))) {
      e.preventDefault();
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type='text' name='name' id={nameFieldId} />
          <ErrorMessage name='name' component='span' />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type='text' name='number' id={numberFieldId} placeholder='xxx-xx-xx' />
          <ErrorMessage name='number' component='span' />
        </div>
        <button type='submit'>Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
