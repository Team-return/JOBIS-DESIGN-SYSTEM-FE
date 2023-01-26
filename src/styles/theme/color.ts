export const color = {
  liteBlue: '#135C9D',
  blue: '#0f4c82',
  darkBlue: '#002C53',
  gray1: '#ffffff',
  gray2: '#fafafa',
  gray3: '#f7f7f7',
  gray4: '#e5e5e5',
  gray5: '#cccccc',
  gray6: '#7f7f7f',
  gray7: '#444444',
  gray8: '#333333',
  gray9: '#000000',
  red: '#e74c3c',
  green: '#2ecc71',
  yellow: '#f1c40f',
} as const;

export const {
  liteBlue,
  blue,
  darkBlue,
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
  gray6,
  gray7,
  gray8,
  gray9,
  red,
  green,
  yellow,
} = color;

export type colorKeyOfType = keyof typeof color;
