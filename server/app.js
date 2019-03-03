import App from '../source/components/app'
import React from 'react'
import { renderToString } from 'react-dom/server'
import store from '../source/store/store'
import { Provider } from 'react-redux'

const serverSideRender = (req, res) => {

    const component = renderToString(<Provider store={store}><App /></Provider>)

    res.send(`<html>
            <head><title>Soham Bhattacharjee</title></head>
            <link rel='stylesheet' type='text/css' href='/dist/bundle.css'></link>
            <body>
            <div id='main'>${component}</div>
            <script src='/dist/bundle.js'></script>
            </body>
            </html>`);
}

export default serverSideRender