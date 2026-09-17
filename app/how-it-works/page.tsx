import Image from "next/image";
import { IconArrowRight, IconCalendarEvent, IconCheck, IconLeaf, IconRecycle, IconTruckDelivery } from "@tabler/icons-react";

const steps = [
  { icon: IconCalendarEvent, title: "Choose a time", text: "Pick a pickup window that fits your schedule. Tell us a little about the space and what needs to go." },
  { icon: IconCheck, title: "Point out the items", text: "When the crew arrives, show us what stays and what goes. We will walk through the scope together." },
  { icon: IconTruckDelivery, title: "We do the lifting", text: "Once you are ready, our crew handles the carrying, loading, and cleanup so you do not have to." },
  { icon: IconRecycle, title: "Items find a better future", text: "We donate reusable items, recycle what we can, and dispose of the rest responsibly." },
];

const items = ["Furniture and household belongings", "Appliances and electronics", "Office furniture and equipment", "Renovation and construction debris", "Mattresses, rugs, and yard waste", "Garage, storage, and bulky items"];

export default function HowItWorksPage() {
  return <main className="cw-how-page">
    <section className="cw-how-hero">
      <div><h1>Junk removal, made simple.</h1><p>You point to what goes. Our friendly crew handles the heavy lifting, then works to give usable items a better next chapter.</p><a className="cw-how-button" href="/#book">Book a pickup <IconArrowRight aria-hidden="true" /></a></div>
      <div className="cw-how-hero-photo"><Image src="/images/service-story/unsplash-moving.jpg" alt="People moving belongings in a bright home" fill priority sizes="(max-width: 760px) 100vw, 58vw" /></div>
    </section>

    <section className="cw-how-intro"><div><span aria-hidden="true" /><h2>Clear the space. Keep what matters.</h2></div><p>From one bulky item to an entire room, we make it easy to regain your space. Before anything is loaded, you stay in control of what leaves and what stays.</p></section>

    <section className="cw-how-steps" aria-labelledby="steps-heading"><h2 id="steps-heading">Four easy steps.</h2><ol>{steps.map(({ icon: Icon, title, text }) => <li key={title}><div className="cw-how-step-icon"><Icon aria-hidden="true" /></div><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>

    <section className="cw-how-items"><div className="cw-how-items-photo"><Image src="/images/offerings/estate-cleanout.jpg" alt="Household belongings prepared for a Clearway cleanout" fill sizes="(max-width: 760px) 100vw, 45vw" /></div><div className="cw-how-items-copy"><span aria-hidden="true" /><h2>What can we take?</h2><p>We can help clear a wide range of household, office, and project materials.</p><ul>{items.map((item) => <li key={item}><IconCheck aria-hidden="true" />{item}</li>)}</ul><a href="/services">Explore all services <IconArrowRight aria-hidden="true" /></a></div></section>

    <section className="cw-how-closing" id="book"><div className="cw-how-closing-copy"><h2>Ready for more room?</h2><p>Choose a pickup time and let us handle the rest.</p><a className="cw-how-button" href="tel:3125550148">Book a pickup <IconArrowRight aria-hidden="true" /></a></div><div className="cw-how-closing-image"><Image src="/images/service-story/unsplash-living-room.jpg" alt="A peaceful, sunlit living room" fill sizes="(max-width: 760px) 100vw, 50vw" /></div></section>
  </main>;
}
