let currentQR = "";

// Generate QR
function generateQR() {
  const text = document.getElementById("qrText").value;
  const qrDiv = document.getElementById("qrResult");

  qrDiv.innerHTML = "";

  QRCode.toDataURL(text, function (err, url) {
    if (err) return console.error(err);

    currentQR = url;
    let img = document.createElement("img");
    img.src = url;
    qrDiv.appendChild(img);
  });
}

// Download QR
function downloadQR() {
  if (!currentQR) return alert("Generate QR first!");

  const link = document.createElement("a");
  link.href = currentQR;
  link.download = "qr.png";
  link.click();
}

// Save QR
function saveQR() {
  const text = document.getElementById("qrText").value.trim();
  if (!text) return alert("Enter text or URL to save.");

  fetch("/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  })
    .then((res) => res.json())
    .then(() => {
      saveLocally(text);
      loadSaved();
      alert("Saved successfully.");
    })
    .catch(() => {
      saveLocally(text);
      loadSaved();
      alert("Saved locally (server unavailable).");
    });
}

function saveLocally(text) {
  let saved = JSON.parse(localStorage.getItem("qrs")) || [];
  saved.push(text);
  localStorage.setItem("qrs", JSON.stringify(saved));
}

// Load saved QRs
function loadSaved() {
  const list = document.getElementById("savedList");
  list.innerHTML = "";

  let saved = JSON.parse(localStorage.getItem("qrs")) || [];

  saved.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// QR Scanner
function startScanner() {
  const scanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250
  });

  scanner.render(
    (decodedText) => {
      alert("Scanned: " + decodedText);
    },
    (error) => {
      console.warn(error);
    }
  );
}

// Load saved on start
window.onload = loadSaved;