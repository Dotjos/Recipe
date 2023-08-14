export function resultHTML(image, title) {
  const resDiv = document.createElement("div");
  resDiv.classList.add(
    "flex",
    "h-max",
    "bg-white",
    "border-white",
    "mb-5",
    "rounded-2xl",
    "p-3"
  );

  const resImage = document.createElement("img");
  const resTitle = document.createElement("h1");
  resImage.src = image;
  resTitle.textContent = title;
  resImage.classList.add("w-12", "h-12", "rounded-full", "mt-auto", "mb-auto");
  resTitle.classList.add(
    "ml-6",
    "font-robotoMono",
    "text-lg",
    "font-semibold",
    "text-left",
    "text-grayishLimeGreen",
    "mt-auto",
    "mb-auto"
  );
  resDiv.appendChild(resImage);
  resDiv.appendChild(resTitle);

  return resDiv;
}

export function displayFunc(itDiv, err, footer) {
  while (itDiv.firstElementChild) {
    itDiv.removeChild(itDiv.firstElementChild);
  }
  const hettttemel = document.createElement("h1");
  hettttemel.classList.add("text-2xl");
  hettttemel.textContent = `${err}`;
  footer.classList.add("hidden");
  itDiv.appendChild(hettttemel);
}
