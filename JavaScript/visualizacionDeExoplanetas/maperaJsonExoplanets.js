//datos nasa

console.log("funciona");


function getJson(){
    console.log("dentro de la funcion");
    const xhttp = new XMLHttpRequest;
    xhttp.open('GET', 'planetas.json')
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let planets = JSON.parse(this.responseText);
            console.log(planets);
            const filterPlanets = planets.filter((planet) => planet.koi_prad !== null && planet.koi_disposition == "CONFIRMED")
            .map((planet) => ({
                identify : planet.kepid,
                name: planet.kepoi_name,
                radius : planet.koi_prad
            }))
            .sort((planet1, planet2) => planet1.radius > planet2.radius ? -1 : 1);
            console.log(filterPlanets);
        }
    }
}
getJson();


