var nameNode=document.getElementById("name");
var ageNode=document.getElementById("Age");
var countryNode=document.getElementById("Country");
var hpNode=document.getElementById("HP");
var buttonNode=document.getElementById("calculatebutton");
var resultNode=document.getElementById("result");
var cost = 0;


function calculateInsurance() {

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
	resultNode.innerHTML = nameNode + " your inurance costs " + cost + "€"
}
