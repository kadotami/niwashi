function $(id){
  return document.getElementById(id);
}
// function init(){
//   $("account_name").value = localStorage["account_name"] ? localStorage["account_name"] : "";
// }
function save(){
  data = {
    "account_name": $("account_name").value
  }
  chrome.storage.sync.set(data, function(){});
  console.log($("account_name").value)
  // localStorage["account_name"] = $("account_name").value;
}

window.onload = function(){
  $("save_btn").addEventListener("click", save, false);
};