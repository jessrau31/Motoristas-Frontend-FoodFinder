// Detectar cuando se hace clic en un elemento del menú (no funcinó :( )
document.getElementById("item1").addEventListener("click", function() {
    // Actualizar el color del círculo correspondiente
    document.getElementById("circle1").style.backgroundColor = "red";
  });
  
  document.getElementById("item2").addEventListener("click", function() {
    document.getElementById("circle2").style.backgroundColor = "red";
  });
  
  document.getElementById("item3").addEventListener("click", function() {
    document.getElementById("circle3").style.backgroundColor = "red";
  });
  
  // Detectar cuando se desplaza hacia un elemento del menú
  window.addEventListener("scroll", function() {
    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
    
    // Si el elemento está visible en la pantalla, actualizar el color del círculo correspondiente
    if (isElementVisible(item1)) {
      document.getElementById("circle1").style.backgroundColor = "red";
    } else {
      document.getElementById("circle1").style.backgroundColor = "gray";
    }
    
    if (isElementVisible(item2)) {
      document.getElementById("circle2").style.backgroundColor = "red";
    } else {
      document.getElementById("circle2").style.backgroundColor = "gray";
    }
    
    if (isElementVisible(item3)) {
      document.getElementById("circle3").style.backgroundColor = "red";
    } else {
      document.getElementById("circle3").style.backgroundColor = "gray";
    }
  });
  
  // Función para determinar si un elemento está visible en la pantalla
  function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  