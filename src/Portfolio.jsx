// src/Portfolio.jsx
import React, { useEffect, useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet";

export default function Portfolio() {
  const [text, setText] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const fullText = "Hi, I'm Saisrinivas!";
  const typingSpeed = 100; // ms per character

  // Special characters for the animation
  const specialChars = ['✨', '🚀', '💻', '⚡', '🎯', '🔥', '💡', '🌟', '⭐', '🎨', '🎪', '🎭', '🎨', '🎯', '🔮', '💫', '🌈', '🎊', '🎉', '✨'];

  // Function to create particles
  const createParticles = () => {
    const newParticles = [];
    const imageSize = 288; // 72 * 4 (w-72 = 288px)

    for (let i = 0; i < 25; i++) {
      // Generate random position on the border of the image
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let startX, startY, endX, endY;

      switch (side) {
        case 0: // Top border
          startX = Math.random() * imageSize - imageSize/2;
          startY = -imageSize/2;
          endX = startX + (Math.random() * 200 - 100);
          endY = startY - (Math.random() * 150 + 100);
          break;
        case 1: // Right border
          startX = imageSize/2;
          startY = Math.random() * imageSize - imageSize/2;
          endX = startX + (Math.random() * 150 + 100);
          endY = startY + (Math.random() * 200 - 100);
          break;
        case 2: // Bottom border
          startX = Math.random() * imageSize - imageSize/2;
          startY = imageSize/2;
          endX = startX + (Math.random() * 200 - 100);
          endY = startY + (Math.random() * 150 + 100);
          break;
        case 3: // Left border
          startX = -imageSize/2;
          startY = Math.random() * imageSize - imageSize/2;
          endX = startX - (Math.random() * 150 + 100);
          endY = startY + (Math.random() * 200 - 100);
          break;
      }

      newParticles.push({
        id: Math.random(),
        char: specialChars[Math.floor(Math.random() * specialChars.length)],
        startX,
        startY,
        endX,
        endY,
        delay: Math.random() * 0.5, // Random delay up to 0.5s
      });
    }
    setParticles(newParticles);
  };

  // Handle photo hover
  const handlePhotoMouseEnter = () => {
    setIsPhotoHovered(true);
    createParticles();
  };

  const handlePhotoMouseLeave = () => {
    setIsPhotoHovered(false);
    setTimeout(() => setParticles([]), 4000); // Clear particles after animation
  };

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const cursorStyle = {
    borderRight: '0.15em solid #64ffda',
    animation: 'blink-caret 1.2s infinite',
    paddingRight: '3px',
    marginLeft: '2px'
  };

  const projects = [
    {
      title: "Traitlytics - LinkedIn Personality Detector",
      description: "Built a personality detection tool using LLMs which assists job seekers in interview preparation.",
      github: "https://github.com/saisrinivas7/Traitlytics",
      technologies: ["Python", "Ollama", "Selenium"]
    },
    {
      title: "Full Stack Learning Management System",
      description: "Developed a full-stack Learning Management System with features like user authentication, course management, and progress tracking.",
      github: "https://github.com/saisrinivas7/fullstack-LMS",
      technologies: ["Node.js", "React", "MongoDB", "Express"]
    },
    {
      title: "Spatial Query and Hotspot Analysis using Apache Spark",
      description: "Optimized spatial queries on a 10M+ record NYC taxi dataset using Apache Spark and SparkSQL, reducing query execution time by 40%.",
      github: "https://github.com/saisrinivas7",
      technologies: ["Scala", "SQL"]
    },
    {
      title: "Hyperdimensional Computing vs Sparse Neural Networks",
      description: "Compared the computational efficiency of HDC and Sparse Neural Networks by introducing 5+ kinds of robustness(sentence level, word level etc.) in the dataset.",
      github: "https://github.com/Confluence-Lab/HD-vs-NN",
      technologies: ["Python", "Keras", "Numpy", "Scikit-learn"]
    },
    {
      title: "Image Caption Generator",
      description: "Predicted captions for an input image. The features are extracted from both the image and the text captions for input. Features will be concatenated to predict the next word of the caption.",
      github: "https://github.com/saisrinivas7",
      technologies: ["Pandas", "upgini", "catboost"]
    },
    {
      title: "Cash Flow Minimizer",
      description: "Built a React-based application that uses graph algorithms and greedy strategies to optimize debt settlements among multiple parties.",
      github: "https://github.com/saisrinivas7",
      technologies: ["React", "Greedy Algorithms", "Graph Algorithms"]
    }
  ];

  return (
    <div className="bg-[#0a192f] text-gray-300 font-mono min-h-screen px-6">
      <Helmet>
        <title>Saisrinivas Mamunuru</title>
        <link rel="icon" href="/ms-favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" />
        <style>
          {`
            @keyframes blink-caret {
              0%, 100% { border-color: transparent }
              50% { border-color: #64ffda }
            }
            html { scroll-behavior: smooth; }
            h1, h2, h3, h4, h5, h6, nav, .navbar-text {
              font-family: 'Space Mono', monospace;
            }
            .typing-text {
              font-family: 'Space Mono', monospace !important;
              color: #64ffda !important;
            }
            p, a:not(.navbar-text), span:not(.heading-text):not(.typing-text), div, input, textarea, button {
              font-family: Arial, Helvetica, sans-serif;
            }
            .photo-container {
              position: relative;
              display: inline-block;
            }
            .particle {
              position: absolute;
              font-size: 1.5rem;
              pointer-events: none;
              animation: particleFloat 4s ease-out forwards;
              top: calc(50% + var(--startY));
              left: calc(50% + var(--startX));
              z-index: 10;
            }
            @keyframes particleFloat {
              0% {
                opacity: 1;
                transform: scale(0.5);
              }
              100% {
                opacity: 0;
                transform: translate(calc(var(--endX) - var(--startX)), calc(var(--endY) - var(--startY))) scale(1.2);
              }
            }
            .photo-hover {
              transition: transform 0.3s ease;
              cursor: pointer;
            }
            .photo-hover:hover {
              transform: scale(1.05);
            }
          `}
        </style>
      </Helmet>

      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 sticky top-0 z-10 bg-[#0a192f]/90 backdrop-blur-sm shadow-md">
        <a href="#" className="text-white font-bold text-xl hover:text-[#64ffda] transition navbar-text">
          Saisrinivas Mamunuru
        </a>
        <div className="flex gap-6">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#64ffda] transition navbar-text"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center">
          <div
            className="photo-container"
            onMouseEnter={handlePhotoMouseEnter}
            onMouseLeave={handlePhotoMouseLeave}
          >
            <img
              src="/IMG_8042.jpg"
              alt="Saisrinivas Mamunuru"
              className="w-72 h-72 object-cover rounded-xl shadow-lg border-4 border-[#64ffda]/20 photo-hover"
            />
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  '--startX': `${particle.startX}px`,
                  '--startY': `${particle.startY}px`,
                  '--endX': `${particle.endX}px`,
                  '--endY': `${particle.endY}px`,
                  animationDelay: `${particle.delay}s`,
                }}
              >
                {particle.char}
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-6 text-[#64ffda]">
            <a href="mailto:ssmamunuru@gmail.com" target="_blank" rel="noopener noreferrer">
              <EnvelopeIcon className="w-6 h-6 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/saisrinivas7" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 hover:text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8h5v16h-5V8zm7.98 0h4.78v2.3h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.36c0-1.76-.03-4.02-2.45-4.02-2.46 0-2.84 1.91-2.84 3.89V24h-5V8z"/>
              </svg>
            </a>
            <a href="https://github.com/saisrinivas7" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="public/Saisrinivas_Mamunuru_CV.pdf" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 hover:text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 11h8v1H8v-1zm0 2h8v1H8v-1zm0 2h8v1H8v-1z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">
            <span className="typing-text">{text}</span><span style={cursorStyle}></span>
          </h1>
          <p className="text-lg mb-4 text-gray-300">
            I'm a master's student at <span className="text-white font-semibold">Arizona State University</span> majoring in <span className="text-white font-semibold">Data Science, Analytics and Engineering</span>. Previously, I graduated with a B.E.(Hons.) <span className="text-white font-semibold">Computer Science</span> from <span className="text-white font-semibold">BITS Pilani, Goa, India</span>. I'm passionate about data-driven and software solutions for real-world problems. Building large-scale, high-impact products fascinates me.
          </p>
          <p className="text-lg mb-4 text-gray-300">
            When I'm not working on projects or learning new technologies, I'm a sports enthusiast who loves playing tennis and cricket. I enjoy travelling and trying out new cuisines as a true foodie. Also, I'm a huge movie buff – always up for a good film recommendation!
          </p>
        </div>
      </section>

      {/* Experience Section - Timeline */}
      <section id="experience" className="max-w-4xl mx-auto py-12 border-t border-[#233554]">
        <h2 className="text-2xl font-bold mb-12 text-white tracking-wider uppercase">
          Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-[#64ffda]"></div>

          {[
            {
              title: "Software Engineering Intern",
              company: "CVS Health",
              date: "May 2025 - Current",
              description: "Working in the Aetna Tech Business Unit",
              technologies: ["Java", "Spring"]
            },
            {
              title: "Data Science Research Aide",
              company: "WP Carey School of Business, Arizona State University",
              date: "Jan 2025-May 2025",
              description: "Answering the question -What drives innovation in Universities?",
              technologies: ["Python", "Jupyter", "Numpy", "Pandas"]
            },
            {
              title: "Software Engineering Intern",
              company: "Dell Technologies",
              date: "July 2023 - Dec 2023",
              description: "Worked for the EIPT team, which is responsible for enterprise IT infrastructure.",
              technologies: ["C#", "MongoDB", "Python", "XML","SQL"]
            },
            {
              title: "Software Engineering Intern",
              company: "Indian Red Cross Society",
              date: "May 2022 - Jul 2022",
              description: "Replaced existing Excel-based processes for college data management by developing a scalable Django and MySql backend",
              technologies: ["Django", "SQL", "Docker"]
            },

            {
              title: "Teaching Assistant",
              company: "BITS Pilani,Goa",
              date: "Jan 2021 - May 2023",
              description: "Teaching Assistant for the courses OOP(CS F213) and Computer Programming(CS F111).",
              technologies: ["C", "Java", "Unit Testing"]
            }
          ].map((job, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

              {/* Date - Left side on desktop, top on mobile */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} mb-4 md:mb-0`}>
                <div className="ml-12 md:ml-0">
                  <span className="text-[#64ffda] font-bold text-lg">{job.date}</span>
                </div>
              </div>

              {/* Content - Right side on desktop, below date on mobile */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="ml-12 md:ml-0">
                  <div className="bg-[#112240] p-6 rounded-lg shadow-lg border-l-4 border-[#64ffda]">
                    <h3 className="text-xl text-white font-bold mb-1">{job.title}</h3>
                    <p className="text-[#64ffda] font-semibold mb-3">{job.company}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-[#233554] text-[#64ffda] px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section with Hover Effect */}
      <section id="projects" className="max-w-4xl mx-auto py-12 border-t border-[#233554]">
        <h2 className="text-2xl font-bold mb-6 text-white tracking-wider uppercase">
          Projects
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          onMouseLeave={() => setHoveredProject(null)}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-[#112240] rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 ${
                hoveredProject !== null && hoveredProject !== index
                  ? 'opacity-50 scale-95'
                  : 'opacity-100 scale-100'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[#64ffda]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#64ffda] transition-colors">
                    <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                      <svg className="w-3 h-3 text-[#112240]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <h3 className="text-xl text-white font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-[#233554] text-[#64ffda] px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto py-12 border-t border-[#233554]">
        <h2 className="text-2xl font-bold mb-6 text-white tracking-wider uppercase">
          Let's get in touch! 👀
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <a
              href="mailto:ssmamunuru@gmail.com"
              className="px-6 py-3 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-colors duration-300 text-center"
            >
              Say Hello
            </a>
            <a
              href="https://linkedin.com/in/saisrinivas7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-colors duration-300 text-center"
            >
              Connect on LinkedIn
            </a>
          </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-[#233554] mt-12">
        <p className="text-gray-400 text-sm">
          Made with <span className="text-red-400">♥</span> by Saisrinivas
        </p>
      </footer>
    </div>
  );
}
