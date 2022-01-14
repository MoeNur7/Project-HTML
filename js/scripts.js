$(document).ready(function(){
  $(".coding").click(function(){
    event.preventDefault(); 
    const selectedCoding =$(this).attr("href");
    console.log(selectedCoding);
    
  }
}