function lukeSkywalker (){
    fetch("https://swapi.co/api/people/1/")
      .then(response => response.json())
      .then(myJson => {
        document.getElementById("luke").innerHTML =
          "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
      })
}
   
function darthVader (){
    fetch("https://swapi.co/api/people/4")
      .then(response => response.json())
      .then(myJson => {
        document.getElementById("darth").innerHTML =
          "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
      })
}

lukeSkywalker()
