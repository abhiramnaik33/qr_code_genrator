function generateQR() {
  const url = document.getElementById('urlInput').value;
  const qrContainer = document.getElementById('qrCodeContainer');
  const downloadBtn = document.getElementById('downloadBtn');
  qrContainer.innerHTML = "";

  if (!url) return alert("Please enter a URL");

  QRCode.toCanvas(document.createElement('canvas'), url, { width: 256 }, function (error, canvas) {
    if (error) console.error(error);
    qrContainer.appendChild(canvas);
    canvas.id = "qrCanvas";
    downloadBtn.style.display = "inline-block";
  });
}

function downloadQR() {
  const canvas = document.getElementById("qrCanvas");
  const link = document.createElement("a");
  link.download = "qr-code.png";
  link.href = canvas.toDataURL();
  link.click();
}
