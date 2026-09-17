import Image from "next/image";
import { IconArrowRight, IconCalendarEvent, IconHeart, IconLeaf, IconRecycle, IconShieldCheck, IconTruckDelivery } from "@tabler/icons-react";
import ReviewsMarquee from "./components/ReviewsMarquee";

const steps = [
  { title: "Pick a time", body: "Choose a pickup time that works for you.", icon: IconCalendarEvent },
  { title: "We show up", body: "Our friendly crew handles the heavy lifting.", icon: IconTruckDelivery },
  { title: "Items find a better future", body: "We donate, recycle, and dispose responsibly.", icon: IconRecycle },
  { title: "You enjoy the space", body: "A cleaner, lighter home and a brighter day.", icon: IconHeart },
];
const offerings = [
  { title: "Estate cleanouts", body: "Clear a lifetime of belongings with a respectful, steady hand.", image: "/images/offerings/estate-cleanout.jpg", alt: "Moving boxes in a sunlit home", href: "/services/residential/estate-cleanout" },
  { title: "Garage cleanouts", body: "Clear the overflow and put your garage back to work.", image: "/images/offerings/garage-cleanout.jpg", alt: "A cluttered garage with bags, boxes, and household items", href: "/services/residential/garage-cleanout" },
  { title: "Donation pickups", body: "Give useful furniture and household items a chance at another home.", image: "/images/offerings/donation-pickup.jpg", alt: "A homeowner carrying moving boxes", href: "/services/residential/donation-pickups" },
  { title: "Demolition services", body: "We handle agreed teardown work and clear the debris from your project.", image: "/images/offerings/demolition-services.jpg", alt: "Brick demolition debris beside a building", href: "/services/residential/demolition-services" },
  { title: "Office cleanouts", body: "Clear office furniture and equipment for a move, refresh, or new tenant.", image: "/images/offerings/office-cleanout.jpg", alt: "Office meeting space and work table", href: "/services/commercial/office-cleanout" },
  { title: "Construction debris", body: "Keep your next project moving by getting leftover materials out of the way.", image: "/images/offerings/construction-debris.jpg", alt: "Construction planning and project materials", href: "/services/commercial/construction-debris" },
];

export default function Home() {
  return <main className="clearway-home">
    <section className="cw-hero" id="top">
      <div className="cw-hero-image"><Image src="/images/crew-hero-branded.png" alt="Clearway crew carrying a sofa to their branded truck" fill priority sizes="(max-width: 760px) 100vw, 70vw" /></div>
      <div className="cw-hero-content"><h1>MAKE ROOM<br />FOR WHAT<br />MATTERS.</h1><p>Junk removal for a cleaner, brighter Chicagoland.</p><a className="cw-lime-button" href="#book">Choose your pickup time <IconArrowRight aria-hidden="true" /></a><div className="cw-assurances" aria-label="Clearway service benefits"><span><IconLeaf aria-hidden="true" />Reliable crews</span><span><IconShieldCheck aria-hidden="true" />Responsible disposal</span><span><IconHeart aria-hidden="true" />A cleaner, happier community</span></div></div>
    </section>
    <section className="cw-steps" id="how-it-works" aria-label="How it works"><ol>{steps.map(({ title, body, icon: Icon }) => <li key={title}><div className="cw-step-symbol"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{body}</p></li>)}</ol></section>
    <section className="cw-categories cw-offerings" id="what-we-take" aria-labelledby="categories-heading"><h2 id="categories-heading">What can we take off your hands?</h2><p className="cw-offerings-lead">You point to what goes. Our friendly crew handles the rest, so you do not have to lift a finger.</p><div className="cw-category-grid">{offerings.map(({ title, body, image, alt, href }) => <a href={href} key={title} className="cw-category"><span className="cw-category-image"><Image src={image} alt={alt} fill sizes="(max-width: 700px) 45vw, (max-width: 1080px) 30vw, 270px" /></span><strong>{title}</strong><p>{body}</p><span className="cw-category-link">Learn more <IconArrowRight aria-hidden="true" /></span></a>)}</div></section>
    <section className="cw-impact" id="impact" aria-labelledby="impact-heading"><div className="cw-impact-photo"><Image src="/images/services/residential.webp" alt="Clearway crew carrying furniture from a garage" fill sizes="(max-width: 780px) 100vw, 48vw" /></div><div className="cw-impact-copy"><h2 id="impact-heading">Clear space with more care.</h2><p>We keep useful items in circulation through local nonprofits, recycle what we can, and dispose of the rest responsibly.</p><div className="cw-impact-list"><span><IconLeaf aria-hidden="true" />More reuse. Less landfill.</span><span><IconRecycle aria-hidden="true" />Stronger communities.</span><span><IconHeart aria-hidden="true" />A cleaner Chicagoland.</span></div></div></section>
    <section className="cw-reviews" id="reviews" aria-labelledby="reviews-heading"><h2 id="reviews-heading">Real people. A clearer home.</h2><ReviewsMarquee /></section>
    <section className="cw-closing" id="book" aria-labelledby="closing-heading"><Image src="/images/services/commercial.webp" alt="Clearway truck and crew ready for a pickup" fill sizes="100vw" /><div><h2 id="closing-heading">A cleaner home builds a brighter tomorrow.</h2><a className="cw-lime-button" href="tel:3125550148">Choose your pickup time <IconArrowRight aria-hidden="true" /></a></div></section>
  </main>;
}
