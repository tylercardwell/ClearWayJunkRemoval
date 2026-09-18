import Image from "next/image";
import { IconArrowRight, IconBolt, IconClockHour7, IconMapPin, IconPhone } from "@tabler/icons-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Clearway | Junk removal, made simple",
  description: "Tell Clearway what needs clearing and get a quick response from our Chicagoland team.",
};

const contactOptions = [
  { title: "Call us", detail: "(312) 555-0148", note: "We’re happy to help.", icon: IconPhone },
  { title: "Hours", detail: "Mon - Sat, 7am - 7pm", note: "Same-day service available.", icon: IconClockHour7 },
  { title: "Coverage area", detail: "Chicagoland", note: "City and surrounding suburbs.", icon: IconMapPin },
  { title: "Fast response", detail: "We’ll get back to you quickly.", note: "Usually within a few hours.", icon: IconBolt },
] as const;

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-main" aria-label="Contact Clearway">
        <ContactForm />
        <aside className="contact-details" aria-labelledby="contact-details-heading">
          <h2 id="contact-details-heading">Other ways to reach us</h2>
          <div className="contact-detail-list">
            {contactOptions.map(({ icon: Icon, ...option }) => (
              <div className="contact-detail" key={option.title}>
                <span className="contact-detail-icon" aria-hidden="true"><Icon strokeWidth={2.25} /></span>
                <div>
                  <p>{option.title}</p>
                  {option.title === "Call us" ? <a href="tel:3125550148">{option.detail}</a> : <strong>{option.detail}</strong>}
                  <small>{option.note}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-signoff">
            <p>Less junk.<br />A brighter tomorrow.</p>
            <span aria-hidden="true" />
          </div>
        </aside>
      </section>

      <section className="contact-impact" aria-labelledby="contact-impact-heading">
        <Image src="/images/clearway-branded-crew-cta.png" alt="Clearway crew moving a sofa to a branded truck" fill sizes="100vw" />
        <div className="contact-impact-card">
          <p>A cleaner tomorrow</p>
          <h2 id="contact-impact-heading">Responsible disposal.<br />A brighter Chicagoland.</h2>
          <span>We donate, recycle, and dispose responsibly because what leaves your space should do some good in the world.</span>
          <a href="/#impact">Learn more <IconArrowRight aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}
