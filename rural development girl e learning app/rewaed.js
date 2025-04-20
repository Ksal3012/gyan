let userProgress = {
    modules: { digital: false, financial: false, entrepreneur: false },
    challenges: { modules: false, quiz: false, referral: false },
    points: 0,
    certificateIssued: false
  };

  function completeModule(module) {
    if (!userProgress.modules[module]) {
      userProgress.modules[module] = true;
      alert("✅ Module marked as complete: " + module);
    } else {
      alert("You've already completed this module.");
    }
  }

  function claimChallenge(challenge) {
    if (userProgress.challenges[challenge]) {
      alert("🎉 You've already claimed this challenge!");
      return;
    }

    if (challenge === 'modules') {
      const allDone = Object.values(userProgress.modules).every(Boolean);
      if (allDone) {
        userProgress.points += 300;
        userProgress.challenges[challenge] = true;
        updatePoints();
        alert("🎉 Challenge Completed! 300 points awarded.");
      } else {
        alert("🚧 Complete all 3 modules first.");
      }
    } else if (challenge === 'quiz') {
      userProgress.points += 150;
      userProgress.challenges[challenge] = true;
      updatePoints();
      alert("🎯 Quiz challenge claimed! 150 points awarded.");
    } else if (challenge === 'referral') {
      userProgress.points += 100;
      userProgress.challenges[challenge] = true;
      updatePoints();
      alert("🤝 Referral bonus claimed! 100 points awarded.");
    }
  }

  function updatePoints() {
    document.getElementById('points').innerText = userProgress.points;
  }

  function issueCertificate() {
    const allChallengesDone = Object.values(userProgress.challenges).every(Boolean);
    if (allChallengesDone && !userProgress.certificateIssued) {
      userProgress.certificateIssued = true;
      document.getElementById("blockchainMessage").innerText = "🎉 Certificate issued and stored on blockchain (TxID: 0xABC123...)";
    } else if (userProgress.certificateIssued) {
      alert("🧾 Certificate already issued.");
    } else {
      alert("⚠️ Complete all challenges to issue certificate.");
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