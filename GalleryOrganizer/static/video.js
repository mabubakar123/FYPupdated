
jQuery.noConflict();
  
 
var list=new Array();

function check(id){
  
var checkid=document.getElementById(id);
         
        if (checkid.checked){
           
        list.push(checkid.value); 
        
    }
    else{

        for (var i = 0; i < list.length; i++) {
            if (list[i] == checkid.value) {
                list.splice(i, 1);
            }
    }

}
}








jQuery.noConflict()
jQuery('#done').on('click', function(event) {
    var audio=document.getElementById('file');
    var fps=document.getElementById('fps').value;
    var counter=0;
   
    if(audio.files.length==0){
        jQuery('#errorAlert').text("Audio file missing").show();
    }
    else{
        counter=counter+1
    }
    if (list.length<2){
        jQuery('#errorAlert').text("Mark 2 or more images").show();
    }
    else{
        counter=counter+1;
    }
    if ((list.length<2) && (audio.files.length==0)){
        jQuery('#errorAlert').text("Mark images and upload audio file").show();
    
    } 



  



if (counter==2){
var formData = new FormData();
formData.append('audio',audio.files[0]);

formData.append('array',list);
formData.append('fps',fps);
formData.append('transition',jQuery("#sel1").val())
jQuery('#successAlert').text("Creating Your Video. Wait!").show();
jQuery('#errorAlert').hide();
jQuery.ajax({
    data : formData,
    cache: false,
    contentType: false,
    processData: false,
    dataType: 'json',
    type : 'POST',
    url : '/videoclip'
})
.done(function(data) {
if (data.error){

}
else{
    jQuery('#successAlert').text(data.success).show();
    setTimeout(() => {
        window.location.href="/home"
    }, 3000); 
}

});

event.preventDefault();
}
});
