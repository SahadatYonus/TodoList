// Ask for name and write it in Welcoming instruction
$(document).ready(function(){
    instruction.fadeIn(500);
    function askName() {
        let UserName = prompt("What is your name?");
        if(UserName == "" || null) {
            return;
        } else {
        let h1Instruction = document.querySelector("h1.instruction");
        h1Instruction.innerHTML = "Welcome to your To-Do list, <em><strong style='text-transform: uppercase'>" + UserName + "</strong></em> !";
    }
}
    askName();
});

// Button
let button = document.querySelector("button");
let instruction = $("#instruction");
button.addEventListener("click", function() {
    this.classList.add("push");
    instruction.fadeOut(500, function(){
        this.remove();
    });
})


// adds .done to tasks done
$("ul").on("click", "li.listItem", "input[type='checkbox']", function(){
    $(this).toggleClass("done");
});

//Click on span to delete ToDO
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(100, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add the list by pressing "Enter" key 
$("input[type='text']").keypress(function(e) {

    let todoText = this.value;

    if(e.which === 13 && todoText.length < 22 && todoText !== "") {
        //clear the input after typing;
        this.value = "";
        this.setAttribute("placeholder", "Add a To-Do");
        //create new li to ul;
        $("ul.todo-List").append("<li class='listItem'><span><i class='fas fa-trash'></i></span>" + todoText + "<input type='checkbox'></li>");
        document.querySelector("h1").innerHTML = "My To-Dos<i class='fas fa-minus'></i>";

    } else if (e.which === 13 && todoText == "") {
        alert("Please write a To-Do! :) ");

    } else if (e.which === 13 && todoText.length > 22) {
        let retry = confirm("Seems like your To-Do is more than 22 characters!");
        retry;
    }
    
});


//  toggle between Plus and Minus sign in h1
$(document).on("click", ".fa-plus-square", function(){
    if ($(".fa-plus-suqare")) {
        $(".fa-plus-square").attr("class", "fas fa-minus").addClass("fadingMinus");
        $("input[type='text']").slideDown(400);
    } 
    }); 

$(document).on("click", ".fa-minus", function(){
    if ($(".fa-minus")) {
            $(".fa-minus").attr("class", "fas fa-plus-square").addClass("fadingPlus");
            $("input[type='text']").slideUp(400);
    } 
}); 
     

// slide up/down of list in footer and js on the image
let img = document.querySelector("img") || $("img");
let ColorUl = $("ul.colorChange");


img.addEventListener("mouseenter", function() {
    this.classList.add("rotate");
    img.classList.remove("rotate-reverse");
    ColorUl.slideDown(670).css("display", "block");
});

$(".colorChangeItems, img").on("click", function() {
    img.classList.remove("rotate");
    img.classList.add("rotate-reverse");
    ColorUl.slideUp(670, function(){
        $(this).css("display", "none");
    })
});



// changing background color, h1 and font color
let sky = document.querySelector(".color0");
let peach = document.querySelector(".color1");
let megatron = document.querySelector(".color2");
let vasily = document.querySelector(".color3");
let anwar = document.querySelector(".color4");
let sun = document.querySelector(".color5");

sky.addEventListener("click", function(){

    $("body").css("background", "var(--sky)");
    $("h1").css("background", "#005AA7");
    $("input[type='text']").css({"color" : "#005AA7", "border" : "3px solid #005AA7"});
    $("input[type='text']").on("focus", function(){
        $(this).css("border", "3px solid #005AA7;")
    });
    $("input[type='text']").on("hover", function(){
        $(this).css("border", "2px solid #005AA7;")
    });
});

peach.addEventListener("click", function(){

    $("body").css("background", "var(--peach)");
    $("h1").css("background", "#ED4264");
    $("input[type='text']").css({"color" : "#ED4264", "border" : "3px solid #ED4264"});
    $("input[type='text']").on("focus", function(){
        $(this).css("border", "3px solid #ED4264;")
    });
    $("input[type='text']").on("hover", function(){
        $(this).css("border", "2px solid #ED4264;")
    });
});

megatron.addEventListener("click", function(){

    $("body").css("background", "var(--megatron)");
    $("h1").css("background", "#f7797d");
    $("input[type='text']").css({"color" : "#f7797d", "border" : "3px solid #f7797d"});
    $("input[type='text']").on("focus", function(){
        $(this).css("border", "3px solid #f7797d")
    });
    $("input[type='text']").on("hover", function(){
        $(this).css("border", "2px solid #f7797d")
    });
});

vasily.addEventListener("click", function(){

    $("body").css("background", "var(--vasily)");
    $("h1").css("background", "#e9d362");
    $("input[type='text']").css({"color": "#333333", "border" : "3px solid #e9d362"});
    $("input[type='text']").on("focus", function(){
        $(this).css("border", "3px solid #e9d362")
    });
    $("input[type='text']").on("hover", function(){
        $(this).css("border", "2px solid #e9d362")
    });
});

anwar.addEventListener("click", function(){

    $("body").css("background", "var(--anwar)");
    $("h1").css("background", "#334d50");
    $("input[type='text']").css({"color" : "#334d50", "border" : "3px solid #334d50"});
    $("input[type='text']").on("focus", function(){
        $(this).css("border", "3px solid #334d50")
    });
    $("input[type='text']").on("hover", function(){
        $(this).css("border", "2px solid #334d50")
    });
});

sun.addEventListener("click", function(){

    $("body").css("background", "var(--sun)");
    $("h1").css("background", "#f8b500");
    $("input[type='text']").css({"color" : "#f8b500", "border" : "3px solid #f8b500"});
    $("input[type='text']").on("focus load", function(){
        $(this).css("border", "3px solid #f8b500")
    });
    $("input[type='text']").on("hover", function(){
        $(this).css("border", "2px solid #f8b500")
    });
});


// fade in while scrolling
const lis = document.querySelectorAll("ul > *");

const lisOptions = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0
};

const lisObserver = new IntersectionObserver(function(entries, lisObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
        } else {
            entry.target.classList.remove("fadeIn");
        }
    })
}, lisOptions);

lis.forEach(li => {
    lisObserver.observe(li);
});