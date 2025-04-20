const internships = [
    { name: "Coma Empower", desc: "Dedicated to upskilling women in rural tech fields.", img: "https://coma2.vn/wp-content/uploads/sites/95/2020/07/logo-coma-6.jpg" },
    { name: "SkillWomen", desc: "Providing digital literacy training for underserved communities.", img: "https://img.icons8.com/color/80/company.png" },
    { name: "SheCode", desc: "Coding internships for girls interested in web development.", img: "https://img.icons8.com/clouds/100/code.png" },
    { name: "RuralTechRise", desc: "Empowering villages with IT and data skills.", img: "https://th.bing.com/th/id/OIP.5kNcC3cZuUt6mlngGAjVpQHaKN?rs=1&pid=ImgDetMain" },
    { name: "BrightFuture", desc: "Mentorship programs for rural young women.", img: "https://img.icons8.com/clouds/100/graduation-cap.png" },
    { name: "AgriGyan", desc: "Agritech internships for sustainability and innovation.", img: "https://agrigyanhub.com/wp-content/uploads/2024/07/Agri-Gyan-Hub-Final-Logo-compressed-1.png" },
    { name: "DigitalSakhi", desc: "Promoting financial independence through fintech.", img: "https://img.icons8.com/clouds/100/money-bag.png" },
    { name: "HealthSisters", desc: "Training rural women in digital health tech.", img: "https://gezondhelmond.nl/wp-content/uploads/2023/02/Logo-Healthy-Sisters.png" },
    { name: "DesignHer", desc: "UI/UX design bootcamp for village youth.", img: "https://img.icons8.com/clouds/100/design.png" },
    { name: "VoicesForHer", desc: "Media & storytelling internships to amplify rural voices.", img: "https://img.icons8.com/clouds/100/microphone.png" },
  ];

  const container = document.getElementById('internshipContainer');
  internships.forEach(intern => {
    const cardHTML = `
      <div class="card">
        <img src="${intern.img}" alt="${intern.name} Logo" />
        <h3>${intern.name}</h3>
        <p>${intern.desc}</p>
        <button onclick="toggleForm(this)">Apply for Internship</button>
        <div class="form-container">
          <form onsubmit="submitForm(event, this)">
            <input type="text" placeholder="Your Name" required>
            <input type="text" placeholder="Contact Number" required>
            <input type="email" placeholder="Email Address" required>
            <textarea placeholder="Your Skills or Knowledge" required></textarea>
            <input type="submit" value="Submit">
          </form>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });

  function toggleForm(button) {
    const formContainer = button.nextElementSibling;
    formContainer.classList.toggle('open');
  }

  function submitForm(event, formElement) {
    event.preventDefault();
    alert("Application submitted! Thank you.");
    formElement.reset();
    formElement.parentElement.classList.remove('open');
  }

  function scrollNGOs(distance) {
    const container = document.getElementById('ngoScroll');
    container.scrollBy({ left: distance, behavior: 'smooth' });
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