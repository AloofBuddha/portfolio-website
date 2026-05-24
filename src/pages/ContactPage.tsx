import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const contactInfo = [
  {
    name: "Email",
    icon: <FaEnvelope size={24} />,
    url: "mailto:bac1087@gmail.com",
    display: "bac1087@gmail.com",
  },
  {
    name: "Phone",
    icon: <FaPhone size={24} />,
    url: "tel:+15166683981",
    display: "(516) 668-3981",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    url: "https://linkedin.com/in/aloofbuddha",
    display: "linkedin.com/in/aloofbuddha",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    url: "https://github.com/AloofBuddha",
    display: "github.com/AloofBuddha",
  },
];

const ContactPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          I'm currently open to new opportunities and interesting projects.
          Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target={contact.url.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="glass-card border border-gray-200 dark:border-slate-700 rounded-lg p-4 flex items-center space-x-4 hover:border-red-500 dark:hover:border-cyan-400 transition-all shadow-sm hover:shadow-lg hover:shadow-red-500/10 dark:hover:shadow-cyan-400/10"
            >
              <div className="text-red-500 dark:text-cyan-400">
                {contact.icon}
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-medium">
                  {contact.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {contact.display}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:bac1087@gmail.com"
            className="inline-block bg-red-500 hover:bg-red-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
