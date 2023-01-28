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
  Heading4: fontToCss(28, 500, 34),
  Heading5: fontToCss(24, 500, 32),
  Heading6: fontToCss(20, 500, 28),
  Body1: fontToCss(18, 400, 26),
  Body2: fontToCss(16, 400, 24),
  Body3: fontToCss(14, 500, 20),
  Body4: fontToCss(14, 400, 20),
  Caption: fontToCss(12, 400, 18),
} as const;

export const typography = {
  weight: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 18,
    m2: 20,
    m3: 24,
    l1: 28,
    l2: 32,
    l3: 36,
    code: 40,
  },
} as const;

export type fontKeyOfType = keyof typeof font;
