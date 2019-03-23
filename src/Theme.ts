export interface ITheme {
  bgColor: string;
  textColor: string;
  logoPath: string;
}

export const Theme = {
  bright: {
    bgColor: '#ffffff',
    textColor: '#000000',
    logoPath: '/horizontal-black-transparent-bg.png',
  } as ITheme,
  dark: {
    bgColor: '#0f0f0f',
    textColor: '#ffffff',
    logoPath: '/horizontal-white-transparent-bg.png',
  } as ITheme,
};
