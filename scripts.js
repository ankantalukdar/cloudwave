function toggleIcon() {
  const icon = document.getElementById("toggle-icon")
  const button = document.getElementById("toggle-button")
  const span = button.querySelector("span")

  if (icon.classList.contains("bi-caret-down-fill")) {
    icon.classList.remove("bi-caret-down-fill")
    icon.classList.add("bi-caret-up-fill")
    span.textContent = "Hide all features"
  } else {
    icon.classList.remove("bi-caret-up-fill")
    icon.classList.add("bi-caret-down-fill")
    span.textContent = "See all features"
  }
}

// Need to replace
function toggleActive(button) {
  const buttons = document.querySelectorAll(".select-month button")
  buttons.forEach((btn) => btn.classList.remove("active"))
  button.classList.add("active")
}
