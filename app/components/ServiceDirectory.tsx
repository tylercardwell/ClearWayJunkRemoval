import { serviceGroups, serviceHref, type ServiceGroup } from "../services/catalog";

export default function ServiceDirectory({ groups = serviceGroups }: { groups?: ServiceGroup[] }) {
  return <div className="service-directory">
    {groups.map((group) => <section className="directory-group" key={group.slug}>
      <h2><a href={serviceHref(group)}>{group.title}</a></h2>
      <p>{group.description}</p>
      <ul>{group.services.map((service) => <li key={service.slug}>
        <a href={serviceHref(group, service)}><h3>{service.title}</h3><p>{service.description}</p><span className="text-link">Explore service <span aria-hidden="true">→</span></span></a>
      </li>)}</ul>
    </section>)}
  </div>;
}
