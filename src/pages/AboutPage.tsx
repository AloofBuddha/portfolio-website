import { skills } from '../data/skills';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const AboutPage = () => {
  const contactInfo = [
    {
      name: 'Email',
      icon: <FaEnvelope size={24} />,
      url: 'mailto:bac1087@gmail.com',
      display: 'bac1087@gmail.com',
    },
    {
      name: 'Phone',
      icon: <FaPhone size={24} />,
      url: 'tel:+15166683981',
      display: '(516) 668-3981',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://linkedin.com/in/aloofbuddha',
      display: 'linkedin.com/in/aloofbuddha',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/AloofBuddha',
      display: 'github.com/AloofBuddha',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About Me
        </h1>

        {/* Bio */}
        <div className="text-gray-300 space-y-4 mb-12">
          <p className="text-lg">
            I'm a <span className="text-[#e40027] font-semibold">design-oriented senior frontend engineer</span> who
            owns the frontend end-to-end (React, TypeScript, GraphQL, testing, CI/CD) and partners
            closely with product and design to ship polished, delightful, high-conversion experiences.
          </p>
          <p className="text-lg">
            With a strong foundation in <span className="text-[#e40027] font-semibold">teaching developers</span>,
            building design systems, and architecting complex UIs, I bring both technical depth and a
            collaborative mindset to every project.
          </p>
          <p className="text-lg">
            I'm particularly passionate about exploring how{' '}
            <span className="text-[#e40027] font-semibold">AI-native interfaces</span> can make
            powerful tools more intuitive and accessible—especially for developers. My projects like CollabCanvas
            demonstrate this exploration, where I've learned firsthand where LLMs excel and where they struggle.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-[#e40027] transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">{skill.icon}</span>
                <h4 className="text-white font-medium text-sm mb-1">{skill.name}</h4>
                <p className="text-xs text-gray-400">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Get In Touch</h2>
          <p className="text-gray-400 text-center mb-8">
            I'm currently open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target={contact.url.startsWith('http') ? '_blank' : undefined}
                rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex items-center space-x-4 hover:border-[#e40027] transition-all hover:shadow-lg hover:shadow-[#e40027]/10"
              >
                <div className="text-[#e40027]">{contact.icon}</div>
                <div>
                  <h4 className="text-white font-medium">{contact.name}</h4>
                  <p className="text-sm text-gray-400">{contact.display}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="mailto:bac1087@gmail.com"
              className="inline-block bg-[#e40027] hover:bg-[#c00022] text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
