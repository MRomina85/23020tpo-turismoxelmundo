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
        <a href="./destinos.html" class="menu-link">Destinos<img src="iconos/flecha.svg" class="menu-arrow"></a>
 
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
        <a href="./contacto.html" class="menu-link">Contacto</a>
    </li>

</li>
</ul>
<div class="menu-hamburger">
<img src="./iconos/menu.svg" class="menu-img">
</div>
</section>
</nav>`
document.getElementById("cab").innerHTML=cad