let input = $('search');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  responseContainer.innerHTML = '';
  searchForText = searchFiled.value;
  getInformation() ;
});


function getInformation() {
  const informationRequest = new XMLHttpRequest();

}
