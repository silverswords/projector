'use strict'

const IPFS = require('ipfs')

async function onRunIPFS()  {
  console.log('waiting an IPFS Node')
  try {
    const node = await IPFS.create()
    const id = await node.id()
    console.log(id)
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
    onRunIPFS,
}