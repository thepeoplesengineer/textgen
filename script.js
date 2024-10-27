// Update displayed text based on user input
function updateText() {
    const input = document.getElementById('user-input').value;
    const textDisplay = document.getElementById('text-display');
    textDisplay.textContent = "Pig: " + input; // Prefix with "Pig:" for context
}

// Function to capture the banner as an image
function generateImage() {
    const bannerElement = document.getElementById('banner');
    console.log("Starting image capture...");

    // Capture the banner as a canvas
    html2canvas(bannerElement, { willReadFrequently: true }).then((canvas) => {
        console.log("Image capture complete. Preparing download...");

        // Convert the canvas to a data URL (PNG format)
        const imageData = canvas.toDataURL("image/png");

        // Create a link element to download the image
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'static_banner.png';
        document.body.appendChild(link); // Add link to DOM for Firefox compatibility
        link.click();
        document.body.removeChild(link); // Remove link after click
    }).catch(error => {
        console.error("Error creating image:", error);
    });
}
