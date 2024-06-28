import { PaletteMode, PaletteOptions } from '@mui/material'

const palette = (mode: PaletteMode): PaletteOptions =>
  mode === 'dark'
    ? {
        background: {
          default: '#212542',
          paper: '#141835',
          // 'paper2': '#BEDCFF',
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
        mode: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#d7f2fd',
          paper: '#bbdefb',
        },
        text: {
          primary: 'rgba(0,18,117,0.87)',
          secondary: 'rgba(0,18,117,0.6)',
        },
      }
export default palette as PaletteOptions
