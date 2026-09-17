export const serviceGroups = [
  {
    slug: "residential",
    title: "Residential",
    description: "Practical help for clearing a home, reclaiming a garage, or preparing for your next project.",
    services: [
      {
        slug: "estate-cleanout", title: "Estate cleanout",
        description: "Make space for a new chapter with help clearing furniture and household belongings.",
        detail: "An estate cleanout can involve a lifetime of belongings. Walk us through the rooms that need attention and identify what stays before removal begins. We can help you plan the cleanout one room at a time.",
        examples: ["Unwanted furniture and household items", "Boxes and belongings from storage areas", "Items you have identified for donation or removal"],
        preparation: "Set aside keepsakes, paperwork, and anything you want to keep. Tell us about stairs, parking, and any rooms that need special care.",
      },
      {
        slug: "garage-cleanout", title: "Garage cleanout",
        description: "Clear out the overflow and put your garage back to work.",
        detail: "From a few bulky items to years of accumulated clutter, we help remove the things taking up your garage. Show us what goes so we can assess the load and access before work starts.",
        examples: ["Old shelving and storage furniture", "Unwanted household overflow", "Bulky items taking up parking or workspace"],
        preparation: "Separate the items you are keeping and point out any paints, chemicals, or other materials that need a separate disposal discussion.",
      },
      {
        slug: "donation-pickups", title: "Donation pickups",
        description: "Give usable belongings a chance at another home without handling the heavy lifting.",
        detail: "Tell us about the items you would like to donate and their condition. We help coordinate pickup and discuss suitable donation options before loading. Acceptance depends on the receiving organization and the condition of each item.",
        examples: ["Usable sofas, tables, and chairs", "Dressers and other household furniture", "Boxed household goods to discuss with the crew"],
        preparation: "Share the item list and condition when requesting an estimate. Keep donation items separate from the rest of your cleanout.",
      },
      {
        slug: "demolition-services", title: "Demolition services",
        description: "Talk through removal and teardown work for your next home project.",
        detail: "Start with a walkthrough of what you want removed. We review the materials, access, and project scope with you before agreeing on the work and how the resulting debris will be handled.",
        examples: ["Cabinet and fixture removal projects", "Small teardown projects to assess on site", "Debris removal associated with agreed demolition work"],
        preparation: "Describe the structure or fixtures involved and share any project plans. The estimate should confirm the exact scope and any preparation needed before work begins.",
      },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial",
    description: "Cleanout and debris removal for workplaces, property projects, and construction sites.",
    services: [
      {
        slug: "office-cleanout", title: "Office cleanout",
        description: "Clear unwanted office furniture and equipment for a move, refresh, or new tenant.",
        detail: "Whether you are making room for a new team or preparing to leave a workspace, we can help plan removal around the items and access involved. Share your building requirements and preferred timing when requesting an estimate.",
        examples: ["Desks, chairs, and meeting-room furniture", "Storage cabinets and shelving", "Unwanted office equipment for removal assessment"],
        preparation: "Identify what stays and arrange building access, elevator reservations, or loading-dock instructions. Remove personal files and business data from equipment before pickup.",
      },
      {
        slug: "construction-debris", title: "Construction debris",
        description: "Get leftover materials and project debris out of the way.",
        detail: "Help keep the next stage of your project moving with removal of agreed construction materials. Tell us what is in the pile, where it is located, and how the crew can reach it so we can assess the work.",
        examples: ["Lumber offcuts and wood debris", "Drywall and renovation scraps", "Brick and other heavy materials to assess for the load"],
        preparation: "Describe the materials and approximate volume. Identify any unusual or hazardous materials separately so the removal plan can be confirmed before pickup.",
      },
    ],
  },
];

export type ServiceGroup = (typeof serviceGroups)[number];
export type Service = ServiceGroup["services"][number];
export const serviceHref = (group: ServiceGroup, service?: Service) =>
  `/services/${group.slug}${service ? `/${service.slug}` : ""}`;
