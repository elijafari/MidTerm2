var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function save(){
document.addEventListener("click", e => {
    e.preventDefault()
    document.getElementById('save').src=`starPurple.png`
})
}

function initMap() {
    // The location of Uluru
    const uluru = { lat: 49.263950, lng: -122.876442 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("googleMap"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  