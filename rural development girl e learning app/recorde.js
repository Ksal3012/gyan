const records = JSON.parse(localStorage.getItem('villageRecords')) || [];

    function generateFeedback(record) {
      return `Great work, ${record.name}! Your project "${record.work}" showcases your skill beautifully. Consider improving visibility through social media promotion.`;
    }

    function generateSuggestions() {
      return `
        <ul>
          <li>Learn design & digital skills at <a href="https://www.coursera.org" target="_blank">Coursera</a></li>
          <li>Explore rural development on <a href="https://nptel.ac.in" target="_blank">NPTEL</a></li>
          <li>Free courses from <a href="https://www.skillshare.com" target="_blank">Skillshare</a></li>
        </ul>
      `;
    }

    function generateInternships() {
      return `
        <ul>
          <li><strong>Rural Innovator Internship</strong> - Apply at <a href="https://internshala.com" target="_blank">Internshala</a></li>
          <li><strong>Digital Literacy Ambassador</strong> - NGO WomenRise, Remote</li>
          <li><strong>Community Project Leader</strong> - 6 Weeks, Hybrid</li>
        </ul>
      `;
    }


    function speakFeedback(text) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-IN';
      window.speechSynthesis.speak(speech);
    }

    function renderRecords() {
      const container = document.getElementById('recordsContainer');
      container.innerHTML = '';

      records.forEach((record, index) => {
        const div = document.createElement('div');
        div.className = 'record-box';

        const feedback = generateFeedback(record);

        div.innerHTML = `
          <img class="profile" src="${record.profileImage || 'https://via.placeholder.com/80'}" alt="Profile">
          <div class="info"><strong>Name:</strong> ${record.name}</div>
          <div class="info"><strong>Village:</strong> ${record.village}</div>
          <div class="info"><strong>Work:</strong> ${record.work}</div>
          <div class="info"><strong>Contact:</strong> ${record.contact}</div>
          ${record.imageData ? `<img src="${record.imageData}" style="max-width: 100%; border-radius: 10px;">` : ''}
          ${record.videoData ? `<video controls src="${record.videoData}"></video>` : ''}
          <div class="ai-analyze" id="ai${index}">
            <div class="spinner"></div>
            <em style="display:block; text-align:center;">Analyzing your record with AI...</em>
          </div>
        `;

        container.appendChild(div);

        // Simulate AI analysis delay
        setTimeout(() => {
          const aiDiv = document.getElementById(`ai${index}`);
          aiDiv.innerHTML = `
            <div class="feedback">${feedback}
              <button class="speak-btn" onclick="speakFeedback('${feedback}')">🔊 Speak</button>
            </div>
            <details>
              <summary>📘 Suggestions & Learning Platforms</summary>
              ${generateSuggestions()}
            </details>
            <details>
              <summary>💼 Skill-Related Internships</summary>
              ${generateInternships()}
            </details>
          `;
        }, 2000 + index * 700); // staggered appearance
      });
    }

    renderRecords();
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