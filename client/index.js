var classes;
var teacher;
var student;
var show = document.getElementById("show");

$(document).ready(function() {
    $.get('/get_class_list', function(class_data) {
        classes = class_data;
        console.log("classes:");
        console.log(classes);
    });
    $.get('/get_teacher_list', function(teacher_data) {
        teacher = teacher_data;
        console.log("teacher:");
        console.log(teacher);
    });
    $.get('/get_student_list', function(student_data) {
        student = student_data;
        console.log("student:");
        console.log(student);
    });
});

// function read_data() {
//     var com_lst_table = document.getElementById('com_list');

//     console.log('===========================================');
//     console.log("Reading data...");
//     info = [];
//     com_lst_table.innerHTML = "";
//     add_button_all_com(com_lst_table);

//     var count = 0;
//     for (var i = 0; i < file_list.length; i++) {
//         $.post('/get_file_info', { companyID: i, file_name: file_list[i] }, function (data) {
//             com[data.id] = data;
//             count++;
//             progress_bar(count, file_list.length);
//             if (count >= file_list.length) {
//                 for (var i = 0; i < file_list.length; i++)
//                     add_com_to_list(com_lst_table, com[i], i);
//                 console.log('Finished.');
//             }
//         });
//     }
// }

// function progress_bar(curr, total) {
//     var p = document.getElementById('progress');
//     var per = (100 * (curr / total)).toFixed(2);
//     if (curr < total)
//         p.innerHTML = "Progress: " + per + "% (" + curr + "/" + total + ")";
//     else
//         p.innerHTML = "Progress: 100% (Finished)";
// }

// function progress_bar_show_msg(str) {
//     document.getElementById('progress').innerHTML = str;
//     console.log(str);
// }

// function add_button_all_com(table) {
//     var row = table.insertRow(-1);
//     var cell = row.insertCell(0);
//     cell.innerHTML = '[Select all]';
//     cell.onclick = function () {
//         curr_company = "all";
//         console.log('===========================================');
//         progress_bar_show_msg('Select: all company');
//         document.getElementById('selected_com').innerHTML = 'all company';
//     }
// }

// function add_com_to_list(table, company, count) {
//     var row = table.insertRow(-1);
//     var cell = row.insertCell(0);
//     cell.innerHTML = '[' + count + '] ' + company.name;

//     cell.onclick = function () {
//         curr_company = company;
//         document.getElementById('selected_com').innerHTML = curr_company.name;
//         console.log('===========================================');
//         progress_bar_show_msg('Select: company ' + curr_company.name);
//         print_company_msg(company);
//     }
// }

// function search_company() {
//     var name = document.getElementById('search_com_name').value;
//     var msg = 'Search:';

//     console.log('===========================================');
//     console.log(msg);
//     if (data_is_read == 0) {
//         msg = 'Search company: Data is not read';
//         progress_bar_show_msg(msg);
//         return;
//     }
//     for (var i = 0; i < com.length; i++) {
//         if (com[i].name.toUpperCase() == name.toUpperCase())
//             break;
//     }
//     if (i == com.length) {
//         msg = 'Search: ' + name + ' not found';
//         progress_bar_show_msg(msg);
//     }
//     else {
//         curr_company = com[i];
//         document.getElementById('selected_com').innerHTML = curr_company.name;
//         progress_bar_show_msg(com[i].name + ' is found and selected.');
//         print_company_msg(curr_company);
//     }
// }

// function print_company_msg(company) {
//     console.log(company);
// }

// function update_result_area(str) {
//     document.getElementById('result_area').innerHTML = str;
// }

// function get_chart() {
//     var com_name = curr_company.name;

//     if (!com_name)
//         return 0;
//     console.log('curr_company: ' + com_name);
//     open_chart(com_name);
// }

// function open_chart(com_name) {
//     // var tab = document.createElement('a');

//     // tab.target = '_blank';
//     // tab.href = 'https://finance.yahoo.com/quote/' + com_name + '/chart';
//     // tab.click();
//     window.open('https://finance.yahoo.com/quote/' + com_name + '/chart', '');
// }

// function open_all_charts() {
//     var res = document.getElementById('result_area').innerHTML;
//     var list = res.split('\n');

//     if (list[list.length - 1] == '')
//         list.pop();
//     console.log(list);
//     res = document.getElementById('result');
//     res.innerHTML = '';
//     for (var i = 0; i < list.length; i++){
//         add_open_chart_button(res, list[i]);
//     }
// }

// function add_open_chart_button(res, com_name) {
//     var b = document.createElement('button');

//     b.onclick = () => {
//         open_chart(com_name);
//     };
//     b.innerHTML = com_name;
//     res.appendChild(b);
//     res.appendChild(document.createElement('br'));
// }