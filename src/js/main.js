
$(document).ready(function(){
$('input#add').on("click",function(){
    $('#dialog').dialog("open");
})

//加一个文本框
function addSpot(){
$('#spots').append(
'<div class = "spot">'+'<p>文本框：'+
'<input type = "text" name="spot_title"/>'+
'<input type = "button" class = "remove" value="Delete"/>'+'<p/>'+
'</div>').find("input.remove").click(function(){
$(this).parent().remove();
}
)
}
//加一个日期框
function addDate(){
    $('#spots').append(
    '<div class = "spot">'+'<p>日期框：'+
    '<input type = "text" name="spot_title" class="datepicker"/>'+
    '<input type = "button" class = "remove" value="Delete"/>'+'<p/>'+
    '</div>').find("input.remove").click(function(){
    $(this).parent().remove();
    })
    $( ".datepicker" ).datepicker();  //加入日期框UI
}
//做一个对话框
$("#dialog").dialog({
    resizable:false,
    autoOpen: false,  //不让其默认出来
    height:200,
    modal:true,
    buttons:{
        "文本框":function(){
            $(this).dialog(addSpot());
        },
        "日期框":function(){
            $(this).dialog(addDate());
        }
    }
   })


//预览/编辑
$('#view').click(function(){
    console.log($('#view').val())
    if($('#view').val() == "预览" ){
    $('.remove').hide();
    $('#add').hide();
    $(this).val("编辑")
    }
    else {
    $('.remove').show();
    $('#add').show();
    $(this).val("预览")};
  
    
})




});