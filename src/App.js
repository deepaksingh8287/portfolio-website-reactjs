import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Briefcase, User, Award, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    'React.js', 'JavaScript', 'Node.js', 'Next.js', 'React Native',
    'Redux', 'CSS', 'HTML', 'Firebase', 'Socket.io', 'WebRTC',
    'Sass', 'Tailwind CSS', 'Material UI', 'Ant Design', 'AG Grid'
  ];

  const projects = [
    {
      title: 'Communication Scaffold',
      description: 'Real-time video platform with P2P meetings and live chat',
      tech: ['React.js', 'WebRTC', 'Socket.io'],
      url: 'https://communication-scaffold.oodles.io/',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DG Market',
      description: 'E-procurement platform with live tenders and real-time updates',
      tech: ['Next.js', 'REST APIs', 'SEO'],
      url: 'https://www.dgmarket.in/',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Auvenir',
      description: 'Smart audit SaaS application with financial data integration',
      tech: ['React.js', 'Next.js', 'APIs'],
      url: 'https://auvenir.com/',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Babusiya',
      description: 'E-commerce UI with mobile-first design and fast performance',
      tech: ['React.js', 'Redux', 'Hooks'],
      url: 'https://babusiya.com/',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Hilson App',
      description: 'Cross-platform mobile app with real-time features',
      tech: ['React Native', 'Firebase', 'Redux'],
      url: 'https://play.google.com/store/apps/details?id=com.suviapp&hl=en-US',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const experience = [
    {
      company: 'Avinya Infotech',
      position: 'Software Developer',
      duration: 'Jul 2024 - Apr 2025',
      achievements: [
        'Created reusable UI components for consistency and faster development',
        'Enhanced performance using React Hooks and Context API',
        'Improved app load times by 30%'
      ]
    },
    {
      company: 'Redgrape Technologies',
      position: 'React Developer',
      duration: 'Sep 2022 - May 2024',
      achievements: [
        'Built high-performance dashboards with Next.js and SSR for SEO',
        'Integrated multiple REST APIs for real-time data visualization',
        'Developed secure user roles and access control'
      ]
    },
    {
      company: 'Oodles Technologies',
      position: 'React Developer',
      duration: 'Oct 2021 - Aug 2022',
      achievements: [
        'Developed real-time video/audio features using WebRTC and Socket.io',
        'Built dynamic UIs using React.js and Redux',
        'Ensured stable, scalable communication features across platforms'
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 100 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              DS
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 capitalize hover:text-cyan-400 transition-colors duration-300 font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-4xl font-bold shadow-2xl">
              DS
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 animate-ping"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Deepak Singh
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            Software Developer
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Skilled React JS developer with 3.5 years of experience in building dynamic and responsive web applications
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={20} />
              <span>Gurugram</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={20} />
              <span>+91-9306426871</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={20} />
              <span>deepaksingh33june@gmail.com</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore My Work
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <User className="text-cyan-400" size={32} />
              <h3 className="text-2xl font-semibold">Professional Overview</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a skilled React JS developer with 3.5 years of experience in building dynamic and responsive web applications. 
              My expertise includes front-end development, state management, and UI/UX design. I am passionate about creating 
              innovative solutions and continuously improving my skills to meet the evolving needs of the industry. My goal is 
              to contribute to impactful projects and grow as a professional in the field of web development.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">3.5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">20+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-gray-400">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="text-lg font-semibold text-white">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <Briefcase className="text-cyan-400" size={32} />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{job.position}</h3>
                    <p className="text-xl text-cyan-400">{job.company}</p>
                    <p className="text-gray-400">{job.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-full h-32 bg-gradient-to-r ${project.gradient} rounded-xl mb-6 flex items-center justify-center`}>
                  <Code size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm text-cyan-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <p className="text-lg text-gray-300 mb-8">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:deepaksingh33june@gmail.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 justify-center"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="tel:+919306426871"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 justify-center"
              >
                <Phone size={20} />
                Call Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 relative z-10 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Deepak Singh. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;