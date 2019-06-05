$(document).ready(function(){
  $(".forms").submit(function(event) {
    var inputName =
    $ ("input#full-name").val();
    var inputAddress =
    $ ("input#full-address").val();
    var inputJewelryType =
    $ ("input:radio[name=jewelry-type]:checked").val();
     $(".receipt").show();
    $(".name").text(inputName);
    $(".address").text(inputAddress);
    $(".jewelry").text(inputJewelryType);

    event.preventDefault ();
  });
});
