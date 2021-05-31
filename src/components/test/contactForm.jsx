import React from "react";
import { useForm } from "../../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "this field is required.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "this field accepts only words..";
  }

  if (!form.email.trim()) {
    errors.email = "this field is required.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "email invalid.";
  }

  if (!form.subject.trim()) {
    errors.subject = "this field is required.";
  }

  if (!form.comments.trim()) {
    errors.comments = "this field is required.";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "only a maximum of 255 characters allowed.";
  }

  return errors;
};

const ContactForm = () => {
  const { form, errors, loading, response, handleBlur, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );

  return (
    <div>
      <h2>Formulation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Writing your name"
          onChange={handleChange}
          value={form.name}
          onBlur={handleBlur}
          required
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Writing your email"
          onChange={handleChange}
          value={form.email}
          onBlur={handleBlur}
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="topic to discuss"
          onChange={handleChange}
          value={form.subject}
          onBlur={handleBlur}
          required
        />
        {errors.subject && <p>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Writing your comments"
          onChange={handleChange}
          value={form.comments}
          onBlur={handleBlur}
        ></textarea>
        {errors.comments && <p>{errors.comments}</p>}
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
