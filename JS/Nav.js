function activacion1(){
    $("ul.taps li #HPER1").addClass("active");
    $("#HPER2").removeClass("active");
    $("#HPER3").removeClass("active");
    $("#HPER4").removeClass("active");
}

function activacion2(){
    $("ul.taps li #HPER2").addClass("active");
    $("#HPER1").removeClass("active");
    $("#HPER3").removeClass("active");
    $("#HPER4").removeClass("active");
}

function activacion3(){
    $("ul.taps li #HPER3").addClass("active");
    $("#HPER1").removeClass("active");
    $("#HPER2").removeClass("active");
    $("#HPER4").removeClass("active");
}

function activacion4(){
    $("ul.taps li #HPER4").addClass("active");
    $("#HPER1").removeClass("active");
    $("#HPER2").removeClass("active");
    $("#HPER3").removeClass("active");
}