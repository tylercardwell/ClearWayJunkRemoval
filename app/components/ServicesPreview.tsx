import Image from "next/image";
import { IconChevronRight } from "@tabler/icons-react";
import { serviceGroups, serviceHref } from "../services/catalog";

const previews = {
  residential: {
    image: "/images/services/residential.webp",
    alt: "Two crew members carrying an armchair from a residential garage to a truck",
    description: "From one item to a whole house, we make junk removal simple so you can get back to what matters.",
  },
  commercial: {
    image: "/images/services/commercial.webp",
    alt: "A crew member moving an office chair while a colleague clears boxes from a workspace",
    description: "We help businesses clear out quickly and responsibly with minimal disruption.",
  },
};

export default function ServicesPreview() {
  return (
    <section className="services-preview" id="service-preview" aria-labelledby="services-preview-heading">
      <h2 id="services-preview-heading">Services for home and business.</h2>
      <div className="services-preview-grid">
        {serviceGroups.map((group) => {
          const preview = previews[group.slug as keyof typeof previews];
          return (
            <article className="services-preview-card" key={group.slug} aria-labelledby={`preview-${group.slug}`}>
              <a className="services-preview-photo" href={serviceHref(group)} aria-label={`Explore ${group.title.toLowerCase()} services`}>
                <Image src={preview.image} alt={preview.alt} fill sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1180px) calc((100vw - 94px) / 2), 543px" />
              </a>
              <div className="services-preview-content">
                <h3 id={`preview-${group.slug}`}><a href={serviceHref(group)}>{group.title}</a></h3>
                <p>{preview.description}</p>
                <ul>
                  {group.services.map((service) => (
                    <li key={service.slug}>
                      <a href={serviceHref(group, service)}>{service.title}<IconChevronRight size={21} stroke={2.2} aria-hidden="true" /></a>
                    </li>
                  ))}
                </ul>
                <a className="button services-preview-cta" href="/#book" aria-label={`Get a free estimate for ${group.title.toLowerCase()} services`}>Get a free estimate</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
