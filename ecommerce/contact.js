function FormValidation(){
	//alert("Alert")
	var name=document.custom_form.name;
	var email=document.custom_form.email;
	var phone=document.custom_form.phone;
	var subject=document.custom_form.subject;
	var message=document.custom_form.message;
	var conditions=document.custom_form.conditions;
	
	if (name.value == "") {
	   name.nextElementSibling.style.display = "block";
	   name.style.border = "1px solid #f00";
	   return false
	}else{
		name.nextElementSibling.style.display = "none";
		name.style.border = "1px solid transparent";
	}
	if (!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value == "") {
	   email.nextElementSibling.style.display = "block";
	   email.style.border = "1px solid #f00";
	   return false
	}else{
		email.nextElementSibling.style.display = "none";
		email.style.border = "1px solid transparent";
	}
	if (!phone.value.match( /^\(?([5-9]{1})\)?([0-9]{9})$/) || phone.value == "") {
	   phone.nextElementSibling.style.display = "block";
	   phone.style.border = "1px solid #f00";
	   return false
	}else{
		phone.nextElementSibling.style.display = "none";
		phone.style.border = "1px solid transparent";
	}
	if (age.value == "") {
	   age.nextElementSibling.style.display = "block";
	   age.style.border = "1px solid #f00";
	   return false
	}else{
		age.nextElementSibling.style.display = "none";
		age.style.border = "1px solid transparent";
	}
	if (message.value == "") {
	   message.nextElementSibling.style.display = "block";
	   message.style.border = "1px solid #f00";
	   return false
	}else{
		message.nextElementSibling.style.display = "none";
		message.style.border = "1px solid transparent";
	}
}
