"use client";

import { useEffect, useRef } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { serviceGroups, serviceHref } from "../services/catalog";

export default function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  return (
    <header className="site-header cw-header">
      <a className="wordmark" href="/" aria-label="Clearway home"><span>clear</span>way<span className="mark">.</span></a>
      <nav className="primary-nav" aria-label="Primary navigation">
        <details className="services-menu" ref={menu} onKeyDown={(event) => {
          if (event.key !== "Escape") return;
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }} onToggle={(event) => {
          if (!event.currentTarget.open) event.currentTarget.querySelectorAll("details").forEach((branch) => { branch.open = false; });
        }}>
          <summary>Services <IconChevronDown size={14} aria-hidden="true" /></summary>
          <div className="services-dropdown">
            {serviceGroups.map((group) => (
              <details className="service-branch" name="service-category" key={group.slug}>
                <summary>{group.title}<IconChevronDown size={16} aria-hidden="true" /></summary>
                <ul>
                  <li><a className="category-overview" href={serviceHref(group)}>All {group.title.toLowerCase()} services</a></li>
                  {group.services.map((service) => <li key={service.slug}><a href={serviceHref(group, service)}>{service.title}</a></li>)}
                </ul>
              </details>
            ))}
          </div>
        </details>
        <a className="primary-link" href="/how-it-works">How it works</a>
        <a className="primary-link" href="/#impact">Our impact</a>
        <a className="primary-link" href="/#reviews">Reviews</a>
        <a className="primary-link contact-link" href="/contact">Contact</a>
      </nav>
      <div className="header-actions">
        <a className="header-cta" href="/contact">Get a quote</a>
      </div>
    </header>
  );
}
