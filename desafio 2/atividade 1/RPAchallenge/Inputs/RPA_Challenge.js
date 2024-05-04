function(e, strRowValues){
	console.log(strRowValues);
	var strFirstName = strRowValues.split("|")[0];
	console.log(strFirstName);
	var strLastName = strRowValues.split("|")[1];
	console.log(strLastName);
	var strEmail = strRowValues.split("|")[2];
	console.log(strEmail);
	var strAddress = strRowValues.split("|")[3];
	console.log(strAddress);
	var strPhoneNumber = strRowValues.split("|")[4];
	console.log(strPhoneNumber);
	var strCompanyName = strRowValues.split("|")[5];
	console.log(strCompanyName);
	var strRoleInCompany = strRowValues.split("|")[6];
	console.log(strRoleInCompany);
	console.log("Execution Started");
	
	var elemLabels = Array.from(document.getElementsByTagName("label"));
	console.log("Retrieved Label Elements, Number: " + elemLabels.length);

	for(var i = 0; i < elemLabels.length; i++){
		console.log("Current Iteration Started");
		console.log("Currently Looking At: " + elemLabels[i].textContent);
		switch(elemLabels[i].textContent){
			case "First Name":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strFirstName;
				}
				else{
					elemLabels[i].nextSibling.value = strFirstName;
				}
			break;
			case "Last Name":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strLastName;
				}
				else{
					elemLabels[i].nextSibling.value = strLastName;
				}
			break;
			case "Email":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strEmail;
				}
				else{
					elemLabels[i].nextSibling.value = strEmail;
				}
			break;
			case "Address":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strAddress;
				}
				else{
					elemLabels[i].nextSibling.value = strAddress;
				}
			break;
			case "Phone Number":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strPhoneNumber;
				}
				else{
					elemLabels[i].nextSibling.value = strPhoneNumber;
				}
			break;
			case "Company Name":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strCompanyName;
				}
				else{
					elemLabels[i].nextSibling.value = strCompanyName;
				}
			break;
			case "Role in Company":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strRoleInCompany;
				}
				else{
					elemLabels[i].nextSibling.value = strRoleInCompany;
				}
			break;
		}
		console.log("Current Iteration Ended");
	}
	document.getElementsByClassName("btn uiColorButton")[0].click();
	console.log("Execution Ended");
}