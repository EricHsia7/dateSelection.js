$('body').append("<style>@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;900&display=swap);@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css);.date-selection-blur{position:fixed;top:0;left:0;width:100%;height:100%;transition:.5s;background:rgba(0,0,0,0);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);-webkit-user-select:none;-webkit-appearance:none;outline:0;-webkit-tap-highlight-color:transparent}.date-selection-box{position:fixed;top:50%;left:50%;width:310px;height:300px;transform:translate(-50%,-50%);transition:.3s;background:rgba(0,0,0,.6);border-radius:12px;overflow:hidden;-webkit-user-select:none}.date-selection-box *{-webkit-appearance:none;outline:0;-webkit-tap-highlight-color:transparent}.date-selection{position:absolute;top:55px;left:0;width:300px;height:230px;background:rgba(0,0,0,0);word-break:break-all;padding:5px;transition:.3s;-webkit-user-select:none}.date-selection span{background:rgba(0,0,0,0);height:30px;width:30px;font-size:20px;display:flex;justify-content:center;align-items:center;margin:1px;padding:9px 9px;border-radius:99em;float:left;color:#fff;transition:.15s;font-family:'Noto Sans TC',sans-serif;font-weight:500;-webkit-user-select:none}.date-selection-cr{content:'';position:absolute;top:0;left:0;width:300px;height:45px;padding:5px;background:rgba(0,0,0,0);border-radius:20px 20px 0 0}.date-selection-cr button#add,.date-selection-cr button#de{position:absolute;top:0;color:#fff;border:none;background:rgba(0,0,0,0);height:55px;width:55px;display:flex;justify-content:center;align-items:center;float:right;padding:0;margin-left:3px;border-radius:0;transition:.3s;font-size:20px;color:#147efb}.date-selection-cr button#de{right:55px}.date-selection-cr button#add{right:0}.date-selection-cr p{position:absolute;top:0;left:0;height:45px;width:180px;padding:5px;padding-left:15px;color:#fff;font-family:'Noto Sans TC',sans-serif;font-weight:500;font-size:23px;background:rgba(0,0,0,0);margin:0;transition:.5s;display:flex;align-items:center}</style>");
var inpu = '' ;
var dt = new Date();
var selectdate = dt.getDate() ;
var selectmonth = dt.getMonth() ;
var selectyear = dt.getFullYear() ;
function getMonthDay(yyy,mmmmm) {
  if(yyy&&mmmmm){
    var dee = new Date(yyy,mmmmm,0) ;
    var nee = dee.getDate();
    return nee
  }else{
    return 'error'
  }
}

function prtdate() {
      $(inpu).val(selectyear + '/' + (selectmonth+1) + '/' + $('.date-selection span[sel="1"]').html());
  
  $('.date-selection').html('');
var d = 0 ;
for (var i=0; i<getMonthDay(selectyear,(selectmonth+1)) ; i++) {
  d +=1 ;
  $('.date-selection').append('<span id="' + selectmonth + '-'+ d + '">' + d + '</span>');
  
}
  $('.date-selection span').click(function() {
  $('.date-selection span').css({'background':'rgba(0, 0, 0, 0)','font-weight':'500'}).attr('sel','0');
$(this).css({'background':'#147efb','font-weight':'700'}).attr('sel','1');
    
    $(inpu).val(selectyear + '/' + (selectmonth+1) + '/' + $('.date-selection span[sel="1"]').html());
    
    $('.date-selection-cr p').html(selectyear + '年' + (selectmonth+1) + '月');
});
  
  
  $('#' + selectmonth + '-' +  dt.getDate()).click()
  
  
  
  if(getMonthDay(selectyear,(selectmonth+1)) < 31) {
    $('.date-selection').css({'height':'250px','width':'300px'});
    $('.date-selection-box').css({'height':'315px','width':'310px'});
  }
  else {
    $('.date-selection').css({'height':'300px','width':'300px'});
    $('.date-selection-box').css({'height':'365px','width':'310px'});
  }
}






function dateSelectionjsfn(selecter) {
  
  $(selecter).click(function() {
   dt = new Date();
 selectdate = dt.getDate() ;
 selectmonth = dt.getMonth() ;
 selectyear = dt.getFullYear() ;
    inpu = $(this) ;
    $(this).blur();
  $('body').append('<div class="date-selection-blur"></div><div class="date-selection-box"><div class="date-selection"></div><div class="date-selection-cr"><p>----年-月</p> <button id="add"><i class="fas fa-chevron-right"></i></button> <button id="de"><i class="fas fa-chevron-left"></i></button></div></div>');
    prtdate();
      $('.date-selection-blur').click(function() {
    $('.date-selection-box,.date-selection-blur').remove();
  });
    $('.date-selection-cr #de').click(function() {
  if(selectmonth < 1) {
    selectmonth =11;
    selectyear -=1 ;
  }
  else {
    selectmonth -=1;
  }
  prtdate();
});
$('.date-selection-cr #add').click(function() {
 if(selectmonth > 10) {
    selectmonth =0;
   selectyear +=1 ;
  }
  else {
    selectmonth +=1;
  }
  prtdate();
});
  });
}


dateSelectionjsfn('#i1,#i2');