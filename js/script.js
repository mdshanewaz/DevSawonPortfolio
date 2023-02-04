// Aside Start
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll("section"),
    totalSection = allSection.length;

    for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("back-section");
            }
            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
        });
    }

    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");

        navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn();
        });

        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
        }
// Aside End

// Logo Start
// Light and Dark mode
var DaybrandNight = document.querySelector("#brand"); 
var sun = document.querySelector("#sun");
sun.style.display = "none";
var moon = document.querySelector("#moon");
document.body.classList.toggle("dark");

DaybrandNight.onclick = function(){
    document.body.classList.toggle("dark");
    if(sun.style.display === "none"){
        moon.style.display = "none";
        sun.style.display = "block";
    } else{
        sun.style.display = "none";
        moon.style.display = "block";
    }
};
// Logo End

// Home Start
var typed = new Typed(".typing",{
    strings: ["", "Software Engineer", "Web Designer", "Web Developer", "Data Scientist", "Cyber Specialist"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});
// Home End
// Project Start
// Project filterable image hover effect start  
let list = document.querySelectorAll('.list');
let projectItem = document.querySelectorAll('.project-item');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<projectItem.length; k++){
            projectItem[k].classList.remove('active');
            projectItem[k].classList.add('hidden');

            if(projectItem[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                projectItem[k].classList.remove('hidden');
                projectItem[k].classList.add('active');
            }
         }
    })
}
  
// Image1 on click effect
var modal1 = document.getElementById("myModal01");
var zoom1 = document.getElementById("zoom01");
var img1 = document.getElementById("myImg01");
var modalImg1 = document.getElementById("img01");
var captionText1 = document.getElementById("caption01");

zoom1.onclick = function(){    
    modal1.style.display = "block";
    modalImg1.src = img1.src;
    captionText1.innerHTML = img1.alt;      
}

var span1 = document.getElementsByClassName("close01")[0];

span1.onclick = function() { 
  modal1.style.display = "none";
}

// Image2 on click effect
var modal2 = document.getElementById("myModal02");
var zoom2 = document.getElementById("zoom02");
var img2 = document.getElementById("myImg02");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption02");

zoom2.onclick = function(){    
    modal2.style.display = "block";
    modalImg2.src = img2.src;
    captionText2.innerHTML = img2.alt;      
}

var span2 = document.getElementsByClassName("close02")[0];

span2.onclick = function() { 
  modal2.style.display = "none";
}

// Image3 on click effect
var modal3 = document.getElementById("myModal03");
var zoom3 = document.getElementById("zoom03");
var img3 = document.getElementById("myImg03");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption03");

zoom3.onclick = function(){    
    modal3.style.display = "block";
    modalImg3.src = img3.src;
    captionText3.innerHTML = img3.alt;      
}

var span3 = document.getElementsByClassName("close03")[0];

span3.onclick = function() { 
  modal3.style.display = "none";
}

// Image4 on click effect
var modal4 = document.getElementById("myModal04");
var zoom4 = document.getElementById("zoom04");
var img4 = document.getElementById("myImg04");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption04");

zoom4.onclick = function(){    
    modal4.style.display = "block";
    modalImg4.src = img4.src;
    captionText4.innerHTML = img4.alt;      
}

var span4 = document.getElementsByClassName("close04")[0];

span4.onclick = function() { 
  modal4.style.display = "none";
}

// Image5 on click effect
var modal5 = document.getElementById("myModal05");
var zoom5 = document.getElementById("zoom05");
var img5 = document.getElementById("myImg05");
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption05");

zoom5.onclick = function(){    
    modal5.style.display = "block";
    modalImg5.src = img5.src;
    captionText5.innerHTML = img5.alt;      
}

var span5 = document.getElementsByClassName("close05")[0];

span5.onclick = function() { 
  modal5.style.display = "none";
}

// Image6 on click effect
var modal6 = document.getElementById("myModal06");
var zoom6 = document.getElementById("zoom06");
var img6 = document.getElementById("myImg06");
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption06");

zoom6.onclick = function(){    
    modal6.style.display = "block";
    modalImg6.src = img6.src;
    captionText6.innerHTML = img6.alt;      
}

var span6 = document.getElementsByClassName("close06")[0];

span6.onclick = function() { 
  modal6.style.display = "none";
}

// Image7 on click effect
var modal7 = document.getElementById("myModal07");
var zoom7 = document.getElementById("zoom07");
var img7 = document.getElementById("myImg07");
var modalImg7 = document.getElementById("img07");
var captionText7 = document.getElementById("caption07");

