
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
        case/大学本館/.test(search_word):
            xarray = [72.6, 0, 0, 0];
            yarray = [29.8, 0, 0, 0];
            break;
        case/^[7７七]/.test(search_word):
            xarray = [71.2, 0, 0, 0];
            yarray = [31.5, 0, 0, 0];
            break;
        case/学生部事務室棟/.test(search_word):
            xarray = [65.4, 0, 0, 0];
            yarray = [31, 0, 0, 0];
            break;
        case/エクステンションセンター/.test(search_word):
            xarray = [67.2, 0, 0, 0];
            yarray = [30, 0, 0, 0];
            break;
        // case/健康管理センター/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        case /^[1１一][1１2２3３号][1１2２3３館]/.test(search_word):
            xarray = [69.2, 0, 0, 0];
            yarray = [23, 0, 0, 0];
            break;
        case /^[aA]/.test(search_word):
            xarray = [67.5, 0, 0, 0];
            yarray = [25, 0, 0, 0];
            break;
         case/^[8８八]/.test(search_word):
            xarray = [59.9, 0, 0, 0];
            yarray = [30.5, 0, 0, 0];
            break;
        case/^[1１十][0０号]/.test(search_word):
            xarray = [57, 0, 0, 0];
            yarray = [35.5, 0, 0, 0];
            break;
        //中央図書館及び陽だまり
        // case/^[中図]/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        // case/^[ひ陽]/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        //11-20
        case /^[2２二]/.test(search_word):
            xarray = [65.8, 0, 0, 0];
            yarray = [17.2, 0, 0, 0];
            break;
        case /^[文]/.test(search_word):
            xarray = [52.3, 0, 0, 0];
            yarray = [23.5, 0, 0, 0];
            break;
        //プール
        case/^[ぷプ]/.test(search_word):
            xarray = [55.5, 0, 0, 0];
            yarray = [43, 0, 0, 0];
            break;
        case/^[第][2２二][記]/.test(search_word):
            xarray = [24.4, 0, 0, 0];
            yarray = [41.8, 0, 0, 0];
            break;
        case/スカッシュ/.test(search_word):
            xarray = [22, 0, 0, 0];
            yarray = [45.5, 0, 0, 0];
            break;
        case/体操ビット棟/.test(search_word):
            xarray = [24.2, 0, 0, 0];
            yarray = [46.2, 0, 0, 0];
            break;
        case/スポーツ科学部研究室棟/.test(search_word):
            xarray = [27.4, 0, 0, 0];
            yarray = [47.2, 0, 0, 0];
            break;
        case/陸上競技場部室棟/.test(search_word):
            xarray = [33.5, 0, 0, 0];
            yarray = [31.7, 0, 0, 0];
            break;
        case/駐車場$/.test(search_word):
            xarray = [27.4, 0, 0, 0];
            yarray = [31, 0, 0, 0];
            break;
        //21-30
        // case/^[6６六][0０十]/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        case/ヘリオスプラザ/.test(search_word):
            xarray = [55, 0, 0, 0];
            yarray = [34.8, 0, 0, 0];
            break;
        case/学而会館/.test(search_word):
            xarray = [64.4, 0, 0, 0];
            yarray = [35, 0, 0, 0];
            break;
        case/有朋会館/.test(search_word):
            xarray = [58.8, 0, 0, 0];
            yarray = [40.8, 0, 0, 0];
            break;
        case/自修寮/.test(search_word):
            xarray = [64.6, 0, 0, 0];
            yarray = [48.5, 0, 0, 0];
            break;
        case/留学生会館片江/.test(search_word):
            xarray = [67.8, 0, 0, 0];
            yarray = [45.8, 0, 0, 0];
            break;
        case/ビクトリーホール/.test(search_word):
            xarray = [70.5, 0, 0, 0];
            yarray = [45.2, 0, 0, 0];
            break;
        case/愛好会会館/.test(search_word):  
            xarray = [69.5, 0, 0, 0];
            yarray = [48.5, 0, 0, 0];
            break;
        case/オリオンホール/.test(search_word):
            xarray = [68.1, 0, 0, 0];
            yarray = [50.8, 0, 0, 0];
            break;
        case/体育寮/.test(search_word):
            xarray = [51.7, 0, 0, 0];
            yarray = [55.5, 0, 0, 0];
            break;
        case/国際交流会館/.test(search_word):
            xarray = [53.4, 0, 0, 0];
            yarray = [74.2, 0, 0, 0];
            break;
        //31-40
        case/法科大学院/.test(search_word):
        case/^[1１一][5５五]/.test(search_word):
            xarray = [78.2, 0, 0, 0];
            yarray = [20.5, 0, 0, 0];
            break;
        case/^[9９九]別館$/.test(search_word):
            xarray = [69.8, 0, 0, 0];
            yarray = [10.8, 0, 0, 0];
            break;
        case/^[9９九]/.test(search_word):
            xarray = [68.5, 0, 0, 0];
            yarray = [13.8, 0, 0, 0];
            break; 
        case/^[1１十][8８八]/.test(search_word):
            xarray = [63, 0, 0, 0];
            yarray = [10.5, 0, 0, 0];
            break;
        case/RIセンター/.test(search_word):
            xarray = [70, 0, 0, 0];
            yarray = [9.8, 0, 0, 0];
            break;
        case/^[5５五]別館$/.test(search_word):
            xarray = [74.2, 0, 0, 0];
            yarray = [14.7, 0, 0, 0];
            break;
        case/^[5５五]/.test(search_word):
            xarray = [75.7, 0, 0, 0];
            yarray = [12.5, 0, 0, 0];
            break;
        case/^[6６六]/.test(search_word):
            xarray = [80.4, 0, 0, 0];
            yarray = [14.4, 0, 0, 0];
            break;
        case/^[1１十][1１一]/.test(search_word):
            xarray = [75.9, 0, 0, 0];
            yarray = [9.5, 0, 0, 0];
            break;
        case/^[1１十][4４四]/.test(search_word):
            xarray = [77.8, 0, 0, 0];
            yarray = [6.2, 0, 0, 0];
            break;
        //41-50
        // case/流体工学実験室/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        // case/加工プロセス実験室/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        // case/コンクリート実験室/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        case/^[4４四]/.test(search_word):
            xarray = [78.7, 0, 0, 0];
            yarray = [17.2, 0, 0, 0];
            break;
        // case/環境科学技術実証施設棟/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        // case/空気力学実験室/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        // case/高電圧実験室/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        // case/数理衛生工学実験室南棟/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        // case/水理土木研修館/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        // case/数理衛生工学実験室/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        //51-60
        // case/水理衛生工学教室棟北棟/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        // case/廃棄物埋立大型シミュレータ棟/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        case /^[3３三]/.test(search_word):
