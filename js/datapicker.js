$(function() {
        $('#datepicker').datepicker({
                    inline: true,
                onClose: function(dateText, inst) { get();}
                });
    });
var current = 17.42;
var arrCurrency = new Array();
  arrCurrency["usd"] = 1;
  arrCurrency["eur"] = 0.8805;
  arrCurrency["jpy"] = 117.283;
    arrCurrency["gbp"] = 0.6575;
  arrCurrency["cad"] = 1.2546;
  arrCurrency["chf"] = 0.9228;
    arrCurrency["inr"] = 61.8424;
  arrCurrency["cny"] = 6.2521;
  arrCurrency["rub"] = 67.8995;
    arrCurrency["zar"] = 11.472;
  arrCurrency["aud"] = 1.2856;
var ounce = 1 ;
var gram = 0.0321507465686;
var kilo = 32.1507465686;
var t =1; 
var z=current;
var amount = 1;
var measure = "O";
function IsNum(s){if (s!=null && s!=""){return !isNaN(s);}return false;}
function get()
{
    amount = $("#silveramount").val();
    measure = $("#silvermeasure").val();
    var currency = $("#selectCurrency").val();
if(!IsNum(amount)){return false;}
if($("#c").attr("checked")=="checked")
{
    t = arrCurrency[currency];
    z = current;
        if( measure =="O" )
    {
        var result = amount * t *  z;
        $("#silverresult").val(result.toFixed(2));
    }
    else if ( measure =="G" )
    {
        var result = amount * t * gram * z;
        $("#silverresult").val(result.toFixed(2));
    }
    else
    {
        var result = amount * t * kilo * z;
        $("#silverresult").val(result.toFixed(2));
    }
}
else
{
    var d =$("#datepicker").val();
    d = d.substring(6,10)+d.substring(0,2)+d.substring(3,5);
$.ajax({
  url: "../gethistorydata.php?c="+currency+"&d="+d+"&"+"t="+Math.random(),
  cache: false,
  success: function(html){
      html=html.split(","); 
      var a= html[0];
      a = a.substring(4,6)+"/"+a.substring(6,8)+"/"+a.substring(0,4);
      $("#datepicker").val(a);
        t = 1;
    z = html[1];
    
        if( measure =="O" )
    {
        var result = amount * t *  z;
        $("#silverresult").val(result.toFixed(2));
    }
    else if ( measure =="G" )
    {
        var result = amount * t * gram * z;
        $("#silverresult").val(result.toFixed(2));
    }
    else
    {
        var result = amount * t * kilo * z;
        $("#silverresult").val(result.toFixed(2));
    }
  }
}); 
}

}
 $(document).ready(function(){
     $("#datepicker").datepicker();
     $('#datepicker').datepicker({
   onClose: function(dateText, inst) { get();}
});
 $("#silveramount").keyup(function()
{
get();
});
$("#selectCurrency").add("#silvermeasure").change(function()
{
get();
});
$("#datepicker").change(function()
{
get();
});

$("#c").click(function()
{
$("#c").attr("checked",true);
$("#h").attr("checked",false);
$("#datepicker").attr("disabled","disabled");  
get();
});
$("#h").click(function()
{
$("#c").attr("checked",false);
$("#h").attr("checked",true);
$("#datepicker").removeAttr('disabled');
get();
});
});