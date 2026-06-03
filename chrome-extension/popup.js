const select = document.getElementById("cursor-select");
const button = document.getElementById("save-button");

function loadStyle() {
  chrome.storage.sync.get({ cursorStyle: "default" }, (result) => {
    select.value = result.cursorStyle;
  });
}

function saveStyle() {
  const style = select.value;
  chrome.storage.sync.set({ cursorStyle: style }, () => {
    button.textContent = "Appliqué !";
    setTimeout(() => {
      button.textContent = "Appliquer";
    }, 1200);
  });
}

button.addEventListener("click", saveStyle);
document.addEventListener("DOMContentLoaded", loadStyle);
