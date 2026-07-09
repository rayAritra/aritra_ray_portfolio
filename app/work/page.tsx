import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import {
  projects,
  skillCategories,
  experience,
  education,
  getProjectPreview,
  getSitePreview,
} from "@/lib/data";

export const metadata = {
  title: "Work - Aritra Ray",
  description:
    "Experience, personal projects, and skills of Aritra Ray, full-stack software engineer.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pb-32">
      <div className="max-w-content mx-auto px-6 pt-20 sm:pt-24">
        <ScrollFadeIn>
          <div className="mb-12">
            <Link
              href="/"
              className="text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-6 inline-block"
            >
              ← back
            </Link>
            <h1 className="text-2xl font-semibold tracking-tight text-[var(--fg)]">
              work.
            </h1>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.05}>
          <section id="experience" className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6">
              company experience
            </h2>
            <div className="flex flex-col gap-5">
              {experience.map((exp) => (
                <article
                  key={exp.slug}
                  id={exp.slug}
                  className="grid gap-4 border-b border-[var(--border)] pb-5 last:border-b-0 sm:grid-cols-[220px_1fr]"
                >
                  {exp.companyUrl && (
                    <PreviewCard
                      href={exp.companyUrl}
                      previewSrc={getSitePreview(exp.companyUrl)}
                      logoSrc={exp.companyLogo}
                      label={exp.websiteLabel ?? exp.company}
                    />
                  )}

                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {exp.companyLogo && (
                            <span className="relative h-5 w-5 flex-shrink-0 overflow-hidden rounded-sm border border-[var(--border)] bg-white">
                              <Image
                                src={exp.companyLogo}
                                alt=""
                                fill
                                className="object-contain p-0.5"
                                unoptimized
                              />
                            </span>
                          )}
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
                          {exp.role} &middot; {exp.type}
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
                </article>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        <hr className="border-[var(--border)] mb-16" />

        <ScrollFadeIn delay={0.05}>
          <section id="projects" className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6">
              personal projects
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {projects.map((project) => {
                const preview = getProjectPreview(project);
                return (
                  <article
                    key={project.slug}
                    id={project.slug}
                    className="flex flex-col"
                  >
                    <PreviewCard
                      href={preview.url}
                      previewSrc={preview.image}
                      label={preview.label}
                      className="mb-4"
                    />

                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="text-sm font-semibold text-[var(--fg)]">
                        {project.title}
                      </h3>
                      <span className="text-[11px] text-[var(--muted)] flex-shrink-0">
                        {project.date}
                      </span>
                    </div>

                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                      {project.description}
                    </p>

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
                );
              })}
            </div>
          </section>
        </ScrollFadeIn>

        <hr className="border-[var(--border)] mb-16" />

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

        <ScrollFadeIn delay={0.05}>
          <section id="skills" className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6">
              skills
            </h2>
            <div className="flex flex-col gap-5">
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--muted)]/70 mb-2.5">
                    {category.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-[var(--fg)] bg-[var(--subtle)] border border-[var(--border)] px-2.5 py-1 rounded-full transition-colors hover:border-[var(--fg)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        <footer className="mt-8 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted)]">&copy; 2026 aritra ray.</p>
        </footer>
      </div>
    </main>
  );
}

function PreviewCard({
  href,
  previewSrc,
  logoSrc,
  label,
  className = "",
}: {
  href: string;
  previewSrc: string;
  logoSrc?: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${label}`}
      className={`group relative block aspect-[16/9] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--subtle)] transition-colors hover:border-[var(--fg)] ${className}`}
    >
      <Image
        src={previewSrc}
        alt={`${label} preview`}
        fill
        className="object-cover object-top opacity-95 transition-transform duration-300 group-hover:scale-[1.03]"
        unoptimized
      />
      <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-black/60 px-3 py-2 text-white backdrop-blur-sm">
        <span className="flex min-w-0 items-center gap-2">
          {logoSrc && (
            <span className="relative h-5 w-5 flex-shrink-0 overflow-hidden rounded-sm bg-white/90">
              <Image
                src={logoSrc}
                alt=""
                fill
                className="object-contain p-0.5"
                unoptimized
              />
            </span>
          )}
          <span className="truncate text-[11px] font-medium">{label}</span>
        </span>
        <span className="text-[11px] opacity-80 flex-shrink-0">↗</span>
      </span>
    </a>
  );
}
