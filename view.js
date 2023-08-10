export function resultHTML(image, title) {
  const resDiv = document.createElement("div");
  resDiv.classList.add(
    "justify-between",
    "flex",
    "h-20",
    "bg-white",
    "border-white",
    "mb-5",
    "rounded-2xl",
    "p-4"
  );
  resDiv.innerHTML = `
  <img src=${image} class="w-5 h-10">
   <h1>${title}</h1>
`;
  return resDiv;
}
