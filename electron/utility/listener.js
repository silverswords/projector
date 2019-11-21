const EventEmitter = require('events')

function Listener() {
  Listener.init.call(this)
}

Listener.init = function() {
  if (this.eventEmitter == undefined) {
    this.eventEmitter = new EventEmitter()
  }
}

function _addListener(target, event, handler) {
  target.eventEmitter.addListener(event, handler)
}

Listener.prototype.addListener = function(event, handler) {
  _addListener(this, event, handler)
}

function dispatchElectronEvent(target, event, args) {
  target.eventEmitter.emit(event, args)
}

function dispatchNodeEvent(target, event, args) {
  target.eventEmitter.emit(event, args)
}

Listener.prototype.registerElectronEvents = function(target, events) {
  const that = this

  events.forEach(event => {
    target.on(event, (ev, ...data) => {
      dispatchElectronEvent(that, event, data)
    })
  })
}

Listener.prototype.registerNodeEvents = function(target, events) {
  const that = this

  events.forEach(event => {
    target.on(event, (...data) => {
      dispatchNodeEvent(that, event, data)
    })
  })
}

module.exports = Listener
