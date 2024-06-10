// base
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

// material-ui
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

// icons
import CapptooIcon from 'public/capptoo.svg'
import ScreverIcon from 'public/screver.svg'

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 10,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '24px',
    width: '100%',
    maxWidth: '1156px',
    margin: '24px 0',
    '@media (max-width: 1199px)': {
      margin: '24px 0 35px'
    },
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '24px',
      margin: '0 0 24px'
    }
  },
  confedExpo: {
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '48px',
    lineHeight: '119%',
    letterSpacing: '-0.48px',
    color: '#FF7D7D',
    '@media (max-width: 1199px)': {
      fontSize: '24px',
      letterSpacing: '-0.24px'
    },
    '@media (max-width: 767px)': {
      fontSize: '12px',
      letterSpacing: '-0.12px'
    }
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '60px',
    '@media (max-width: 767px)': {
      gap: '24px'
    }
  }
}))

const Header = ({ isMobile }) => {
  const classes = useStyles()

  const headerElement = (
    <Typography className={classes.confedExpo}>
      ConfedExpo 2024
    </Typography>
  )

  return (
    <div className={classes.root}>
      {!isMobile && headerElement}
      <div className={classes.logoContainer}>
        <Image
          priority
          width={isMobile ? 150 : 230}
          height={isMobile? 22 : 38}
          src={CapptooIcon}
          alt="Capptoo"
        />
        <Image
          priority
          width={isMobile ? 105 : 160}
          height={isMobile ? 28 : 50}
          src={ScreverIcon}
          alt="Screver"
        />
      </div>
      {isMobile && headerElement}
    </div>
  )
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

export default Header

