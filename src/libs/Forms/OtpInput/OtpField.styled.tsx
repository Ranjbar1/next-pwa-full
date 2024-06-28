import { PaletteEnum } from '@/core/enums';
import { styled } from '@mui/material';

export const OtpFieldInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: theme.spacing(7),
  border: 'none',
  outline: '1.5px solid',
  outlineColor:
    theme.palette.mode === PaletteEnum.Dark
      ? theme.palette.accent.dark
      : theme.palette.background.neutral,
  borderRadius: theme.spacing(5 / 8),
  padding: 0,
  textAlign: 'center',
  fontSize: '1.8rem',
  lineHeight: '1',
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  '&:focus': {
    outline: `2px solid ${theme.palette.primary.main}`,
  },
}));

OtpFieldInput.defaultProps = {
  type: 'text',
  inputMode: 'numeric',
  autoComplete: 'one-time-code',
  pattern: 'd{1}',
};
