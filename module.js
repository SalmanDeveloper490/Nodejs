// NPM Module
// const clicolor = require("cli-color");

// console.log(clicolor.red("Hello with cli color"));

// Local Module
// const auth = require("./auth");

// auth.login("John Doe");

// Core Modules
const path = require("path");

// // console.log(__filename);

// // dirname
// console.log("folder Name:", path.dirname(__filename));

// // filename
// console.log("filename Name:", path.basename(__filename));

// // Extension Name
// console.log("Extension Name:", path.extname(__filename));

// // Parse
// console.log("Parse:", path.parse(__filename));

// // Join
// console.log("Join:", path.join(__dirname, "order", "app.js"));

// File System
const fs = require("fs");
const { Console } = require("console");

// Make Directory
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Folder Created");
// });

// Create File
// fs.writeFile(path.join(__dirname, "/test", "text.js"), "Hello Node", (err) => {
//   if (err) {
//     throw err;
//   }
//   fs.appendFile(
//     path.join(__dirname, "/test", "text.js"),
//     "Some Data",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("Data Added In File");
//     }
//   );
//   console.log("File created");
// });

// Read File
// fs.readFile(path.join(__dirname, "/test", "text.js"), "UTF-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   //   const content = Buffer.from(data);
//   //   console.log(content.toString());
//   console.log(data);
// });

// OS Module

const os = require("os");

// console.log("Os Type:", os.type());
// console.log("Os platform:", os.platform());
// console.log("Cpu architecture:", os.arch());
// console.log("Cpu details:", os.cpus());
// console.log("Free memory:", os.freemem());
// console.log("Total memory:", os.totalmem());
// console.log("Uptime:", os.uptime());

// Event Modules

const Emitter = require("events");

// const myEmitter = new Emitter();

// myEmitter.on("someone", (data) => {
//   console.log(data);
// });

// myEmitter.emit("someone", {
//   name: "John Doe",
// });

class Auth extends Emitter {
  register(username) {
    console.log(`${username} Registered SuccessFully`);
    this.emit("registered", username);
  }
}
const auth = new Auth();

auth.register("John Doe");

// listening event we created above
auth.on("registered", (username) => {
  console.log(`Sending Email to ${username}`);
});
