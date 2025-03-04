const loading = document.querySelector(".load");

setTimeout(() => {
  loading.classList.add("hidden");
}, 1000);

function goToNext() {
  const allDiv = document.querySelector(".all");
  const inventDiv = document.querySelector("#invent");
  
  allDiv.classList.add("hidden");
  inventDiv.classList.remove("hidden");

  allDiv.style.display = "none";

  inventDiv.style.display = "block";
}

function showMessage() {
 alert(" Sizning parolingiz muvaffaqiyatli o'zgartirildi!😊")
}

document.getElementById("require").addEventListener("submit", function(event) {
  const input = document.querySelectorAll("#input");

  if (input.value.trim() === "") {
    event.preventDefault();
    alert("Пожалуйста, заполните пустые поля!");
  }
})