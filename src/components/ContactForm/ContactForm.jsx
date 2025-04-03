import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import s from './Contact.module.css';

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

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={s.containerForm}>
        <div className={s.thumb}>
          <label className={s.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={s.formInput} type='text' name='name' id={nameFieldId} placeholder='Name' />
          <ErrorMessage className={s.errorName} name='name' component='span' />
        </div>
        <div className={s.thumb}>
          <label className={s.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field className={s.formInput} type='text' name='number' id={numberFieldId} placeholder='123-45-67' />
          <ErrorMessage className={s.errorName} name='number' component='span' />
        </div>
        <button className={s.buttonAdd} type='submit'>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
