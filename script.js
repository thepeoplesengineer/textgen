// Typing effect
let typingIndex = 0;
let typingText = "";

function updateText() {
  const input = document.getElementById('user-input').value;
  const textDisplay = document.getElementById('text-display');

  const maxCharacters = 80; // Adjust as needed
  typingText = input.slice(0, maxCharacters);
  typingIndex = 0;

  textDisplay.textContent = "";
  typeText();
}

function typeText() {
  const textDisplay = document.getElementById('text-display');

  if (typingIndex < typingText.length) {
    textDisplay.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeText, 50);
  }
}

// GIF Generation
function generateGIF() {
    const bannerElement = document.getElementById('banner');
  
    html2canvas(bannerElement).then((canvas) => {
      // Create a GIF instance with a local worker script path
      const gif = new GIF({
        workers: 2,
        quality: 10,
        workerScript: "./gif.worker.js" // Update this path based on your project structure
      });
  
      gif.addFrame(canvas, { delay: 200 });
  
      gif.on('finished', function (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'animated_text.gif';
        link.click();
      });
  
      gif.render();
    }).catch(error => {
      console.error("Error creating GIF:", error);
    });
  }
  