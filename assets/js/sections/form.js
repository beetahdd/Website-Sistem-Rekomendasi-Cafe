document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".preference-form");
  const submitBtn = form.querySelector(".submit-btn");
  const inputs = form.querySelectorAll("input, select");

  const checkFormValidity = () => {
    let isValid = true;

    inputs.forEach(input => {
      if (input.type === "radio") {
        const name = input.name;
        const radios = form.querySelectorAll(`input[name="${name}"]`);
        const oneChecked = Array.from(radios).some(r => r.checked);
        if (!oneChecked) isValid = false;
      } else if (input.tagName === "SELECT" && input.value === "") {
        isValid = false;
      } else if (input.type === "time" && input.value === "") {
        isValid = false;
      }
    });

    submitBtn.disabled = !isValid;
  };

  inputs.forEach(input => {
    input.addEventListener("change", checkFormValidity);
    input.addEventListener("input", checkFormValidity);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      jamKedatangan: form.querySelector('input[type="time"]').value,
      menu: form.querySelectorAll("select")[0].value,
      rangeMenu: form.querySelectorAll("select")[1].value,
      fasilitasAC: form.querySelector('input[name="ac"]:checked')?.value || "",
      fasilitasColokan: form.querySelector('input[name="colokan"]:checked')?.value || "",
      parkir: form.querySelector('input[name="parkir"]:checked')?.value || "",
      nilaiMakanan: form.querySelectorAll("select")[2].value,
      nilaiLayanan: form.querySelectorAll("select")[3].value,
      nilaiSuasana: form.querySelectorAll("select")[4].value,
      wifi: form.querySelector('input[name="wifi"]:checked')?.value || "",
      smokingArea: form.querySelector('input[name="smoking"]:checked')?.value || "",
      rating: form.querySelector('input[name="rating"]:checked')?.value || "",
    };

    localStorage.setItem("formData", JSON.stringify(data));
    console.log("Form Data:", data);

    // Scroll ke bagian hasil
    const resultSection = document.getElementById("section-results");
    if (resultSection) {
      resultSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  checkFormValidity(); // Inisialisasi tombol saat halaman dimuat
});
