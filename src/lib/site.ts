/**
 * Single source of truth for the reply address. Every mailto on the page
 * points here, and the footer prints it as selectable text beside a copy
 * control — the address is never only inside a button.
 */
export const REPLY_EMAIL = "aaryan@autumnplatform.com";
export const MAILTO = `mailto:${REPLY_EMAIL}`;
