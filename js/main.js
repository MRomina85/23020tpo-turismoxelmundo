let cad=`<nav class="menu">
<section class="menu-container">
    <h1 class="menu-logo">Turismo x el mundo</h1>
    

    <ul class="menu-links">
    <li class="menu-item">
        <a href="index.html" class="menu-link">Home</a>
    </li>
    <ul class="menu-links">
        <li class="menu-item">
            <a href="#quienes-somos" class="menu-link">Quienes somos</a>
        </li>
    </ul>
    <li class="menu-item menu-item--show">
        <a href="#destinos" class="menu-link">Destinos<img src="iconos/flecha.svg" class="menu-arrow"></a>
 
        <ul class="menu-nesting">
        <li class="menu-inside">
            <a href="europa.html" class="menu-link menu-link-inside">Europa</a>
        </li>
        <li class="menu-inside">
            <a href="america.html" class="menu-link menu-link-inside">América</a>
        </li>
        <li class="menu-inside">
            <a href="africa.html" class="menu-link menu-link-inside">Africa</a>
        </li>
        <li class="menu-inside">
            <a href="asia.html" class="menu-link menu-link-inside">Asia</a>
        </li>
        </ul>
    </li>
    <li class="menu-item">
    <a href="./hoteles.html" class="menu-link">Hoteles</a>
</li>
        <li class="menu-item">
        <a href="./contacto.html" class="menu-link">Contacto</a>
    </li>

</li>
</ul>
<div class="menu-hamburger">
<img src="./iconos/menu.svg" class="menu-img">
</div>
</section>
</nav>`

let footer=`<div class="pie-pagina">             
<div class="grupo-1">
<div class="box">
    <h1 class="box-logo">Turismo x el mundo</h1>
</div>
<div class="box">
    <h2>SOBRE NOSOTROS</h2>
    <p>Turismo x el mundo
        Empresa de Viajes y Turismo
        E.V y T. Leg.0000  Disp. 0000 <br>
        Av. Rivadavia 2002 45°piso

        Ciudad Autónoma de Buenos Aires
        
        Email: info@turismoxelmundo.tur.ar</p>
</div>
<div class="box">
    <h2>SEGUINOS EN</h2>
    <div class="red-social">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-youtube"></a>

    </div>
</div>
</div> 
<div class="grupo-2">
<small>&copy; 2023 <b>Turismo x el mundo</b> -Todos los derechos reservados-</small>

</div>
</div>`
document.getElementById("cab").innerHTML=cad
document.getElementById("pie").innerHTML=footer