$(document).ready(function(){
  $("#one").on("click", function(){
    var n = $("#oneB");
    console.log(n);
    if (n.css("display") == "none"){
      n.css("display", "block");
    } else{
      n.css("display", "none");
    }
  });
});

$(document).ready(function(){
  $("#two").on("click", function(){
    var n = $("#twoB");
    console.log(n);
    if (n.css("display") == "none"){
      n.css("display", "block");
    } else{
      n.css("display", "none");
    }
  });
});

$(document).ready(function(){
  $("#three").on("click", function(){
    var n = $("#threeB");
    console.log(n);
    if (n.css("display") == "none"){
      n.css("display", "block");
    } else{
      n.css("display", "none");
    }
  });
});

$(document).ready(function(){
  $("#four").on("click", function(){
    var n = $("#fourB");
    console.log(n);
    if (n.css("display") == "none"){
      n.css("display", "block");
    } else{
      n.css("display", "none");
    }
  });
});

$(document).ready(function(){
  $("#five").on("click", function(){
    var n = $("#fiveB");
    console.log(n);
    if (n.css("display") == "none"){
      n.css("display", "block");
    } else{
      n.css("display", "none");
    }
  });
});

$(document).ready(function(){
  $("#six").on("click", function(){
    var n = $("#sixB");
    console.log(n);
    if (n.css("display") == "none"){
      n.css("display", "block");
    } else{
      n.css("display", "none");
    }
    $("html, body").animate({
                    scrollTop: $(
                      'html, body').get(0).scrollHeight
                }, 1000);
  });
});