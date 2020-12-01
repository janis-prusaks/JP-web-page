
let file_name = "index.html";
$("main").loadTemplate("start.html", {
  source: file_name
});


window.addEventListener("hashchange", function () {
    if (location.hash == "#start.html") {
        console.log("test-start");
        $("main").loadTemplate("start.html");
    }    
    if (location.hash == "#pieredze.html") {
        console.log("test-pieredze");
        $("main").loadTemplate("pieredze.html");
    }
    if (location.hash == "#pieredze2.html") {
        console.log("test-pieredze2222");
        $("main").loadTemplate("pieredze2.html");
    }
    if(location.hash == "#kontakti.html"){
        console.log("test-kontakti");
        $("main").loadTemplate("kontakti.html");
    }  
});

