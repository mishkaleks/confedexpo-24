// material-ui
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'

// icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: '64px',
    width: '100%',
    maxWidth: '1000px',
    '@media (max-width: 767px)': {
      gap: '120px',
      maxWidth: '670px'
    }
  },
  title: {
    paddingBottom: '64px',
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
  bottomPadding: {
    paddingBottom: '24px'
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      gap: '15px'
    }
  },
  linkButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '53px',
    border: '4px solid #FF7D7D',
    padding: '32px 40px',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '27.581px',
    lineHeight: '103%',
    letterSpacing: '-0.276px',
    color: '#FF7D7D',
    textTransform: 'none',
    textDecoration: 'none',
    '&:hover, &:focus, &:active': {
      color: '#FFF',
      textDecoration: 'none'
    },
    '@media (max-width: 767px)': {
      gap: '5px',
      width: '100%',
      height: '52px',
      border: '2px solid #FF7D7D',
      padding: '0 22px',
      fontSize: '17.37px',
      letterSpacing: '-0.174px'
    }
  },
  arrowIcon: {
    flexShrink: 0,
    width: '22px',
    height: '22px'
  }
}))


const CloudAccess = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>Thanks for being with us!</Typography>
        <Typography component="div" className={classNames(classes.description, classes.bottomPadding)}>
          Access your photos and podcasts in our cloud!
        </Typography>
        <Typography component="div" className={classes.description}>
          Use #voiceofpharma hashtag to connect to our other’s guests!
        </Typography>
      </div>
      <div className={classes.buttonContainer}>
        <a
          href="#"
          aria-label="Go to photos"
          className={classes.linkButton}
        >
          Go to photos
          <ChevronRightIcon className={classes.arrowIcon} />
        </a>
        <a
          href="#"
          aria-label="Go to podcasts"
          className={classes.linkButton}
        >
          Go to podcasts
          <ChevronRightIcon className={classes.arrowIcon} />
        </a>
      </div>
    </div>
  )
}

export default CloudAccess
