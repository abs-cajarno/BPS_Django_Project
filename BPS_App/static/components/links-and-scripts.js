class LinksAndScripts extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!-- mobile responsive meta -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  
      <!-- ** Plugins Needed for the Project ** -->
      <!-- Bootstrap -->
      <link rel="stylesheet" href="plugins/bootstrap/bootstrap.min.css">
      <link rel="stylesheet" href="plugins/fontawesome/css/all.css">
  
      <!-- Main Stylesheet -->
      <link href="css/style.css" rel="stylesheet">
  
      <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
      <link rel="icon" href="images/favicon.png" type="image/x-icon">
          
      <!--JS Components-->
      <script src="components/desktop-side-menu.js" type="text/javascript" defer></script>
      <script src="components/mobile-nav.js" type="text/javascript" defer></script>
      <script src="components/footer.js" type="text/javascript" defer></script>
  
      <!-- All JS Files -->
      <script src="plugins/jQuery/jquery.min.js"></script>
      <script src="plugins/bootstrap/bootstrap.min.js"></script>
  
      <!-- Main Script -->
      <script src="js/script.js"></script>
  
      `;
    }
  }
  
  customElements.define('links-and-scripts', LinksAndScripts);