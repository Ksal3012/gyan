// Image slider code (for the mainSlider)
const imageSlider = document.getElementById("mainSlider");

function scrollSlider(direction) {
  const scrollAmount = 260; // Match the image card width + gap
  imageSlider.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth"
  });
}

// Auto scroll for image slider every 3 seconds
let imageSliderInterval = setInterval(() => {
  // If reached end, go back to start
  if (imageSlider.scrollLeft + imageSlider.clientWidth >= imageSlider.scrollWidth - 1) {
    imageSlider.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    scrollSlider("right");
  }
}, 3000);

// Optional: Pause auto-scrolling when user hovers over the image slider
imageSlider.addEventListener('mouseenter', () => {
  clearInterval(imageSliderInterval);
});

// Optional: Resume auto-scrolling when user leaves the image slider
imageSlider.addEventListener('mouseleave', () => {
  imageSliderInterval = setInterval(() => {
    if (imageSlider.scrollLeft + imageSlider.clientWidth >= imageSlider.scrollWidth - 1) {
      imageSlider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      scrollSlider("right");
    }
  }, 3000);
});

// Testimonial slider code (for the sliderWrapper)
let position = 0;
let sliderWrapper;
let reviewBoxes;
let boxWidth;
let visibleBoxes;
let maxPosition;
let autoScrollInterval;

// Initialize the testimonial slider
function initTestimonialSlider() {
  sliderWrapper = document.getElementById('sliderWrapper');
  
  // Check if the element exists before proceeding
  if (!sliderWrapper) {
    console.log('Testimonial slider not found on this page');
    return;
  }
  
  reviewBoxes = document.querySelectorAll('.review-box');
  
  // Make sure we have review boxes
  if (reviewBoxes.length === 0) {
    console.log('No review boxes found');
    return;
  }
  
  boxWidth = reviewBoxes[0].offsetWidth + 20; // Width + margin
  visibleBoxes = window.innerWidth > 768 ? 3 : 1;
  maxPosition = reviewBoxes.length - visibleBoxes;

  // Set initial width of the slider wrapper
  sliderWrapper.style.width = `${reviewBoxes.length * boxWidth}px`;
  
  // Start auto-scrolling
  startTestimonialAutoScroll();
}

// Function to start auto-scrolling for testimonials
function startTestimonialAutoScroll() {
  // Clear any existing interval
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
  }
  
  // Set new interval for auto-scrolling
  autoScrollInterval = setInterval(() => {
    if (position < maxPosition) {
      position++;
    } else {
      // Loop back to the beginning with a smooth transition
      position = 0;
    }
    updateTestimonialSliderPosition();
  }, 3000); // Change slides every 3 seconds
}

// Update the testimonial slider position
function updateTestimonialSliderPosition() {
  sliderWrapper.style.transform = `translateX(-${position * boxWidth}px)`;
}

// Initialize both sliders when the page loads
window.addEventListener('load', function() {
  // Initialize testimonial slider if it exists on the page
  initTestimonialSlider();
});

// Handle window resize for both sliders
window.addEventListener('resize', function() {
  // Only update testimonial slider if it exists
  if (document.getElementById('sliderWrapper')) {
    // Recalculate dimensions
    boxWidth = reviewBoxes[0].offsetWidth + 20;
    const newVisibleBoxes = window.innerWidth > 768 ? 3 : 1;
    
    if (newVisibleBoxes !== visibleBoxes) {
      visibleBoxes = newVisibleBoxes;
      maxPosition = reviewBoxes.length - visibleBoxes;
      position = Math.min(position, maxPosition);
      updateTestimonialSliderPosition();
    }
    
    // Restart auto-scrolling with new dimensions
    startTestimonialAutoScroll();
  }
});

// Optional: Pause testimonial auto-scrolling when user hovers
if (document.querySelector('.slider-container.testimonials')) {
  document.querySelector('.slider-container.testimonials').addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
  });

  // Optional: Resume testimonial auto-scrolling when user leaves
  document.querySelector('.slider-container.testimonials').addEventListener('mouseleave', () => {
    startTestimonialAutoScroll();
  });
}