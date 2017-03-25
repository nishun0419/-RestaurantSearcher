function DispPaging(results){
	 $('#Freeword').val(freeword);
              $('#result').empty();
              $('#total').text("検索件数" + results.total_hit_count + "件");
              var totalpoint = Math.floor(results.total_hit_count / 10);

              if(results.total_hit_count % 10 != 0){
                totalpoint++;
              }
              $('.currentpage').empty();
                for(var i = 1; i <= totalpoint; i++){
                  $('.currentpage').append('<option value="'+i+'">' + i + '</option>');
                }
                $('.currentpage').val(currentpage);

              $('.totalpoint').text(totalpoint);  //総ページ数の表示
              $('.currentpoint').text(currentpage); //現在のページ番号
              $('.paging').css('visibility' , 'visible'); //ページング表示

              if(currentpage === totalpoint){　//最後のページを読み込んだときの処理
                $('.next').css('visibility' , 'hidden');
              }
              else{
                $('.next').css('visibility' , 'visible');
              }

              if(currentpage === 1){ //最初のページを読み込んだときの処理
                $('.back').css('visibility' , 'hidden');
              }
              else{
                $('.back').css('visibility' , 'visible');
              }
}