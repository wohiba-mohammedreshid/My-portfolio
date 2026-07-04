import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};

    if (!formState.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!formState.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formState.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }
    if (!formState.message.trim()) {
      nextErrors.message = "Please enter a message.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    setFormState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form before sending.");
      return;
    }

    setFormState({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    toast.success("Your message has been sent successfully!");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-4xl border border-slate-700 bg-slate-950/80 p-8 shadow-lg shadow-slate-950/20">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Full Name</label>
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none focus:border-blue-400"
          />
          {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
          <input
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none focus:border-blue-400"
          />
          {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Subject</label>
          <input
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none focus:border-blue-400"
          />
          {errors.subject && <p className="mt-2 text-sm text-red-400">{errors.subject}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows="5"
            className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none focus:border-blue-400"
          />
          {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
        </div>
        <button type="submit" className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">
          Send Message
        </button>
      </form>
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
}

export default ContactForm;
