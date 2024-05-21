import { extendTheme } from '@chakra-ui/react';

import { fonts } from '../app/fonts';

export const theme = extendTheme({
  fonts: {
    heading: fonts.poppins.style.fontFamily,
    body: fonts.roboto.style.fontFamily
  }
});
