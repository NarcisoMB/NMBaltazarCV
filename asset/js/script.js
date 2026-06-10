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
    profileCardP.innerText = "In August 2016 I started my Bachelor's Degree in Software Engineering and Computer Systems at DeLaSalle Bajío University, in the city of León, Gto. which I finished in June 2020; in December of the same year, I took the CENEVAL exam, in which I obtained a Satisfactory result. I am currently waiting for my Professional Degree, due to the procedures involved in this process. In February of this year, I started a Diploma in Design and Programming of Apps taught by the Universidad Anáhuac, which I study online, and I am about to finish in the next few days. Also, I took a Certification in Mobile Application Development from Google. I have an advanced command of English, and basic command of French. The latter I studied in an intensive one-month course in the city of Montreal, Canada, in June 2019.";
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
    profileCardP.innerText = "En el mes de agosto de 2016 inicié la Licenciatura en Ingeniería de Software y Sistemas Computacionales en la Universidad DeLaSalle Bajío, en la ciudad de León, Gto., misma que finalicé en Junio del 2020; en Diciembre del mismo año, presente el examen CENEVAL, en el cual obtuve un resultado Satisfactorio. Actualmente me encuentro a la espera de mi Título Profesional, por los trámites que este proceso conlleva. En Febrero del año en curso, inicié un Diplomado en Diseño y Programación de Apps impartido por la Universidad Anáhuac, el cual estudio en línea, y estoy por finalizar en próximos días. Así mismo, cursé en Google una Certificación de Desarrollo de Aplicaciones Móviles. Tengo un dominio avanzado del inglés, y básico del francés. Éste último lo estudié en un curso intensivo de un mes de duración en la ciudad de Montréal, Canadá, en junio del 2019.";
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
    letterP.innerText ="Carta de Recomendación";
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
  