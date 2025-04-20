
    let profileImageData = "";

    function toggleProfileOptions() {
      const options = document.getElementById('picOptions');
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
    }

    function setProfileImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          profileImageData = e.target.result;
          document.getElementById('profileImage').src = profileImageData;
        };
        reader.readAsDataURL(file);
      }
      document.getElementById('picOptions').style.display = 'none';
    }

    function removeProfile() {
      profileImageData = "";
      document.getElementById('profileImage').src = 'https://via.placeholder.com/120';
      document.getElementById('picOptions').style.display = 'none';
    }

    document.getElementById('villageForm').addEventListener('submit', async function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const village = document.getElementById('village').value;
      const work = document.getElementById('work').value;
      const contact = document.getElementById('contact').value;

      const imageFile = document.getElementById('docImage').files[0];
      const videoFile = document.getElementById('docVideo').files[0];

      const readFile = (file) => {
        return new Promise((resolve) => {
          if (!file) return resolve(null);
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      };

      const imageData = await readFile(imageFile);
      const videoData = await readFile(videoFile);

      const record = {
        name,
        village,
        work,
        contact,
        profileImage: profileImageData,
        imageData,
        videoData
      };

      const existing = JSON.parse(localStorage.getItem('villageRecords')) || [];
      existing.push(record);
      localStorage.setItem('villageRecords', JSON.stringify(existing));

      window.location.href = "records.html";
    });
    
    // SPEAKING AGENT FUNCTION
    function speak(text) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.cancel(); // cancel ongoing speech
      window.speechSynthesis.speak(msg);
    }

    // PROFILE IMAGE HANDLING
    function toggleProfileOptions() {
      const options = document.getElementById('picOptions');
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
    }

    function setProfileImage(event) {
      const image = document.getElementById('profileImage');
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          image.src = e.target.result;
        };
        reader.readAsDataURL(file);
        speak('Profile image updated');
      }
    }

    function removeProfile() {
      document.getElementById('profileImage').src = "https://via.placeholder.com/120";
      document.getElementById('imageUpload').value = "";
      document.getElementById('picOptions').style.display = 'none';
    }
  

