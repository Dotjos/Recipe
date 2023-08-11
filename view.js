export function resultHTML(image, title) {
  const resDiv = document.createElement("div");
  resDiv.classList.add(
    // "justify-between",
    "flex",
    "h-max",
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

export function renderView(
  container,
  image,
  title,
  bookMark,
  timePic,
  chef,
  arrowImage,
  chefLink
) {
  //Learnt about how insecure it is using innerHTML, hence the use of fragment
  const rendView = document.createDocumentFragment();
  const imgDiv = document.createElement("Div");
  const recImg = document.createElement("img");
  recImg.src = image;
  const recTitle = document.createElement("h1");
  recTitle.textContent = title;
  imgDiv.appendChild(recImg);
  imgDiv.appendChild(recTitle);
  const cookDiv = document.createElement("div");
  const timeDiv = document.createElement("div");
  const cookTime = document.createElement("h1");
  const timeImg = document.createElement("img");
  timeImg.src = timePic;
  timeDiv.appendChild(timeImg);
  timeDiv.appendChild(cookTime);
  const bookImg = document.createElement("img");
  bookImg.src = bookMark;
  cookDiv.appendChild(timeDiv);
  cookDiv.appendChild(bookImg);
  const ingreDiv = document.createElement("div");
  const recipeHead = document.createElement("h1");
  recipeHead.textContent = "RECIPE INGREDIENTS";
  ingreDiv.appendChild(recipeHead);
  const footerDiv = document.createElement("div");
  const footerHead = document.createElement("h1");
  footerHead.textContent = "HOW TO COOK IT";
  const footNote = document.createElement("p");
  const chefName = document.createElement("h1");
  chefName.textContent = chef;
  footNote.textContent = `The recipe was carefully designed and tested by ${chefName}. 
  Please check out direction at their website `;
  const footBtn = document.createElement("button");
  const btnNote = document.createElement("h1");
  btnNote.textContent = "DIRECTIONS";
  const btnImage = document.createElement("img");
  btnImage.src = arrowImage;
  footBtn.appendChild(btnNote);
  footBtn.appendChild(btnImage);
  footBtn.href = chefLink;
  rendView.appendChild(imgDiv);
  rendView.appendChild(cookDiv);
  rendView.appendChild(ingreDiv);
  rendView.appendChild(footerDiv);
  container.appendChild(rendView);
}
