import { createTheme } from '@material-ui/core/styles'

const maziusReview = {
  color: '#fff',
  fontFamily: 'MAZIUS REVIEW',
  fontStyle: 'italic',
  lineHeight: '110%'
}

const h1EpilogueBold = {
  fontFamily: 'Epilogue',
  fontWeight: 700,
  fontSize: '76px',
  lineHeight: '101%',
  letterSpacing: '-2px',
  '@media only screen and (max-width: 767px)': {
    fontSize: '46px',
    lineHeight: '110%'
  },
  '@media only screen and (max-width: 467px)': {
    fontSize: '42px'
  }
}

const h2EpilogueBold = {
  fontFamily: 'Epilogue',
  fontWeight: 700,
  fontSize: '60px',
  lineHeight: '118.5%',
  letterSpacing: '-2px',
  '@media only screen and (max-width:767px)': {
    fontSize: '38px',
    lineHeight: '116%'
  },
  '@media only screen and (max-width: 467px)': {
    fontSize: '30px'
  }
}

const h3EpilogueBold = {
  fontFamily: 'Epilogue',
  fontWeight: 700,
  fontSize: '44px',
  lineHeight: '120%',
  letterSpacing: '-2px',
  '@media only screen and (max-width:767px)': {
    fontSize: '28px',
    letterSpacing: '-1.6px'
  }
}

const h4EpilogueBold = {
  fontFamily: 'Epilogue',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '120%',
  '@media only screen and (max-width:767px)': {
    fontSize: '26px',
    lineHeight: '110%'
  }
}

const h5EpilogueBold = {
  fontFamily: 'Epilogue',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '120%',
  '@media only screen and (max-width:767px)': {
    fontSize: '20px'
  }
}

const h6EpilogueBold = {
  fontFamily: 'Epilogue',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '130%',
  '@media only screen and (max-width:767px)': {
    lineHeight: '18px',
    fontSize: '18px'
  }
}

const h7InterBold = {
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '19px',
  '@media only screen and (max-width:767px)': {
    fontSize: '14px',
    lineHeight: '17px'
  }
}

const h8InterBold = {
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '17px'
}

const h9SemiBold = {
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '12px',
  lineHeight: '15px'
}

const smallInter = {
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '17px'
}

const extraSmallInter = {
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '15px'
}

const menuInterMedium = {
  fontFamily: 'Inter',
  fontWeight: 500,
  color: '#fff',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '19px'
}

const quoteEpilogue = {
  fontFamily: 'Epilogue',
  fontWeight: 400,
  fontSize: '28px',
  lineHeight: '130%',
  letterSpacing: '-0.6px',
  '@media only screen and (max-width:767px)': {
    fontSize: '20px'
  }
}

const regularInter = {
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '19px'
}

const regularTextInter = {
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '130%'
}

const leadInter = {
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '130%',
  '@media only screen and (max-width:767px)': {
    fontSize: '18px',
    lineHeight: '120%'
  }
}

export const theme = createTheme({
  palette: {
    background: {
      default: '#2C564F',
      green: '#05332B',
      paper: '#FFFFFF',
      dullWhite: '#F4F2F0',
      grey1: '#EFEFEF',
      grey2: '#E5E6E7',
      grey3: '#CFD1D2'
    },
    primary: {
      main: '#298259',
      text: '#FFFFFF',
      error: '#f44336'
    },
    secondary: {
      main: '#FFBA9D',
      text: '#000000'
    },
    baseFont: {
      light: '#FFFFFF',
      mid: '#BDE1DB',
      dark: '#161718'
    }
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: 'inherit'
          }
        }
      }
    },
  },
  typography: {
    h1: {
      ...h1EpilogueBold,
      color: '#fff'
    },
    h1Black: {
      ...h1EpilogueBold,
      color: '#161718'
    },
    h1Accent: {
      ...maziusReview,
      fontSize: '92px',
      '@media only screen and (max-width: 767px)': {
        fontSize: '58px',
        lineHeight: '80%'
      }
    },
    h2: {
      ...h2EpilogueBold,
      color: '#fff'
    },
    h2Black: {
      ...h2EpilogueBold,
      color: '#161718'
    },
    h2Accent: {
      ...maziusReview,
      fontSize: '78px',
      '@media only screen and (max-width: 767px)': {
        fontSize: '48px',
        lineHeight: '80%'
      },
      '@media only screen and (max-width: 467px)': {
        fontSize: '40px'
      }
    },
    h3: {
      ...h3EpilogueBold,
      color: '#fff'
    },
    h3Black: {
      ...h3EpilogueBold,
      color: '#161718'
    },
    h4: {
      ...h4EpilogueBold,
      color: '#fff'
    },
    h4Black: {
      ...h4EpilogueBold,
      color: '#161718'
    },
    h5: {
      ...h5EpilogueBold,
      color: '#fff'
    },
    h5Black: {
      ...h5EpilogueBold,
      color: '#161718'
    },
    h6: {
      ...h6EpilogueBold,
      color: '#fff'
    },
    h6Black: {
      ...h6EpilogueBold,
      color: '#161718'
    },
    h7: {
      ...h7InterBold,
      color: '#fff'
    },
    h7Black: {
      ...h7InterBold,
      color: '#161718'
    },
    h8: {
      ...h8InterBold,
      color: '#fff'
    },
    h8Black: {
      ...h8InterBold,
      color: '#161718'
    },
    h9: {
      ...h9SemiBold,
      color: '#fff'
    },
    h9Black: {
      ...h9SemiBold,
      color: '#161718'
    },
    small: {
      ...smallInter,
      color: '#fff'
    },
    smallBlack: {
      ...smallInter,
      color: '#161718'
    },
    extraSmall: {
      ...extraSmallInter,
      color: '#fff'
    },
    extraSmallBlack: {
      ...extraSmallInter,
      color: '#161718'
    },
    menu: {
      ...menuInterMedium,
      color: '#fff'
    },
    menuBlack: {
      ...menuInterMedium,
      color: '#161718'
    },
    quote: {
      ...quoteEpilogue,
      color: '#fff'
    },
    quoteBlack: {
      ...quoteEpilogue,
      color: '#161718'
    },
    regular: {
      ...regularInter,
      color: '#fff'
    },
    regularBlack: {
      ...regularInter,
      color: '#161718'
    },
    regularText: {
      ...regularTextInter,
      color: '#fff'
    },
    regularTextBlack: {
      ...regularTextInter,
      color: '#161718'
    },
    lead: {
      ...leadInter,
      color: '#fff'
    },
    leadBlack: {
      ...leadInter,
      color: '#161718'
    }
  }
})
