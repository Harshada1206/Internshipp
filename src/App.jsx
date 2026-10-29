
import { useState } from 'react'
import './App.css'

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
]

const projects = [
  {
    title: 'Insure Healthcare Management',
    description:
      'A healthcare insurance management application for users to explore plans, register, log in, and manage insurance claims.',
    tech: 'React • Node.js • Express • MongoDB',
  },
  {
    title: 'Responsive Developer Portfolio',
    description:
      'A personal portfolio website showcasing developer skills, projects, and a validated contact form.',
    tech: 'React • JavaScript • CSS',
  },
]

function Navbar({ menuOpen, setMenuOpen, darkMode, setDarkMode }) {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
        Harshada<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle color theme"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  )
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function ProjectCard({ project, number }) {
  return (
    <article className="project-card">
      <div className="project-number">{number}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">{project.tech}</div>
    </article>
  )
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: '' }))
    setSuccess(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please enter a message.'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Your name</label>
      <input
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter your name"
        aria-invalid={Boolean(errors.name)}
      />
      {errors.name && <small className="error">{errors.name}</small>}

      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@example.com"
        aria-invalid={Boolean(errors.email)}
      />
      {errors.email && <small className="error">{errors.email}</small>}

      <label htmlFor="message">Your message</label>
      <textarea
        id="message"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Write your message..."
        rows="5"
        aria-invalid={Boolean(errors.message)}
      />
      {errors.message && <small className="error">{errors.message}</small>}

      <button className="button primary submit-button" type="submit">
        Send Message ↗
      </button>

      {success && (
        <p className="success-message" role="status">
          Form validated successfully! This demo does not send messages yet.
        </p>
      )}
    </form>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <span className="eyebrow">WELCOME TO MY PORTFOLIO</span>
            <h1>
              Hi, I'm <span>Harshada.</span>
            </h1>
            <h2>Aspiring Web Developer</h2>
            <p>
              I enjoy learning web technologies and building clean,
              responsive, and user-friendly applications with React.js.
            </p>
            <div className="hero-buttons">
              <a className="button primary" href="#projects">
                View My Projects ↗
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
            <div className="hero-note">
              <span className="status-dot" />
              Learning, building, and growing every day
            </div>
          </div>

          <div className="hero-art" aria-label="Developer illustration">
            <div className="art-circle">
              <span className="code-symbol">{'</>'}</span>
              <span className="art-caption">BUILD · CREATE · LEARN</span>
            </div>
            <span className="floating-tag tag-one">React.js</span>
            <span className="floating-tag tag-two">JavaScript</span>
            <span className="floating-star">✳</span>
          </div>
        </section>

        <section className="section-container section" id="about">
          <SectionTitle
            eyebrow="A LITTLE ABOUT ME"
            title="Turning ideas into websites"
            description="A curious learner working towards becoming a skilled web developer."
          />
          <div className="about-card">
            <div className="about-icon">H.</div>
            <div>
              <h3>Hello, I'm Harshada!</h3>
              <p>
                I'm currently pursuing my BCA and developing my skills in
                frontend and backend web development. I like exploring new
                technologies, solving problems, and turning ideas into
                useful digital experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container section" id="skills">
          <SectionTitle
            eyebrow="WHAT I WORK WITH"
            title="My Skills"
            description="Technologies I am learning and practising."
          />
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section-container section" id="projects">
          <SectionTitle
            eyebrow="SELECTED WORK"
            title="Projects I'm Building"
            description="A look at my practice and development work."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                number={`0${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="section-container section contact-section" id="contact">
          <SectionTitle
            eyebrow="LET'S CONNECT"
            title="Get in touch"
            description="Have a question or an opportunity? Leave a message below."
          />
          <div className="contact-layout">
            <div className="contact-copy">
              <h3>Let's talk about ideas.</h3>
              <p>
                I'm always interested in learning, collaborating, and
                connecting with people in technology.
              </p>
              <p className="contact-email">✉️ Get in touch through this form</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          Harshada<span>.</span>
        </a>
        <p>Designed and built with React.js by Harshada.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
