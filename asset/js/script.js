var quickAccess = document.getElementById('quickAccess');
var language = document.getElementById('language');
var quickAccess = document.getElementById('quickAccess');
var language = document.getElementById('language');
var profEdu = document.getElementById('profEdu');
var diplomat = document.getElementById('diplomat');
var certifications = document.getElementById('certifications');
var languages = document.getElementById('languages');
var abilities = document.getElementById('abilities');
var progLang = document.getElementById('progLang');
var jobExp = document.getElementById('jobExp');
var contact = document.getElementById('contact');
var profileP = document.getElementById('profileP');
var profileCardP = document.getElementById('profileCardP');
var profEduP = document.getElementById('profEduP');
var profEduCardP = document.getElementById('profEduCardP');
var consStudies = document.getElementById('consStudies');
var consDegree = document.getElementById('consDegree');
var diplomatP = document.getElementById('diplomatP');
var diplomatCardP = document.getElementById('diplomatCardP');
var certificationsP = document.getElementById('certificationsP');
var languagesP = document.getElementById('languagesP');
var esP = document.getElementById('esP');
var enP = document.getElementById('enP');
var frP = document.getElementById('frP');
var progLangP = document.getElementById('progLangP');
var abilitiesP = document.getElementById('abilitiesP');
var jobExpP = document.getElementById('jobExpP');
var jobExpCardP1 = document.getElementById('jobExpCardP1');
var jobExpCardP2 = document.getElementById('jobExpCardP2');
var jobExpCardP3 = document.getElementById('jobExpCardP3');
var jobExpCardP4 = document.getElementById('jobExpCardP4');
var letterP = document.getElementById('letterP');
var imasdCardP1 = document.getElementById('imasdCardP1');
var imasdCardP2 = document.getElementById('imasdCardP2');
var imasdCardP3 = document.getElementById('imasdCardP3');
var imasdCardP4 = document.getElementById('imasdCardP4');
var imasdCardP5 = document.getElementById('imasdCardP5');
var imasdCardP6 = document.getElementById('imasdCardP6');
var kapitalCardP1 = document.getElementById('kapitalCardP1');
var kapitalCardP2 = document.getElementById('kapitalCardP2');
var kapitalCardP3 = document.getElementById('kapitalCardP3');
var contactP = document.getElementById('contactP');
var downloadCV = document.getElementById('downloadCV');
var hereP = document.getElementById('hereP');

