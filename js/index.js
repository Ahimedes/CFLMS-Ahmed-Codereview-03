
function calculateInsurance() {
	nameNode=document.getElementById("nameinput").value;
	ageNode=document.getElementById("Age");
	countryNode=document.getElementById("Country");
	hpNode=document.getElementById("HP");
	buttonNode=document.getElementById("calculatebutton");
	resultNode=document.getElementById("result");
	cost = 0;

	switch(countryNode) {
	    case "Austria":
	        cost = Number(hpNode.value) * 100 / Number(ageNode.value) + 50;
	        break;
	    case "Hungary":
	        cost = Number(hpNode.value) * 120 / Number(ageNode.value) + 100;
	        break;
	    case "Greece":
	        cost = Number(hpNode.value) * 150 / (Number(ageNode.value)+3) + 50;
	        break;
	    default:
	        cost = "Something is not right...";
	    }
	cost = Math.ceil(cost);
	resultNode.innerHTML = nameNode + " your inurance costs " + cost + "€";

	
}

