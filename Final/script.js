function newTable() {
    var body = document.querySelector("body"),
        tr = "",
        td = "",
		input = "",
		but = "";
	title = "";

	rowNumber = document.getElementById("row").value;
    colNumber = document.getElementById("col").value;  
    table = document.createElement("table");
	table.id = "mainTable";
	title = document.createElement("caption");
    table.appendChild(title);
	$("#form").attr("hidden", "");
		
    for (var i = 0; i < rowNumber; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < colNumber; j++) {
			td = document.createElement("td");
			input = document.createElement("textarea");
			but = document.createElement("input");
			but.type = "button";
			but.addEventListener("click", saveTextArea); 
			but.value = "Save"
			td.appendChild(input);
			td.appendChild(but);
			tr.appendChild(td);
        }
        table.appendChild(tr);
    }

	$("#form").attr("hidden", "");
	$("#functions").removeAttr("hidden");
	body.appendChild(table);
	$("#mainTable").attr("cellpadding", 2);
	$("#mainTable").attr("cellspacing", 0);
}

function saveTextArea(){
	var $parentCell = this.parentElement, 
		string = ""; 
		
	string = $parentCell.children[0].value;
	$parentCell.children[0].remove();
	$parentCell.children[0].remove();
	data = document.createElement("span");
	data.innerHTML = string;
	$parentCell.prepend(data);
}  

function addTitle(){
	title.innerHTML = "<h3>" + document.getElementById("title").value + "</h3>";
}

function editTable(){

	borderType = document.getElementById("border").value;
	borderWidth = document.getElementById("width").value;
	if (borderWidth>20) borderWidth=20;
	$('td').css({'border':borderType + ' ' + borderWidth + 'px'});
}

function changeWidth(){
	borderWidth = document.getElementById("width").value;
	document.getElementById("dynamicBut").value = "Apply " + borderWidth + " px " + borderType + " border";
}

function changeBorder(){
	borderType = document.getElementById("border").value;
	document.getElementById("dynamicBut").value = "Apply " + borderWidth + " px " + borderType + " border";
}

function deleteTable() {
    var body = document.querySelector("body"),
        table = document.querySelector("table");
	
    document.body.removeChild(table);
	$("#functions").attr("hidden", "");
	$("#form").removeAttr("hidden");
}

function deleteRow() {
    var table = document.querySelector("table"),
		rowDelId = document.getElementById("rowDel").value;

	if (rowDelId > rowNumber){
		alert("There is no such line!");
		return;
	}
	
	table.children[rowDelId].remove();
	rowNumber--;
}

function randomInteger(min, max) {
	let rand = min -0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

function magic() {
    var body = document.querySelector("body"),
        table = document.querySelector("table"),
		rand,
		colorRGB,
		colorHex,
		textHeight,
		randRow,
		randCol,
		cellRandId;
	
	randRow = randomInteger(1, rowNumber);
	rowRandId = table.children[randRow]
	randCol = randomInteger(0, colNumber-1);
	cellRandId = rowRandId.children[randCol];
	
	rand = randomInteger(1, 4);
	if (rand == 2 && cellRandId.children[0].tagName!="TEXTAREA"){
		cellRandId.children[0].remove();
		input = document.createElement("textarea");
		but = document.createElement("input");
		but.type = "button";
		but.addEventListener("click", saveTextArea); 
		but.value = "Save"
		cellRandId.appendChild(input);
		cellRandId.appendChild(but);
		return;
	} 
	
	
	colorRGB = randomInteger(0x000000, 0xffffff);
	colorHex =  colorRGB.toString(16);
	colorBacbground = "#" + colorHex;
	cellRandId.style.backgroundColor = colorBacbground;

	colorRGB = randomInteger(0x000000, 0xffffff);
	colorHex =  colorRGB.toString(16);
	colorText = "#" + colorHex;
	cellRandId.style.color = colorText;
	
	textHeight = randomInteger(15, 25);
	cellRandId.style.fontSize = textHeight + "pt";
}





