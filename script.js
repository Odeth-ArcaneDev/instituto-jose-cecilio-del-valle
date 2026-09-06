// ==========================================
// 1. MENÚ PARA CELULAR
// ==========================================

const botonMenu = document.getElementById("botonMenu");
const menuPrincipal = document.getElementById("menuPrincipal");

if (botonMenu && menuPrincipal) {

    botonMenu.addEventListener("click", function () {
        menuPrincipal.classList.toggle("activo");
    });

    // Cerrar el menú cuando se selecciona una opción
    const enlacesMenu = menuPrincipal.querySelectorAll("a");

    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", function () {
            menuPrincipal.classList.remove("activo");
        });

    });
}


// ==========================================
// 2. INFORMACIÓN DE LAS CARRERAS
// ==========================================

const informacionCarreras = {

    informatica: {
        titulo: "Bachillerato Técnico Profesional en Informática",
        texto: "El Bachillerato Técnico Profesional en Informática prepara a los estudiantes en el uso de las tecnologías de la información y en el desarrollo de soluciones informáticas. ¿Qué se aprende? Programación, desarrollo de aplicaciones, herramientas informáticas, tecnologías de la información, bases de datos, mantenimiento y soporte de equipos y resolución de problemas tecnológicos. Habilidades que desarrolla: pensamiento lógico, creatividad, resolución de problemas, trabajo en equipo, organización y manejo de herramientas tecnológicas. Campo de desempeño: áreas relacionadas con informática, tecnología, soporte técnico, sistemas y soluciones digitales. Proyección: permite continuar estudios superiores relacionados con Informática, Ingeniería en Sistemas, Ciencias de la Computación, Desarrollo de Software y otras áreas tecnológicas.",
        imagen: "imagenes/informatica.png"
    },

    contaduria: {
        titulo: "Bachillerato Técnico Profesional en Contaduría y Finanzas",
        texto: "El Bachillerato Técnico Profesional en Contaduría y Finanzas prepara a los estudiantes para desenvolverse en actividades relacionadas con la contabilidad, las finanzas y la administración de recursos. ¿QUÉ SE APRENDE? Contabilidad, registros contables, matemáticas financieras, manejo de documentos, aspectos tributarios, administración financiera y uso de herramientas tecnológicas aplicadas al área contable. HABILIDADES QUE DESARROLLA: Organización, responsabilidad, análisis numérico, manejo de información financiera, toma de decisiones y uso de herramientas contables. CAMPO DE DESEMPEÑO: Áreas de contabilidad, administración y finanzas en empresas, instituciones y organizaciones, así como actividades relacionadas con el manejo y control de recursos económicos. PROYECCIÓN: Permite continuar estudios superiores relacionados con Contaduría Pública, Finanzas, Administración de Empresas, Economía y otras áreas afines.",
        imagen: "imagenes/finanzas.png"
    },

    hoteleria: {
        titulo: "Bachillerato Técnico Profesional en Administración Hotelera",
        texto: "El Bachillerato Técnico Profesional en Administración Hotelera y Turismo prepara a los estudiantes para desenvolverse en actividades relacionadas con la atención al cliente, la administración de establecimientos turísticos y hoteleros y la organización de servicios. ¿Qué se aprende? Atención y servicio al cliente, administración hotelera, organización de eventos, turismo, alojamiento, alimentos y bebidas, comunicación y herramientas tecnológicas aplicadas al sector turístico. Habilidades que desarrolla: responsabilidad, organización, comunicación, trabajo en equipo, creatividad, servicio al cliente y capacidad para resolver problemas. Campo de desempeño: hoteles, restaurantes, agencias de viajes, empresas turísticas, eventos, establecimientos de alojamiento y otros servicios relacionados con el turismo y la hospitalidad. Proyección: permite continuar estudios superiores relacionados con Administración Hotelera, Turismo, Administración de Empresas, Gastronomía y otras áreas relacionadas con el sector turístico y de servicios.",
        imagen: "imagenes/hoteleria.png"
    },

    nutricion: {
        titulo: "Bachillerato Técnico Profesional en Salud y Nutrición Comunitaria",
        texto: "El Bachillerato Técnico Profesional en Salud y Nutrición Comunitaria prepara a los estudiantes para participar en acciones de promoción de la salud, prevención de enfermedades y orientación nutricional dentro de las comunidades. ¿Qué se aprende? Educación para la salud, nutrición, alimentación saludable, prevención de enfermedades, higiene y saneamiento, salud maternoinfantil, promoción de estilos de vida saludables y participación en programas comunitarios de salud. Habilidades que desarrolla: responsabilidad, comunicación, trabajo comunitario, capacidad de orientación, organización, empatía y aplicación de conocimientos relacionados con la salud y la nutrición. Campo de desempeño: comunidades, centros y programas de salud, organizaciones sociales, instituciones y proyectos relacionados con la promoción de la salud, nutrición, prevención de enfermedades y bienestar comunitario. Proyección: permite continuar estudios superiores relacionados con Nutrición, Enfermería, Salud Pública, Medicina y otras áreas relacionadas con las ciencias de la salud.",
        imagen: "imagenes/nutricion.png"
    },

    ciencias: {
        titulo: "Bachillerato en Ciencias y Humanidades",
        texto: "El Bachillerato en Ciencias y Humanidades brinda una formación académica amplia que permite a los estudiantes desarrollar conocimientos científicos, humanísticos y culturales, preparándolos principalmente para continuar estudios en la educación superior. ¿Qué se aprende? Conocimientos relacionados con las ciencias naturales, matemáticas, comunicación, literatura, ciencias sociales, filosofía, historia, cultura y otras áreas del conocimiento. Habilidades que desarrolla: pensamiento crítico, análisis, comunicación oral y escrita, investigación, creatividad, razonamiento lógico y capacidad para comprender diferentes aspectos de la sociedad y el mundo. Campo de desempeño: permite desarrollar una formación académica general que puede servir como base para continuar estudios universitarios en diferentes áreas profesionales. Proyección: está orientado principalmente a la preparación para estudios superiores en carreras como Medicina, Derecho, Psicología, Educación, Ciencias Sociales, Ingeniería y otras áreas universitarias.",
        imagen: "imagenes/humanidades.png"
    },

    calidad: {
        titulo: "Bachillerato Técnico Profesional en Calidad y Producción",
        texto: "El Bachillerato Técnico Profesional en Calidad y Producción prepara a los estudiantes para participar en procesos relacionados con la producción, el control de calidad y la mejora de productos y servicios. ¿Qué se aprende? Principios de control de calidad, procesos de producción, seguridad e higiene, manejo de herramientas y equipos, organización del trabajo, control de procesos y aplicación de normas y procedimientos de calidad. Habilidades que desarrolla: responsabilidad, organización, trabajo en equipo, pensamiento analítico, resolución de problemas, atención al detalle y capacidad para identificar y mejorar procesos. Campo de desempeño: empresas industriales y productivas, áreas de control de calidad, producción, supervisión y procesos, así como organizaciones que requieran personal capacitado en gestión y control de calidad. Proyección: permite continuar estudios superiores relacionados con Ingeniería Industrial, Gestión de la Calidad, Administración de Empresas, Producción y otras áreas técnicas y profesionales relacionadas con los procesos productivos.",
        imagen: "imagenes/produccion.png"
    }

};


