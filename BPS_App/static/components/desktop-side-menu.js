class DesktopSideMenu extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
    <!-- start of sidenav -->
    <aside><div class="sidenav position-sticky d-flex flex-column justify-content-between">
        <a class="navbar-brand" href="index.html" class="logo">
            <picture>
                <source media="(max-width: 767px)" srcset="static/images/broximo-logo-light.png" >
                <source media="(min-width: 767px)" srcset="static/images/broximo-logo.png">
                <img src="static/images/broximo-logo.png" alt="alt text for pic">
            </picture>
        </a>
        <!-- end of navbar-brand -->
    
        <div class="navbar navbar-dark my-4 p-0 font-primary">
            <ul class="navbar-nav w-100">
                <li class="nav-item ">
                    <a class="nav-link text-white px-0 pt-0" href="index.html">Home</a>
                </li>
                <li class="nav-item active accordion">
                    <a class="nav-link text-white" href="#!" role="button" data-toggle="collapse" data-target="#steed-drop-menu" aria-expanded="false" aria-controls="steed-drop-menu">Prestige Steeds</a>
                    <div id="steed-drop-menu" class="drop-menu collapse">
                        <a class="d-block " href="current-prestige-steeds">Current</a>
                        <a class="d-block " href="rehomed-prestige-steeds">Rehomed</a>
                        <a class="d-block " href="prestige-steed-detail">Prestige Steed Details</a>
                    </div>
                </li>

                <li class="nav-item ">
                    <a class="nav-link text-white px-0" href="/contact">Contact Us/Sell your bike</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link text-white px-0" href="about">About</a>
                </li>
            </ul>
        </div>
        <!-- end of navbar -->
    
        <ul class="list-inline nml-2">
            <li class="list-inline-item">
                <a href="https://www.facebook.com/Broxim0/" target="_blank" class="text-white text-red-onHover p-2">
                    <span class="fab fa-facebook-f"></span>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="https://www.instagram.com/broxim0/" target="_blank" class="text-white text-red-onHover p-2">
                    <span class="fab fa-instagram"></span>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="https://www.ebay.co.uk/usr/abdhuss" target="_blank"  class="text-white text-red-onHover p-2">
                    <span class="fa fa-shopping-cart"></span>
                </a>
            </li>

        </ul>
        <!-- end of social-links -->
    </div></aside>
    <!-- end of sidenav -->
        <div class="main-content">
    
    `;
  }
}

customElements.define('desktop-side-menu', DesktopSideMenu);