import { PaletteMode, PaletteOptions } from '@mui/material';

const palette = (mode: PaletteMode): PaletteOptions =>
  mode === 'dark'
    ? {
        background: {
          default: '#212542',
          paper: '#141835',
        },
        secondary: {
          main: '#212542',
          dark: '#101645',
        },
        primary: {
          main: '#F6CA66',
          dark: '#81C14B',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#050C25',
        },
      }
    : {
        background: {
          default: '#EFEFEF',
          paper: '#1C2565',
        },
        secondary: {
          main: '#1C2565',
          dark: '#101645',
        },
        primary: {
          main: '#F6CA66',
          light: '#81C14B',
          dark: '',
        },
        text: {
          primary: '#1C2565',
          secondary: '#576081',
        },
      };
export default palette as PaletteOptions;
