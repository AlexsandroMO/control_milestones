console.log('Entrou!!!')

$(function(){
    $("#table-search input").keyup(function(){       
        var index = $(this).parent().index();
        var nth = "#table-search td:nth-child("+(index+1).toString()+")";
        var valor = $(this).val().toUpperCase();
        $("#table-search tbody tr").show();
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor) < 0){
                $(this).parent().hide();
            }
        });
    });
 
    $("#table-search input").blur(function(){
        $(this).val("");
    });
});

















jQuery(document).ready(function() {
    $(window).scroll(function () {
        var set = $(document).scrollTop()+"px";
        jQuery('#float-banner').animate({
            top:set
        },
        {
            duration:1000,
            queue:false
        });
    });
});


//window.alert('ok!')

function separdor(){
window.alert('ok!')
    var in_text = document.getElementById('sep-text')
    var var_text = document.getElementById('var-text')
    var res = document.getElementById('result')
    var new_text = ''
    var list_breaked = []
    var match_test = in_text.value.split(/\s+/);
    res.innerHTML = ''
    
    for (let a=0; a<match_test.length; a++){
        new_text = match_test[a]
        list_breaked[a] = new_text 
    }


    for (let a=0; a<list_breaked.length; a++){
  
        if (var_text.value == list_breaked[a][0]){
            res.innerHTML += list_breaked[a] + '<br>'
        }
        else if (var_text.value == list_breaked[a].substring(0,3)){
            res.innerHTML += list_breaked[a] + '<br>'
        }
        else if (var_text.value == list_breaked[a]){
            res.innerHTML += list_breaked[a] + '<br>'
        } 
    }
    
}








//function myFunctionChoice(){

document.getElementById("myBtn").addEventListener("click", function() {
    console.log('Entrou!!!!')

    });
  
// let name_patient = 1;
// document.getElementById('id_patient_name').value = name_patient;




// $('.multiplo').select2({
//   placeholder: 'selecione'
// });
