import App from '../source/components/app'
import React from 'react'
import { renderToString } from 'react-dom/server'
import store from '../source/store/store'
import { Provider } from 'react-redux'

const serverSideRender = (req, res) => {

    const component = renderToString(<Provider store={store}><App /></Provider>)

    res.send(`<html>
            <head><title>TODO App</title></head>
            <body>
            <div id='main'>${component}</div>
            <script src='/public/bundle.js'></script>
            </body>
            </html>`);
}

export default serverSideRender