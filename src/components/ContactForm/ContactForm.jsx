import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must be at most 50 characters")
    .required("Number is required"),
});

export default function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values.name, values.number);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <label>
            Name:
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <br />
          <label>
            Number:
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <br />
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
}
