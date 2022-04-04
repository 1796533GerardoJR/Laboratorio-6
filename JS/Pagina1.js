function activacion1(){
    $("ul.taps li #HPER1").addClass("active");
    $(".secciones article").hide();
    $(".secciones #tap1").show()
    $("#HPER2").removeClass("active");
    $("#HPER3").removeClass("active");
    $("#HPER4").removeClass("active");
}

function activacion2(){
    $("ul.taps li #HPER2").addClass("active");
    $(".secciones article").hide();
    $(".secciones #tap2").show()
    $("#HPER1").removeClass("active");
    $("#HPER3").removeClass("active");
    $("#HPER4").removeClass("active");
}

function activacion3(){
    $("ul.taps li #HPER3").addClass("active");
    $(".secciones article").hide();
    $(".secciones #tap3").show()
    $("#HPER1").removeClass("active");
    $("#HPER2").removeClass("active");
    $("#HPER4").removeClass("active");
}

function activacion4(){
    $("ul.taps li #HPER4").addClass("active");
    $(".secciones article").hide();
    $(".secciones #tap4").show()
    $("#HPER1").removeClass("active");
    $("#HPER2").removeClass("active");
    $("#HPER3").removeClass("active");
}