const express = require("express");
const fs = require("fs");
const url = require("url");
const path = require("path");
const get_seperator = require("./server/get_seperator");
const express_use = require("./server/express_use");
const express_get_post = require("./server/express_get_post");
const read_data = require("./server/read_data");
const bodyParser = require("body-parser");

//settings

const app = express();
var sep = get_seperator(); // windows or not
console.log("seperator: '" + sep + "'");

/* move file
    // fs.renameSync(folder + name, new_folder + name);
    */

var data_folder_name = "data";
var data_folder_path = __dirname + sep + data_folder_name;
var student_data_path = data_folder_path + sep + "students data.txt";
var teacher_data_path = data_folder_path + sep + "teachers data.txt";
var class_data_path = data_folder_path + sep + "classes data.txt";
var all_info = {
  student: [],
  teacher: [],
  classes: [],
};
console.log("classes:     " + all_info.classes.length + " classes");
console.log("teachers:    " + all_info.teacher.length + " teachers");
console.log("students:    " + all_info.student.length + " students");

// run
express_use(app);
express_get_post(app, __dirname, all_info);

app.listen(7000, () => {
  console.log("Server is running(port 7000)...");
});
