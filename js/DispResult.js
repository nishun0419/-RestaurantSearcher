 function DispResultBox(result,i){
     $('#result').append($('<div class ="resultbox"></div>')
               .append($('<h2 class="name"></h2>')
               .append($('<a></a>')
               .text(result.name)
               .attr({'href': result.url , 'target' : "_blank"})))  //店名表示
               .append($('<p id="access'+i+'"></p>')
               .text(result.access.line + result.access.station + result.access.walk + '分'))  //アクセス表示
               .append($('<div class="samune"></div>')
               .append($('<img id="samuneimg'+i+'">')
               .attr({'src' : result.image_url.shop_image1,}))
               .append($('<p id="samunep'+i+'"></p>')
               .text('提供:ぐるなび')))  //画像表示
               .append(('<div class="cmap" id="maps'+i+'"></div>'))  //map表示

               );
             initMap(i , result.latitude , result.longitude);   //Google Mapの読み込み 
               //loading画像非表示
             $('.loadingback').css('display' , 'none');
             if(result.image_url.shop_image1.length === undefined){   //画像がなかった時の処理
                $('#samuneimg'+i).attr('src' , 'image/noimage.jpg');  //画像提供元: EC design（デザイン)
                $('#samunep'+i).text("");
             }
             if(result.access.line.length === undefined){   //アクセス情報の取得に失敗した時の処理
                $('#access'+i).text("");
             }
}
