import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { projects, skills, experience, education } from "@/lib/data";

export const metadata = {
  title: "Work — Aritra Ray",
  description:
    "Projects, skills, and experience of Aritra Ray, full-stack software engineer.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pb-32">
      <div className="max-w-content mx-auto px-6 pt-20 sm:pt-24">

        {/* ── Page heading ── */}
        <ScrollFadeIn>
          <div className="mb-12">
            <Link
              href="/"
              className="text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-6 inline-block"
            >
              ← back
            </Link>
            <h1 className="text-xl font-semibold tracking-tight text-[var(--fg)]">
              work.
            </h1>
            <p className="text-sm text-[var(--muted)] mt-2">
              things i&apos;ve built and shipped.
            </p>
          </div>
        </ScrollFadeIn>

        {/* ── Projects ── */}
        <ScrollFadeIn delay={0.05}>
          <section id="projects" className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6">
              projects
            </h2>
            <div className="flex flex-col gap-8">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  id={project.slug}
                  className="flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-[var(--subtle)] border border-[var(--border)] mb-4">
                    <ProjectImage src={project.image} alt={project.title} />
                  </div>

                  {/* Title + date */}
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="text-sm font-semibold text-[var(--fg)]">
                      {project.title}
                    </h3>
                    <span className="text-[11px] text-[var(--muted)] flex-shrink-0">
                      {project.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[var(--muted)] bg-[var(--subtle)] border border-[var(--border)] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--muted)] hover:text-[var(--fg)] underline underline-offset-3 transition-colors"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        <hr className="border-[var(--border)] mb-16" />

        {/* ── Experience (detailed) ── */}
        <ScrollFadeIn delay={0.05}>
          <section id="experience" className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6">
              experience
            </h2>
            <div className="flex flex-col">
              {experience.map((exp, i) => (
                <div key={exp.slug} id={exp.slug}>
                  {i > 0 && <hr className="my-0" />}
                  <div className="py-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-[var(--fg)] underline underline-offset-3 hover:opacity-70 transition-opacity"
                          >
                            {exp.company}
                          </a>
                          {exp.location && (
                            <span className="text-[11px] text-[var(--muted)]">
                              {exp.location}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[var(--muted)] mt-0.5">
                          {exp.role} · {exp.type}
                        </p>
                      </div>
                      <span className="text-[11px] text-[var(--muted)] whitespace-nowrap flex-shrink-0 mt-0.5">
                        {exp.dateRange}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.stack && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.stack.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] text-[var(--muted)] bg-[var(--subtle)] border border-[var(--border)] px-2 py-0.5 rounded"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        <hr className="border-[var(--border)] mb-16" />

        {/* ── Education ── */}
        <ScrollFadeIn delay={0.05}>
          <section id="education" className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6">
              education
            </h2>
            <div className="flex flex-col">
              {education.map((edu, i) => (
                <div key={edu.institution}>
                  {i > 0 && <hr className="my-0" />}
                  <div className="flex items-start justify-between gap-3 py-3">
                    <div>
                      <p className="text-sm font-medium text-[var(--fg)]">
                        {edu.institution}
                      </p>
                      <p className="text-[11px] text-[var(--muted)] mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="text-[11px] text-[var(--muted)] whitespace-nowrap flex-shrink-0 mt-0.5">
                      {edu.dateRange}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        <hr className="border-[var(--border)] mb-16" />

        {/* ── Skills ── */}
        <ScrollFadeIn delay={0.05}>
          <section id="skills" className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6">
              skills
            </h2>
            <div className="flex flex-col gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="text-sm text-[var(--muted)]">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        {/* ── Footer ── */}
        <footer className="mt-8 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted)]">© 2026 aritra ray.</p>
        </footer>
      </div>
    </main>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      unoptimized
    />
  );
}
