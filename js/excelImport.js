function importExcel() {

const fileInput = document.getElementById("excelFile");

if (!fileInput.files.length) {
alert("Please select an Excel file");
return;
}

const file = fileInput.files[0];
const reader = new FileReader();

reader.onload = function(e) {

const data = new Uint8Array(e.target.result);
const workbook = XLSX.read(data, { type: "array" });

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const jsonData = XLSX.utils.sheet_to_json(worksheet);

let portfolio = JSON.parse(localStorage.getItem("portfolio")) || [];

jsonData.forEach(row => {

portfolio.push({
symbol: row.Symbol,
qty: row.Quantity,
price: row.Price
});

});

localStorage.setItem("portfolio", JSON.stringify(portfolio));

alert("Portfolio Imported Successfully");

location.reload();

};

reader.readAsArrayBuffer(file);

}
