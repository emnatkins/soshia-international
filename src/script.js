// (Light/Dark) mode:

var body = document.getElementsByTagName("body")[0];
var buttomMode = document.getElementsByClassName("select-mode")[0];
var lightMode = "dark";
buttomMode.addEventListener("click", setLightMode);

function setLightMode() {
    if (lightMode == "light") {
        body.setAttribute("light-mode", "dark");
        lightMode = "dark";
		document.cookie = "LightMode=dark; expires=Thu, 18 Dec 2200 12:00:00 UTC";
    } else {
        body.setAttribute("light-mode", "light");
        lightMode = "light";
		document.cookie = "LightMode=light; expires=Thu, 18 Dec 2200 12:00:00 UTC";
    }
}

//end (Light/Dark) mode:

var arabic = document.getElementById("arabic");
arabic.addEventListener("click", SetArabic);
var english = document.getElementById("english");
english.addEventListener("click", SetEnglish);
var app = document.getElementById("app");


function SetEnglish() {
    app.innerHTML = '<article class="main-post"> <header> <h2>Soshia Learn</h2> </header> <p>soshia Learn is a comprehensive training and introduction platform all Sushia brand products.</p> <a href="https://soshia.co/learn"  target="_blank">View</a> </article> <article class="main-post"> <header> <h2>Soshia TV</h2> </header> <p>soshia TV is a professional and specialized makeup training platform.</p> <a href="https://soshia.co/tv" target="_blank">View</a> </article>';
    english.classList.add("btn-set");
    arabic.classList.remove("btn-set");
    document.cookie = "lang=english; expires=Thu, 18 Dec 2200 12:00:00 UTC";
    body.setAttribute("SetLang", "english");
}

function SetArabic() {
    app.innerHTML = '<article class="main-post"> <header> <h2>تعلم سوشيا</h2> </header> <p>تعلم سوشیا هي عبارة عن منصة تدريب وإدخال شاملة لجميع منتجات ماركة سوشیا.</p> <a href="https://soshia.co/learn"  target="_blank">منظر</a> </article> <article class="main-post"> <header> <h2>سوشیا تلفزيون</h2> </header> <p>سوشیا تلفزيون هي منصة تدريب احترافية ومتخصصة في مجال المكياج.</p> <a href="https://soshia.co/tv"  target="_blank">منظر</a> </article>';
    arabic.classList.add("btn-set");
    english.classList.remove("btn-set");
    document.cookie = "lang=arabic; expires=Thu, 18 Dec 2200 12:00:00 UTC";
    body.setAttribute("SetLang", "arabic");
}


function getCookie(cookie_name) {
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if (getCookie("lang") != "") {
    if (getCookie("lang") == "arabic") {
        SetArabic()
    } else if (getCookie("lang") == "english") {
        SetEnglish()
    }
}

if (getCookie("LightMode") != "") {
	if (getCookie("LightMode") == "dark") {
	    body.setAttribute("light-mode", "dark");
	    lightMode = "dark";
	} else if (getCookie("LightMode") == "light") { 
	    body.setAttribute("light-mode", "light");
	    lightMode = "light";
	}
}