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