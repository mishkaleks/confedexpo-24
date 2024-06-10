// base
import React from 'react'
import Helmet from 'react-helmet'
import App from 'next/app'
import { withRouter } from 'next/router'

// material-ui
import NoSSR from '@material-ui/core/NoSsr'

// styles
import 'public/styles.scss'

// components
import HomePage from './index'

class _App extends App {
  render() {
    const appConfig = {
      ...{
        defaultTitle: 'ConfedExpo 24',
        meta: [
          {
            name: 'description',
            content: 'ConfedExpo 24.'
          },
          { charset: 'utf-8' },
          { property: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
          { property: 'og:site_name', content: 'Yolinga' },
          { property: 'og:title', content: 'Welcome to ConfedExpo 24' },
          {
            property: 'og:description',
            content: 'ConfedExpo 24.'
          }
        ]
      }
    }

    return (
      <NoSSR>
        <Helmet {...appConfig} />
        <HomePage />
      </NoSSR>
    )
  }
}

export default ((withRouter(_App)))