　　　　    xarray = [60, 0, 0, 0];
            yarray = [8.8, 0, 0, 0];
            break;
        //16号館or薬学部棟
        case/^[1１十][6６六]/.test(search_word):
            xarray = [54.5, 0, 0, 0];
            yarray = [16.7, 0, 0, 0];
            break;
        // case/^[薬]/.test(search_word):
        //     xarray = [0, 0, 0, 0];
        //     yarray = [0, 0, 0, 0];
        //     break;
        case/^[1１十][7７七]/.test(search_word):
            xarray = [49.7, 0, 0, 0];
            yarray = [15.1, 0, 0, 0];
            break;
        case/医学部研究棟本館/.test(search_word):
            xarray = [23.3, 0, 0, 0];
            yarray = [17.8, 0, 0, 0];
            break;
//         case/医学部研究棟別館/.test(search_word):
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
//         case/医学部講義棟/.test(search_word):
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
//         case/医学部実習棟/.test(search_word):
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
//         //61-70
//         case/看護学科棟$/.test(search_word):
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
//         case/医学部RI講義棟/.test(search_word):
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
//     　　case/アニマルセンター/.test(search_word):
//    　　     xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
//         case/先端分子医学研究所/.test(search_word):
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
//         case/医学情報センター棟/.test(search_word):
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
//         case/医学部愛好会室棟/.test(search_word):
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
//         case/福岡大学病院本館/.test(search_word):
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
//         case/西別館$/.test(search_word):
//             xarray = [0, 0, 0, 0];
//             yarray = [0, 0, 0, 0];
//             break;
        case/救命救急センター棟/.test(search_word):
            xarray = [34.8, 0, 0, 0];
            yarray = [10, 0, 0, 0];
            break;
        case/福岡大学病院情報管理等/.test(search_word):
            xarray = [31.1, 0, 0, 0];
            yarray = [19.7, 0, 0, 0];
            break;
    　　case/福岡大学病院研修センター/.test(search_word):
    　　    xarray = [31.8, 0, 0, 0];
            yarray = [5.1, 0, 0, 0];
            break;
        //71-80
        case/^人文学部/.test(search_word):
            xarray = [34.1, 0, 0, 0];
            yarray = [2.6, 0, 0, 0];
            break;
        case/^臨床心理/.test(search_word):
            xarray = [34.8, 0, 0, 0];
            yarray = [0.8, 0, 0, 0];
            break;
        case/^デイケア棟/.test(search_word):
            xarray = [32.7, 0, 0, 0];
            yarray = [0, 0, 0, 0];
            break;
        case/福岡大学病院デイケア棟/.test(search_word):
            xarray = [31.2, 0, 0, 0];
            yarray = [1, 0, 0, 0];
            break;
        case/福岡大学病院新館/.test(search_word):
            xarray = [38, 0, 0, 0];
            yarray = [20.2, 0, 0, 0];
            break;
        case/福大プラザ/.test(search_word):
            xarray = [40.3, 0, 0, 0];
            yarray = [22.7, 0, 0, 0];
            break;
        case/福大メディカルホール/.test(search_word):
            xarray = [39.8, 0, 0, 0];
            yarray = [19.6, 0, 0, 0];
            break;
        case/福岡大学病院前テナント棟/.test(search_word):
            xarray = [31.1, 0, 0, 0];
            yarray = [19.6, 0, 0, 0];
            break;
        case/留学生会館梅林/.test(search_word):
            xarray = [17.8, 0, 0, 0];
            yarray = [3.3, 0, 0, 0];
            break;
        //総合体育館
        case/^[総体]/.test(search_word):
            xarray = [39.8, 0, 0, 0];
            yarray = [47.2, 0, 0, 0];
            break;
        case/保育園$/.test(search_word):
            xarray = [16.9, 0, 0, 0];
            yarray = [6.1, 0, 0, 0];
            break;
        default:
            xarray = [0, 0, 0, 0];
            yarray = [0, 0, 0, 0];
            document.getElementById( 'search-text' ).value = "該当なし ";
    }

    pin(xarray[imgNum-1], yarray[imgNum-1]);
}
