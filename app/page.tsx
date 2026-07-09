import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import ContactForm from "@/components/ContactForm";
import {
  personal,
  experience,
  featuredProjects,
  blogPosts,
  getProjectPreview,
} from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen pb-32">
      <div className="max-w-content mx-auto px-6 pt-20 sm:pt-24">

        {/* ── Intro ── */}
        <ScrollFadeIn>
          <section className="flex flex-col gap-5">
            <div className="flex items-start justify-between gap-5">
              <div className="flex flex-col gap-3 flex-1">
                <h1 className="text-2xl font-semibold tracking-tight text-[var(--fg)]">
                  {personal.name}
                </h1>
                <p className="text-base text-[var(--muted)] leading-relaxed max-w-sm">
                  {personal.bio}
                </p>
              </div>
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 border border-[var(--border)] bg-[var(--subtle)] mt-1">
                <Image
                  src={personal.profilePhoto}
                  alt={personal.displayName}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Currently at */}
            <p className="text-sm text-[var(--muted)]">
              currently, i&apos;m working at{" "}
              <a
                href={personal.currentJob.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--fg)] underline underline-offset-3 hover:opacity-70 transition-opacity inline-flex items-center gap-1"
              >
                <span className="relative inline-block w-4 h-4 align-middle rounded-sm overflow-hidden bg-[var(--subtle)]">
                  <Image
                    src={personal.currentJob.logo}
                    alt={personal.currentJob.company}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </span>
                {personal.currentJob.company}
              </a>{" "}
              as a {personal.currentJob.role},{" "}
              {personal.currentJob.description}
            </p>

            {/* Social links */}
            <p className="text-sm text-[var(--muted)]">
              say hi:{" "}
              <a
                href={`mailto:${personal.email}`}
                className="text-[var(--fg)] underline underline-offset-3 hover:opacity-70 transition-opacity"
              >
                email
              </a>{" "}
              /{" "}
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--fg)] underline underline-offset-3 hover:opacity-70 transition-opacity"
              >
                github
              </a>{" "}
              /{" "}
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--fg)] underline underline-offset-3 hover:opacity-70 transition-opacity"
              >
                linkedin
              </a>{" "}
              /{" "}
              <a
                href={personal.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--fg)] underline underline-offset-3 hover:opacity-70 transition-opacity"
              >
                x
              </a>
            </p>
          </section>
        </ScrollFadeIn>

        {/* ── Marquee ── */}
        <ScrollFadeIn delay={0.05} className="mt-10">
          <Marquee />
        </ScrollFadeIn>

        {/* ── About ── */}
        <ScrollFadeIn delay={0.08} className="mt-16">
          <section id="about">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-full bg-[var(--fg)] text-[var(--bg)] flex items-center justify-center text-[10px] font-semibold tracking-wider flex-shrink-0 select-none">
                AR
              </div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                about
              </h2>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {personal.about}
            </p>
          </section>
        </ScrollFadeIn>

        {/* ── Experience ── */}
        <ScrollFadeIn delay={0.08} className="mt-16">
          <section id="experience">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              experience
            </h2>
            <div className="flex flex-col">
              {experience.map((exp, i) => (
                <div key={exp.slug}>
                  {i > 0 && <hr />}
                  <div className="flex items-start sm:items-baseline justify-between gap-2 py-3">
                    <div className="flex items-baseline gap-1.5 flex-wrap min-w-0">
                      <span className="text-sm text-[var(--fg)] font-medium">
                        {exp.role},
                      </span>
                      <span className="text-sm text-[var(--muted)]">
                        {exp.type} —
                      </span>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--fg)] underline underline-offset-3 hover:opacity-70 transition-opacity"
                      >
                        {exp.company}
                      </a>
                      <Link
                        href={`/work#${exp.slug}`}
                        className="text-[11px] text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                      >
                        (read more)
                      </Link>
                    </div>
                    <span className="text-[11px] text-[var(--muted)] whitespace-nowrap flex-shrink-0 mt-0.5">
                      {exp.dateRange}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/work"
              className="inline-block mt-2 text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
            >
              → view more
            </Link>
          </section>
        </ScrollFadeIn>

        {/* ── Projects preview ── */}
        <ScrollFadeIn delay={0.08} className="mt-16">
          <section id="projects">
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                projects
              </h2>
              <Link
                href="/work"
                className="text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
              >
                see all →
              </Link>
            </div>
            <div className="flex flex-col">
              {featuredProjects.map((project, i) => (
                <div key={project.slug}>
                  {i > 0 && <hr />}
                  <div className="py-3">
                    <p className="text-sm text-[var(--fg)]">
                      <a
                        href={getProjectPreview(project).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-3 hover:opacity-70 transition-opacity"
                      >
                        {project.title.toLowerCase()}
                      </a>
                      <span className="text-[var(--border)] mx-2">—</span>
                      <span className="text-[var(--muted)]">
                        {project.shortDesc}
                      </span>
                    </p>
                    <div className="flex gap-3 mt-1.5">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-[var(--muted)] hover:text-[var(--fg)] underline underline-offset-3 transition-colors"
                        >
                          {link.label.toLowerCase()}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        {/* ── Writing ── */}
        <ScrollFadeIn delay={0.08} className="mt-16">
          <section id="writing">
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                writing
              </h2>
              <a
                href={personal.social.hashnode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
              >
                all posts →
              </a>
            </div>
            <div className="flex flex-col">
              {blogPosts.map((post, i) => (
                <div key={post.title}>
                  {i > 0 && <hr />}
                  <div className="py-3">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--fg)] underline underline-offset-3 hover:opacity-70 transition-opacity"
                    >
                      {post.title.toLowerCase()}
                    </a>
                    <p className="text-[11px] text-[var(--muted)] mt-0.5 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        {/* ── Contact ── */}
        <ScrollFadeIn delay={0.08} className="mt-16">
          <section id="contact">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              get in touch
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-8">
              want to chat? just shoot me a message, or reach out directly
              below. i&apos;m always open to new opportunities and
              collaborations.
            </p>
            <ContactForm />
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
                links
              </p>
              <div className="flex flex-col gap-1.5">
                {[
                  { label: "github", href: personal.social.github, external: true },
                  { label: "linkedin", href: personal.social.linkedin, external: true },
                  { label: "x / twitter", href: personal.social.twitter, external: true },
                  { label: "resume", href: personal.social.resume, external: false },
                  { label: "hashnode", href: personal.social.hashnode, external: true },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* ── Footer ── */}
        <footer className="mt-20 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted)]">© 2026 aritra ray.</p>
        </footer>
      </div>
    </main>
  );
}
