
function resizeWindow(event){  // cssを画面サイズごとに動的変更
    // document.getElementById('wsize').innerText = 'width:' + window.innerWidth + 'px';
    // document.getElementById('hsize').innerText = 'height:' + window.innerHeight + 'px';

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

// function search(){  // 検索からpinを刺す場所を返す
//     var search_text = document.getElementById("search-text");
//     var search_word = search_text.value;
//     switch (search_word){
//         case "A棟":
//         case "a棟":
//         case "A":
//         case "a":
//             xarray = [67.5, 65.4, 0, 0];
//             yarray = [25, 25.9, 0, 0];
//             break;
//         case "８号館":
//         case "8号館":
//         case "8":
//         case "８":
//             xarray = [60.8, 0, 0, 0];
//             yarray = [30, 0, 0, 0];
//             break;
//         case "図書館":
//             showimg5();
//             break;
//         default:
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             document.getElementById( 'search-text' ).value = "該当なし ";
//     }

//     pin(xarray[imgNum-1], yarray[imgNum-1]);
// }

function search(){  // 検索からpinを刺す場所を返す
    var search_text = document.getElementById("search-text");
    var search_word = search_text.value;
    switch (true){
        case/^大学/.test(search_word):
            xarray = [72.6, 0, 0, 0];
            yarray = [29.3, 0, 0, 0];
            break;
        case/^[7７七]/.test(search_word):
            xarray = [71.25, 0, 0, 0];
            yarray = [31.2, 0, 0, 0];
            break;
        case/学生部事務室棟/.test(search_word):
            xarray = [65.4, 0, 0, 0];
            yarray = [30.4, 0, 0, 0];
            break;
        case/^エクス/.test(search_word):
            xarray = [67.3, 0, 0, 0];
            yarray = [29.7, 0, 0, 0];
            break;
        case/^健康/.test(search_word):
            xarray = [71.85, 0, 0, 0];
            yarray = [25.9, 0, 0, 0];
            break;
        case /^[1１一][1１2２3３号][1１2２3３館]/.test(search_word):
            xarray = [69.62, 0, 0, 0];
            yarray = [21.8, 0, 0, 0];
            break;
        case /^[aA]/.test(search_word):
            xarray = [66.92, 0, 0, 0];
            yarray = [25, 0, 0, 0];
            break;
         case/^[8８八]/.test(search_word):
            xarray = [59.9, 0, 0, 0];
            yarray = [30, 0, 0, 0];
            break;
        case/^[1１十][0０号]/.test(search_word):
            xarray = [57, 0, 0, 0];
            yarray = [32.5, 0, 0, 0];
            break;
        //中央図書館及び陽だまり
        case/^[中図]/.test(search_word):
            xarray = [60.25, 0, 0, 0];
            yarray = [14.6, 0, 0, 0];
            break;
        case/^[ひ陽]/.test(search_word):
            xarray = [63.1, 0, 0, 0];
            yarray = [14.9, 0, 0, 0];
            break;
        //11-20
        case /^[2２二]/.test(search_word):
            xarray = [65.48, 0, 0, 0];
            yarray = [17.2, 0, 0, 0];
            break;
        case /^[文]/.test(search_word):
            xarray = [51.42, 0, 0, 0];
            yarray = [25.2, 0, 0, 0];
            break;
        //プール
        case/^[ぷ]/.test(search_word):
        case/プール/.test(search_word):
            xarray = [55.1, 0, 0, 0];
            yarray = [42.75, 0, 0, 0];
            break;
        case/^[第][2２二][記]/.test(search_word):
            xarray = [24.32, 0, 0, 0];
            yarray = [41.05, 0, 0, 0];
            break;
        case/^スカッシュ/.test(search_word):
            xarray = [22.35, 0, 0, 0];
            yarray = [45, 0, 0, 0];
            break;
        case/^体操/.test(search_word):
            xarray = [24.2, 0, 0, 0];
            yarray = [45.85, 0, 0, 0];
            break;
        case/^スポーツ/.test(search_word):
            xarray = [27.4, 0, 0, 0];
            yarray = [46.4, 0, 0, 0];
            break;
        case/部室棟$/.test(search_word):
            xarray = [32.48, 0, 0, 0];
            yarray = [30.7, 0, 0, 0];
            break;
        case/駐車場$/.test(search_word):
            xarray = [27.4, 0, 0, 0];
            yarray = [30.65, 0, 0, 0];
            break;
        //21-30
        case/^[6６六][0０十]/.test(search_word):
        case/^ヘリオス/.test(search_word):
            xarray = [53.53, 0, 0, 0];
            yarray = [34.22, 0, 0, 0];
            break;
        case/^学而/.test(search_word):
            xarray = [64.4, 0, 0, 0];
            yarray = [34.5, 0, 0, 0];
            break;
        case/^有朋/.test(search_word):
            xarray = [58.75, 0, 0, 0];
            yarray = [40.6, 0, 0, 0];
            break;
        case/自修寮/.test(search_word):
            xarray = [64.65, 0, 0, 0];
            yarray = [48, 0, 0, 0];
            break;
        case/片江$/.test(search_word):
            xarray = [68.18, 0, 0, 0];
            yarray = [44.7, 0, 0, 0];
            break;
        case/^ビクトリ/.test(search_word):
            xarray = [70.5, 0, 0, 0];
            yarray = [44.15, 0, 0, 0];
            break;
        case/愛好会会館/.test(search_word):  
            xarray = [69.6, 0, 0, 0];
            yarray = [48.1, 0, 0, 0];
            break;
        case/^オリオン/.test(search_word):
            xarray = [68.15, 0, 0, 0];
            yarray = [50.15, 0, 0, 0];
            break;
        case/体育寮/.test(search_word):
            xarray = [51.64, 0, 0, 0];
            yarray = [54.5, 0, 0, 0];
            break;
        case/^国際/.test(search_word):
            xarray = [53.35, 0, 0, 0];
            yarray = [73.8, 0, 0, 0];
            break;
        //31-40
        case/^法科/.test(search_word):
        case/^[1１一][5５五]/.test(search_word):
            xarray = [78.15, 0, 0, 0];
            yarray = [20.05, 0, 0, 0];
            break;
        case/^[9９九]別館$/.test(search_word):
            xarray = [69.8, 0, 0, 0];
            yarray = [10.75, 0, 0, 0];
            break;
        case/^[9９九]/.test(search_word):
            xarray = [66.5, 0, 0, 0];
            yarray = [13.15, 0, 0, 0];
            break; 
        case/^[1１十][8８八]/.test(search_word):
            xarray = [63.05, 0, 0, 0];
            yarray = [10.15, 0, 0, 0];
            break;
        case/^[rR][iI]/.test(search_word):
            xarray = [69.77, 0, 0, 0];
            yarray = [9.3, 0, 0, 0];
            break;
        case/^[5５五]別館$/.test(search_word):
            xarray = [74.2, 0, 0, 0];
            yarray = [14.3, 0, 0, 0];
            break;
        case/^[5５五]/.test(search_word):
            xarray = [75.7, 0, 0, 0];
            yarray = [12.18, 0, 0, 0];
            break;
        case/^[6６六]/.test(search_word):
            xarray = [80.35, 0, 0, 0];
            yarray = [13.85, 0, 0, 0];
            break;
        case/^[1１十][1１一]/.test(search_word):
            xarray = [74.28, 0, 0, 0];
            yarray = [8.9, 0, 0, 0];
            break;
        case/^[1１十][4４四]/.test(search_word):
            xarray = [77.72, 0, 0, 0];
            yarray = [6.45, 0, 0, 0];
            break;
        //41-50
        case/^流体/.test(search_word):
            xarray = [79.05, 0, 0, 0];
            yarray = [5.3, 0, 0, 0];
            break;
        case/^加工/.test(search_word):
            xarray = [80.35, 0, 0, 0];
            yarray = [8.2, 0, 0, 0];
            break;
        case/^コンクリ/.test(search_word):
            xarray = [72.3, 0, 0, 0];
            yarray = [12.9, 0, 0, 0];
            break;
        case/^[4４四]/.test(search_word):
            xarray = [78.8, 0, 0, 0];
            yarray = [16.6, 0, 0, 0];
            break;
        case/^環境/.test(search_word):
            xarray = [76.5, 0, 0, 0];
            yarray = [21.3, 0, 0, 0];
            break;
        case/^空気/.test(search_word):
            xarray = [80.65, 0, 0, 0];
            yarray = [18.15, 0, 0, 0];
            break;
        case/^高電/.test(search_word):
            xarray = [83.55, 0, 0, 0];
            yarray = [18.55, 0, 0, 0];
            break;
        case/水理衛生工学実験室南棟/.test(search_word):
            xarray = [55.45, 0, 0, 0];
            yarray = [7.7, 0, 0, 0];
            break;
        case/水理土木研修館/.test(search_word):
            xarray = [53.4, 0, 0, 0];
            yarray = [6.45, 0, 0, 0];
            break;
        case/水理衛生工学実験室/.test(search_word):
            xarray = [56.15, 0, 0, 0];
            yarray = [6.3, 0, 0, 0];
            break;
        //51-60
        case/水理衛生工学教室棟北棟/.test(search_word):
            xarray = [57.9, 0, 0, 0];
            yarray = [6.3, 0, 0, 0];
            break;
        case/^廃棄/.test(search_word):
            xarray = [56.35, 0, 0, 0];
            yarray = [4.4, 0, 0, 0];
            break;
        case /^[3３三]/.test(search_word):
　　　　    xarray = [60, 0, 0, 0];
            yarray = [8.1, 0, 0, 0];
            break;
        //16号館or薬学部棟
        case/^[1１十][6６六]/.test(search_word):
        case/^[薬]/.test(search_word):
            xarray = [53.65, 0, 0, 0];
            yarray = [16.55, 0, 0, 0];
            break;
        case/^[1１十][7７七]/.test(search_word):
            xarray = [49.58, 0, 0, 0];
            yarray = [14.72, 0, 0, 0];
            break;
        case/医学部研究棟本館/.test(search_word):
            xarray = [23.32, 0, 0, 0];
            yarray = [17.2, 0, 0, 0];
            break;
        case/医学部研究棟別館/.test(search_word):
            xarray = [23.1, 0, 0, 0];
            yarray = [22.75, 0, 0, 0];
            break;
        case/医学部講義棟/.test(search_word):
            xarray = [18.48, 0, 0, 0];
            yarray = [18.1, 0, 0, 0];
            break;
        case/実習棟$/.test(search_word):
            xarray = [17.1, 0, 0, 0];
            yarray = [20.2, 0, 0, 0];
            break;
        //61-70
        case/看護学科棟$/.test(search_word):
            xarray = [22.5, 0, 0, 0];
            yarray = [26.7, 0, 0, 0];
            break;
        case/医学部RI講義棟/.test(search_word):
            xarray = [18.63, 0, 0, 0];
            yarray = [25.35, 0, 0, 0];
            break;
    　　case/^アニマル/.test(search_word):
   　　     xarray = [15.5, 0, 0, 0];
            yarray = [22.6, 0, 0, 0];
            break;
        case/^先端/.test(search_word):
            xarray = [16.8, 0, 0, 0];
            yarray = [26.9, 0, 0, 0];
            break;
        case/^医学情報/.test(search_word):
            xarray = [18.5, 0, 0, 0];
            yarray = [13.3, 0, 0, 0];
            break;
        case/医学部愛好会室棟/.test(search_word):
            xarray = [16.05, 0, 0, 0];
            yarray = [16, 0, 0, 0];
            break;
        case/福岡大学病院本館/.test(search_word):
            xarray = [30.2, 0, 0, 0];
            yarray = [10.8, 0, 0, 0];
            break;
        case/福岡大学病院西別館/.test(search_word):
            xarray = [23.8, 0, 0, 0];
            yarray = [9.3, 0, 0, 0];
            break;
        case/^救命/.test(search_word):
            xarray = [34.75, 0, 0, 0];
            yarray = [9.95, 0, 0, 0];
            break;
        case/情報管理棟$/.test(search_word):
            xarray = [31.05, 0, 0, 0];
            yarray = [19.65, 0, 0, 0];
            break;
    　　case/研修センター$/.test(search_word):
    　　    xarray = [31.8, 0, 0, 0];
            yarray = [5.1, 0, 0, 0];
            break;
        //71-80
        case/^人文学部/.test(search_word):
            xarray = [34.12, 0, 0, 0];
            yarray = [2.2, 0, 0, 0];
            break;
        case/^臨床心理/.test(search_word):
            xarray = [34.8, 0, 0, 0];
            yarray = [0.8, 0, 0, 0];
            break;
        case/デイケア棟別館/.test(search_word):
            xarray = [32.7, 0, 0, 0];
            yarray = [-0.5, 0, 0, 0];
            break;
        case/デイケア棟$/.test(search_word):
            xarray = [31.2, 0, 0, 0];
            yarray = [1, 0, 0, 0];
            break;
        case/新館$/.test(search_word):
            xarray = [35.1, 0, 0, 0];
            yarray = [20.1, 0, 0, 0];
            break;
        case/プラザ$/.test(search_word):
            xarray = [40.3, 0, 0, 0];
            yarray = [22.7, 0, 0, 0];
            break;
        case/メディカルホール$/.test(search_word):
            xarray = [39.8, 0, 0, 0];
            yarray = [24.6, 0, 0, 0];
            break;
        case/テナント棟$/.test(search_word):
            xarray = [31.02, 0, 0, 0];
            yarray = [19.6, 0, 0, 0];
            break;
        case/梅林$/.test(search_word):
            xarray = [17.8, 0, 0, 0];
            yarray = [3.3, 0, 0, 0];
            break;
        //総合体育館
        case/^[総体]/.test(search_word):
            xarray = [38.8, 0, 0, 0];
            yarray = [46.95, 0, 0, 0];
            break;
        case/保育園$/.test(search_word):
            xarray = [16.85, 0, 0, 0];
            yarray = [6.1, 0, 0, 0];
            break;
        default:
            xarray = [0, 0, 0, 0];
            yarray = [0, 0, 0, 0];
            document.getElementById( 'search-text' ).value = "該当なし ";
    }

    pin(xarray[imgNum-1], yarray[imgNum-1]);
}
