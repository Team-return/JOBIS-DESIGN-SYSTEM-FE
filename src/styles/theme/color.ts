export const color = {
  liteBlue: '#135C9D',
  blue: '#0f4c82',
  darkBlue: '#002C53',
  gray10: '#ffffff',
  gray20: '#fafafa',
  gray30: '#f7f7f7',
  gray40: '#e5e5e5',
  gray50: '#cccccc',
  gray60: '#7f7f7f',
  gray70: '#444444',
  gray80: '#333333',
  gray90: '#000000',
  error: '#e74c3c',
  success: '#2ecc71',
  warning: '#f1c40f',
  skyblue: '#2492F4',
} as const;

export const {
  liteBlue,
  blue,
  darkBlue,
  gray10,
  gray20,
  gray30,
  gray40,
  gray50,
  gray60,
  gray70,
  gray80,
  gray90,
  error,
  success,
  warning,
  skyblue,
} = color;

export type colorKeyOfType = keyof typeof color;
