// Update displayed text with "PIG:" prefix
function updateText() {
    const input = document.getElementById('user-input').value;
    const textDisplay = document.getElementById('text-display');
    textDisplay.textContent = "PIG: " + input;
  }
  
  // Save as PNG
  function saveAsPNG() {
    const bannerElement = document.getElementById('banner');
    html2canvas(bannerElement).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'banner.png';
      link.click();
    });
  }
  
  // Copy image to clipboard
  function copyImage() {
    const bannerElement = document.getElementById('banner');
    html2canvas(bannerElement).then((canvas) => {
      canvas.toBlob((blob) => {
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item]);
        alert("Image copied to clipboard!");
      });
    });
  }
  