document.addEventListener("DOMContentLoaded", function () {

    const fileInput = document.getElementById("excelFile");

    if (!fileInput) return;

    fileInput.addEventListener("change", function (e) {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (event) {

            const data = new Uint8Array(event.target.result);

            const workbook = XLSX.read(data, { type: "array" });

            const sheet = workbook.Sheets[workbook.SheetNames[0]];

            const json = XLSX.utils.sheet_to_json(sheet);

            console.log("Imported Excel Data:", json);

            alert("Excel Imported Successfully");

        };

        reader.readAsArrayBuffer(file);

    });

});
