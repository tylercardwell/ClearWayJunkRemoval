import type { Metadata } from "next";
import ServiceDirectory from "../components/ServiceDirectory";

export const metadata: Metadata = { title: "Residential & commercial services | Clearway", description: "Explore Clearway residential cleanouts, donation pickups, demolition services, office cleanouts, and construction debris removal." };

export default function ServicesPage() {
  return <main className="cw-service-directory-page">
    <section className="cw-directory-hero"><h1>Services for home and business.</h1><p>Find the right help for your space. Start with a residential or commercial service, then tell us about your project.</p><a className="cw-service-button" href="/#book">Book a pickup</a></section>
    <section className="cw-directory-content"><ServiceDirectory /></section>
  </main>;
}
