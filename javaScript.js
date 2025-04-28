/*------------------- BARRA NAVEGACIÓN -----------------------------*/
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function App() {}

window.onload = function (event) {
  var app = new App();
  window.app = app;
};

// Menú hamburguesa funcional
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// Ocultar menú desplegado al hacer scroll hacia abajo
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;
  const navLinks = document.getElementById("nav-links");

  // Si el menú está abierto y el usuario hace scroll hacia abajo, lo cerramos
  if (currentScroll > lastScroll && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

/*------------------- CARRUSEL -----------------------------*/
function App() {}
const app = new App();

// Contenido dinámico de tarjetas
const tarjetas = [
  {
    titulo: "¡Declaración anual!",
    texto:
      "Este mes es el momento de presentar tu Declaración Anual. Asegúrate de cumplir con este requisito para evitar multas y aprovechar posibles devoluciones.",
    img: "img/img-publicaciones/formas-de-pago-sat.jpg",
  },
  {
    titulo: "Asesoría fiscal",
    texto:
      "Obtén orientación profesional para maximizar tus beneficios fiscales.",
    img: "img/img-publicaciones/fiscal.png",
  },
  {
    titulo: "Contabilidad general",
    texto: "Lleva tus finanzas al día con nuestros expertos contables.",
    img: "img/img-publicaciones/images.jpg",
  },
  {
    titulo: "Auditorías internas",
    texto: "Diagnóstico claro y transparente de tu situación contable.",
    img: "img/img-publicaciones/auditoria.png",
  },
];

// Inyectar tarjetas en el carrusel
window.addEventListener("load", () => {
  const track = document.getElementById("track");

  tarjetas.forEach(({ titulo, texto, img }) => {
    const tarjetaHTML = `
      <div class="carrusel">
        <picture class="contenedor-img">
          <img src="${img}" alt="${titulo}" />
        </picture>
        <div class="texto">
          <h3>${titulo}</h3>
          <p>${texto}</p>
        </div>
      </div>
    `;
    track.innerHTML += tarjetaHTML;

    iniciarCarruselAutomatico();
  });

  // Ajustar ancho dinámico del track
  const cards = track.querySelectorAll(".carrusel");
  track.style.width = `${100 * cards.length}%`;
});

// Movimiento de carrusel
App.prototype.processingButton = function (event) {
  const btn = event.currentTarget;
  const carruselList = btn.parentNode;
  const track = carruselList.querySelector("#track");
  const carruselWidth = carruselList.offsetWidth;

  const leftActual = parseFloat(track.style.left || "0") || 0;

  if (btn.dataset.button === "button-prev") {
    if (leftActual < 0) {
      track.style.left = `${leftActual + carruselWidth}px`;
    }
  } else {
    const maxLeft = -(track.scrollWidth - carruselList.offsetWidth);
    if (leftActual > maxLeft) {
      track.style.left = `${leftActual - carruselWidth}px`;
    }
  }
};

// Movimiento automático del carrusel
function iniciarCarruselAutomatico() {
  const carruselList = document.querySelector(".carrusel-list");
  const track = document.getElementById("track");
  const carruselWidth = carruselList.offsetWidth;
  const totalCards = tarjetas.length;

  let currentIndex = 0;

setInterval(() => {
  currentIndex++;

  if (currentIndex >= tarjetas.length) {
    currentIndex = 0; // Regresa al inicio
  }

  track.style.left = `-${currentIndex * carruselWidth}px`;
}, 5000);

}

/*------------------- POLITICAS PRIVACIDAD -----------------------------*/
// Validar que se acepte el aviso de privacidad antes de enviar el formulario
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#formulario form");
  const checkbox = document.getElementById("politicas");

  if (formulario && checkbox) {
    formulario.addEventListener("submit", (e) => {
      if (!checkbox.checked) {
        e.preventDefault();
        alert("Debes aceptar las Políticas de Privacidad antes de enviar el formulario.");
        checkbox.focus();
      }
    });
  }
});

