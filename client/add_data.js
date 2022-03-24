function add_data_main_page() {
  show_message("請選擇要新增的資料類別。");
  show.innerHTML = document.getElementById("add_data_selection").outerHTML;
}

function fill_student_data() {
  show_message("請填寫學生資料。");
  show.innerHTML = document.getElementById("add_student").outerHTML;
}
