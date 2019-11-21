const { BrowserWindow } = require('electron')

let mainWindow
const baseURL = 'http://localhost:3000'

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
    }
  })

  mainWindow.setFullScreen(true)

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(baseURL)
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

function onActivateWindow (hasVisibleWindows) {
  console.log(`hasVisibleWindows - ${hasVisibleWindows}`)
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
}

function onLoadPage(page) {
  if (mainWindow === null) {
    createWindow()
  }

  if (page) {
    mainWindow.loadURL(`${baseURL}/${page}`)
  }
}

module.exports = {
  createWindow,
  onActivateWindow,
  onLoadPage,
}
