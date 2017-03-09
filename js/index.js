(function(){
  //页面
  var page1 = function(){
    return `
    <div class="page1">
      <table>
        <tr>
          <td>姓名：</td>
          <td>王小天</td>
        </tr>
      </table>
    </div>
    `
  };
  var page2 = function(){
    return
  };
  var page3 = function(){
    return
  };

  var page4 = function(){
    return
  };
  var arr = [page1,page2,page3,page4]

  //页面切换
  $('#content').html(arr[0]);

  $('#nav').on('click','li',function(){
    $('#nav li').removeClass('selected name');
    $(this).toggleClass('selected');
    index=$(this).index();
    $('#content').html('');

    $.ajax({
      url: './data/data.json',
      type: 'GET',
      dataType:'json',
      success:function(data){
        console.log(data);
        $('#content').html(data.list[0].item);
      }
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    });

  });
})();
//加载页面
