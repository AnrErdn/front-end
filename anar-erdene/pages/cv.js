import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Navigation component
const Navigation = ({ currentSection, setCurrentSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home"
            onClick={() => setCurrentSection("home")}
            className="text-xl font-bold text-indigo-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Anar-Erdene
          </motion.a>
          <div className="hidden md:flex space-x-8">
            {["home", "about", "projects", "skills", "journey", "contact"].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                onClick={() => setCurrentSection(section)}
                className={`text-sm uppercase tracking-wider hover:text-indigo-400 transition-colors ${
                  currentSection === section ? "text-indigo-400" : "text-gray-300"
                }`}
                whileHover={{ y: -2 }}
              >
                {section}
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Search component
const Search = ({ searchProjects, setSearchProjects }) => {
  return (
    <div className="container mx-auto px-6 py-4">
      <input
        type="text"
        placeholder="Search projects..."
        className="w-full bg-gray-800 text-gray-100 border-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        onChange={(e) => setSearchProjects(e.target.value)}
        value={searchProjects}
      />
    </div>
  );
};

// Project card component
const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.1)" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48">
        <Image
          src={image || "/api/placeholder/400/320"}
          alt={title}
          className="object-cover"
          fill
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-400 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a 
            href={link} 
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Skill component
const Skill = ({ name, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-indigo-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-indigo-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

// Timeline component
const TimelineItem = ({ year, title, description, isLeft }) => {
  return (
    <div className="mb-8 flex justify-between items-center w-full">
      <div className={`w-5/12 ${isLeft ? "" : "order-1 text-right"}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-400 text-sm">{year}</p>
          <h3 className="text-lg font-bold text-gray-200 mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </motion.div>
      </div>
      <div className="z-10 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto w-3 h-3 bg-indigo-400 rounded-full"></div>
      </div>
      <div className={`w-5/12 ${isLeft ? "order-1 text-right" : ""}`}></div>
    </div>
  );
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [searchProjects, setSearchProjects] = useState("");
  const [scrollY, setScrollY] = useState(0);

  // Projects data
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/photo1.jpg",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Online store with product catalog and shopping cart functionality",
      image: "/photo1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Mobile App Design",
      description: "UI/UX design for a mobile fitness application",
      image: "/photo1.jpg",
      tags: ["Figma", "UI/UX", "Mobile Design"],
      link: "#"
    }
  ];

  // Filter projects based on search query
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchProjects.toLowerCase()) ||
      project.description.toLowerCase().includes(searchProjects.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchProjects.toLowerCase()))
  );

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-6 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold leading-tight text-gray-100 mb-4">
                Hi, I'm <span className="text-indigo-400">Anar-Erdene</span>
              </h1>
              <h2 className="text-2xl text-gray-400 mb-6">
                Student at Nest Education IT School
              </h2>
              <p className="text-gray-300 mb-8">
                Passionate about web development, design, and creating innovative 
                digital experiences. Currently exploring new technologies to expand my skills.
              </p>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a
                  href="#contact"
                  className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg transition-colors"
                >
                  View Projects
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-indigo-500 shadow-xl shadow-indigo-500/20">
                <Image
                  src="/ca.png"
                  alt="Anar-Erdene"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
        <div 
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform"
          style={{ transform: "rotate(180deg)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-gray-800"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-800">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold inline-block relative text-gray-100 mb-3">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400"></span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get to know a bit more about who I am and what drives me.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image 
                  src="/ca.png" 
                  alt="About Me"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-indigo-500 rounded-lg"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                Anar-Erdene Gantulga
              </h3>
              <p className="text-gray-300 mb-6">
                I'm a student at Nest Education IT School with a passion for web development
                and design. My journey in the tech world started with curiosity about how websites
                work, which led me to dive deep into coding and digital design.
              </p>
              <p className="text-gray-300 mb-6">
                When I'm not coding, I enjoy exploring new technologies, working on personal projects,
                and continuously expanding my skill set to stay current in this fast-paced industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-200 mb-2">Interests</h4>
                  <ul className="text-gray-400">
                    <li>• Web Development</li>
                    <li>• UI/UX Design</li>
                    <li>• Mobile Applications</li>
                    <li>• Machine Learning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 mb-2">Education</h4>
                  <ul className="text-gray-400">
                    <li>• Nest Education IT School</li>
                    <li>• Self-taught Web Development</li>
                    <li>• Online Courses</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold inline-block relative text-gray-100 mb-3">
              My Projects
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400"></span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and ongoing projects.
            </p>
          </motion.div>
          
          <Search searchProjects={searchProjects} setSearchProjects={setSearchProjects} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-400">No projects found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-800">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold inline-block relative text-gray-100 mb-3">
              My Skills
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400"></span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Technical skills and competencies I've developed over time.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-6">Technical Skills</h3>
              <Skill name="HTML/CSS" percentage={90} />
              <Skill name="JavaScript" percentage={85} />
              <Skill name="React/Next.js" percentage={80} />
              <Skill name="Tailwind CSS" percentage={85} />
              <Skill name="Node.js" percentage={70} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-6">Design Skills</h3>
              <Skill name="UI/UX Design" percentage={75} />
              <Skill name="Figma" percentage={80} />
              <Skill name="Responsive Design" percentage={85} />
              <Skill name="Adobe Photoshop" percentage={70} />
              <Skill name="Illustration" percentage={65} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey / Timeline Section */}
      <section id="journey" className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold inline-block relative text-gray-100 mb-3">
              My Journey
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400"></span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The path I've taken in my career and education so far.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline center line */}
            <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-gray-700"></div>
            
            <div className="space-y-8">
              <TimelineItem 
                year="2023 - Present"
                title="Nest Education IT School"
                description="Studying web development and programming fundamentals, working on various projects to build my portfolio."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2022 - 2023"
                title="Self-taught Web Developer"
                description="Learned HTML, CSS, and JavaScript through online resources and built personal projects to improve skills."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2021 - 2022"
                title="First Steps in Tech"
                description="Discovered my passion for technology and development, began exploring various programming languages."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2025 - Future Goal"
                title="Full-stack Developer"
                description="Aspiring to become a professional full-stack developer working on innovative projects."
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section id="future" className="py-16 px-6 bg-gray-800">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold inline-block relative text-gray-100 mb-3">
              Future Plans
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400"></span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Where I see myself heading in the coming years.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-700 p-6 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-indigo-400 mb-2">Career Development</h3>
              <p className="text-gray-300 text-center">
                Complete my education and secure a position as a full-stack developer at a forward-thinking tech company.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-700 p-6 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-indigo-400 mb-2">Skill Expansion</h3>
              <p className="text-gray-300 text-center">
                Master advanced frameworks and technologies including React Native, Three.js, and explore AI/ML applications.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-700 p-6 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-indigo-400 mb-2">Personal Projects</h3>
              <p className="text-gray-300 text-center">
                Develop and launch my own web applications and contribute to open-source projects to build reputation in the community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold inline-block relative text-gray-100 mb-3">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400"></span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Interested in working together? Feel free to contact me.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-medium">Phone</h4>
                    <p className="text-gray-400">+976 95211987</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-medium">Email</h4>
                    <p className="text-gray-400">anarerdenegantulga34@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-medium">Location</h4>
                    <p className="text-gray-400">Ulaanbaatar, Mongolia</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-gray-200 font-medium mb-4">Social Profiles</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center hover:bg-indigo-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center hover:bg-indigo-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center hover:bg-indigo-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center hover:bg-indigo-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100" 
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100" 
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100" 
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100" 
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg transition-opacity ${
          scrollY > 300 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-indigo-400">Anar-Erdene</h3>
              <p className="text-gray-400 mt-2">Web Developer & Designer</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© {new Date().getFullYear()} Anar-Erdene. All rights reserved.</p>
              <p className="text-gray-500 text-sm mt-1">Made with Next.js and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}