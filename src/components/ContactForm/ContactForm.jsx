import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

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
      <div>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <Field type="text" name="number" />
        <ErrorMessage name="number" component="div" />
      </div>
      <button type="submit">Add Contact</button>
    </Form>
  </Formik>
);

export default ContactForm;
