function search_page() {
  show_message("請輸入姓名或課堂名稱。");
  show.innerHTML = document.getElementById("search_data").outerHTML;
}

function not_fonud_message() {
  show_message("查無資料。");
}
