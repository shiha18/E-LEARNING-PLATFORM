function updateProgress() {
    const checkboxes = document.querySelectorAll(".lessons input[type='checkbox']");
    let completed = 0;
    checkboxes.forEach(cb => { if (cb.checked) completed++; });
    const percentage = Math.round((completed / checkboxes.length) * 100);
    document.getElementById("progress-fill").style.width = percentage + "%";
    localStorage.setItem("courseProgress", percentage + "%");
  }
  