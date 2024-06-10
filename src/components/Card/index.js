// base
import { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// icons
import LinkedInIcon from 'public/linkedIn.svg'
import SmileIcon from 'public/smile.svg'

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: '24px',
    width: '100%',
    maxWidth: '352px',
    '@media (max-width: 767px)': {
      gap: '16px',
      maxWidth: 'none',
      padding: '12px 0'
    }
  },
  flexContainer: {
    display: 'flex',
    gap: '16px'
  },
  avatar: {
    '@media (max-width: 767px)': {
      width: '70px',
      height: '70px'
    }
  },
  name: {
    fontWeight: 800,
    fontStyle: 'normal',
    fontSize: '36px',
    lineHeight: '103%',
    letterSpacing: '-0.36px',
    color: '#FF7D7D',
    '@media (max-width: 767px)': {
      paddingBottom: '10px'
    }
  },
  workPosition: {
    flexGrow: 1,
    paddingBottom: '24px',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '141%',
    letterSpacing: '-0.16px',
    color: '#C49CD8',
    '@media (max-width: 767px)': {
      paddingBottom: 0
    }
  },
  linkButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px',
    width: '100%',
    height: '84px',
    border: 'none',
    borderRadius: '100px',
    padding: '8px 36px',
    background: '#0085FF',
    fontWeight: 800,
    fontStyle: 'normal',
    fontSize: '29.061px',
    lineHeight: '103%',
    letterSpacing: '-0.291px',
    color: '#FFF',
    textTransform: 'none',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: '#FFF',
      textDecoration: 'none'
    },
    '@media (max-width: 767px)': {
      gap: '15px',
      width: '100%',
      height: '52px',
      padding: '0 22px',
      fontSize: '17.37px',
      letterSpacing: '-0.174px'
    }
  },
  redButton: {
    background: '#FF7D7D',
    color: '#FFF !important',
    textDecoration: 'none !important',
    '&:hover': {
      color: '#FFF',
      textDecoration: 'none !important'
    }
  },
  loadingText: {
    display: 'flex',
    gap: '5px'
  },
  dot: {
    width: '8px',
    height: '8px',
    background: '#FFF',
    animation: '$pulse 1.5s infinite',
    transform: 'scale(.5)',
  },
  dot1: {
    animationDelay: '0s',
  },
  dot2: {
    animationDelay: '0.3s',
  },
  dot3: {
    animationDelay: '0.6s',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.5)',
    },
    '50%': {
      transform: 'scale(1)',
    },
    '100%': {
      transform: 'scale(0.5)',
    }
  }
}))

const Card = ({ isMobile, data, handleConnect }) => {
  const { icon: Icon, name, workPosition, href } = data

  const classes = useStyles()
  const [buttonState, setButtonState] = useState('default')

  const onClick = (event) => {
    event.preventDefault()

    if (buttonState === 'default') {
      setButtonState('loading')
      setTimeout(() => {
        setButtonState('thanks')
        setTimeout(() => {
          window.open(href, '_blank', 'noopener,noreferrer')
          handleConnect()
        }, 1000)
      }, 4000)
    }
  }

  const getButtonStyles = () => {
    if (buttonState === 'loading' || buttonState === 'thanks') {
      return `${classes.linkButton} ${classes.redButton}`
    }
    return classes.linkButton
  }

  const renderButtonContent = () => {
    if (buttonState === 'loading') {
      return (
        <div className={classes.loadingText}>
          <div className={`${classes.dot} ${classes.dot1}`} />
          <div className={`${classes.dot} ${classes.dot2}`} />
          <div className={`${classes.dot} ${classes.dot3}`} />
        </div>
      )
    }

    if (buttonState === 'thanks') {
      return (
        <>
          <Image
            priority
            width={isMobile ? 30 : 50}
            height={isMobile ? 30 : 50}
            src={SmileIcon}
            alt="Smile"
            className={classes.iconButton}
          />
          Thanks!
        </>
      )
    }

    return (
      <>
        <Image
          priority
          width={isMobile ? 30 : 50}
          height={isMobile ? 30 : 50}
          src={LinkedInIcon}
          alt="LinkedIn"
          className={classes.iconButton}
        />
        Connect
      </>
    )
  }

  return (
    <div className={classes.root}>
      {!isMobile && (
        <>
          <Image
            priority
            width={isMobile ? 70 : 150}
            height={isMobile ? 70 : 150}
            src={Icon}
            alt="Avatar"
            className={classes.avatar}
          />
          <Typography className={classes.name}>{name}</Typography>
          <div
            dangerouslySetInnerHTML={{ __html: workPosition }}
            className={classes.workPosition}
          />
        </>
      )}
      {isMobile && (
        <div className={classes.flexContainer}>
          <Image
            priority
            width={isMobile ? 70 : 150}
            height={isMobile ? 70 : 150}
            src={Icon}
            alt="Avatar"
            className={classes.avatar}
          />
          <div>
            <Typography className={classes.name}>{name}</Typography>
            <div
              dangerouslySetInnerHTML={{ __html: workPosition }}
              className={classes.workPosition}
            />
          </div>
        </div>
      )}
      <a
        aria-label="Connect"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        disabled={buttonState !== 'default'}
        className={getButtonStyles()}
        onClick={onClick}
      >
        {renderButtonContent()}
      </a>
    </div>
  )
}

Card.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  handleConnect: PropTypes.func.isRequired
}

export default Card
