// contentScript.js
function calculatePricePerSqm() {
  const priceElement = document.querySelector(".property-price");
  const areaElement = document.querySelector('.property-size-group');

  if (!priceElement || !areaElement) {
    return null;
  }

  const price = parseFloat(priceElement.textContent.replace(/[^0-9.]/g, ""));
  const areaMatch = areaElement.textContent.match(/(\d+(\.\d+)?)\s*(m²|ha)/i);
  const areaValue = areaMatch ? parseFloat(areaMatch[1]) : null;
  const areaUnit = areaMatch ? areaMatch[3].toLowerCase() : null;

  if (isNaN(price) || !areaValue || !areaUnit) {
    return null;
  }

  let area;
  if (areaUnit === 'ha') {
    area = areaValue * 10000; // Convert hectares to square meters
  } else {
    area = areaValue;
  }

  const pricePerSqm = (price / area).toFixed(2);

  return pricePerSqm;
}

function displayOverlay(pricePerSqm) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "10px";
  overlay.style.right = "10px";
  overlay.style.background = "rgba(0, 0, 0, 0.8)";
  overlay.style.color = "#fff";
  overlay.style.padding = "5px 10px";
  overlay.style.fontWeight = "bold";
  overlay.style.zIndex = "9999";
  overlay.textContent = `Price per sqm: $${pricePerSqm}`;

  document.body.appendChild(overlay);
}

const pricePerSqm = calculatePricePerSqm();

if (pricePerSqm) {
  displayOverlay(pricePerSqm);
}