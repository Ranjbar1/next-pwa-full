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
        background: theme.palette.background.default,
      }),
    },
  },
}
export default components
