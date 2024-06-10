const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')
// const favicon = require('serve-favicon')
const compression = require('compression')
const httpProxy = require('http-proxy')
const path = require('path')
const locale = require('locale')
const useragent = require('express-useragent');
const requestIp = require('request-ip');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()
const targetUrl = `http://${process.env.APIHOST}:${process.env.APIPORT}`

app
  .prepare()
  .then(() => {
    const server = express()
    const proxy = httpProxy.createProxyServer({
      target: targetUrl
    })

    server.use(requestIp.mw())

    server.use(compression())
    // server.use(favicon(path.join(__dirname, 'src', 'public', 'favicon.ico')))

    server.use(express.static(path.join(__dirname, 'src', 'public'), {
      extensions: ['html', 'json']
    }))

    server.use(useragent.express());

    server.use(express.static(path.join(__dirname, '..', 'yolinga-backend', 'static')))
    server.use(express.static(path.join(__dirname, '..', 'yolinga-backend', 'public')))

    server.use(cookieParser())

    server.use(locale(['en', 'de'], 'de'))

    // Proxy to API server
    server.use('/api', (req, res) => {
      proxy.web(req, res, { target: `${targetUrl}/api` })
    })

    // Proxy to Keystone admin panel
    server.use('/keystone', (req, res) => {
      proxy.web(req, res, { target: `${targetUrl}/keystone` })
    })

    // server.use('/socket.io', (req, res) => {
    //   proxy.web(req, res, { target: `${targetUrl}/socket.io` })
    // })

    // Proxy to uploads
    server.use('/uploads', (req, res) => {
      proxy.web(req, res, { target: `${targetUrl}/uploads` })
    })

    // Proxy to oauth
    server.use('/oauth', (req, res) => {
      proxy.web(req, res, { target: `${targetUrl}/oauth` })
    })

    // Proxy to scripts
    // server.use('/scripts', (req, res) => {
    //   proxy.web(req, res, { target: `${targetUrl}/scripts` })
    // })

    // handle req IP address
    // TODO add trusted servers IPs http://expressjs.com/en/guide/behind-proxies.html
    server.set('trust proxy', true)

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    // added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
    proxy.on('error', (error, req, res) => {
      if (error.code !== 'ECONNRESET') {
        console.error('proxy error', error)
      }

      if (!res.headersSent) {
        res.writeHead(500, { 'content-type': 'application/json' })
      }

      const json = { error: 'proxy_error', reason: error.message }
      res.end(JSON.stringify(json))
    })

    if (process.env.PORT) {
      server.listen(process.env.PORT, err => {
        if (err) {
          console.error(err)
        }
        console.info('----\n==> ✅  %s is running, talking to API server on %s.', 'Screver', process.env.APIPORT)
        console.info('==> 💻  Open http://%s:%s in a browser to view the app.', process.env.HOST, process.env.PORT)
      })
    } else {
      console.error('==>     ERROR: No PORT environment variable has been specified')
    }
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  });
