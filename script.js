$(document).ready(function() {
    $(".imageVideo").on("mouseover", function(event) {
      this.play();
  
    }).on('mouseout', function(event) {
      this.pause();
  
    });
  })