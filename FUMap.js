function pin(X, Y){

    document.getElementById( 'pin-point' ).style.left = X + "%";
    document.getElementById( 'pin-point' ).style.top = Y + "%";
    document.getElementById( 'pin-point' ).style.opacity = 1;
}

function str_sch(str, sch){
    if(!str.indexOf(sch)){
        return 
    }
}

function search(){
    var search_text = document.getElementById("search-text");
    var search_word = search_text.value;
    switch (search_word){
        case "A棟":
        case "a棟":
        case "A":
        case "a":
            pin(68, 49);
            break;
        case "８号館":
        case "8号館":
        case "8":
        case "８":
            pin(56, 64);
            break;
        default:
            document.getElementById('pin-point').style.opacity = 0;
            document.getElementById('search-text').value = "該当なし ";
    }
}
