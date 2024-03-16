import { Route } from "next";

export type Path = {
  label: string;
  href: Route;
  segment: string;
};

export const paths = [
  {
    label: "Poems",
    href: "/poems",
    segment: "poems",
  },
  {
    label: "Collections",
    href: "/collections",
    segment: "collections",
  },
];
