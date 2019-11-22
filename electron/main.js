const { app } = require('electron')

const Listener = require('./utility/listener')
const { createWindow, onActivateWindow } = require('./handlers/window')
const IPFS = require('ipfs')
const { onCreateMenu } = require('./menu')

const listener = new Listener()
listener.addListener('ready', createWindow)
listener.addListener('ready', onCreateMenu)
// create ipfs node in electron
listener.addListener('ready', async () => {
  try {
    const node = await IPFS.create()
    const id = await node.id()
    console.log(id)
  } catch (err) {
    console.error(err)
  }
})
listener.addListener('activate', onActivateWindow)
listener.addListener('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

listener.registerElectronEvents(app, ['ready', 'activate', 'window-all-closed'])
