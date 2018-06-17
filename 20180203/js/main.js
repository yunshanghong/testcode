// $("#submitBtn")=>jQuery選擇器
// document.getElementById("submitBtn")=>原生JavaScript

// 當畫面元素(document)載入完成後，主程式才開始進行
// .ready(事件處理器) 載入完成的事件
// 匿名函式 function(){}

$(document).ready(function () {
    const mapStyles = [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#c46de6"
            }]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#634c91"
            }]
        },
        {
            "featureType": "administrative.province",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#041f1e"
            }]
        },
        {
            "featureType": "administrative.province",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#8db7ad"
            }]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#36e8de"
            }]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#2f4e4d"
            }]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#b9af70"
            }]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#756137"
            }]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "color": "#ffffff"
                },
                {
                    "weight": "1"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [{
                    "weight": "0.01"
                },
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "gamma": "0.6"
                },
                {
                    "lightness": "0"
                },
                {
                    "saturation": "-100"
                },
                {
                    "weight": "1"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                    "color": "#eec3c3"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "color": "#e75555"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#97bc80"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#00ffdf"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#9e7f26"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#dfc079"
            }]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#c2ebfb"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ];

    console.log("主程式開始運行");
    // 啟用wow.js
    new WOW().init();

    // 偵測使用者滾動視窗的事件
    // .bind("互動動作", function(){事件處理器})綁定
    // "click"點擊,"scroll"滾動,"resize"縮放視窗
    $(window).bind("scroll", function () {
        // 取得使用者目前滾動到高度
        // .scrollTop() =>取得滾動高度
        const scrollingHeight = $(window).scrollTop();
        console.log(scrollingHeight);
        if (scrollingHeight > 500) {
            // 把id叫#goBackBtn之元素顯示出來
            // $("#goBackBtn").show();
            $("#goBackBtn").fadeIn(1000);
        } else {
            // 把#goBackBtn隱藏
            // $("#goBackBtn").hide();
            $("#goBackBtn").fadeOut(1000);
        }
    });

    // 設定.nav-link的點擊事件
    $("#goBackBtn").click(function () {
        // $(this) =>被點擊的這個nav-link
        // console.log($(this)[0]);
        // [step1]取得目標
        // jQuery => .attr("href")=>取得屬性值
        const target = $(this).attr("href");
        // [step2]取得目標位置
        // .offset()取得座標位置(top, left)
        const targetPosition = $(target).offset().top;
        // [step3]設定動畫秒數(1000=1s)
        const duration = 500;
        // [step4]設定動畫
        // .animate({},1000,)
        // .stop()停止目前有的動畫
        const navbarHeight = 56;
        $("html,body").stop().animate({
            // 設定滾動目標的位置
            scrollTop: targetPosition - navbarHeight
        }, duration);
        console.log(targetPosition);
    });

    // "建立"啟用map的function
    function initMap() {
        console.log("現在開始啟用google map");
        // 經緯度{}
        const myLocation = {
            // 標注地點經緯度
            lat: 25.0374369,
            lng: 121.5416524
        };
        // 選擇畫面上要放地圖之元素
        const mapElement = $("#map")[0]; //->  <div id="map"></div>
        console.log(mapElement);
        // $("#Map") ->[div#map]
        // <div id="map"></div>
        // 建立地圖
        // .Map("<div id="map"></div>",{} )
        const map1 = new google.maps.Map(mapElement, {
            center: myLocation,
            zoom: 18,
            draggable: true,
            styles: mapStyles
        });
        // 建立座標點
        // .Marker({})
        const marker = new google.maps.Marker({
            // 設定座標點的座標(position)
            position: myLocation,
            // 設定哪一張地圖(map)要放這個marker
            map: map1
            // icon:"./img/marker.png"
        });
    }
    // 使用initMap()
    initMap();
});