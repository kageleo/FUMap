function pin(X, Y){
    // var textboxX = document.getElementById("textBoxX");
    // var textboxY = document.getElementById("textBoxY");
    
    // var X = textboxX.value;
    // var Y = textboxY.value;

    document.getElementById( 'pin-point' ).style.left = X + "%";
    document.getElementById( 'pin-point' ).style.top = Y + "%";
    document.getElementById( 'pin-point' ).style.opacity = 1;
}

function search(){
    var search_text = document.getElementById("search-text");
    var search_word = search_text.value
    switch (search_word){
        case "A棟":
            pin(68, 50)
            break;
        case "８号館":
        case "8号館":
            pin(55, 65)
            break;
        default:
            console.log("該当なし");
    }
    // if (search_word == "A棟")
    //     pin(470, 180)
    // else if (search_word == "８号館")
    //     pin(390, 240)
}
