
function calculateInsurance() {
	nameNode=document.getElementById("nameinput").value;
	ageNode=Number(document.getElementById("Age").value);
	countryNode=document.getElementById("Country").value;
	hpNode=Number(document.getElementById("HP").value);
	resultNode=document.getElementById("result");
	cost = 0;

	switch(countryNode) {
	    case "Austria":
	        
	        cost = (hpNode * 100 / ageNode) + 50;
	        break;
	    case "Hungary":
	        cost = (hpNode * 120 / ageNode) + 100;
	        break;
	    case "Greece":
	        cost = (hpNode * 150  / (ageNode + 3) + 50);
	        break;
	    default:
	        cost = "Something is not right...";
	    }
	cost = Math.ceil(cost);
	resultNode.innerHTML = nameNode + " your inurance costs " + cost + "€";

	
}

