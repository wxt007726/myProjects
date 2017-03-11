(function(){
  $('#content').load('./page'+0+'.html');
  $('#nav').on('click','li',function(){
    $('#nav li').removeClass('selected name');
    $(this).toggleClass('selected');
    index=$(this).index();
    $('#content').load('./page'+index+'.html');
  });
})();
