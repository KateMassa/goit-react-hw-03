import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => (
  <Formik
    initialValues={{ name: "", number: "" }}
    validationSchema={Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must be at most 50 characters"),
      number: Yup.string()
        .required("Number is required")
        .min(3, "Number must be at least 3 characters")
        .max(50, "Number must be at most 50 characters"),
    })}
    onSubmit={(values, actions) => {
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      });
      actions.resetForm();
    }}
  >
    <Form>
      <div className={css.formContainer}>
        <div className={css.addContactContainer}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className={css.addContactContainer}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button className={css.formButton} type="submit">
          Add Contact
        </button>
      </div>
    </Form>
  </Formik>
);

export default ContactForm;
