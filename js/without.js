$(function AjaxFormRequest(form1,url) { 
                jQuery.ajax({ 
                    url:     "send.php", //Адрес подгружаемой страницы 
                    type:     "POST", //Тип запроса 
                    dataType: "html", //Тип данных 
                    data: jQuery("#"+form1).serialize(),  
                    success: function(response) { //Если все нормально 
                    document.getElementById(result_id).innerHTML = response; 
                }, 
                error: function(response) { //Если ошибка 
                document.getElementById(result_id).innerHTML = "Ошибка при отправке формы"; 
                } 
             }); 
});