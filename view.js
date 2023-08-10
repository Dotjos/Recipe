export function resultHTML(image, title) {
  const resDiv = document.createElement("div");
  resDiv.classList.add(
    // "justify-between",
    "flex",
    "h-24",
    "bg-white",
    "border-white",
    "mb-5",
    "rounded-2xl",
    "p-3"
  );
  resDiv.innerHTML = `
  <img src=${image} class="w-12 h-12 rounded-full mt-auto mb-auto">
   <h1 class="ml-6 font-robotoMono text-lg font-semibold text-left text-grayishLimeGreen mt-auto mb-auto   " >${title}.</h1>
`;
  return resDiv;
}
