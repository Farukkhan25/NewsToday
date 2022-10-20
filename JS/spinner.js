// Spinner Function

const spinner = (isSpin) => {
  try {
    const spinnerSection = document.getElementById("spinner-section");
    if (isSpin) {
      spinnerSection.classList.remove("hidden");
    } else {
      spinnerSection.classList.add("hidden");
      }
      console.log(first)
  } catch (err) {
    console.log(err);
  }
};
