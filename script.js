document.addEventListener("DOMContentLoaded", () =>{
lista()
})
function aggiungi(){
    let name= document.getElementById("fname").value
    let surname = document.getElementById("lname").value
    //console.log(name)
   fetch("https://www.cosmocomunicazione.it/epicode/index.php?p=1", {
    method:"POST",
    Headers:{
        "content-type":"application/json"
    },
    body: JSON.stringify({
        nome:name,
        cognome:surname
        
    })
  }).then(response =>{
    lista()

  })
}
function lista (){
    fetch("https://www.cosmocomunicazione.it/epicode/index.php?s=1").then(response =>{
    //console.log(response)
    response.json().then(data =>{
        //console.log(data)
       let container= document.getElementById("lista")
       container.innerHTML=""
       data.Dati.forEach(element => {
        
        container.innerHTML += "<li>"+element.ID+" "+element.Nome+" "+element.Cognome+"</li>"
        
       });
    })

    })

}
