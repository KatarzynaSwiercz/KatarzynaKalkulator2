
function appendToview(value) {
    document.getElementById("view").value += value;
}

function clearview() {
    document.getElementById("view").value = "";
}

function calculate() {
    try {
        document.getElementById("view").value = eval(document.getElementById("view").value);
    } catch (error) {
        document.getElementById("view").value = "";
    }
}



































































































































































