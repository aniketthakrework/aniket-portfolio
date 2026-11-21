import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Globe2,
  Mail,
  MapPin,
  MoveUpRight,
  Radio,
  Server,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "FINTECH · DIGITAL LENDING",
    title: "Atlas lending platform",
    description:
      "Helped build an in-house digital lending platform that replaced a third-party SaaS solution. The platform supports end-to-end onboarding and lending operations across Kenya and Uganda.",
    impact: "3 loan products · Kenya & Uganda",
    stack: ["Java", "Quarkus", "GCP Pub/Sub", "PostgreSQL"],
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    category: "TELECOM · DATA PLATFORM",
    title: "Usage insights & billing",
    description:
      "Built APIs and aggregation services for commercial internet usage, turning network data into customer insights and accurate invoice-ready summaries.",
    impact: "10,000+ service connections",
    stack: ["Java", "Spring", "MySQL", "REST APIs"],
    icon: Globe2,
  },
  {
    number: "03",
    category: "TELECOM · NETWORK OPERATIONS",
    title: "Network diagnostics",
    description:
      "Created a full-stack diagnostics experience for network engineers, bringing real-time troubleshooting tools and results into one interface.",
    impact: "Real-time network troubleshooting",
    stack: ["Angular", "Spring MVC", "Perl", "SSH"],
    icon: Radio,
  },
];

const skills = [
  { title: "Backend", icon: Server, items: ["Java", "Spring Boot", "Quarkus", "FastAPI", "Node.js", "Microservices"] },
  { title: "Data & APIs", icon: Database, items: ["PostgreSQL", "MySQL", "REST APIs", "Event-driven systems", "Hibernate", "Flyway"] },
  { title: "Cloud & delivery", icon: Globe2, items: ["GCP", "AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD"] },
  { title: "Frontend & tools", icon: Code2, items: ["Angular", "JavaScript", "Python", "Git", "Testcontainers", "MockServer"] },
];

const experience = [
  {
    period: "OCT 2024 — PRESENT",
    role: "Senior Software Engineer",
    company: "Quantiphi · Bangalore",
    detail: "Building Atlas, a digital lending platform, with distributed Java services, GCP, payment integrations, and lending workflows.",
  },
  {
    period: "MAR 2021 — JUL 2024",
    role: "Java Back-end Developer",
    company: "Infosys · Bangalore",
    detail: "Delivered backend and full-stack products for Telstra across commercial internet billing and network diagnostics.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#top" aria-label="Aniket Thakre home">AT<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">
          View résumé <ArrowUpRight size={15} />
        </a>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy-block">
          <p className="eyebrow"><span className="status-dot" /> BANGALORE, INDIA</p>
          <h1>Aniket Thakre<span>.</span></h1>
          <p className="hero-role">Senior Software Engineer · Backend & Distributed Systems</p>
          <p className="hero-copy">
            5+ years building dependable platforms across fintech and telecommunications, from distributed lending services to telecom systems used at scale.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href="mailto:aniket.thakre1997@gmail.com">Let’s talk <Mail size={16} /></a>
          </div>
          <div className="hero-meta"><span>JAVA <i>·</i> DISTRIBUTED SYSTEMS <i>·</i> CLOUD</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={14} /></a></div>
        </div>
        <div className="portrait-wrap">
          <Image className="portrait" src="/aniket-thakre.jpg" alt="Aniket Thakre" width={640} height={850} priority />
          <div className="portrait-caption"><span>ANIKET THAKRE</span><span>ENGINEER / BUILDER</span></div>
          <div className="portrait-stamp">5+<small>YEARS<br />BUILDING</small></div>
        </div>
      </section>

      <section className="intro-band" id="about">
        <div className="container intro-inner">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <div>
            <h2>I make complex software feel <span>simple, reliable, and ready to scale.</span></h2>
            <p className="intro-detail">From event-driven lending services to telecom platforms used across thousands of connections, I enjoy taking a system from a hard problem to something people can count on.</p>
            <a className="text-link" href="#experience">More about my journey <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="container stats-row">
          <div><strong>5<span>+</span></strong><small>YEARS IN SOFTWARE</small></div>
          <div><strong>25<span>+</span></strong><small>MICROSERVICES</small></div>
          <div><strong>10<span>k+</span></strong><small>CONNECTED SERVICES</small></div>
          <div><strong>2</strong><small>INDUSTRIES · FINTECH & TELECOM</small></div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-top"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Systems with<br />a job to do.</h2></div><p className="section-note">A few platforms and product areas I’ve contributed to throughout my career.</p></div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className="project-card" key={project.number}>
                <div className="project-topline"><span>{project.number} / {project.category}</span><Icon size={20} strokeWidth={1.5} /></div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-impact"><span className="impact-mark">↗</span>{project.impact}</div>
                <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </article>;
            })}
          </div>
          <p className="work-footnote">Project summaries describe my contributions to team-built products. Details are kept at a high level.</p>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <div className="section-top"><div><p className="eyebrow">02 / TOOLKIT</p><h2>Practical tools<br />for solid systems.</h2></div><p className="section-note">A toolkit shaped by building, shipping, and supporting production software.</p></div>
          <div className="skills-grid">{skills.map(({ title, icon: Icon, items }) => <article className="skill-card" key={title}><div className="skill-title"><Icon size={18} /><h3>{title}</h3></div><div className="skill-list">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container experience-layout">
          <div className="experience-heading"><p className="eyebrow">03 / EXPERIENCE</p><h2>Good work<br />is a team sport.</h2><p>Learning from strong teams and solving meaningful problems in production.</p><a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">Full résumé <MoveUpRight size={15} /></a></div>
          <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company}><span className="timeline-dot" /><p className="timeline-period">{item.period}</p><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p className="timeline-detail">{item.detail}</p></article>)}<article className="education-card"><p className="eyebrow">EDUCATION</p><h3>B.Tech in Computer Science</h3><p>Rashtrasant Tukadoji Maharaj Nagpur University</p></article></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <p className="eyebrow">04 / GET IN TOUCH</p>
          <h2>Let’s build something useful.</h2>
          <p className="contact-copy">Get in touch about backend systems, product engineering, or opportunities to build reliable software.</p>
          <a className="button button-primary contact-button" href="mailto:aniket.thakre1997@gmail.com">aniket.thakre1997@gmail.com <ArrowUpRight size={17} /></a>
          <div className="social-links">
            <a href="https://linkedin.com/in/aniket-thakre7" target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
            <a href="tel:+918390609669"><MapPin size={16} /> Bangalore, India</a>
          </div>
        </div>
      </section>

      <footer className="container footer"><span>© {new Date().getFullYear()} Aniket Thakre</span><a href="#top">BACK TO TOP ↑</a><span>Designed & built with care.</span></footer>
    </main>
  );
}
