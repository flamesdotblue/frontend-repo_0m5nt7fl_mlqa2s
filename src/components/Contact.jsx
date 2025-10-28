import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s connect</h2>
            <p className="text-gray-600 mt-3">
              I’m looking for internships and exciting collaborations. Email me or reach out on LinkedIn. I usually reply within a day.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:you@example.com" className="flex items-center gap-3 text-gray-800 hover:text-blue-700">
                <Mail size={20} /> you@example.com
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-800 hover:text-blue-700">
                <Linkedin size={20} /> linkedin.com/in/yourprofile
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-800 hover:text-blue-700">
                <Github size={20} /> github.com/yourhandle
              </a>
            </div>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const name = data.get('name');
                const email = data.get('email');
                const message = data.get('message');
                const mailto = `mailto:you@example.com?subject=Portfolio%20contact%20from%20${encodeURIComponent(
                  String(name || '')
                )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                window.location.href = mailto;
              }}
              className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
