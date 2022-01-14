$(document).ready(function(){
  $(".coding").click(function(){
    event.preventDefault(); 
    const selectedCoding =$(this).attr("href");
    console.log(selectedCoding);
    if (selectedCoding === "Ruby")
    {
        $("div.JavaScripts").hide();
        $("div.Python").hide();
        $("div.Ruby").hide();
    }
  });
});