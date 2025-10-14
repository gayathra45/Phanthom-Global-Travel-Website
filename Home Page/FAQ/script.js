document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");
  const expandAllBtn = document.getElementById("expandAll");
  const contactBtn = document.getElementById("contactBtn");
  const searchInput = document.getElementById("faq-search");

  // Toggle FAQ
  faqs.forEach(faq => {
    const btn = faq.querySelector(".trigger");
    btn.addEventListener("click", () => {
      faq.classList.toggle("open");
    });
  });

  // Expand/Collapse all
  let expanded = false;
  expandAllBtn.addEventListener("click", () => {
    expanded = !expanded;
    faqs.forEach(faq => faq.classList.toggle("open", expanded));
    expandAllBtn.textContent = expanded ? "Collapse all" : "Expand all";
  });

  // Contact button
  contactBtn.addEventListener("click", () => {
    window.location.href = "mailto:support@phanthomglobal.com?subject=Travel%20Support%20Request";
  });

  // Search filter
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    faqs.forEach(faq => {
      faq.style.display = faq.innerText.toLowerCase().includes(query) ? "" : "none";
    });
  });
});
