const form = document.getElementById("dataForm");
const tableBody = document.getElementById("dataTable");

window.onload = function () {
    let savedData = JSON.parse(localStorage.getItem("fieldData")) || [];
    savedData.forEach((data, index) => addRow(data, index));
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = form.name.value;
    let mobile = form.mobile.value;
    let email = form.email.value;

    let data = { name, mobile, email };

    let allData = JSON.parse(localStorage.getItem("fieldData")) || [];
    allData.push(data);
    localStorage.setItem("fieldData", JSON.stringify(allData));

    addRow(data, allData.length - 1);

    document.getElementById("msg").innerText = "Data Added Successfully ✔";
    form.reset();
});

function addRow(data, index) {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${data.name}</td>
        <td>${data.mobile}</td>
        <td>${data.email}</td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="deleteRow(${index})">
                Delete
            </button>
        </td>
    `;

    tableBody.appendChild(row);
}

function deleteRow(index) {
    let allData = JSON.parse(localStorage.getItem("fieldData")) || [];

    allData.splice(index, 1);
    localStorage.setItem("fieldData", JSON.stringify(allData));

    tableBody.innerHTML = "";
    allData.forEach((data, i) => addRow(data, i));
}
    
