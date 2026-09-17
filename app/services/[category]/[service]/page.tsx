import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IconArrowRight, IconCalendarEvent, IconCheck, IconHeart, IconLeaf, IconRecycle, IconTruckDelivery } from "@tabler/icons-react";
import { serviceGroups, serviceHref } from "../../catalog";

type Props = { params: Promise<{ category: string; service: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => serviceGroups.flatMap((group) => group.services.map((service) => ({ category: group.slug, service: service.slug })));

const serviceImages: Record<string, { hero: string; story: string; detail: string }> = {
  "estate-cleanout": { hero: "/images/service-story/unsplash-moving.jpg", story: "/images/service-story/unsplash-packing.jpg", detail: "/images/offerings/estate-cleanout.jpg" },
  "garage-cleanout": { hero: "/images/service-story/unsplash-garage-storage.jpg", story: "/images/service-story/unsplash-garage-collectibles.jpg", detail: "/images/offerings/garage-cleanout.jpg" },
  "donation-pickups": { hero: "/images/offerings/donation-pickup.jpg", story: "/images/items/furniture.webp", detail: "/images/offerings/estate-cleanout.jpg" },
  "demolition-services": { hero: "/images/offerings/demolition-services.jpg", story: "/images/offerings/construction-debris.jpg", detail: "/images/items/renovation-debris.webp" },
  "office-cleanout": { hero: "/images/service-story/unsplash-office-boxes.jpg", story: "/images/service-story/unsplash-office-empty.jpg", detail: "/images/offerings/office-cleanout.jpg" },
  "construction-debris": { hero: "/images/offerings/construction-debris.jpg", story: "/images/offerings/demolition-services.jpg", detail: "/images/items/renovation-debris.webp" },
};

async function findService(params: Props["params"]) {
  const route = await params;
  const group = serviceGroups.find((entry) => entry.slug === route.category);
  const service = group?.services.find((entry) => entry.slug === route.service);
  if (!group || !service) notFound();
  return { group, service };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await findService(params);
  return { title: `${service.title} | Clearway`, description: service.description };
}

export default async function ServicePage({ params }: Props) {
  const { group, service } = await findService(params);
  const images = serviceImages[service.slug] ?? serviceImages["estate-cleanout"];
  const related = group.services.filter((entry) => entry.slug !== service.slug);

  return <main className="cw-service-page">
    <section className="cw-service-hero">
      <div className="cw-service-hero-copy">
        <nav className="cw-service-crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/services">Services</a><span>/</span><span>{service.title}</span></nav>
        <h1>{service.title}.</h1>
        <p>{service.description}</p>
        <a className="cw-service-button" href="/#book">Book a pickup <IconArrowRight aria-hidden="true" /></a>
      </div>
      <div className="cw-service-hero-image"><Image src={images.hero} alt={`Clearway crew helping with an ${service.title}`} fill priority sizes="(max-width: 760px) 100vw, 62vw" /></div>
    </section>

    <section className="cw-service-trust" aria-label="Clearway commitments">
      <div><IconHeart aria-hidden="true" /><strong>Compassionate &amp; professional</strong><span>A respectful crew you can trust.</span></div>
      <div><IconRecycle aria-hidden="true" /><strong>Donate and recycle first</strong><span>We keep usable items in circulation.</span></div>
      <div><IconLeaf aria-hidden="true" /><strong>Clearer tomorrows</strong><span>More room for what comes next.</span></div>
    </section>

    <section className="cw-service-story">
      <div className="cw-service-story-image"><Image src={images.story} alt="A Clearway team member carefully sorting household belongings" fill sizes="(max-width: 720px) 100vw, 38vw" /></div>
      <div className="cw-service-story-copy"><span aria-hidden="true" /><h2>Support for a big transition.</h2><p>{service.detail}</p><p>We make the process easier to navigate with a careful, organized approach, so you can focus on the things that matter most.</p></div>
    </section>

    <section className="cw-service-help">
      <div><span aria-hidden="true" /><h2>What we can help with.</h2><p>We handle the heavy lifting, from single rooms to entire spaces.</p><ul>{service.examples.map((example) => <li key={example}><IconCheck aria-hidden="true" />{example}</li>)}</ul></div>
      <div className="cw-service-help-photo"><Image src={images.detail} alt={`Items ready for ${service.title} removal`} fill sizes="(max-width: 720px) 100vw, 42vw" /></div>
    </section>

    <section className="cw-service-process" aria-labelledby="service-process-heading">
      <span aria-hidden="true" /><h2 id="service-process-heading">Your pickup, made simple.</h2>
      <ol>
        <li><IconCalendarEvent aria-hidden="true" /><strong>Schedule</strong><p>Choose a pickup time that works for you.</p></li>
        <li><IconTruckDelivery aria-hidden="true" /><strong>We remove</strong><p>Our team handles the heavy lifting, sorting, and loading.</p></li>
        <li><IconLeaf aria-hidden="true" /><strong>You move forward</strong><p>We donate, recycle, and dispose responsibly.</p></li>
      </ol>
    </section>

    <section className="cw-service-related"><span aria-hidden="true" /><h2>Related services.</h2><p>Explore our other removal services across Chicagoland.</p><nav aria-label="Related services">{related.map((entry) => <a key={entry.slug} href={serviceHref(group, entry)}>{entry.title}<IconArrowRight aria-hidden="true" /></a>)}<a href="/services">All services<IconArrowRight aria-hidden="true" /></a></nav></section>

    <section className="cw-service-closing" id="book">
      <div className="cw-service-closing-image">
        <Image src="/images/clearway-branded-crew-cta.png" alt="Clearway crew loading a sofa into a branded truck outside a residential building" fill sizes="(max-width: 760px) 100vw, 50vw" />
      </div>
      <div className="cw-service-closing-copy">
        <span aria-hidden="true" />
        <h2>A cleaner home is a brighter tomorrow.</h2>
        <p>Let us take care of the heavy lifting, so you can focus on what is next.</p>
        <a className="cw-service-button" href="tel:3125550148">Book a pickup <IconArrowRight aria-hidden="true" /></a>
      </div>
    </section>
  </main>;
}
