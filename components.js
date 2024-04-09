document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('audioToggle').addEventListener('change', function() {
      var video = document.getElementById('background-video');
      video.volume = 0.15;
      video.muted = !video.muted;
  });

  const welcomeText = document.getElementById('welcome-text-content');
  const texts = [
      "Welcome to CyberBurgs!",
      "Network Pentesting!",
      "Application Pentesting!",
      "Website Pentesting!"
  ];
  let textIndex = 0;
  let charIndex = 0;
  let timer;

  function displayNextChar() {
      if (charIndex < texts[textIndex].length) {
          welcomeText.innerHTML += texts[textIndex].charAt(charIndex);
          charIndex++;
          timer = setTimeout(displayNextChar, 90); // Adjust the delay (in milliseconds) between each character
      } else {
          clearTimeout(timer);
          setTimeout(() => {
              charIndex = 0;
              textIndex = (textIndex + 1) % texts.length; // Move to the next text, loop back to the beginning if reached the end
              welcomeText.innerHTML = '';
              displayNextChar();
          }, 1000); // Adjust the delay (in milliseconds) before displaying the next text
      }
  }

  displayNextChar();
});
