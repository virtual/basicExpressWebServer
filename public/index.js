$(function(){
  var setImage = function(url) {
    $("#giphy").attr("src", url);
  };
  $.get("/imageurl", (data)=>{
    setImage(data);
  });
  $("#buttonRefresh button").click(()=>{
    console.log("clicked!");
    $.get("/imageurl/refresh", (data)=>{
      setImage(data);
    });
  });
});