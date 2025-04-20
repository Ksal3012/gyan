function openForm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form").style.display = "block";
  }
  function closeForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("form").style.display = "none";
  }
  function openGPay(select) {
    if (select.value === "gpay") {
      window.location.href = "upi://pay?pa=yourupiid@bank&pn=WomenEmpowermentEvent&cu=INR";
    }
  }
  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');
  
    // Close other dropdown if it's open
    ['skillDropdown', 'analizeDropdown'].forEach(otherId => {
      if (otherId !== id) {
        document.getElementById(otherId).classList.add('hidden');
      }
    });
  }
  
  // Optional: Close dropdowns if clicked outside
  document.addEventListener('click', function (e) {
    const skillBtn = e.target.closest('button[onclick*="skillDropdown"]');
    const analizeBtn = e.target.closest('button[onclick*="analizeDropdown"]');
    const clickedDropdown = e.target.closest('ul');
  
    if (!skillBtn && !analizeBtn && !clickedDropdown) {
      document.getElementById('skillDropdown').classList.add('hidden');
      document.getElementById('analizeDropdown').classList.add('hidden');
    }
  });