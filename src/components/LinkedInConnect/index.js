// base
import PropTypes from 'prop-types'

// material-ui
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

// components
import Card from 'components/Card'

// constants
import { CARDS_CONTENT } from './constants'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: '64px',
    width: '100%',
    maxWidth: '1156px',
    '@media (max-width: 1199px)': {
      gap: '32px'
    },
    '@media (max-width: 767px)': {
      gap: '24px'
    }
  },
  title: {
    paddingBottom: '12px',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '128px',
    lineHeight: '105%',
    letterSpacing: '-1.28px',
    color: '#FF7D7D',
    '@media (max-width: 1199px)': {
      fontSize: '86px',
      letterSpacing: '-0.86px'
    },
    '@media (max-width: 767px)': {
      paddingBottom: '24px',
      fontSize: '37px',
      lineHeight: '93%',
      letterSpacing: '-0.37px'
    }
  },
  description: {
    display: 'block',
    width: '100%',
    maxWidth: '800px',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '32px',
    lineHeight: '141%',
    letterSpacing: '-0.32px',
    color: '#C49CD8',
    '@media (max-width: 767px)': {
      fontSize: '16px',
      lineHeight: '141%',
      letterSpacing: '-0.16px'
    }
  },
  cardContainer: {
    display: 'flex',
    gap: '48px',
    alignItems: 'stretch',
    padding: '30px 0',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      padding: 0
    }
  },
  button: {
    boxShadow: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '141%',
    letterSpacing: '-0.14px',
    color: '#9870AC',
    textTransform: 'none',
    '&:hover': {
      boxShadow: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      color: '#9870AC'
    }
  },
  arrowIcon: {
    width: '15px',
    height: '15px'
  }
}))

const LinkedInConnect = ({ isMobile, handleConnect, handleSkip }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>Photos & Podcasts</Typography>
        <Typography className={classes.description}>
          As we prepare your photos, why not connect with us LinkedIn?
        </Typography>
      </div>
      <div className={classes.cardContainer}>
        {CARDS_CONTENT.map((item, index) => (
          <Card
            key={`card-${index}`}
            isMobile={isMobile}
            data={item}
            handleConnect={() => handleConnect(index)}
          />
        ))}
      </div>
      <div>
        <Button className={classes.button} onClick={handleSkip}>
          Skip this step and proceed to photos
          <ChevronRightIcon className={classes.arrowIcon} />
        </Button>
      </div>
    </div>
  )
}

LinkedInConnect.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  handleConnect: PropTypes.func.isRequired,
  handleSkip: PropTypes.func.isRequired
}

export default LinkedInConnect
