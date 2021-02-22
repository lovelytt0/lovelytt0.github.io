function setImage(select){
  var image = document.getElementsByName("image-swap")[0];
  image.src = select.options[select.selectedIndex].value;
}

function setHTML(select){
  var html = document.getElementsByName("html-swap")[0];
  html.src = select.options[select.selectedIndex].value;
}
