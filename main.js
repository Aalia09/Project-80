function getparagraph1(){
    var inputs = [];
    for (var i = 1 ; i <=6 ; i++){
        inputs.push(document.getElementById("para_1_input_" + i ).value);
        
    }
    
    inputs.join(". ");
    document.getElementById("showparagraph1").innerHTML = inputs.join(". ");
}



function getparagraph2(){
    var inputs = [];
    for (var k = 1 ; k <=6 ; i++){
        inputs.push(document.getElementById("para_2_input_" + k ).value);
        
    }
    
    inputs.join(". ");
    document.getElementById("showparagraph2").innerHTML = inputs.join(". ");
}
