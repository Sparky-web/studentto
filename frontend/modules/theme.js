import { createTheme } from "@mui/material";

const palette = {
  type: 'light',
  common: {
    black: "#1F2024",
    white: "#ffffff"
  },
  primary: {
    main: '#006FFD',
    contrastText: '#F8F9FE',

    darkest: "#006FFD",
    dark: "#2897FF",
    medium: "#6FBAFF",
    light: "#B4DBFF",
    lightest: "#EAF2FF"
  },
  light: {
    darkest: "#C5C6CC",
    dark: "#D4D6DD",
    medium: "#E8E9F1",
    light: "#F8F9FE",
    lightest: "#FFFFFF"
  },
  dark: {
    darkest: "#1f2024",
    dark: "#2F3036",
    medium: '#494A50',
    light: "#71727A",
    lightest: "#8F9098"
  },
  secondary: {
    main: '#F03A47',
  },
  background: {
    default: '#ffffff',
    paper: '#f8f9fe',
  },
  text: {
    primary: '#1F2024',
    secondary: '#2F3036',
    disabled: '#8F9098',
    hint: '#71727A',
    highlight: "#2897FF",
  },
  error: {
    main: '#FF616D',
    light: '#FFE2E5',
    dark: '#ED3241',
  },
  warning: {
    main: '#FFB37C',
    dark: '#E86339',
    light: '#FFF4E4',
  },
  info: {
    main: '#2897FF',
  },
  success: {
    main: '#3AC0A0',
    dark: '#298267',
    light: '#E7F4E8',
  },
  divider: '#D4D6DD',
}

const typography = {
  fontFamily: 'Inter',
  h1: {
    fontSize: 24,
    fontWeight: 900,
  },
  h2: {
    fontSize: 18,
    fontWeight: 900,
  },
  h3: {
    fontSize: 16,
    fontWeight: 900,
  },
  h4: {
    fontSize: 14,
    fontWeight: 800,
  },
  h5: {
    fontSize: 12,
    fontWeight: 700,
  },
  h6: {
    fontSize: 12,
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: 14,
  },
  subtitle2: {
    fontSize: 12,
  },
  body1: {
    fontSize: 14,
  },
  body2: {
    fontSize: 12,
  },
  caption: {
    letterSpacing: "0.05em",
    fontSize: 10,
    fontWeight: 600,
    textTransform: "uppercase"
  },
  button: {
    fontSize: 12,
    fontWeight: 600,
  },
  overline: {
    fontSize: 12,
    fontWeight: 600,
  },
  actionL: {
    fontSize: 14,
    fontWeight: 600
  },
  actionM: {
    fontSize: 12,
    fontWeight: 400
  },
  actionS: {
    fontSize: 10,
    fontWeight: 400
  },
  captionM: {
    letterSpacing: "0.05em",
    lineHeight: "12px",
    fontSize: 10,
    fontWeight: 600,
    textTransform: "uppercase"
  },
  bodyXL: {
    fontSize: 18,
    fontWeight: 400,
  },
  bodyL: {
    fontSize: 16,
    fontWeight: 400
  },
  bodyM: {
    fontSize: 14,
    fontWeight: 400
  },
  bodyS: {
    fontSize: 12,
    fontWeight: 400
  },
  bodyXS: {
    fontSize: 10,
    fontWeight: 400
  },
}

export const theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 12
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "40%"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "14px 12px",
          boxShadow: "none",
        }
      },
      variants: [
        {
          props: { variant: 'link' },
          style: ({ theme }) => ({
            color: theme.palette.primary.main,
            width: "fit-content",
            padding: 0,
            borderRadius: 0,
            textTransform: "none"
          })
        },
      ],
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          background: "none"
        },
        elevation1: {
          // background: theme.palette.background.paper,
          boxShadow: "none"
        }
      }
    },
    MuiTypography: {
      variants: [
        {
          props: { type: "section" },
          style: {
            marginLeft: "8px"
          }
        }
      ]
    },
    MuiTab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "16px",
          minWidth: "42px",
          color: palette.dark.medium,
          ...typography.bodyL,
          ...(ownerState.hint ? {
            '&:before': {
              content: `"${ownerState.hint}"`,
              display: "block",
              marginBottom: "4px",
              ...typography.captionM,
              color: palette.text.hint
            }
          } : {}),

          "&.Mui-selected": {
            background: palette.primary.main,
            color: palette.light.lightest,
            '&:before': {
              color: palette.primary.light,
            }
          },
          // width: "42px",
          marginLeft: "4px"
        }),
      },
      variants: [{
        props: { variant: "current" },
        style: {
          background: palette.light.light
        }
      }]
    },
    MuiChip: {
      styleOverrides: {
        label: {
          ...typography.captionM
        },
        filled: {
          background: palette.primary.lightest,
          color: palette.primary.main
        }
      },
      variants: [
        {
          props: { type: "focus" },
          style: {
            background: palette.primary.main,
            color: palette.light.lightest
          }
        }
      ]
    }
  },
})
