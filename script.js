
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const licence = params.get("licence");

  const resultDiv = document.getElementById("result");

  if (licence === "DK0897294CH0874") {
    resultDiv.innerHTML = `
      <div class="licence-card">
        <h2>Name: Ajharul Islam</h2>
        <p><strong>Date of Birth:</strong> 1999-03-02</p>
        <p><strong>Blood Group:</strong> B+</p>
        <p><strong>Father:</strong> Abdur Rahim</p>
        <p><strong>Issue Date:</strong> 2022-05-12</p>
        <p><strong>Validity:</strong> 2032-05-11</p>
        <p><strong>Licence No:</strong> DK0897294CH0874</p>
        <p><strong>Issuing Authority:</strong> BRTA Dhaka Metro</p>
        <p><strong>Address:</strong> Mirpur, Dhaka</p>
        <p><strong>Class(es):</strong> Motor Cycle, Light Motor Vehicle</p>
        <img src="ajharul.jpg" alt="Licence Photo" style="max-width:150px; margin-top: 10px;">
      </div>
    `;
  } else {
    resultDiv.innerHTML = "<p style='color:red;'>Licence not found.</p>";
  }
});
