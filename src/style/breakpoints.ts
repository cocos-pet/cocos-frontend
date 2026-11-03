// 1440(laptop)이 최대 브레이크포인트 — 그 이상 넓은 화면도 laptop 값을 그대로 유지한다.
export const breakpoints = {
  mobile: 375,
  tablet: 1024,
  laptop: 1440,
} as const;

export type Breakpoint = keyof typeof breakpoints;

/** min-width media query strings. mobile(375) is the base style — never gated behind a query. */
export const media = {
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
} as const;

/** Content max-widths per breakpoint (rem, 10px base). mobile matches the original body width. */
export const contentMaxWidth = {
  mobile: "76.8rem",
  tablet: "96rem",
  laptop: "128rem",
} as const;

/** Horizontal page padding per breakpoint. mobile(2rem) matches the original design values. */
export const pagePadding = {
  mobile: "2rem",
  tablet: "3.2rem",
  laptop: "4rem",
} as const;
