// let btn = document.querySelector(".btn");
// let heading = document.querySelector("h1");

// console.log(heading.textContent);

// console.log($("h1").text());

$(".btn").on("click", function () {
  //   $(".heading").css("color", "green");
  //   let styleObj = {
  //     color: "green",
  //     fontSize: "3rem",
  //     backgroundColor: "wheat",
  //   };

  //   $(".heading").css(styleObj);

  //   $(".heading").hide();
  //   $(".heading").show();
  $(".heading span").toggle(3000, function () {
    $(".heading span").css("color", "red").text("gulnur");
  });

  $("input").val("");

//   $(".heading").empty();
  $(".heading").remove();
});

$(".accordion-heading").on("click", function () {
  //   $(".accordion-content").fadeIn();
  //   $(".accordion-content").fadeOut();
  //   $(".accordion-content").fadeToggle("slow");
  //   $(".accordion-content").fadeToggle(2000);

  //   $(".accordion-content").fadeTo(2000, 0.2, function () {
  //     $(".accordion-content").css({ color: "red" });
  //   });

  //   $(".accordion-content").slideUp(2000, function () {
  //     $(".accordion-content").css({ color: "red" });
  //   });

  //   $(".accordion-content").slideToggle(2000).css({ color: "red" });
  $(".accordion-content")
    .slideUp(2000)
    .slideDown(1000)
    .css({ color: "red" })
    .hide();
});

$(".box").css({
  backgroundColor: "teal",
  width: "50px",
  height: "50px",
  marginTop: "20px",
  position: "relative",
});

$(".animate").on("click", function () {
  //   $(".box").animate({ left: "200px" }).animate({ top: "200px" });
  $(".box").animate(
    { left: "200px", width: "100px", height: "100px" },
    3000,
    function () {
      $(".box").animate(
        { top: "200px", width: "150px", height: "150px" },
        3000
      );
    }
  );
});

// $(".heading").text("Hello Gwp202");
// console.log($(".heading").text());
$(".heading").html("<em>Hello</em> lorem ipsum");
console.log($(".heading").html());

$("input").on("input", function (event) {
  console.log($("input").val());
  //   console.log(event.target.value);
});
