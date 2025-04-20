const mentors = [
    {
      name: "Mentor 1",
      email: "keshari_rupesh@rediffmail.com",
      youtube: "https://youtube.com/@englishconnectionbykanchan?si=cXTtE1yFybuvpCR-",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_m7msA_A8djuGD8rK2QL_YJGFmmpf_w0W3YHtL2BcdjRrUJ=s160-c-k-c0x00ffffff-no-rj",
      description: "Mentor 1 is passionate about rural education and youth leadership."
    },
    {
      name: "Mentor 2",
      email: "www.youtube.com/@sewncompany",
      youtube: "https://youtube.com/@sewncompany?si=vA5dQPaOgvN_FE-g",
      image: "https://tse4.mm.bing.net/th?id=OIP.Z2PpXBy6ZEEYvtge4bRGvwHaE-&pid=Api&P=0&h=180",
      description: "Mentor 2 has experience guiding women entrepreneurs in villages."
    },
    {
      name: "Mentor 3",
      email: "nandinigujrathi2000@gmail.com",
      youtube: "https://youtube.com/@nandinismehndi?si=6OPGhF45u42wzQ79",
      image: "https://yt3.googleusercontent.com/D2v4XHdo6kuy-YrWIHJBjX-opD6UNilWSGqj-YPN5192-q3b5L4WeWhB2RhAmYJwnSAXg8uk=s160-c-k-c0x00ffffff-no-rj",
      description: "Mentor 3 helps bridge the digital divide for underprivileged girls."
    },
    {
      name: "Mentor 4",
      email: "sketchbookbyabhishek@gmail.com",
      youtube: "https://youtube.com/@sketchbookbyabhishek?si=M0J2U3pbA-l61IJI",
      image: "https://yt3.googleusercontent.com/uEHI2cdiNmKRRTcCvfKxwd0GKq9hCpBG0m-eTeqR2zGNW6_JED4V2Vd61iwNEn5yX_zRucqcdtc=s160-c-k-c0x00ffffff-no-rj",
      description: "Mentor 4 is a tech trainer and social impact consultant."
    },
    {
      name: "Mentor 5",
      email: "themadhaviskitchen@gmail.com",
      youtube: "https://youtube.com/@madhaviskitchen?si=HYeaicyOxdYxRWsS",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_mp4aP60FpwnH1ZHjHSagOFblnfnvSWKc2wcsftkMS5mNI=s160-c-k-c0x00ffffff-no-rj",
      description: "Mentor 5 supports female students in STEM fields."
    },
    {
      name: "Mentor 6",
      email: "pvrstudyr6@gmail.com",
      youtube: "https://youtube.com/@pvrstudy?si=OrdiVGY2FfTlFw0U",
      image: "https://yt3.googleusercontent.com/Xb2RaLX7tlcuKmWnr0gCcE4jU-UR76OlKLHWb3GOT_c_X0IqWUG9phc0Zhuw7DwGkUVa01vEgQ=s160-c-k-c0x00ffffff-no-rj",
      description: "Mentor 6 is a government policy advisor on rural outreach."
    },
    {
      name: "Mentor 7",
      email : "contact@siddhiyoga.com",
      youtube: "https://youtube.com/@siddhiyogahindi?si=wHEQGNzgLjuxRWQs",
      image: "https://yt3.googleusercontent.com/cVk-0Tlo_IY9ydwUQqIFgbajD_7tb5Hf6N5GLD389f4gIqMmthn6wSnYlJGcLff8PqqEtivFsQ=s160-c-k-c0x00ffffff-no-rj",
      description: "Mentor 7 designs digital literacy curricula for rural areas."
    },
    {
      name: "Mentor 8",
      email: "allshop99online@gmail.com",
      youtube: "https://youtube.com/@upcharnuskhe?si=0DpDRpyMXG1YOEWI",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_l3zT99q8KpSKSsipOtvzqTZRxVwzt7TGshv5_KQ0qeq-0=s160-c-k-c0x00ffffff-no-rj",
      description: "Mentor 8 works with NGOs to empower tribal women via tech."
    },
  ];
  
  function showPopup(index) {
    const mentor = mentors[index];
    document.getElementById("mentor-name").textContent = mentor.name;
    document.getElementById("mentor-email").textContent = mentor.email;
    document.getElementById("mentor-description").textContent = mentor.description;
    document.getElementById("mentor-image").src = mentor.image;
    document.getElementById("youtube-link").href = mentor.youtube;
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  // Water float effect per letter
  const heading = document.getElementById('floatingHeading');
  const text = heading.innerText;
  heading.innerHTML = '';
  [...text].forEach((char, index) => {
    const span = document.createElement('span');
    span.innerText = char;
    span.style.animationDelay = `${index * 0.1}s`;
    heading.appendChild(span);
  });