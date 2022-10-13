var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}


//Retrieve the data
function readFormData() {
    var formData = {};
    formData["nim"] = document.getElementById("nim").value;
    formData["nama"] = document.getElementById("nama").value;
    formData["tgl_lahir"] = document.getElementById("tgl_lahir").value;
    formData["jenis_kelamin"] = document.getElementById("jenis_kelamin").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.nim;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.nama;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.tgl_lahir;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.jenis_kelamin;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nim").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("tgl_lahir").value = selectedRow.cells[2].innerHTML;
    document.getElementById("jenis_kelamin").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nim;
    selectedRow.cells[1].innerHTML = formData.nama;
    selectedRow.cells[2].innerHTML = formData.tgl_lahir;
    selectedRow.cells[3].innerHTML = formData.jenis_kelamin;
}

//Delete the data
function onDelete(td) {
    if (confirm('apakah kamu mau menghapus ini ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("nim").value = '';
    document.getElementById("nama").value = '';
    document.getElementById("tgl_lahir").value = '';
    document.getElementById("jenis_kelamin").value = '';
    selectedRow = null;
}