function changeToEn() {
    quickAccess.innerText = "Quick Access";
    language.innerText = "Language";
    profEdu.innerText = "Profesional Education";
    diplomat.innerText = "Diplomats";
    certifications.innerText = "Certifications";
    languages.innerText = "Languages";
    abilities.innerText = "Abilities";
    progLang.innerText = "Programing Languages";
    jobExp.innerText = "Job Experience";
    contact.innerText = "Contact";
    profileP.innerText = "PROFILE";
    profileCardP.innerText = "In August 2016 I started my Bachelor's Degree in Software Engineering and Computer Systems at DeLaSalle Bajío University, in the city of León, Gto., which I finished in June 2020; in December of the same year, I took the CENEVAL exam, in which I obtained a Satisfactory result. I am currently waiting for my Professional Degree, due to the procedures involved in this process. In February 2021, I started a Diploma in Design and Programming of Apps taught by the Universidad Anáhuac, which I finished in October 2021. I also took a Certification in Mobile Application Development from Google. I have an advanced command of English, and basic command of French. The latter I studied in an intensive one-month course in the city of Montreal, Canada, in June 2019.";
    profEduP.innerText = "PROFESIONAL EDUCATION";
    profEduCardP.innerText = "Universidad De LaSalle Bajío, León, Guanajuato Software Engineering and Computer Systems 2016-2020";
    consStudies.innerText = "Proof of University Education";
    consDegree.innerText = "Certificate of Completion";
    diplomatP.innerText = "DIPLOMA";
    diplomatCardP.innerText = "Universidad Anáhuac Apps Design and Programming 2021-2021";
    certificationsP.innerText = "CERTIFICATIONS";
    languagesP.innerText = "LANGUAGES";
    esP.innerText = "Spanish - Native Language";
    enP.innerText = "English - Advanced";
    frP.innerText = "French - Basic";
    progLangP.innerText = "PROGRAMING LANGUAGES";
    abilitiesP.innerText = "ABILITIES";
    jobExpP.innerText = "JOB EXPERIENCE";
    jobExpCardP1.innerText = "1 year as Developer Jr Swift, developing Mobile Apps with SwiftUI at";
    jobExpCardP2.innerText = "• The first development was for a private company, which developed a solution for the control and management of appointments in which the people who were going to an appointment register the items with which they were going to arrive, such as computer equipment, tools, etc.";
    jobExpCardP3.innerText = "• In the second development was for Forte, the development was the mobile application for a marketplace that already had a website, and sought to reach the mobile audience.";
    jobExpCardP4.innerText = "In both developments we used Git as Version Controller, connections to APIs, use of third party libraries with Swift Package Manager, CocosPods, using the new SwiftUI framework in Swift 5.0 and using the XCode 11 Betas, in terms of design pattern we used MVVM.";
    letterP.innerText = "Letter of Recommendation";
    imasdCardP1.innerText = "1 year and 7 months as Jr Developer, developing mainly mobile applications using Swift and SwiftUI in 3 projects, and providing Frontend support using ReactJS in one project at ";
    imasdCardP2.innerText = "• First project for a private company: developed a solution for contracting banking services (Credits, Loans, etc.), showing dynamic forms as Frontend loaded from a Backend. In a 4th Phase I supported the creation of various Endpoints in a Web Portal, also contributing with ReactJS and creating Stored Procedures using PostgreSQL.";
    imasdCardP3.innerText = "• Second project for a private company: developed a solution for managing health appointments, providing telemedicine and psychological care via video calls and in-app messages, with subscription payment plans. I supported a senior developer for app-wide refinement.";
    imasdCardP4.innerText = "• Third project for a state government: developed a Web Portal to manage an Access Point network in a city for creating geo-fences, sending notifications, and generating reports. I supported a senior developer in module implementation and bug fixing.";
    imasdCardP5.innerText = "• Fourth project for a government: continued development of a public transportation pass control app, featuring route visualization, smart card management, credit top-up via PayPal, Mercado Libre, Visa and MasterCard, ticket generation, and personalized notifications.";
    imasdCardP6.innerText = "All projects: Git in Azure for version control, API connections, Swift Package Manager and CocaPods, SwiftUI in Swift 5.1, latest XCode, VIPER pattern; Web projects: ReactJS 18.2, VSCode; Backend: ASP .Net Core in Visual Studio for Mac.";
    kapitalCardP1.innerText = "2 years, 5 months and counting as Jr Developer, developing Mobile Banking using Swift at ";
    kapitalCardP2.innerText = "• First project: Git in GitLab for version control, Jira and ClickUp for AGILE methodology, API connections, CocoaPods, UIKit framework in Swift 5.9.2, latest XCode, VIPER design pattern.";
    kapitalCardP3.innerText = "• Second project: iOS mobile banking app using SwiftUI and Clean Architecture, organized in independent domain modules (presentation, domain and data). Built and evolved an internal design system distributed as Swift Package with reusable components and design tokens (color, typography, spacing, radii). Real-time communication via WebSockets for currency exchange rates. RSA-encrypted REST service integration through a centralized network layer. Progressive screen migration to align with the web version (React + Tailwind CSS). NavigationStack with centralized routing, dependency injection via factories, and reactive patterns with Combine and @StateObject / @ObservableObject, leveraging AI-assisted development tools.";
    contactP.innerText = "CONTACT";
    downloadCV.innerText = "Download my Curriculum Vitae"
    hereP.innerText = "here"
    hereP.setAttribute('href', 'https://firebasestorage.googleapis.com/v0/b/nmbaltazarcv.appspot.com/o/Curriculum%20v3%20English.pdf?alt=media&token=15ec066f-7113-4084-a4cb-e33553b70c65');
}

