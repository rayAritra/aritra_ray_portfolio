import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { blogPosts, personal } from "@/lib/data";

export const metadata = {
  title: "Blog — Aritra Ray",
  description: "Writing by Aritra Ray on software engineering, learning, and building things.",
};

export default function BlogPage() {
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
            <h1 className="text-xl font-semibold tracking-tight text-[var(--fg)]">
              writing.
            </h1>
            <p className="text-sm text-[var(--muted)] mt-2">
              notes on code, learning, and building things.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.05}>
          <section>
            <div className="flex flex-col">
              {blogPosts.map((post, i) => (
                <div key={post.title}>
                  {i > 0 && <hr />}
                  <div className="py-4">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--fg)] underline underline-offset-3 hover:opacity-70 transition-opacity"
                    >
                      {post.title}
                    </a>
                    <p className="text-[11px] text-[var(--muted)] mt-1 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={personal.social.hashnode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
              >
                read more on hashnode →
              </a>
            </div>
          </section>
        </ScrollFadeIn>

        <footer className="mt-20 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted)]">© 2026 aritra ray.</p>
        </footer>
      </div>
    </main>
  );
}