function mostrarPoliticas(event) {
  event.preventDefault();

  fetch('politicasPrivacidad.html')
    .then(response => response.text())
    .then(data => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data;

      const mainContent = tempDiv.querySelector('.main-privacidad');
      document.getElementById('contenido-politicas').innerHTML = mainContent.innerHTML;
      document.getElementById('modal-politicas').classList.remove('hidden');
    })
    .catch(error => {
      console.error("Error al cargar las políticas:", error);
      alert("No se pudieron cargar las políticas de privacidad.");
    });
}

function cerrarModal() {
  document.getElementById('modal-politicas').classList.add('hidden');
}



/*------------------- BOTÓN WHATSAPP -----------------------------*/

const btnWhatsapp = document.getElementById("whatsapp-float");
const menuWhatsapp = document.getElementById("whatsapp-menu");

btnWhatsapp.addEventListener("click", () => {
  menuWhatsapp.style.display =
    menuWhatsapp.style.display === "block" ? "none" : "block";
});

// Cierra el menú si haces clic fuera de él
document.addEventListener("click", (e) => {
  if (!btnWhatsapp.contains(e.target) && !menuWhatsapp.contains(e.target)) {
    menuWhatsapp.style.display = "none";
  }
});

// OCULTAR BOTÓN DE WHATSAPP CUANDO SE LLEGA AL FOOTER
const whatsappButton = document.getElementById("whatsapp-float");
const contactoSection = document.getElementById("contactos");

function toggleWhatsappVisibility() {
  const footerTop = contactoSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop <= windowHeight - 100) {
    whatsappButton.style.display = "none";
  } else {
    whatsappButton.style.display = "flex";
  }
}

window.addEventListener("scroll", toggleWhatsappVisibility);
window.addEventListener("resize", toggleWhatsappVisibility);

/*--------------- EFECTO FLIP EN MÓVIL CORREGIDO ---------------*/
document.addEventListener("DOMContentLoaded", () => {
  const tarjetasInner = document.querySelectorAll(".tarjeta-inner");

  tarjetasInner.forEach((tarjeta) => {
    let touchTimer;
    let hasFlipped = false; // Para saber si realmente se volteó

    tarjeta.addEventListener("touchstart", () => {
      touchTimer = setTimeout(() => {
        tarjeta.classList.add("touch-active");
        hasFlipped = true;
      }, 150); // pequeño delay para distinguir entre tap y hold
    });

    tarjeta.addEventListener("touchend", () => {
      clearTimeout(touchTimer);
      if (hasFlipped) {
        tarjeta.classList.remove("touch-active");
        hasFlipped = false;
      }
    });

    tarjeta.addEventListener("touchcancel", () => {
      clearTimeout(touchTimer);
      tarjeta.classList.remove("touch-active");
      hasFlipped = false;
    });

    tarjeta.addEventListener("click", () => {
      // Si fue un click rápido (sin touchstart largo), removemos también
      tarjeta.classList.remove("touch-active");
    });

    tarjeta.addEventListener("mousedown", () => {
      tarjeta.classList.add("touch-active");
    });

    tarjeta.addEventListener("mouseup", () => {
      tarjeta.classList.remove("touch-active");
    });

    tarjeta.addEventListener("mouseleave", () => {
      tarjeta.classList.remove("touch-active");
    });
  });
});


// ---- ANIMACIÓN SUAVE AL ENTRAR EN PANTALLA ----
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -20px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      } else {
        entry.target.classList.remove("appear");
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// ---- ANIMACIÓN SUAVE AL ENTRAR TÍTULOS ----
document.addEventListener("DOMContentLoaded", () => {
  const titulos = document.querySelectorAll(".titulo-animado");

  const tituloObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      } else {
        entry.target.classList.remove("appear");
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -20px 0px"
  });

  titulos.forEach(titulo => {
    tituloObserver.observe(titulo);
  });
});



