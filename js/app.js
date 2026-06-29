function mostrarNovedades(){

    let seccion = document.getElementById("novedades");

    seccion.style.display="block";

    seccion.scrollIntoView({
        behavior:"smooth"
    });

}