function FormSubmit(){
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var email = document.getElementById('eMail').value;
    var password = document.getElementById('mypassword').value;
    var gender = document.getElementById('gender').value;
    var education = "BSCS";
    var hobbies = "Sleeping";
    var number = document.getElementById('myNumber').value;
    
    document.getElementById('dynamicTable').innerHTML  ="<h1>Check Your Data </h1>"+
     "<table>"+
							"<thead>"+
								"<tr>"+
									"<th> First Name </th>"+
                                    "<th> Last Name</th>"+
                                    "<th> Email</th>"+
                                    "<th> Password</th>"+
                                    "<th> Gender</th>"+
                                    "<th> Education</th>"+
                                    "<th> Hobbies</th>"+
                                    "<th> Number</th>"+
								"</tr>"+
							"</thead>"+
							"<tbody>"+
								"<tr>"+
									"<td>"+ fName +"</td>"+
                                    "<td>"+ lName +"</td>"+
                                    "<td>"+ email +"</td>"+
                                    "<td>"+ password +"</td>"+
                                    "<td>"+ gender +"</td>"+
                                    "<td>"+ education +"</td>"+
                                    "<td>"+ hobbies +"</td>"+
                                    "<td>"+ number +"</td>"+
								"</tr>"+	
							"</tbody>"+
						"</table>";
}