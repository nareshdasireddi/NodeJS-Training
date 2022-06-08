var events = require("events");

const adharDB = ["Naresh", "Rohith"];
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
var name = "Naresh";
var checkAdhar = function () {
  if (adharDB.indexOf(name) > -1) {
    eventEmitter.emit("successMsg");
  } else {
    eventEmitter.emit("failedMsg");
  }
};

var successMsg = function () {
  console.log(name + " exits in DB");
  eventEmitter.emit("task-completed");
};

var failedMsg = function () {
  console.log(name + " not exits in DB");
  eventEmitter.emit("task-completed");
};
var taskCompleted = function () {
  console.log("Task completed");
};

// Bind the connection event with the handler
eventEmitter.on("checking", checkAdhar);
eventEmitter.on("successMsg", successMsg);
eventEmitter.on("failedMsg", failedMsg);
eventEmitter.on("task-completed", taskCompleted);

eventEmitter.emit("checking");
