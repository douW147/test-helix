var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const headingInfo1 = {
  title: "Targeted Panels",
  content1: "Panels are often used in clinical settings because they’re low cost and provide high quality coverage of specific, pre-defined genomic regions of interest. While useful in certain settings, such assays are limited by their narrow focus.",
  content2: "Panels are often used in clinical settings because they’re low cost and provide high quality coverage of specific, pre-defined genomic regions of interest. While useful in certain settings, such assays are limited by their narrow focus.",
  image: "./images/Oval.png"
};
const headingInfo2 = {
  title: "Whole Exome Sequencing",
  content1: "Panels are often used in clinical settings because they’re low cost and provide high quality coverage of specific, pre-defined genomic regions of interest. While useful in certain settings, such assays are limited by their narrow focus.",
  content2: "Panels are often used in clinical settings because they’re low cost and provide high quality coverage of specific, pre-defined genomic regions of interest. While useful in certain settings, such assays are limited by their narrow focus.",
  image: "./images/Oval2.png"
};
const headingInfo3 = {
  title: "IsWGS and Microarrays",
  content1: "Panels are often used in clinical settings because they’re low cost and provide high quality coverage of specific, pre-defined genomic regions of interest. While useful in certain settings, such assays are limited by their narrow focus.",
  content2: "Panels are often used in clinical settings because they’re low cost and provide high quality coverage of specific, pre-defined genomic regions of interest. While useful in certain settings, such assays are limited by their narrow focus.",
  image: "./images/Oval3.png"
};

const collapseImages = {
  image1: "./images/1.png",
  image2: "./images/2.png",
  image3: "./images/3.png"
}

function setText(element, content) {
  $(element).animate({opacity: "0"}, 1000, function(){
    $(element).text(content).animate({opacity: "1"}, 1000)
  });
}

$("#heading-button-1").click(function() {
  if (!$("#heading-button-1").attr('class').includes("active")){
    $(".text-w-tabs-desktop__heading").removeClass("active")
    $("#heading-button-1").addClass("active")
    $("#tabsImage").animate({opacity: "0"}, 1000, function(){
      $("#tabsImage").attr("src", headingInfo1.image).animate({opacity: "1"}, 1000)
    });
    setText("#tabsHeading", headingInfo1.title);
    setText("#tabsContent1", headingInfo1.content1);
    setText("#tabsContent2", headingInfo1.content2);
  }
});

$("#heading-button-2").click(function() {
  if (!$("#heading-button-2").attr('class').includes("active")){
    $(".text-w-tabs-desktop__heading").removeClass("active")
    $("#heading-button-2").addClass("active")
    $("#tabsImage").animate({opacity: "0"}, 1000, function(){
      $("#tabsImage").attr("src", headingInfo2.image).animate({opacity: "1"}, 1000)
    });
    setText("#tabsHeading", headingInfo2.title);
    setText("#tabsContent1", headingInfo2.content1);
    setText("#tabsContent2", headingInfo2.content2);
  }
});

$("#heading-button-3").click(function() {
  if (!$("#heading-button-3").attr('class').includes("active")){
    $(".text-w-tabs-desktop__heading").removeClass("active")
    $("#heading-button-3").addClass("active")
    console.log("here2");
    $("#tabsImage").animate({opacity: "0"}, 1000, function(){
      $("#tabsImage").attr("src", headingInfo3.image).animate({opacity: "1"}, 1000)
    });
    setText("#tabsHeading", headingInfo3.title);
    setText("#tabsContent1", headingInfo3.content1);
    setText("#tabsContent2", headingInfo3.content2);
  }
})

$("#collapse-button-1").click(function() {
  if (!$("#collapse-button-1").attr('class').includes("active")){
    $(".next-button").removeClass("next-button-active")
    $(".next-button").removeClass("active")
    $("#collapse-button-1").addClass("next-button-active")
    $("#collapse-button-1").addClass("active")
    $("#collapse-image").animate({opacity: "0"}, 1000, function(){
      $("#collapse-image").attr("src", collapseImages.image1).animate({opacity: "1"}, 1000)
    });
  } else{
    $(".next-button").removeClass("next-button-active")
    $("#collapse-button-1").removeClass("active")
  }
})
$("#collapse-button-2").click(function() {
  $(".next-button").removeClass("next-button-active")
  if (!$("#collapse-button-2").attr('class').includes("active")){
    $(".next-button").removeClass("next-button-active")
    $(".next-button").removeClass("active")
    $("#collapse-button-2").addClass("next-button-active")
    $("#collapse-button-2").addClass("active")
    $("#collapse-image").animate({opacity: "0"}, 1000, function(){
      $("#collapse-image").attr("src", collapseImages.image2).animate({opacity: "1"}, 1000)
    });
  } else {
    $(".next-button").removeClass("next-button-active")
    $("#collapse-button-2").removeClass("active")
  }
})
$("#collapse-button-3").click(function() {
  $(".next-button").removeClass("next-button-active")
  if (!$("#collapse-button-3").attr('class').includes("active")){
    $(".next-button").removeClass("next-button-active")
    $(".next-button").removeClass("active")
    $("#collapse-button-3").addClass("next-button-active")
    $("#collapse-button-3").addClass("active")
    $("#collapse-image").animate({opacity: "0"}, 1000, function(){
      $("#collapse-image").attr("src", collapseImages.image3).animate({opacity: "1"}, 1000)
    });
  } else {
    $(".next-button").removeClass("next-button-active")
    $("#collapse-button-3").removeClass("active")
  }
})