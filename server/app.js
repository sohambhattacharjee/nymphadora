import App from '../source/components/app'
import React from 'react'
import { renderToString } from 'react-dom/server'

const serverSideRender = (req, res) => {

    const component = renderToString(<App />)

    res.send(`<html>
            <head><title>TODO App</title></head>
            <body>
            <div id='main'>${component}</div>
            <script src='/public/bundle.js'></script>
            </body>
            </html>`);
}

export default serverSideRender