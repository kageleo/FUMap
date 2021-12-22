
function resizeWindow(event){  // cssを画面サイズごとに動的変更
    document.getElementById('wsize').innerText = 'width:' + window.innerWidth + 'px';
    document.getElementById('hsize').innerText = 'height:' + window.innerHeight + 'px';

    if( window.innerWidth > 1350 ) {
        document.getElementById('cp_navi').style.fontSize = "1vw";
    } else {
        document.getElementById('cp_navi').style.fontSize = "14px";
    }
}

window.addEventListener('load', resizeWindow);
window.addEventListener('resize', resizeWindow);






// $(".openbtn1").click(function () {//ボタンがクリックされたら
//     $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
//       $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
// });
  
// $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
//       $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
//       $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
// });







function pin(X, Y){
    if( X ) {
        document.getElementById( 'pin-point' ).style.left = X + "%";
        document.getElementById( 'pin-point' ).style.top = Y + "%";
        document.getElementById( 'pin-point' ).style.opacity = 1;
        return;
    }
    document.getElementById( 'pin-point' ).style.opacity = 0;
}

var imgNum = 1;

function showimg1(){  // マップ(japan)
    imgNum = 1;
    isAccess(imgNum);
    document.getElementById( 'map' ).src = "images/2021_campus_map_japan.png";
}

function showimg2(){  // マップ(English)
    imgNum = 2;
    isAccess(imgNum);
    document.getElementById( 'map' ).src = "images/2021_campus_map_english.png";
}

function showimg3(){  // マップ(chinese)
    imgNum = 3;
    isAccess(imgNum);
    document.getElementById( 'map' ).src = "images/2018_campus_map_chinese.png";
}

function showimg4(){  // マップ(korean)
    imgNum = 4;
    isAccess(imgNum);
    document.getElementById( 'map' ).src = "images/2018_campus_map_korean.png";
}

function showimg5(){  // 図書館
    imgNum = 5;
    isAccess(imgNum);
    document.getElementById( 'map' ).src = "images/Librarymap.png";
    document.getElementById( 'pin-point' ).style.opacity = 0;
}

function showimg6(){  // アクセスマップ
    imgNum = 6;
    isAccess(imgNum);
    document.getElementById( 'map' ).src = "images/アクセスマップ.png";
}

function showimg7(){  // AED
    imgNum = 7;
    isAccess(imgNum);
    document.getElementById( 'pin-point' ).style.opacity = 0;
    document.getElementById( 'map' ).src = "images/2021_campus_map_japan.png";
}

// pinの座標をshowimg1〜４の範囲で格納
var xarray = [0, 0, 0, 0];
var yarray = [0, 0, 0, 0];

function isAccess(imgnum) {  // アクセスマップならmax-width: 1000px;に変更。また、共通のpin関数もまとめておく。
    document.getElementById( 'map' ).style.maxWidth = "1300px";
    if( imgnum == 6 ) {
        document.getElementById( 'pin-point' ).style.opacity = 0;
        document.getElementById( 'map' ).style.maxWidth = "1000px";
    } else {
        pin(xarray[imgnum-1], yarray[imgnum-1]);
    }
}

function search(){  // 検索からpinを刺す場所を返す
    var search_text = document.getElementById("search-text");
    var search_word = search_text.value;
    switch (search_word){
        case "A棟":
        case "a棟":
        case "A":
        case "a":
            xarray = [67.5, 65.4, 0, 0];
            yarray = [25, 25.9, 0, 0];
            break;
        case "８号館":
        case "8号館":
        case "8":
        case "８":
            xarray = [60.8, 0, 0, 0];
            yarray = [30, 0, 0, 0];
            break;
        case "図書館":
            showimg5();
            break;
        default:
            xarray = [0, 0, 0, 0];
            yarray = [0, 0, 0, 0];
            document.getElementById( 'search-text' ).value = "該当なし ";
    }

    pin(xarray[imgNum-1], yarray[imgNum-1]);
}
