document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const website = document.getElementById("website").value;
  const about = document.getElementById("about").value;
  const skills = document.getElementById("skills").value.split(",").map(s => s.trim());
  const hobbies = document.getElementById("hobbies").value.split(",").map(h => h.trim());
  const dob = document.getElementById("dob").value;
  const nationality = document.getElementById("nationality").value;
  const education = document.getElementById("education").value;

  const preview = `
🔹 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
🏠 Address: ${address}
🌐 Website: ${website}

🧠 About Me:
${about}

🎓 Education:
${education}

🛠️ Key Skills:
${skills.join(", ")}

🎮 Hobbies:
${hobbies.join(", ")}

📅 Date of Birth: ${dob}
🌍 Nationality: ${nationality}
  `;

  document.getElementById("resumePreview").textContent = preview;
});