// ==========================================
// 3. VENTANA DE INFORMACIÓN DE CARRERAS
// ==========================================

const botonesCarrera = document.querySelectorAll(".boton-carrera");
const modalCarrera = document.getElementById("modalCarrera");
const cerrarModal = document.getElementById("cerrarModal");
const contenidoCarrera = document.getElementById("contenidoCarrera");


// Cuando se presiona "Ver información"
botonesCarrera.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const carreraSeleccionada = boton.dataset.carrera;

        const informacion = informacionCarreras[carreraSeleccionada];

        if (informacion) {

            contenidoCarrera.innerHTML = `
                <h2>${informacion.titulo}</h2>
                <p>${informacion.texto}</p>
            `;
            document.getElementById("imagenCarrera").src = informacion.imagen;

            modalCarrera.classList.add("activo");
        }

    });

});


// ==========================================
// 4. CERRAR LA VENTANA
// ==========================================

// Botón X
if (cerrarModal) {

    cerrarModal.addEventListener("click", function () {
        modalCarrera.classList.remove("activo");
    });

}


// Cerrar haciendo clic fuera de la ventana
if (modalCarrera) {

    modalCarrera.addEventListener("click", function (evento) {

        if (evento.target === modalCarrera) {
            modalCarrera.classList.remove("activo");
        }

    });

}


// Cerrar presionando la tecla ESC
document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        if (modalCarrera) {
            modalCarrera.classList.remove("activo");
        }

    }

});


// ==========================================
// 5. BOTÓN "VOLVER ARRIBA"
// ==========================================

const volverArriba = document.getElementById("volverArriba");

if (volverArriba) {

    // Mostrar el botón cuando bajamos por la página
    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            volverArriba.classList.add("visible");
        } else {
            volverArriba.classList.remove("visible");
        }

    });


    // Volver al inicio de la página
    volverArriba.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==========================================
// 6. DESPLAZAMIENTO SUAVE
// ==========================================

const enlacesInternos = document.querySelectorAll('a[href^="#"]');

enlacesInternos.forEach(function (enlace) {

    enlace.addEventListener("click", function (evento) {

        const destino = enlace.getAttribute("href");

        if (destino !== "#" && document.querySelector(destino)) {

            evento.preventDefault();

            document.querySelector(destino).scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==========================================
// FIN DEL SCRIPT
// ==========================================

console.log("Página del Instituto José Cecilio del Valle cargada correctamente.");