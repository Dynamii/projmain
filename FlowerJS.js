function validateForm(){
	 if(regForm.check.checked == false){
		alert("You must agree to the Terms and Conditions");
		return false;
	}
	
	
	else { 
	
		 document.write('<h3> CUSTOMERS INFORMATION  </h3>')
		 document.write('Name: ' + fname + ' ' + lname + '<bR>');
		 document.write('Address: ' + add + '<bR>');
		 document.write('Email Address: ' + email + '<bR>');
		 document.write('Contact number: ' + num + '<bR>');
		 document.write('Mode of Payment: ' + mop + '<bR>');
		 document.write('Birthdate: ' + bdate + '<bR>');
		 document.write('Gender: ' + gn + '<bR>');
	
	return true;
		 

	 }
}

