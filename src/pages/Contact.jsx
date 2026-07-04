import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import ContactForm from "../components/contactForm";

function Contact() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-4xl border border-slate-700 bg-slate-950/80 p-10 shadow-lg shadow-slate-950/20">
            <div>
              <p className="text-blue-400 font-semibold">Contact</p>
              <h1 className="mt-3 text-4xl font-bold text-white">Get in touch</h1>
              <p className="mt-4 text-slate-400 leading-relaxed">
                I’m available for internships, freelance work, and collaboration on meaningful web and AI projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-3xl bg-slate-900/90 p-5">
                <FiMail className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="text-slate-400">Email</p>
                  <p className="text-white">abihowhadri@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-slate-900/90 p-5">
                <FiPhone className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="text-slate-400">Phone</p>
                  <p className="text-white">+251 963945482</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-slate-900/90 p-5">
                <FiMapPin className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="text-slate-400">Location</p>
                  <p className="text-white">Jimma, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a href="https://github.com/wohiba-mohammedreshid" className="flex items-center gap-3 rounded-3xl bg-slate-900/90 p-5 text-slate-200 transition hover:bg-slate-800" target="_blank" rel="noreferrer">
                <FiGithub className="h-6 w-6 text-blue-400" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/yourusername" className="flex items-center gap-3 rounded-3xl bg-slate-900/90 p-5 text-slate-200 transition hover:bg-slate-800">
                <FiLinkedin className="h-6 w-6 text-blue-400" /> LinkedIn
              </a>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mt-16">
          <div className="mb-8">
            <p className="text-blue-400 font-semibold">Location</p>
            <h2 className="mt-3 text-4xl font-bold text-white">Find Me Here</h2>
          </div>
          <div className="overflow-hidden rounded-4xl border border-slate-700 shadow-lg shadow-slate-950/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.4234567890123!2d36.8357!3d7.6721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17f3e6f7f7f7f7f7%3A0x7f7f7f7f7f7f7f7f!2sJimma%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
