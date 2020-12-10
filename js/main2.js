/*-----------------------NAVIGACIJA-----------------------*/
const navigationList = [
	{
		"text": "Naslovna",
		"link": "#header2"
	},
	{
		"text": "O nama",
		"link": "#about"
	},
	{
		"text": "Najpopularnije životinje",
		"link": "#services"
	},
	{
		"text": "Galerija",
		"link": "#portfolio"
	},
	{
		"text": "Autor",
		"link": "#team"
	},
	{
		"text": "Kontakt",
		"link": "#contact"
	}
];

function populateNavigation () {
	
	function createLink(linkData){
		//Kreiraj a tag i dodeli mu href atribut i tekst
		var aElement = document.createElement("a");
		aElement.innerText = linkData.text;
		aElement.href = linkData.link;
		//Kreiraj li element i dodaj mu a tag kao child
		var linkElement = document.createElement("li");
		linkElement.appendChild(aElement);
		return linkElement;
	}
	
	var navigationUl = document.getElementById("navigation-list");
	for (var i = 0; i < navigationList.length; i++) {
		navigationUl.appendChild(createLink(navigationList[i]));
	}
	navigationUl.firstElementChild.classList.add("menu-active");
}

populateNavigation();

/*-----------------------NAVIGACIJA-----------------------*/
/*-----------------------SLIDER NASLOVNA-----------------------*/
var naslovnaCover=['img/naslovna1.jpg','img/naslovna2.jpg','img/naslovna3.jpg'];
function menjaj(){
for (var i=0; i < naslovnaCover.length; i++) {
(function(ind) {
 setTimeout(function(){
    document.getElementById("header2").style.backgroundImage="url('"+ naslovnaCover[ind] + "')"
    document.getElementsByClassName("next")}, 3000*ind);
})(i);
}}
menjaj()
setInterval(function(){109 
menjaj()
},3000*naslovnaCover.length)

/*-----------------------SLIDER NASLOVNA-----------------------*/
/*-----------------------SLIDER-----------------------*/
function slider(element, timeout, animationTime, delay){
    var sliderElement = document.getElementById(element);
    var inner = sliderElement.innerHTML;
    var wrapperElement = document.createElement("div");
    wrapperElement.classList.add("slider-wrapper");
    wrapperElement.innerHTML = inner;
    sliderElement.replaceChildren(wrapperElement);

    setTimeout(function(){
        setInterval(function(){
            function animate(elem, callback){
                elem.style.transitionDuration = animationTime + "s";
                elem.style.marginLeft = (-elem.clientWidth) + "px";
                setTimeout(callback, animationTime * 1000);
            }
            var firstChildClone = wrapperElement.firstElementChild.cloneNode(true);
            animate(wrapperElement.firstElementChild, function(){
                wrapperElement.appendChild(firstChildClone);
                wrapperElement.removeChild(wrapperElement.firstElementChild);
            });
        }, timeout)
    }, delay);
};

slider("customSlider", 5000, 2, 1000);
/*-----------------------SLIDER-----------------------*/
/*-----------------------TEXT 1-----------------------*/
var tekst = document.querySelector("#text-1");

var delay1 = ['0','0.2','0.4'];
var ikonice = ['paw','anchor','info-circle'];
var naslovi1 = ['Istorija','Današnjica','Zanimljivost'];
var opis1 = [
        ['Prvi stanovnici bili su lavovi, leopardi, beli i mrki medvedi, vukovi, nekoliko vrsta majmuna, egzotičnih biljojeda i ptica. Po osnivanju zoo vrt je obuhvatao tri i po hektara površine, da bi posle bio proširen na sedam. Imao je i skroman terarijum i akvarijum.'],
        ['U beogradskom zoološkom vrtu trenutno živi oko 190 životinjskih vrsta i oko 1.800 jedinki, kako egzotičnih i ugroženih, tako i lokalnih i domaćih životinja. Od toga najviše vrsta čine ptice, nešto manje sisari, a zatim gmizavci, nekoliko vrsta zglavkara i jato pirana.'],
        ['Beo zoo vrt je poznat po svojoj kolekciji belih životinja, prvenstveno belih lavova, koji su 2005. godine došli iz nacionalnog parka Kruger u Južnoafričkoj Republici. Beograd je zbog čestih prinova jedno vreme posedovao najveći broj belih lavova u zatočeništvu na svetu. U maju 2018. rođena je i ženka belog američkog bizona, što predstavlja veliku retkost u prirodi, jer se ovakva jedinka u proseku rodi jednom u 10 miliona slučajeva.'],
];
for(let i=0;i<naslovi1.length;i++){
    tekst.innerHTML+= `
    <div class="icon-box wow fadeInUp" data-wow-delay="${delay1[i]}">
    <div class="icon"><i class="fa fa-${ikonice[i]}"></i></div>
    <h4 class="title"><a href="">${naslovi1[i]}</a></h4>
    <p class="description">${opis1[i]}</p>
  </div>
    `;
}
/*-----------------------TEXT 1-----------------------*/
/*-----------------------BROJAC STATISTIKA-----------------------*/
function counterUp(elem, duration, delay){
    var animationStarted = false;

    var value = parseFloat(elem.innerText);
    var starter = 0;
    var steps = duration / delay;
    var step = value / steps;
    elem.innerText = starter;
    function startAnimate(){
        var intId = setInterval(function(){
            if(starter >= value){
                starter = value;
                clearInterval(intId);
            }
            elem.innerText = starter.toFixed(0);
            starter += step;
        }, delay)
    }

    document.addEventListener("scroll", function(){
        var windowHeight = window.innerHeight;
        var scrollTop = elem.getBoundingClientRect().top;
        if(scrollTop < 600 && !animationStarted){
            startAnimate();
            animationStarted = true;
        }
    })
}


