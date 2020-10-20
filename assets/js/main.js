window.onload = function() {
	document.getElementById("register").addEventListener("click", function() {
        
        var validno = true;

        var podaci = [];
		
		var ime = document.getElementById("first-name").value.trim();
        var prezime = document.getElementById("last-name").value.trim();
        var godinaRodjenja = document.getElementById("birth-date").value.trim();
		var email=document.getElementById("email").value.trim();
		var phone=document.getElementById("phone-number").value.trim();
		
		var imeError = document.getElementById("first-name-error");
        var prezimeError = document.getElementById("last-name-error");
        var datumError = document.getElementById("birth-date-error");
		var emailError=document.getElementById("email-error");
		var phoneError=document.getElementById("phone-number-error");
		
        var reIme = /^[A-Z][a-z]{2,11}$/;
        var rePrezime = /^[A-Z][a-z]{2,15}$/;
		var reGodRodjenja =  /^(19[\d]{2}|20(0[\d]|1[0-8]))\-(0[1-9]|1[012])\-(0[1-9]|[12][\d]|3[01])$/;
		var reEmail=/^[\w]+\.[\w]+[\d]{2}\.[\d]{2}(@ict.edu.rs)$/;
		var rePhone = /^06[\d]\-[\d]{3}\-[\d]{3,4}$/;
		
		if(ime == "") {
           imeError.innerHTML = "Required."; 
           validno = false;  
        } else if(!reIme.test(ime)) {
            imeError.innerHTML = "Name isn't in a good format.";
            validno = false;
        } else {
            podaci.push(ime);
            imeError.innerHTML = "";   
        }

        if(prezime == "") {
            prezimeError.innerHTML = "Required"; 
            validno = false;  
         } else if(!rePrezime.test(prezime)) {
             prezimeError.innerHTML = "Last name isn't in a good format.";
             validno = false;
            } else {
             podaci.push(prezime);
             prezimeError.innerHTML = "";   
         }

         if(godinaRodjenja != "") {
            if(reGodRodjenja.test(godinaRodjenja)) {
               datumError.innerHTML = "";
               podaci.push(godinaRodjenja);        
            } else {
                validno = false;
                datumError.innerHTML = "Birth date isn't in a good format.";
            }
         } else {
            datumError.innerHTML = "";
         }
		 
		  if(email == ""){
			emailError.innerHTML="Required.";
			validno=false;
		 } else if (!reEmail.test(email)){
			validno=false;
			emailError.innerHTML="Email isn't in a good format.";
		 }	else {
			podaci.push(email);
			emailError="";
		 }	 
		    if(phone == "") {
            phoneError.innerHTML = "Required.";
            validno = false;   
         } else if(!rePhone.test(phone)) {
            validno = false;
             phoneError.innerHTML = "Phone number isn't in a good format";
         } else {
             podaci.push(phone);
             phoneError.innerHTML = "";   
         }
		 var chbs = document.getElementsByName("gender");

         var odabrano = false;

         for(var i = 0; i < chbs.length; i++) {
             if(chbs[i].checked) {
                 odabrano = true;
                 break;
             }
         }

         if(odabrano) {
            document.getElementById("gender-error").innerHTML = "";
         } else {
            validno = false;
            document.getElementById("gender-error").innerHTML = "Select something.";
        }
	

    });

}
//menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//pictures
function first(){
	document.getElementById("kitchen").setAttribute("src", "assets/img/kitchen1.jpg");
}
function second(){
	document.getElementById("kitchen").setAttribute("src", "assets/img/kitchen.jpg");
}
function three(){
	document.getElementById("food").setAttribute("src", "assets/img/kebab.jpg");
}
function four(){
	document.getElementById("food").setAttribute("src", "assets/img/rest4.jpg");
}
function five(){
	document.getElementById("restGirl").setAttribute("src", "assets/img/picture.jpg");
}
function six(){
	document.getElementById("restGirl").setAttribute("src", "assets/img/rest1.jpg");
}

//dinamicko ispisivanje
document.getElementById("aboutTitle").innerHTML="<h2>Sign Up and Get 50% discount on New Year's Eve</>";

var divForma=document.getElementById("form");
var formSadrzaj=document.createElement("input");
formSadrzaj.setAttribute("type","text");
formSadrzaj.setAttribute("placeholder","Enter your full name");
formSadrzaj.setAttribute("id","name");
divForma.appendChild(formSadrzaj);
var nameError=document.createElement("p");
nameError.setAttribute("class","text-danger");
nameError.setAttribute("id","name-error");
divForma.appendChild(nameError);

var formEmail=document.createElement("input");
formEmail.setAttribute("type","email");
formEmail.setAttribute("placeholder","Enter your email");
formEmail.setAttribute("id","email-index")
divForma.appendChild(formEmail);
var emailIndexError=document.createElement("p");
emailIndexError.setAttribute("class","text-danger");
emailIndexError.setAttribute("id","email-index-error");
divForma.appendChild(emailIndexError);

var razmak=document.createElement("br");
divForma.appendChild(razmak);
var dugme=document.createElement("input");
dugme.setAttribute("type","submit");
dugme.setAttribute("class","btnRegister");
divForma.appendChild(dugme);


window.onload = function() {
document.querySelector(".btnRegister").addEventListener("click", function() {
        
    var validno = true;

    var podaci2 = [];

    var name=document.querySelector("#name").value.trim();
    var emailIndex=document.querySelector("#email-index").value.trim();

    var nameTextError=document.querySelector("#name-error");
    var emailindexErr=document.querySelector("#email-index-error");
    
    var reName=/^[A-Z][a-z]{1,11}(\s[A-Z][a-z]{2,11})+$/;
    var reEmailIndex=/^[\w]+\.[\w]+[\d]{2}\.[\d]{2}(@ict.edu.rs)$/;

    if (name == "") {
        nameTextError.innerHTML="Reqiured.";
        validno=false;
    } else if(!reName.test(name)){
        nameTextError.innerHTML="Name isn't in a good format."
        validno=false;
    } else {
        nameTextError.innerHTML="";
        validno=true;
        podaci2=push(name);
    }

    if (emailIndex == "") {
        emailindexErr.innerHTML="Required.";
        validno=false;
     } else if (!reEmailIndex.test(emailIndex)){
        validno=false;
        emailindexErr.innerHTML="Email isn't in a good format.";
     }	else {
        podaci.push(emailIndex);
        emailindexErr="";
     }	 

});
}

//menu items
$(document).ready(function() { 
    $('.listMenu').bind('mouseover.colorize', function() {
      $(this).css('background-color', '#4F6E2F') 
    })
    .bind('mouseout.colorize', function() { 
      $(this).css('background-color', '');
    }) 
    .click(function() {
      $(this)
        .trigger('mouseout.colorize')
        .unbind('.colorize');
    });
});
