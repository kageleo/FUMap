
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
            xarray = [67.5, 65.4, 67.2, 67.2];
            yarray = [25, 25.9, 40.8, 40.8];
            break;
        case "1":
            xarray = [69.2, 0, 0, 0];
            yarray = [23, 0, 0, 0];
            break;
        case "2":
            xarray = [65.8, 0, 0, 0];
            yarray = [17.2, 0, 0, 0];
            break;
        case "3":
            xarray = [60, 0, 0, 0];
            yarray = [8.8, 0, 0, 0];
            break;
        case "4":
            xarray = [78.7, 0, 0, 0];
            yarray = [17.2, 0, 0, 0];
            break;
        case "5":
            xarray = [75.7, 0, 0, 0];
            yarray = [12.5, 0, 0, 0];
            break;
        case "6":
            xarray = [80.4, 0, 0, 0];
            yarray = [14.4, 0, 0, 0];
            break;
        case "7":
            xarray = [71.2, 0, 0, 0];
            yarray = [31.5, 0, 0, 0];
            break;
        case "8":
            xarray = [59.9, 0, 0, 0];
            yarray = [30.5, 0, 0, 0];
            break;
        case "9":
            xarray = [68.5, 0, 0, 0];
            yarray = [13.8, 0, 0, 0];
            break;
        case "10":
            xarray = [57, 0, 0, 0];
            yarray = [33.3, 0, 0, 0];
            break;
        case "11":
            xarray = [75.9, 0, 0, 0];
            yarray = [9.5, 0, 0, 0];
            break;
        case "14":
            xarray = [77.7, 0, 0, 0];
            yarray = [6.5, 0, 0, 0];
            break;
        case "16":
            xarray = [54.5, 0, 0, 0];
            yarray = [16.7, 0, 0, 0];
            break;
        case "17":
            xarray = [49.7, 0, 0, 0];
            yarray = [15.1, 0, 0, 0];
            break;
        case "18":
            xarray = [63, 0, 0, 0];
            yarray = [10.5, 0, 0, 0];
            break;
        case "lp":
            xarray = [34.1, 0, 0, 0];
            yarray = [2.6, 0, 0, 0];
            break;
        case "総合体育館":
            xarray = [39.8, 0, 0, 0];
            yarray = [47.2, 0, 0, 0];
            break;
        case "第二記念会堂":
            xarray = [24.4, 0, 0, 0];
            yarray = [41.8, 0, 0, 0];
            break;
        case "大学本館":
            xarray = [72.6, 0, 0, 0];
            yarray = [29.8, 0, 0, 0];
            break;
        case "学生部事務室棟":
            xarray = [65.4, 0, 0, 0];
            yarray = [31, 0, 0, 0];
            break;
        case "キャリア":
            xarray = [67.2, 0, 0, 0];
            yarray = [30, 0, 0, 0];
            break;
        case "文系センター":
            xarray = [52.3, 0, 0, 0];
            yarray = [23.5, 0, 0, 0];
            break;
        case "室内プール":
            xarray = [50.9, 0, 0, 0];
            yarray = [30.2, 0, 0, 0];
            break;
        case "プール":
            xarray = [55.5, 0, 0, 0];
            yarray = [43, 0, 0, 0];
            break;
        case "スカッシュ":
            xarray = [22, 0, 0, 0];
            yarray = [45.5, 0, 0, 0];
            break;
        case "体操ピット":
            xarray = [24.2, 0, 0, 0];
            yarray = [46.2, 0, 0, 0];
            break;
        case "スポーツ科学部":
            xarray = [27.4, 0, 0, 0];
            yarray = [47.2, 0, 0, 0];
            break;
        case "陸上競技上部室":
            xarray = [33.5, 0, 0, 0];
            yarray = [31.7, 0, 0, 0];
            break;
        case "大学病院有料駐車場":
            xarray = [27.4, 0, 0, 0];
            yarray = [31, 0, 0, 0];
            break;
        case "ヘリオス":
            xarray = [55, 0, 0, 0];
            yarray = [34.8, 0, 0, 0];
            break;
        case "学而会館":
            xarray = [64.4, 0, 0, 0];
            yarray = [35, 0, 0, 0];
            break;
        case "有朋会館":
            xarray = [58.8, 0, 0, 0];
            yarray = [40.8, 0, 0, 0];
            break;
        case "自修寮":
            xarray = [64.6, 0, 0, 0];
            yarray = [48.5, 0, 0, 0];
            break;
        case "留学生":
            xarray = [67.8, 0, 0, 0];
            yarray = [45.8, 0, 0, 0];
            break;
        case "ビクトリーホール":
            xarray = [70.5, 0, 0, 0];
            yarray = [45.2, 0, 0, 0];
            break;
        case "愛好会会館":
            xarray = [69.5, 0, 0, 0];
            yarray = [48.5, 0, 0, 0];
            break;
        case "オリオンホール":
            xarray = [68.1, 0, 0, 0];
            yarray = [50.8, 0, 0, 0];
            break;
        case "体育寮":
            xarray = [51.7, 0, 0, 0];
            yarray = [55.5, 0, 0, 0];
            break;
        case "国際交流会館":
            xarray = [53.4, 0, 0, 0];
            yarray = [74.2, 0, 0, 0];
            break;
        case "法科大学院":
            xarray = [78.2, 0, 0, 0];
            yarray = [20.5, 0, 0, 0];
            break;
        case "9号館別館":
            xarray = [69.8, 0, 0, 0];
            yarray = [10.8, 0, 0, 0];
            break;
        case "RIセンター":
            xarray = [70, 0, 0, 0];
            yarray = [9.8, 0, 0, 0];
            break;
        case "5号館別館":
            xarray = [74.2, 0, 0, 0];
            yarray = [14.7, 0, 0, 0];
            break;
        case "流体工学実験室":
            xarray = [79, 0, 0, 0];
            yarray = [5.5, 0, 0, 0];
            break;
        case "加工プロセス":
            xarray = [80.35, 0, 0, 0];
            yarray = [8.2, 0, 0, 0];
            break;
        case "コンクリート":
            xarray = [72.3, 0, 0, 0];
            yarray = [13, 0, 0, 0];
            break;
        case "環境科学技術":
            xarray = [76.5, 0, 0, 0];
            yarray = [21.3, 0, 0, 0];
            break;        
        case "空気力学実験室":
            xarray = [79.1, 0, 0, 0];
            yarray = [18.6, 0, 0, 0];
            break;
        case "高電圧実験室":
            xarray = [83.6, 0, 0, 0];
            yarray = [18.6, 0, 0, 0];
            break;
        case "水理衛生工学実験室南棟":
            xarray = [55.45, 0, 0, 0];
            yarray = [8.1, 0, 0, 0];
            break;
        case "水理土木研修館":
            xarray = [53.5, 0, 0, 0];
            yarray = [6.8, 0, 0, 0];
            break;
        case "水理衛生工学実験室":
            xarray = [56.1, 0, 0, 0];
            yarray = [6.7, 0, 0, 0];
            break;
        case "水理衛生工学実験室北棟":
            xarray = [57.9, 0, 0, 0];
            yarray = [6.6, 0, 0, 0];
            break;
        case "廃棄物理":
            xarray = [56.3, 0, 0, 0];
            yarray = [4.8, 0, 0, 0];
            break;
        case "3号館第三別館":
            xarray = [60, 0, 0, 0];
            yarray = [8.3, 0, 0, 0];
            break;
        case "医学部研究棟本館":
            xarray = [23.3, 0, 0, 0];
            yarray = [17.8, 0, 0, 0];
            break;
        case "医学部研究棟別館":
            xarray = [23.1, 0, 0, 0];
            yarray = [23, 0, 0, 0];
            break;
        case "医学部講義棟":
            xarray = [18.5, 0, 0, 0];
            yarray = [18.2, 0, 0, 0];
            break;
        case "医学部実習棟":
            xarray = [17.1, 0, 0, 0];
            yarray = [20.2, 0, 0, 0];
            break;
        case "医学部看護学科棟":
            xarray = [22.6, 0, 0, 0];
            yarray = [27, 0, 0, 0];
            break;
        case "医学部RI":
            xarray = [18.5, 0, 0, 0];
            yarray = [25.7, 0, 0, 0];
            break;
        case "":
            xarray = [0, 0, 0, 0];
            yarray = [0, 0, 0, 0];
            break;
        case "":
            xarray = [0, 0, 0, 0];
            yarray = [0, 0, 0, 0];
            break;
        case "":
            xarray = [0, 0, 0, 0];
            yarray = [0, 0, 0, 0];
            break;
        case "":
            xarray = [0, 0, 0, 0];
            yarray = [0, 0, 0, 0];
            break;
        case "":
            xarray = [0, 0, 0, 0];
            yarray = [0, 0, 0, 0];
            break;
        case "":
            xarray = [0, 0, 0, 0];
            yarray = [0, 0, 0, 0];
            break;
        case "":
            xarray = [0, 0, 0, 0];
            yarray = [0, 0, 0, 0];
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
