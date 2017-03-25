 function initMap(n, rlat, rlng) {
        var mapid="maps" + n;
        var map = new google.maps.Map(document.getElementById(mapid), { // #mapidに地図を埋め込む
           center: new google.maps.LatLng(rlat, rlng),  // 地図の中心を指定
           zoom: 19, // 地図のズームを指定
         });

        var marker = new google.maps.Marker({ // マーカーの追加
        position: new google.maps.LatLng(rlat, rlng), // マーカーを立てる位置を指定
        map: map, // マーカーを立てる地図を指定
       });
}