var elements = document.querySelectorAll(".custom-counter");

elements.forEach(function(el){
    counterUp(el, 1000, 10);
})
/*-----------------------BROJAC STATISTIKA-----------------------*/
/*-----------------------SPECIFICNE ZIVOTINJE-----------------------*/
var redovi = document.querySelector("#text-zivotinje");
var delay2 =['0.2','0.4','0.6','0.2','0.4','0.6'];
slikeiAlt2=[
  ['img/bengalskiTigar.jpg','Tigar'],
  ['img/lav.png','Lav'],
  ['img/crnaPuma.jpg','Crna Puma'],
  ['img/beliMedved.jpg','Beli Medved'],
  ['img/foka.jpeg','Foka'],
  ['img/pingvin.jpg','Pingvin'],
];
var naslovi3 = ['Bengalski tigar','Afrički lav','Crna puma','Beli Medved','Foka','Pingvin'];
var opis3 = [
  ['Bengalski tigar ili kraljevski bengalski tigar, je podvrsta tigra koji živi u Bangladešu i indijskoj državi Zapadni Bengal, ali se može naći i u monsunskim šumama Butana, Burme, Nepala i Kine.',],
  ['U relativno skorašnje vreme, stanište lava je obuhvatalo južne delove Evroazije, od Portugalije do Indije, i veći deo Afrike osim centralnih, tropskih delova i pustinje Sahare.'],
  ['Crna Puma ili kuguar sisar je iz porodice mačaka, a može se naći u Severnoj, Srednjoj i Južnoj Americi. Reč puma dolazi iz kečua jezika.'],
  ['Beli polarni medved je vrsta medveda koji naseljava Arktik. Najveći je kopneni mesojed, većina odraslih mužjaka teži do 1.000 kilograma. Krzno mu je krem-belo i gusto.'],
  ['Foke su široko rasprostranjena grupa morskih sisara mesojeda. Foke vole hladnu vodu na Severnoj i Južnoj hemisferi, tako da ih tamo ima najviše. Većinu svog života provede u vodi.'],
  ['Pingvini pripadaju redu vodenih, neletećih ptica, koje žive uglavnom na južnoj hemisferi. Prilagođeni životu u vodi sa krilima koja su evoluirala u peraja. Mogu lako da rone.'],
]
for(let i=0;i<naslovi3.length;i++){
  redovi.innerHTML+=`
  <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="${delay2[i]}">
            <div class="box">
              <div class="icon"><img src='${slikeiAlt2[i][0]}' alt='${slikeiAlt2[i][1]}'/></div>
              <h4 class="title">${naslovi3[i]}</h4>
              <p class="description">${opis3[i]}</p>
            </div>
            </div>
  `
}
/*-----------------------SPECIFICNE ZIVOTINJE-----------------------*/
/*---------------------TABELA ZEBRA---------------------*/ 

