function $(id){
  return document.getElementById(id);
}
function save(){
  account_name = $("account_name").value
  if (account_name === '') {
    alert("名無しはダメですよ");
  } else {
    data = {
      "account_name": account_name
    }
    chrome.storage.sync.set(data, function(){});
    cfm = confirm(account_name+"さんでよろしいですか？\nよろしければ早速草を生やしに行きましょう！！");
    if (cfm === true) {
      location.href = "https://github.com/"+account_name;
    } else {
      $("account_name").value = "";
    }
  }
}

window.onload = function(){
  $("save_btn").addEventListener("click", save, false);
};