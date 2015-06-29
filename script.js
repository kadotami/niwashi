(function(){
  function $(id){
    return document.getElementById(id);
  }
  var url = location.href;
  var defaults = {
    "account_name": ""
  };

  chrome.storage.sync.get(
    defaults,
    function(items) {
      var account = url.split("/")[3].split("?")[0];
      if (account === items.account_name) {
        var ele = document.createElement("style");
        var str = document.createTextNode('#contributions-calendar rect[fill="#1e6823"] {fill: #eeeeee !important;}\
                                          #contributions-calendar rect[fill="#44a340"] {fill: #d6e685 !important;}\
                                          #contributions-calendar rect[fill="#8cc665"] {fill: #8cc665 !important;}\
                                          #contributions-calendar rect[fill="#d6e685"] {fill: #44a340 !important;}\
                                          #contributions-calendar rect[fill="#eeeeee"] {fill: #1e6823 !important;}\
                                          #contributions-calendar .contrib-legend ul li:first-child {background-color: #1e6823 !important;}\
                                          #contributions-calendar .contrib-legend ul li:nth-child(2){background-color: #44a340 !important;}\
                                          #contributions-calendar .contrib-legend ul li:nth-child(3){background-color: #8cc665 !important;}\
                                          #contributions-calendar .contrib-legend ul li:nth-child(4){background-color: #d6e685 !important;}\
                                          #contributions-calendar .contrib-legend ul li:nth-child(5){background-color: #eeeeee !important;}');
        ele.appendChild(str);
        document.body.appendChild(ele);
      }
    }
  );
})();
