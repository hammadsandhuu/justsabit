import { servicesData } from "./services";
import {sectorsData } from "./sectors";

export const navData = {
  nav: [
    {
      nav_name: "Home",
      link: "/",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "About",
      link: "/about",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "SERVICES",
      link: "/service",
      type: "dropdown",
      sub_nav: servicesData.map((service) => ({
        name: service.title,
        link: `/service/${service.slug}`,
      })),
    },
    {
      nav_name: "SECTORS",
      link: "/service/sector",
      type: "dropdown",
      sub_nav: sectorsData.map((sector) => ({
        name: sector.title,
        link: `/service/sector/${sector.slug}`,
      })),
    },
    {
      nav_name: "HOW IT WORKS",
      link: "/how-it-works",
      type: "",
      sub_nav: [],
    },
    {
      nav_name: "BLOGS",
      link: "/blog",
      type: "",
      sub_nav: [],
    },
  ],
};
