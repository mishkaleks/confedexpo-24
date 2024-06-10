// base
import React, { useState } from 'react'
import Image from 'next/image'

// material-ui
import makeStyles from '@material-ui/core/styles/makeStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// components
import Header from 'components/Header'
import LinkedInConnect from 'components/LinkedInConnect'
import CloudAccess from 'components/CloudAccess'

// images
import Figure from 'public/figure.png'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    padding: '32px 73px',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#4B2391',
    '@media (max-width: 467px)': {
      padding: '32px 15px'
    }
  },
  figureContainer: {
    zIndex: 5,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '55%',
    height: '100%'
  },
  figure: {
    objectFit: 'cover',
    '@media (max-width: 767px)': {
      height: '45%'
    },
    '@media (max-width: 600px)': {
      height: '35%'
    }
  }
}))

const Home = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:767px)')

  const [showCloudAccess, setShowCloudAccess] = useState(false)
  const [clickedCards, setClickedCards] = useState([])

  const handleConnect = (index) => {
    setClickedCards((prevClickedCards) => {
      const newClickedCards = [...prevClickedCards]

      if (!newClickedCards.includes(index)) {
        newClickedCards.push(index)
      }

      if (newClickedCards.length >= 2) {
        setShowCloudAccess(true)
      }

      return newClickedCards
    })
  }

  const handleSkip = () => setShowCloudAccess(true)

  return (
    <div className={classes.root}>
      <div className={classes.figureContainer}>
        <Image
          priority
          className={classes.figure}
          src={Figure}
          alt="Figure"
        />
      </div>
      <Header isMobile={isMobile} />
      {showCloudAccess
        ? <CloudAccess />
        : (
          <LinkedInConnect
            isMobile={isMobile}
            handleConnect={handleConnect}
            handleSkip={handleSkip}
          />
        )
      }
    </div>
  )
}

export default Home

