const fontToCss = (sz: number, wt: number, lh?: number) =>
  `
  font-weight: ${wt};
  line-height: ${lh}px;
  font-size: ${sz}px;
`;

export const font = {
  Heading1: fontToCss(40, 700, 60),
  Heading2: fontToCss(36, 700, 54),
  Heading3: fontToCss(32, 700, 48),
  Heading4: fontToCss(28, 700, 34),
  Heading5: fontToCss(24, 700, 32),
  Heading6: fontToCss(20, 700, 28),
  Body1: fontToCss(18, 400, 26),
  Body2: fontToCss(16, 400, 24),
  Body3: fontToCss(14, 400, 20),
  Body4: fontToCss(14, 400, 20),
  Caption: fontToCss(12, 700, 18),
} as const;

export type fontKeyOfType = keyof typeof font;
