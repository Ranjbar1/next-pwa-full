import { Components, ComponentsOverrides, Theme } from '@mui/material'
// import type {} from "@mui/x-data-grid/themeAugmentation";
// const MuiDataGridOverride: ComponentsOverrides<Theme>["MuiDataGrid"] = {
//   root: ({ theme, ownerState }) => ({}),
// };

const components: Components<Theme> = {
  MuiAppBar: {
    defaultProps: { elevation: 1 },
    styleOverrides: {
      root: ({ theme }) => ({
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
      }),
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        // background: theme.palette.background.default,
        background: 'none',
        borderRadius: '0',
        boxShadow: 'none',
      }),
    },
  },
  MuiButton: {
    defaultProps: {
      fullWidth: false,
    },
    styleOverrides: {
      root: ({ theme }) => ({}),
      contained: ({ theme }) => ({
        background: '#6750A4',
        // color: theme.palette.text.primary,
        borderRadius: theme.spacing('16px'),
      }),
      text: ({ theme }) => ({
        border: 'none',
        color: '#6750A4',
        width: 'auto',
        boxShadow: '0',
      }),
    },
  },
}
export default components
