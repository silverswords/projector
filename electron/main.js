const { app } = require('electron')

<<<<<<< HEAD
const Listener = require('./utility/listener')
const { createWindow, onActivateWindow } = require('./handlers/window')
const { onCreateMenu } = require('./menu')

const listener = new Listener()
listener.addListener('ready', createWindow)
listener.addListener('ready', onCreateMenu)
listener.addListener('activate', onActivateWindow)
listener.addListener('window-all-closed', () => {
=======
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
const baseURL = 'http://localhost:3000'

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
    }
  })

  mainWindow.loadURL(baseURL)

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

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
>>>>>>> master
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

listener.registerElectronEvents(app, ['ready', 'activate', 'window-all-closed'])
