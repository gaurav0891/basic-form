document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
  this.reset();
});