zoom7.onclick = function(){    
    modal7.style.display = "block";
    modalImg7.src = img7.src;
    captionText7.innerHTML = img7.alt;      
}

var span7 = document.getElementsByClassName("close07")[0];

span7.onclick = function() { 
  modal7.style.display = "none";
}

// Image8 on click effect
var modal8 = document.getElementById("myModal08");
var zoom8 = document.getElementById("zoom08");
var img8 = document.getElementById("myImg08");
var modalImg8 = document.getElementById("img08");
var captionText8 = document.getElementById("caption08");

zoom8.onclick = function(){    
    modal8.style.display = "block";
    modalImg8.src = img8.src;
    captionText8.innerHTML = img8.alt;      
}

var span8 = document.getElementsByClassName("close08")[0];

span8.onclick = function() { 
  modal8.style.display = "none";
}
// Project filterable image hover effect End
// Project End

// Service Start
// Service review start
const slide = document.querySelector(".container-row-1");
const rightbtn = document.querySelector(".btn-r"); 
const leftbtn = document.querySelector(".btn-l");
const slideWidth = document.querySelector(".row-1-col").offsetWidth;

rightbtn.addEventListener("click", function(){
    slide.scrollLeft += slideWidth;
});

leftbtn.addEventListener("click", function(){
    slide.scrollLeft -= slideWidth;
})

// Service review end
// Service circle progress start 1
let circleProgress1 = document.querySelector('.service-circle-1'),
    progressValue1 = document.querySelector('.progress-value-1');

let progressStartvalue1 = 0,
    progressEndvalue1 = 105,
    speed1 = 50;

let progress1 = setInterval(() => {
    progressStartvalue1++;

    progressValue1.textContent = `${progressStartvalue1*2}↑`
    circleProgress1.style.background = `conic-gradient(var(--skin-color) ${progressStartvalue1 * 3.6}deg, #fff 0deg)`

    if(progressStartvalue1 == progressEndvalue1){
        clearInterval(progress1);
    }
}, speed1);
// Service circle progress bar end 1

// Service circle progress start 2
let circleProgress2 = document.querySelector('.service-circle-2'),
    progressValue2 = document.querySelector('.progress-value-2');

let progressStartvalue2 = 0;
let progressEndvalue2 = 13;
let speed2 = 400;

let progress2 = setInterval(() => {
    progressStartvalue2++;

    progressValue2.textContent = `${progressStartvalue2}>`
    circleProgress2.style.background = `conic-gradient(var(--skin-color) ${progressStartvalue2*8 * 3.6}deg, #fff 0deg)`

    if(progressStartvalue2 == progressEndvalue2){
        clearInterval(progress2);
    }
}, speed2);
// Service circle progress bar end 2

// Service circle progress start 3
let circleProgress3 = document.querySelector('.service-circle-3'),
    progressValue3 = document.querySelector('.progress-value-3');

let progressStartvalue3 = 0;
let progressEndvalue3 = 19;
let speed3 = 250;

let progress3 = setInterval(() => {
    progressStartvalue3++;

    progressValue3.textContent = `${progressStartvalue3}+`
    circleProgress3.style.background = `conic-gradient(var(--skin-color) ${progressStartvalue3*5.5 * 3.6}deg, #fff 0deg)`

    if(progressStartvalue3 == progressEndvalue3){
        clearInterval(progress3);
    }
}, speed3);
// Service circle progress bar end 3

// Service circle progress start 4
let circleProgress4 = document.querySelector('.service-circle-4'),
    progressValue4 = document.querySelector('.progress-value-4');

let progressStartvalue4 = 0;
let progressEndvalue4 = 100;
let speed4 = 50;

let progress4 = setInterval(() => {
    progressStartvalue4++;

    progressValue4.textContent = `${progressStartvalue4}%`
    circleProgress4.style.background = `conic-gradient(var(--skin-color) ${progressStartvalue4 * 3.6}deg, #fff 0deg)`

    if(progressStartvalue4 == progressEndvalue4){
        clearInterval(progress4);
    }
}, speed4);
// Service circle progress bar end 4
// Service End

// Contact Start
function sendMail(){
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };
    
        const serviceID = "service_oog6c4h";
        const templateID = "template_dkd93a5";
    
        emailjs.send(serviceID, templateID, params).then((res) =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            document.getElementById("cardBox").style.display = "block";
            console.log(res);
        })
        .catch((err) => console.log(err));
}

// Contact form pop-up button
var cardBox = document.getElementById("cardBox");
var closeBtn = document.getElementsByClassName("close-btn")[0];

closeBtn.onclick = function(){
    cardBox.style.display = "none";
}
// Contact End