import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDirectory from "../../components/ServiceDirectory";
import { serviceGroups } from "../catalog";

type Props = { params: Promise<{ category: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => serviceGroups.map((group) => ({ category: group.slug }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const group = serviceGroups.find((entry) => entry.slug === category);
  return { title: `${group?.title ?? "Services"} services | Clearway`, description: group?.description };
}
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const group = serviceGroups.find((entry) => entry.slug === category);
  if (!group) notFound();
  return <main className="cw-service-directory-page">
    <section className="cw-directory-hero"><nav className="cw-service-crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/services">Services</a><span>/</span><span>{group.title}</span></nav><h1>{group.title} services.</h1><p>{group.description}</p><a className="cw-service-button" href="/#book">Book a pickup</a></section>
    <section className="cw-directory-content"><ServiceDirectory groups={[group]} /></section>
  </main>;
}
