var showAlert = document.querySelectorAll("#clickme");
function Showalert(){
    showAlert = alert('Loading Weather Page....');

}

function removeItems(){
    var removeAll = document.querySelector(".foot");
    removeAll.remove();
}


function changenumbers() {
    var unit = document.querySelector("#temp").value;
    var nums = document.querySelectorAll(".temp-convert");
    for(var n = 0; n < nums.length; n++){
        var numberValue = parseFloat(nums[n].innerText);
        if (unit === "f") {
            var uNumber = (numberValue * (9 / 5) + 32);
            nums[n].innerText = Math.round(uNumber) + "°";
        }else {
            var uNumber = (numberValue -32) * 5 / 9;
            nums[n].innerText = Math.round(uNumber) + "°";
        }
    }
}

