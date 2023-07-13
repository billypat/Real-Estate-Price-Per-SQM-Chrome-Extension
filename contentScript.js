function calculatePricePerSqm(propertyElement) {
  const priceElement = propertyElement.querySelector('.property-price');
  const areaElement = propertyElement.querySelector('.View__PropertySize-sc-1psmy31-0');

  if (!priceElement || !areaElement) {
    return null;
  }

  const price = parseFloatfunction calculatePricePerSqm(propertyElement) {
  const priceElement = propertyElement.querySelector('.property-price');
  const areaElement = propertyElement.querySelector('.View__PropertySize-sc-1psmy31-0');

  if (!priceElement || !areaElement) {
    return null;
  }

  const price = parseFloat(priceElement.textContent.replace(/[^0-9.]/g, ''));
  const areaMatch = areaElement.textContent.match(/([\d,.]+)\s*m²/i);
  const areaValue = areaMatch ? parseFloat(areaMatch[1].replace(/,/g, '')) : null;

  if (isNaN(price) || !areaValue) {
    return null;
  }

  const pricePerSqm = (price / areaValue).toFixed(2);
  return pricePerSqm;
}

function displayOverlay(propertyElement, pricePerSqm) {
  const overlay = document.createElement("div");
  overlay.style.position = "relative";
  overlay.style.marginTop = "10px";
  overlay.style.backgroundColor = "#fff";
  overlay.style.padding = "5px 10px";
  overlay.style.fontWeight = "bold";
  overlay.style.fontSize = "14px";
  overlay.style.fontFamily = "Arial, sans-serif";
  overlay.textContent = `Price per m²: $${pricePerSqm}`;

  const propertyTypeElement = propertyElement.querySelector('.property-info__property-type');
  propertyTypeElement.parentNode.insertBefore(overlay, propertyTypeElement.nextSibling);
}

function processProperties() {
  const propertyElements = document.querySelectorAll('.results-card.residential-card, .property-info');

  propertyElements.forEach((propertyElement) => {
    const pricePerSqm = calculatePricePerSqm(propertyElement);
    if (pricePerSqm) {
      displayOverlay(propertyElement, pricePerSqm);
    }
  });
}

processProperties();
(priceElement.textContent.replace(/[^0-9.]/g, ''));
  const areaMatch = areaElement.textContent.match(/([\d,.]+)\s*m²/i);
  const areaValue = areaMatch ? parseFloat(areaMatch[1].replace(/,/g, '')) : null;

  if (isNaN(price) || !areaValue) {
    return null;
  }

  const pricePerSqm = (price / areaValue).toFixed(2);
  return pricePerSqm;
}

function displayOverlay(propertyElement, pricePerSqm) {
  const overlay = document.createElement("div");
  overlay.style.position = "relative";
  overlay.style.marginTop = "10px";
  overlay.style.backgroundColor = "#fff";
  overlay.style.padding = "5px 10px";
  overlay.style.fontWeight = "bold";
  overlay.style.fontSize = "14px";
  overlay.style.fontFamily = "Arial, sans-serif";
  overlay.textContent = `Price per m²: $${pricePerSqm}`;

  const propertyTypeElement = propertyElement.querySelector('.property-info__property-type');
  propertyTypeElement.parentNode.insertBefore(overlay, propertyTypeElement.nextSibling);
}

function processProperties() {
  const propertyElements = document.querySelectorAll('.results-card.residential-card, .property-info');

  propertyElements.forEach((propertyElement) => {
    const pricePerSqm = calculatePricePerSqm(propertyElement);
    if (pricePerSqm) {
      displayOverlay(propertyElement, pricePerSqm);
    }
  });
}

processProperties();
