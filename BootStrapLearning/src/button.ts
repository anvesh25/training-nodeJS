import * as jQuery from 'jquery';
//set button click event by using button id  
jQuery("#btn1").click(function(){
    let value =jQuery('#input1').val();
    alert("Default text value is: "+value);
     //alert("You click default button");
 });

 jQuery("#btn2").click(function(){
    let value =jQuery('#input2').val();
    //String concatinating
    alert(`Primary text value is: ${value} Anvesh`);
    //alert("Primary text value is: "+value);
    //alert("You click Primary button");
});

jQuery("#btn3").click(function(){
    //let value =jQuery('#input3').val();
    let value1 =jQuery('#input2').val();
    let value2 =jQuery('#input2').val();
    //Adding 3 text field values by using string concatination
    alert(`Information text value is: ${value1} ${value2}`);
    //alert("You click Info button");
});

jQuery("#btn4").click(function(){
    //let value =jQuery('#input4').val();
    let value1 =jQuery('#input2').val();
    let value2 =jQuery('#input2').val();
    let value3 =jQuery('#input3').val();
    //Adding 3 text field values by using string concatination
    alert(`Information text value is: ${value1} ${value2} ${value3} added all values`);
    //alert("Warning text value is: "+value);
    //alert("You click Warning button");
});

jQuery("#btn5").click(function(){
    //let value =jQuery('#input5').val();
    //alert("Success text value is: "+value);
    //alert("You click Succress button");
    //adding chnage event for texte3
    jQuery("#input3").change(function()
    {
        let value=jQuery("#input3").val();
        jQuery("#input2").val(value);
    });
    alert("I added change event for inpu3 txt values");
});

jQuery("#btn6").click(function()
{
    //let value =jQuery('#input6').val();
    //alert("Danger text value is: "+value);
    //alert("You click Danger button");
    //adding focus and unfocus
    //jQuery("#input4").val();
    //jQuery("#input4").change();
    //jQuery("#input4").blur(function()
    //{
        //alert("I am unfocusing input4 text");
    //});
    //jQuery("#input4").focus(function()
    //{
        //alert("I am focusing input4 text");
    //});
    //jQuery("#btn6").toggleClass("btn-danger")
    //alert("I added focus, blur events to input4 text");
    
    //changing button styile danger to primary
    if(jQuery("#btn6").hasClass("btn-danger"))
    {
        jQuery("#btn6").removeClass("btn-danger");
        jQuery("#btn6").addClass("btn-primary");
    }
    //changing button styile primary to info
    else if(jQuery("#btn6").hasClass("btn-primary"))
    {
        jQuery("#btn6").removeClass("btn-primary");
        jQuery("#btn6").addClass("btn-info");
    }
    //changing button styile info to success
    else if(jQuery("#btn6").hasClass("btn-info"))
    {
        jQuery("#btn6").removeClass("btn-info");
        jQuery("#btn6").addClass("btn-success");
    }
    //changing button styile success to warning
    else if(jQuery("#btn6").hasClass("btn-success"))
    {
        jQuery("#btn6").removeClass("btn-success");
        jQuery("#btn6").addClass("btn-warning");
    }
    //changing button styile warning to danger
    else if(jQuery("#btn6").hasClass("btn-warning"))
    {
        jQuery("#btn6").removeClass("btn-warning");
        jQuery("#btn6").addClass("btn-danger");
    }

});
 //go and create file te config and webpack config