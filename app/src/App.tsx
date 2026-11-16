import { useEffect, useState, type FormEvent, type ReactNode } from "react"
import { ArrowRight, ArrowUpRight, Download, Menu, Moon, Sun } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { certifications, education, jobs, nav, profile, projects, skills } from "@/data"

function useActiveSection() {
  const [active, setActive] = useState("")
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return active
}

function ThemeToggle() {
  const toggle = () => {
    const dark = !document.documentElement.classList.contains("dark")
    document.documentElement.classList.toggle("dark", dark)
    try {
      localStorage.setItem("theme", dark ? "dark" : "light")
    } catch {
      /* storage unavailable: the choice lasts for this visit only */
    }
  }
  return (
    <Button variant="outline" size="icon" className="theme-toggle bg-transparent shadow-none" onClick={toggle} aria-label="Switch between light and dark theme">
      <Moon className="moon" />
      <Sun className="sun" />
    </Button>
  )
}

function Header() {
  const active = useActiveSection()
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav" aria-label="Sections">
          <ul className="nav-links hidden md:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="bg-transparent shadow-none md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="text-left font-display">Sections</SheetTitle>
              </SheetHeader>
              <ul className="mt-6 grid">
                {nav.map((n) => (
                  <li key={n.id}>
                    <SheetClose asChild>
                      <a href={`#${n.id}`} className="block border-b py-3 text-lg no-underline">
                        {n.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow mono rise">
            <span className="dot" aria-hidden="true" />
            Backend developer · {profile.location}
          </p>
          <h1 className="rise d1">
            <span>Muhammed</span>
            <span className="accent">Suhail</span>
          </h1>
          <p className="lead rise d2">
            I build the parts of software people rely on without seeing: <strong>ERP modules, payroll integrations and REST APIs</strong>, with FastAPI, Node.js, .NET and PostgreSQL.
          </p>
          <div className="hero-actions rise d3">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href="#contact">
                Get in touch <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-12 border px-6 text-base shadow-none">
              <a href={profile.cv} download>
                <Download /> Download CV
              </a>
            </Button>
          </div>
          <p className="hero-links mono rise d3">
            <a href={profile.github} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>

        <aside className="card-stack rise d2" aria-label="Profile summary">
          <div className="portrait">
            <img src="./assets/img/portrait.webp" alt="Portrait of Muhammed Suhail" width={900} height={1200} />
          </div>
          <div className="response">
            <div className="response-line mono">
              <span>
                <b>GET</b> /suhail
              </span>
              <span className="status-ok">200 OK</span>
            </div>
            <pre>
              <span className="p">{"{"}</span>
              {"\n  "}
              <span className="k">"role"</span>
              <span className="p">: </span>
              <span className="s">"{profile.role}"</span>
              <span className="p">,</span>
              {"\n  "}
              <span className="k">"company"</span>
              <span className="p">: </span>
              <span className="s">"{profile.company}"</span>
              <span className="p">,</span>
              {"\n  "}
              <span className="k">"location"</span>
              <span className="p">: </span>
              <span className="s">"{profile.location}"</span>
              <span className="p">,</span>
              {"\n  "}
              <span className="k">"stack"</span>
              <span className="p">: [</span>
              {profile.stack.map((s, i) => (
                <span key={s}>
                  {"\n    "}
                  <span className="s">"{s}"</span>
                  {i < profile.stack.length - 1 && <span className="p">,</span>}
                </span>
              ))}
              {"\n  "}
              <span className="p">]</span>
              {"\n"}
              <span className="p">{"}"}</span>
            </pre>
          </div>
        </aside>
      </div>
    </section>
  )
}

function Section({ id, path, title, children }: { id: string; path: string; title: string; children: ReactNode }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap section-grid">
        <div className="section-head">
          <span className="mono">{path}</span>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle")

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setState("sending")
    try {
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setState("ok")
    } catch {
      setState("error")
    }
  }

  const message = {
    idle: "",
    sending: "Sending…",
    ok: "Message sent. I'll reply by email.",
    error: `Couldn't send. Email me at ${profile.email} instead.`,
  }[state]

  return (
    <form className="form" onSubmit={submit}>
      <div className="two">
        <div className="field">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" required className="h-11 bg-background md:text-base" />
        </div>
        <div className="field">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required className="h-11 bg-background md:text-base" />
        </div>
      </div>
      <div className="field">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" required className="h-11 bg-background md:text-base" />
      </div>
      <div className="field">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required className="bg-background md:text-base" />
      </div>
      <div className="form-foot">
        <Button type="submit" size="lg" className="h-12 px-6 text-base" disabled={state === "sending"}>
          Send message <ArrowRight />
        </Button>
        <p className="form-status" role="status" data-state={state}>
          {message}
        </p>
      </div>
    </form>
  )
}

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked: the address is selectable text next to this button */
    }
  }
  return (
    <button type="button" className="copy" onClick={copy}>
      {copied ? "Copied" : "Copy"}
    </button>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <Hero />

        <div className="now">
          <div className="wrap">
            <span className="label mono">Now</span>
            <p>
              Software Developer at {profile.company}, building ERP modules in Next.js and MSSQL and payroll integrations in .NET.
            </p>
          </div>
        </div>

        <Section id="about" path="/about" title="About">
          <div className="prose">
            <p className="big">Backend developer with over a year of hands-on work across Node.js, Express, Next.js, MongoDB, Python and C.</p>
            <p>
              I build scalable APIs and full-stack applications, and I bring project management habits to the work so that it ships on time and stays maintainable. I pick up new technologies quickly and like automating the repetitive parts of a workflow.
            </p>
            <p>
              What I care about most is reliability: systems that behave the same on a busy Monday as they did in testing. I'm based in Doha and keep building my depth in backend architecture and workflow optimization.
            </p>
          </div>
          <dl className="facts">
            <div>
              <dt className="mono">Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt className="mono">Current role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt className="mono">Focus</dt>
              <dd>APIs, ERP, integrations</dd>
            </div>
            <div>
              <dt className="mono">Degree</dt>
              <dd>B.Tech, Computer Science</dd>
            </div>
          </dl>
        </Section>

        <Section id="skills" path="/skills" title="Skills">
          <div className="skill-table">
            {skills.map((s) => (
              <div className="skill-row" key={s.group}>
                <div>
                  <h3>{s.group}</h3>
                  <p className="note">{s.note}</p>
                </div>
                <ul className="chips">
                  {s.items.map((item) => (
                    <li key={item} className="contents">
                      <Badge variant="outline" className="rounded bg-card px-2.5 py-1 font-mono text-[0.8125rem] font-normal">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" path="/experience" title="Experience">
          <div className="timeline">
            {jobs.map((job) => (
              <article className="job" key={job.title + job.when}>
                <p className="when mono">
                  {job.when}
                  {job.live && <span className="live">● current</span>}
                </p>
                <div>
                  <h3>{job.title}</h3>
                  <p className="org">{job.org}</p>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" path="/projects" title="Projects">
          <div className="projects">
            {projects.map((project) => (
              <article className={project.featured ? "project featured" : "project"} key={project.name}>
                {project.image && (
                  <div className="shot">
                    <img src={project.image} alt={project.alt} loading="lazy" width={1280} height={590} />
                  </div>
                )}
                <div className="body">
                  <span className="kind mono">{project.kind}</span>
                  <h3>{project.name}</h3>
                  <p>{project.text}</p>
                  {project.link && (
                    <a className="more inline-flex items-center gap-1" href={project.link} target="_blank" rel="noopener">
                      View source <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  <div className="flow" aria-label="Architecture">
                    {project.flow.map((step, i) => (
                      <span key={step}>
                        {i > 0 && (
                          <span className="sep" aria-hidden="true">
                            →{" "}
                          </span>
                        )}
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" path="/education" title="Education & certifications">
          <div className="rows">
            {education.map((e) => (
              <div className="row" key={e.title}>
                <h3>{e.title}</h3>
                <p className="sub">{e.sub}</p>
                <p className="score">
                  <b>{e.score}</b>
                  <span>{e.scoreNote}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="prose mt-5 text-[0.9375rem] text-muted-foreground">
            Alongside the degree I pursued internships, certifications and live projects to get real-world skills and industry exposure.
          </p>

          <h3 className="subhead">Certifications</h3>
          <div className="rows">
            {certifications.map((c) => (
              <a className="row" key={c.href} href={c.href} target="_blank" rel="noopener">
                <h3>{c.title}</h3>
                <p className="sub">{c.sub}</p>
                <span className="go">View certificate ↗</span>
              </a>
            ))}
          </div>
        </Section>

        <Section id="contact" path="/contact" title="Contact">
          <div className="contact-grid">
            <div>
              <p className="contact-title">Have a system that needs building?</p>
              <p className="text-muted-foreground">Tell me what you're working on. I usually reply within a day or two.</p>
              <ul className="channels">
                <li>
                  <span className="lab mono">Email</span>
                  <span className="val">
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    <CopyEmail />
                  </span>
                </li>
                <li>
                  <span className="lab mono">Phone</span>
                  <a href={profile.phoneHref}>{profile.phone}</a>
                </li>
                <li>
                  <span className="lab mono">LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noopener">
                    in/muhammedsuhailkm
                  </a>
                </li>
                <li>
                  <span className="lab mono">GitHub</span>
                  <a href={profile.github} target="_blank" rel="noopener">
                    muhammedsuhailkm
                  </a>
                </li>
                <li>
                  <span className="lab mono">Location</span>
                  <span>{profile.location}</span>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <nav aria-label="Footer">
            <a href={profile.cv} download>
              CV (PDF)
            </a>
            <a href={profile.github} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href="#top">Back to top</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
