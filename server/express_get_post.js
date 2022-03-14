const express = require('express');
const bodyParser = require('body-parser');
const read_data = require('../server/read_data');

// function express_get_post(app, main_dir, info){
//     app.get('/', function (req, res) {
//         res.sendFile('./client/index.html', { root: main_dir });
//     });

//     app.get('/get_company_name_list', function (req, res) {
//         res.send(info.company_name_list);
//         res.end();
//     });

//     app.get('/get_file_name_list', function (req, res) {
//         res.send(info.file_name_list);
//         res.end();
//     });

//     app.post('/get_file_info', function (req, res) {
//         var id = req.body.companyID;
//         var file_name = req.body.file_name;
//         var company_msg = read_data.read_file_to_obj(info.data_folder_path, file_name);
//         company_msg.id = id;
//         res.send(company_msg);
//         res.end();
//     });
// }

function express_get_post(app, main_dir, info){
    app.get('/get_class_list', function (req, res) {
        res.send(info.classes);
        res.end();
    });
    app.get('/get_teacher_list', function (req, res) {
        res.send(info.teacher);
        res.end();
    });
    app.get('/get_student_list', function (req, res) {
        res.send(info.student);
        res.end();
    });
}

module.exports = express_get_post;