 //JavaScript: Slider Scroll Fixes -->
  // Main Slider Auto Scroll (Top Section)
  const mainSlider = document.getElementById('mainSlider');
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 1;
    if (scrollAmount >= mainSlider.scrollWidth - mainSlider.clientWidth) {
      scrollAmount = 0;
    }
    mainSlider.scrollTo({ left: scrollAmount, behavior:"instant" });
  }, 40);

  // Toggle Info on NGO Card
  function toggleInfo(card) {
    document.querySelectorAll('.profile-card').forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
  }

  // Profile Slider Auto Scroll (NGO Cards)
  const profileSlider = document.getElementById("profileSlider");
  let scrollPos = 0;
  setInterval(() => {
    scrollPos += 1;
    if (scrollPos >= profileSlider.scrollWidth - profileSlider.clientWidth) {
      scrollPos = 0;
    }
    profileSlider.scrollTo({ left: scrollPos, behavior: "smooth" });
  }, 40);
    const wrapper = document.getElementById('sliderWrapper');
    const boxWidth = 340; // approx width of each review box + margin
    let currentIndex = 0;

    function nextSlide() {
      if (currentIndex < 3) {
        currentIndex++;
        updateSlider();
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    }

    function updateSlider() {
      wrapper.style.transform = `translateX(-${currentIndex * (boxWidth + 20)}px)`;
    }
