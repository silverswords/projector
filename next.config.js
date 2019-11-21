const withLess = require('@zeit/next-less')
module.exports = () => {
  /* eslint-disable */
  const withLess = require('@zeit/next-less')
  const lessToJS = require('less-vars-to-js')
  const fs = require('fs')
  const path = require('path')

  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
  }
  
  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true
    }
  })
}