function changeToEs() {
    quickAccess.innerText = "Acceso Rapido";
    language.innerText = "Idioma"
    profEdu.innerText = "Educación Profesional";
    diplomat.innerText = "Diplomados";
    certifications.innerText = "Certificaciones";
    languages.innerText = "Idiomas";
    abilities.innerText = "Habilidades";
    progLang.innerText = "Lenguajes de Programación";
    jobExp.innerText = "Experiencia Laboral";
    contact.innerText = "Contacto";
    profileP.innerText = "PERFIL";
    profileCardP.innerText = "En el mes de agosto de 2016 inicié la Licenciatura en Ingeniería de Software y Sistemas Computacionales en la Universidad DeLaSalle Bajío, en la ciudad de León, Gto., misma que finalicé en junio de 2020; en diciembre del mismo año, presenté el examen CENEVAL, en el cual obtuve un resultado Satisfactorio. Actualmente estoy en espera de mi Título Profesional, por los trámites que este proceso conlleva. En febrero del 2021, inicié un Diplomado en Diseño y Programación de Apps impartido por la Universidad Anáhuac, el cual finalicé en octubre del 2021. Además, tomé una Certificación en Desarrollo de Aplicaciones Móviles de Google. Tengo un dominio avanzado del inglés, y básico del francés. Este último lo estudié en un curso intensivo de un mes en la ciudad de Montreal, Canadá, en junio de 2019.";
    profEduP.innerText = "EDUCACIÓN PROFESIONAL";
    profEduCardP.innerText = "Universidad De LaSalle Bajío, León, Guanajuato Ingeniería De Software Y Sistemas Computacionales 2016-2020";
    consStudies.innerText = "Constancia Estudios Universitarios";
    consDegree.innerText = "Constancia de Titulación";
    diplomatP.innerText = "DIPLOMADO";
    diplomatCardP.innerText = "Universidad Anáhuac Diseño y Programación de Apps 2021-2021";
    certificationsP.innerText = "CERTIFICACIONES";
    languagesP.innerText = "IDIOMAS";
    esP.innerText = "Español - Lengua Materna";
    enP.innerText = "Inglés - Avanzado";
    frP.innerText = "Francés - Basico";
    progLangP.innerText = "LENGUAJES DE PROGRAMACIÓN";
    abilitiesP.innerText = "HABILIDADES";
    jobExpP.innerText = "EXPERIENCIA LABORAL";
    jobExpCardP1.innerText = "1 año como Desarrollador Jr Swift, desarrollando Aplicaciones Móviles con SwiftUI en";
    jobExpCardP2.innerText = "• En el primer desarrollo fue para una empresa privada, a la cual se le desarrollo una solución para el control y gestión de citas en la cual las personas que iban a alguna cita registran los artículos con los que iban a llegar, llámese equipos de computo, herramientas, etc.";
    jobExpCardP3.innerText = "• En el segundo desarrollo fue para Forte, el desarrollo fue la aplicación móvil para un marketplace que ya contaba con página web, y buscaba llegar al publico movil.";
    jobExpCardP4.innerText = "En ambos desarrollos se utilizo Git como Controlador de Versiones, conexiones a APIs, uso de librerías de terceros con Swift Package Manager, CocosPods, utilizando el nuevo framework SwiftUI en Swift 5.0 y usando las Betas de XCode 11, en cuanto a patrón de diseño se uso MVVM.";
    letterP.innerText = "Carta de Recomendación";
    imasdCardP1.innerText = "1 año y 7 meses como Desarrollador Jr, desarrollando en 3 proyectos principalmente aplicaciones móviles utilizando Swift y SwiftUI y un proyecto donde brindé apoyo en Frontend utilizando ReactJS en ";
    imasdCardP2.innerText = "• Un primer proyecto para una empresa privada, a la cual se le desarrolló una solución para contratar servicios bancarios (Créditos, Préstamos, etc.), mostrando formularios dinámicos como Frontend cargados desde un Backend, donde para una 4ta Fase se me solicitó apoyar en la creación de diversos Endpoints; estos creados en un Portal Web en el que podían crear diversos formularios, en el cual también apoyé durante la 4ta Fase del desarrollo utilizando ReactJS; de igual forma se brindó apoyo en la creación de Procedimientos Almacenados para el correcto funcionamiento de los Endpoints creados usando PostgreSQL.";
    imasdCardP3.innerText = "• Un segundo proyecto fue para una empresa privada, a la cual se le desarrolló una solución para el control y gestión de citas con personal de la salud quienes buscaban dar un servicio rápido y a distancia de atención médica y psicológica a través de videollamadas y mensajes realizados dentro de la misma app, para poder hacer uso de esta había una serie de planes de pago para su uso completo, en donde estuve dando soporte a un desarrollador senior para el afinamiento en toda la app.";
    imasdCardP4.innerText = "• Un tercer proyecto para gobierno estatal, al cual se le desarrolló una solución de Portal Web para el soporte de una red de Access Points en una ciudad con el fin de crear geo-cercas, enviar notificaciones usando las geo-cercas creadas o para todos los usuarios conectados en algún punto a esta red, así como un sistema de reportes, en el cual mi papel fue el soporte a un desarrollador senior para la implementación de módulos y corrección de bugs.";
    imasdCardP5.innerText = "• Un cuarto proyecto fue para un gobierno, al cual se le continuó un desarrollo para el control y gestión de pasaje de transporte público, donde el usuario puede visualizar diversas rutas, manejo de tarjetas inteligentes, un módulo para abonar crédito por medio de PayPal, Mercado Libre, Visa y MasterCard, un módulo para generar boleto y poder hacer uso del transporte público, notificaciones personalizadas.";
    imasdCardP6.innerText = "En todos los proyectos se utilizó Git en Azure como Controlador de Versiones, conexiones a APIs, uso de librerías de terceros con Swift Package Manager y CocaPods, utilizando el framework SwiftUI en Swift 5.1 y la versión más reciente de XCode, patrón de diseño VIPER; para desarrollos Web se utilizó ReactJS 18.2, VSCode, y en Backend ASP .Net Core Visual Studio para Mac.";
    kapitalCardP1.innerText = "2 años, 5 meses y contando como Desarrollador Jr, desarrollando la Banca Móvil utilizando Swift en ";
    kapitalCardP2.innerText = "• Un primer proyecto donde se utilizó Git en GitLab como Controlador de Versiones, Jira y posteriormente ClickUp para el manejo de la metodología ÁGIL, conexiones a APIs, uso de librerías de terceros con CocoaPods, framework UIKit en Swift 5.9.2 y versión más reciente de XCode, patrón de diseño VIPER.";
    kapitalCardP3.innerText = "• Un segundo proyecto de aplicación bancaria móvil para iOS utilizando SwiftUI y Clean Architecture, organizada en módulos independientes por dominio (presentación, dominio y datos). Construcción y evolución de un sistema de diseño interno distribuido como Swift Package, con componentes visuales reutilizables y tokens de diseño (color, tipografía, espaciado y radios). Implementación de comunicación en tiempo real mediante WebSockets para tasas de cambio de divisas. Integración con servicios REST cifrados con RSA a través de una capa de red centralizada. Migración progresiva de pantallas hacia un nuevo sistema de diseño alineado con la versión web (React + Tailwind CSS). Uso de NavigationStack con enrutamiento centralizado, inyección de dependencias mediante factories y patrones reactivos con Combine y @StateObject / @ObservableObject, apoyándome en herramientas de desarrollo asistido por IA.";
    contactP.innerText = "CONTACTO";
    downloadCV.innerText = "Descarga mi Curriculum Vitae"
    hereP.innerText = "aqui"
    hereP.setAttribute('href', 'https://firebasestorage.googleapis.com/v0/b/nmbaltazarcv.appspot.com/o/Curriculum%20v3%20Espan%CC%83ol.pdf?alt=media&token=2c647044-fbdc-49d1-ad45-498c0d53e40e');
}

var modal = document.getElementById("myModal");
var img = document.getElementById("fotoPerfil");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

span.onclick = function() { 
  modal.style.display = "none";
}



function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  