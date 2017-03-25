    //半径を格納する変数 （初期値は半径300m）
    var ran = 1;
    //現在のページを表示する
    var currentpage = 1;
    //プルダウンで選択した値の格納変数(初期値は0)
    var current = 0;
    //フリーワード
    var freeword;

    function Serachrange(obj){
      var idx = obj.selectedIndex;
      ran= obj.options[idx].value;
    }
    function Serachcurrent(obj){
      var idx = obj.selectedIndex;
      current = obj.options[idx].value;
      currentpage = parseInt(current);
      current = 0;
      Serach(2);
    }
    function Serach(n){
      if(n === 0){   //検索ボタンクリック時の処理
        currentpage = 1;
        $('.Dispnull').css('display' , 'none');
         freeword = $('#Freeword').val();
      }
      else if(n === 1 || n === -1){           //next,backクリック時の処理
        currentpage = currentpage + n;
      }
      else{
        //プルダウンの処理
      }
      // Geolocation APIの呼び出し
      navigator.geolocation.getCurrentPosition(function(pos) {
          var lat = pos.coords.latitude;
          var lng = pos.coords.longitude;
          $('.loadingback').css('display' , 'block');         //loading画像表示
          // ぐるなびAPIの呼び出し
          $.get(
            'http://api.gnavi.co.jp/RestSearchAPI/20150630/',
            {
              keyid: '88552a7d53b8c1e778800023b828199a',
              format: 'json',
              latitude: lat,
              longitude: lng,
              range: ran,
              freeword : freeword,
              offset_page: currentpage,
              input_coordinates_mode: 2,
              coordinates_mode: 2,

            },
            function(response) {
              // ぐるなびAPIの読み込み
              var results = response;
              if(results.total_hit_count === undefined){
                $('#result').empty();
                $('#total').text('検索件数0件');
                $('.Dispnull').css('display' , 'block');
                $('.paging').css('visibility' , 'hidden'); //ページング非表示
                $('.back').css('visibility' , 'hidden');
                $('.next').css('visibility' , 'hidden');
                $('.loadingback').css('display' , 'none');
                return;
              }
              DispPaging(results);    //ページング生成
              for (var count = 0; count <= results.rest.length; count++) {
                DispResultBox(results.rest[count], count);   //検索結果生成
                console.debug(results.rest[count].name);
              }
            },
            'jsonp'
          )
        },function(error){    //位置情報の取得の失敗時の処理
            switch(error.code){
              case 1:
                alert('位置情報の利用が許可されていません');
                break;
              case 2:
                alert('デバイスの位置が判定できません');
                break;
              case 3:
                alert('タイムアウトしました');        //一応の記述
                break;
        }
      },{enableHighAccuracy: true})
    }