$(document).ready(function(){
    $("#tabela tbody tr:even").addClass("zebra");
	$("#tabela tbody tr").hover(function(){
		$(this).addClass('hover');}, 
		function(){$(this).removeClass('hover');
    });
    
    
})
/*---------------------TABELA ZEBRA---------------------*/
/*-----------------------GALERIJA ZIVOTINJE-----------------------*/
var galerija = document.querySelector("#portfolio-wrapper");
var klasa = ['app','web','app','card','card','web','card','app','logo','logo','web','logo'];
var slikeiAlt  = [
  ['img/galerija/nilskiKonj.jpg','Nilski konj'],
  ['img/galerija/zirafa.jpg','Žirafa'],
  ['img/galerija/africkiSlon.jpg','Slon'],
  ['img/galerija/orangutan.jpg','Orangutan'],
  ['img/galerija/sibirskiTigar.jpg','Sibirski Tigar'],
  ['img/galerija/jak.jpg','Jak'],
  ['img/galerija/krokodil.jpg','Krokodil'],
  ['img/galerija/jelen.jpg','Jelen'],
  ['img/galerija/divokoza.jpg','Divokoza'],
  ['img/galerija/medved.jpg','Medved'],
  ['img/galerija/beliVuk.jpg','Beli Vuk'],
  ['img/galerija/kengur.jpg','Kengur'],
];
var naslovi2 = ['Nilski Konj','Žirafa','Slon','Orangutan','Sibirski Tigar','Jak','Krokodil','Jelen','Divokoza','Medved','Beli Vuk','Kengur'];
var opis2 = ['Afrički kontinent','Afrički kontinent','Afrički kontinent','Azijski  kontinent','Azijski  kontinent','Azijski  kontinent','Americki  kontinent','Americki  kontinent','Evropski kontinent','Evropski  kontinent','Evropski  kontinent','Australijski  kontinent'];
for(let i=0;i<naslovi2.length;i++){
galerija.innerHTML+=`
<div class="col-lg-3 col-md-6 portfolio-item filter-${klasa[i]}">
<img src="${slikeiAlt[i][0]}" alt="${slikeiAlt[i][1]}">
<div class="details">
  <h4>${naslovi2[i]}</h4>
  <span>${opis2[i]}</span>
</div>
</div>
`;
}
/*-----------------------GALERIJA ZIVOTINJE-----------------------*/
/*-----------------------AUTOR PASUSI JQUERY-----------------------*/
 $(".section-description").mouseover(function(event)
 {
  $(event.target).css("color", "#06185c");
 });
 $(".section-description").mouseout(function(event)
 {
  $(event.target).css("color", "#666666");
 });
 /*-----------------------AUTOR JQUERY-----------------------*/
 /*-----------------------SLIDER AUTOR JQUERY-----------------------*/
 $(document).ready(function(){
    slideShow();
});
  function slideShow() {
    var current = $('.pic .show');
    var next = current.next().length ? current.next() : current.parent().children(':first');
    
    current.hide().removeClass('show');
    next.fadeIn().addClass('show');
    
    setTimeout(slideShow, 3000);
}
/*-----------------------SLIDER AUTOR JQUERY-----------------------*/
/*-----------------------FORMA ZA VALIDIRANJE-----------------------*/
function validateForm(){
    let form = document.forms['contactForm'];

    let passed = true;

    let emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let nameRegex = new RegExp(/^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,19})+$/);

    function showError(elem, message){
        elem.classList.add('error');
        elem.nextElementSibling.innerText = message;
        elem.nextElementSibling.style.display = 'block';
    }

    form.querySelectorAll("input").forEach(function(el){
        el.classList.remove("error");
    })
    form.querySelector('textarea').classList.remove("error");
    form.querySelectorAll('.validation').forEach(function(el){
        el.innerText = '';
        el.style.display = "none";
    });
    var nameMessage =''; 
    if(form['name'].value === ''){
        nameMessage = "Morate popuniti ovo polje!"; 
    }else if(!nameRegex.test(form['name'].value)){
        nameMessage = "Niste dobro uneli Ime i Prezime > (Pera Perić)";
    }
    if(nameMessage){
        showError(form['name'], nameMessage);
        passed = false;
    }
    var emailMessage = '';
    if(form['email'].value === ''){
        emailMessage = "Morate popuniti ovo polje!";
    }else if(!emailRegex.test(form['email'].value)){
        emailMessage = "Email mora u pravilnom formatu: primer@nesto.com";
    }
    if(emailMessage){
        showError(form['email'], emailMessage);
        passed = false;
    }
    var jeCekiran = false;
    var nizRb = document.getElementsByName("rbKlikni");
    for(let i=0;i<nizRb.length;i++){
        if(nizRb[i].checked){
            jeCekiran = true;
            break;
        }
    }
    if(!jeCekiran){
        $("#radioButtons").next().show().text("Morate da čekirate jedno polje!");
        passed = false;
    }

    if(form['message'].value === ''){
        showError(form['message'], 'Morate popuniti ovo polje!');
        passed = false;
    }
    if(passed){
        document.querySelector("#sendmessage").style.display='block';
        form['name'].value ='';
        form['email'].value='';
        form['message'].value='';
        for(let i=0;i<nizRb.length;i++){
            nizRb[i].checked = false;
        }
    }
    return false;
}
document.querySelector("#komentar").addEventListener("keyup", function(){
    document.querySelector("#brojSlova").textContent =`${document.querySelector("#komentar").value.length}/150`;
});
/*-----------------------FORMA ZA VALIDIRANJE-----------------------*/