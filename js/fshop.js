function save(fname,lname,add,email,cnum,mop,date,gender){
	 var answer = confirm("Are you sure you want to submit?");
	 
	 if(answer == true){
		 document.write('<h3> CUSTOMERS INFORMATION </h3>');
		 document.write('Name: ' + fname + ' ' + lname + '<bR>');
		 document.write('Address: ' + add + '<bR>');
		 document.write('Email Address: ' + email + '<bR>');
		 document.write('Contact number: ' + cnum + '<bR>');
		 document.write('Birthday: ' + bdate + '<bR>');
		 document.write('Gender: ' + gender + '<bR>');
		 
	 }
	 else{
	 }
}