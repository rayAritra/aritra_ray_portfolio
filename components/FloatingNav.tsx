"use client";

import Link from "next/link";
import { Home, User, Briefcase, BookOpen, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

function NavButton({ item }: { item: NavItem }) {
  const base =
    "relative group/btn flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100";

  const tooltip = (
    <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 dark:bg-white px-1.5 py-0.5 text-[11px] text-white dark:text-gray-900 opacity-0 group-hover/btn:opacity-100 transition-opacity z-50">
      {item.label}
    </span>
  );

  if (item.onClick) {
    return (
      <button onClick={item.onClick} className={base} aria-label={item.label}>
        {item.icon}
        {tooltip}
      </button>
    );
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        aria-label={item.label}
      >
        {item.icon}
        {tooltip}
      </a>
    );
  }

  return (
    <Link href={item.href!} className={base} aria-label={item.label}>
      {item.icon}
      {tooltip}
    </Link>
  );
}

export default function FloatingNav() {
  const { theme, toggleTheme } = useTheme();

  const navItems: NavItem[] = [
    { icon: <Home size={15} />, label: "home", href: "/" },
    { icon: <User size={15} />, label: "about", href: "/#about" },
    { icon: <Briefcase size={15} />, label: "work", href: "/work" },
    { icon: <BookOpen size={15} />, label: "blog", href: "/blog" },
  ];

  const socialItems: NavItem[] = [
    {
      icon: <GithubIcon />,
      label: "github",
      href: "https://github.com/rayAritra",
      external: true,
    },
    {
      icon: <LinkedinIcon />,
      label: "linkedin",
      href: "https://linkedin.com/in/aritraray",
      external: true,
    },
    {
      icon: <XIcon />,
      label: "x / twitter",
      href: "https://twitter.com/Aritraray2005",
      external: true,
    },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-lg shadow-black/5 dark:shadow-black/40">
        {navItems.map((item) => (
          <NavButton key={item.label} item={item} />
        ))}

        <div className="w-px h-4 bg-gray-200 dark:bg-zinc-700 mx-1" />

        {socialItems.map((item) => (
          <NavButton key={item.label} item={item} />
        ))}

        <div className="w-px h-4 bg-gray-200 dark:bg-zinc-700 mx-1" />

        <NavButton
          item={{
            icon: theme === "dark" ? <Sun size={15} /> : <Moon size={15} />,
            label: theme === "dark" ? "light mode" : "dark mode",
            onClick: toggleTheme,
          }}
        />
      </div>
    </nav>
  );
}
