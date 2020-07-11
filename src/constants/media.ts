interface DeviceSizes {
  mobileS?: string;
  mobileM?: string;
  mobileL?: string;
  tablet?: string;
  laptop?: string;
  laptopL?: string;
  desktop?: string;
}

const deviceSizes: DeviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const media: DeviceSizes = Object.keys(deviceSizes).reduce(
  (media: object, device: string, index: number) => ({
    ...media,
    [device]: `@media(min-width: ${Object.values(deviceSizes)[index]})`
  }),
  {}
);

export default media;
