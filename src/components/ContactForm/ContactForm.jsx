import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const validationChoice = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must be at most 50 characters")
    .required("Required"),
});

export default function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationChoice}
      validateOnBlur={true}
      validateOnChange={false}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values.name, values.number);
        resetForm();
      }}
    >
      {() => (
        <Form className={css.container}>
          <label className={css.label}>
            Name
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage
              name="name"
              component="div"
              className={css.errorMessage}
            />
          </label>
          <br />
          <label className={css.label}>
            Number
            <Field type="text" name="number" className={css.input} />
            <ErrorMessage
              name="number"
              component="div"
              className={css.errorMessage}
            />
          </label>
          <br />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
