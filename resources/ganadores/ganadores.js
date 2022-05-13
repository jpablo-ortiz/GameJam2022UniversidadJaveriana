const feed1er = "Me pareció una muy buena de level design, implementación de tema y de idea para un Game Jam... el visual es muy bonito y en general me parece bastante intuitivo (después de morir unas cuantas veces...) único detalle son toques finales como... no morir por un rayo que atravesó la pared... de resto una gran entrega para 2 días."
const feed2do = "Muy buen uso de las herramientas base que presta Unity y buena ampliación del nivel para una experiencia as larga. Sin embargo, no se evidencia realmente la temática dentro del juego, prácticamente se usó la plantilla y se cambiaron los assets base lo cual está bien pero estoy seguro que pueden hacer mucho más."
const feed3er = "Me parece una idea sencilla y adecuada para un game jam tan corto (Literalmente 2 días) se evidencia la idea de recolectar comida. En términos de jugabilidad solo es extraño que haya ciertas comidas a las que no pueda llegar. Aunque la idea es sencilla no quiere decir que el impacto que te genere lo sea también siento que se centraron mucho en implementar algo plausible para los 2 días más que algo impactante sin embargo... pequeños detalles hacen que el impacto aumente como, por ejemplo: que te disparen cosas o que no solo caigan frutas si no bombas o cualquier otra cosa que le añada dinamismo al juego."
const feed4to = "El visual es perfecto la jugabilidad no tanto me parece atractivo solo por cómo se ve y se encargaron en hacer al ambiente, al personaje y los enemigos como si en verdad fueran del mismo juego y no assets por separados... En términos de jugabilidad esperaba más... aunque un combate 3d es de ese tipo de cosas que suelen ser demasiado complicadas para tan poco tiempo a menos de que la tengan muy clara... Siento que ese fue el factor limitante en términos de jugabilidad. "
const feed5to = "Realmente este no lo pude jugar porque no me corrió el Python así que no sé qué decir."
const feed6to = "No sé qué teclas hundir para jugar el juego y si no me las dicen tampoco puedo deducirlas" +
"Al no saber que hundir me quedo estancado después de la primera nota. Aun así la idea de un infinite runner me parece perfecta para 2 días y me gusto bastante el uso de los assets de fondo, piso y las notas." +
"Ideas personales que pudieron ser mejores: Hacer el juego divertido (Poner en posiciones distintas a las notas o tener que recoger una cantidad de notas en específico para ganar cualquier cosa como... darle un objetivo que seguir o jugar un poco con el level design para que no fuera solo correr.";

let btn1er = document.getElementById("1er")
let btn1erc = document.getElementById("1ercel")
let btn2do = document.getElementById("2do")
let btn2doc = document.getElementById("2docel")
let btn3er = document.getElementById("3er")
let btn3erc = document.getElementById("3ercel")
let btn4to = document.getElementById("4to")
let btn5to = document.getElementById("5to")
let btn6to = document.getElementById("6to")

btn1er.onclick = function(){
    let feedEquipo = document.getElementById("feedEquipo").innerHTML = feed1er;
}

btn1erc.onclick = function(){
    let feedEquipo = document.getElementById("feedEquipo").innerHTML = feed1er;
}

btn2do.onclick = function(){
    let feedEquipo = document.getElementById("feedEquipo").innerHTML = feed2do;
}

btn2doc.onclick = function(){
    let feedEquipo = document.getElementById("feedEquipo").innerHTML = feed2do;
}

btn3er.onclick = function(){
    let feedEquipo = document.getElementById("feedEquipo").innerHTML = feed3er;
}

btn3erc.onclick = function(){
    let feedEquipo = document.getElementById("feedEquipo").innerHTML = feed3er;
}

btn4to.onclick = function(){
    let feedEquipo = document.getElementById("feedEquipo").innerHTML = feed4to;
}

btn5to.onclick = function(){
    let feedEquipo = document.getElementById("feedEquipo").innerHTML = feed5to;
}

btn6to.onclick = function(){
    let feedEquipo = document.getElementById("feedEquipo").innerHTML = feed6to;
}

