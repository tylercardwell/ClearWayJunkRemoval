export default function SiteFooter() {
  return <footer className="cw-footer">
    <div className="cw-footer-main">
      <a className="cw-footer-logo" href="/" aria-label="Clearway home">clearway<span>.</span></a>
      <p>Friendly hauling for Chicagoland homes, projects, and businesses.</p>
    </div>
    <nav className="cw-footer-nav" aria-label="Footer navigation">
      <a href="/services">Services</a>
      <a href="/how-it-works">How it works</a>
      <a href="/#impact">Our impact</a>
      <a href="/#reviews">Reviews</a>
    </nav>
    <div className="cw-footer-contact">
      <a href="tel:3125550148">(312) 555-0148</a>
      <a href="mailto:hello@clearwayremoval.com">hello@clearwayremoval.com</a>
    </div>
    <p className="cw-footer-legal">Copyright 2026 Clearway Removal Co. Built for clearer days.</p>
  </footer>;
}
