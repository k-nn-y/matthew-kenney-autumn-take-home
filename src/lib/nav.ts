/**
 * The whole site, in one place. Every nav, menu and footer column reads from
 * here, so a route can never be linked from one surface and missing from
 * another — docs/DESIGN.md: the nav must not claim a page it is not on.
 */
export type NavLink = { href: string; label: string };

/** The three the board draws in the nav. */
export const PRIMARY_LINKS: NavLink[] = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
];

/** Everything else, behind one menu rather than five more nav items. */
export const MORE_LINKS: NavLink[] = [
  { href: "/product/search", label: "Search" },
  { href: "/integrations", label: "Integrations" },
  { href: "/blog", label: "Notes" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
];

export const FOOTER_COLUMNS: { label: string; links: NavLink[] }[] = [
  {
    label: "WHAT WE DO",
    links: [
      { href: "/product/search", label: "Search" },
      { href: "/integrations", label: "Integrations" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    label: "THE COMPANY",
    links: [
      // The open role lives behind Careers, not beside it.
      { href: "/careers", label: "Careers" },
      { href: "/blog", label: "Notes" },
    ],
  },
  {
    label: "ELSEWHERE",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/terms", label: "Terms" },
    ],
  },
];
