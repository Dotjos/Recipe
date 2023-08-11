const searchText = document.querySelector(".searchText");
const searchButton = document.querySelector(".searchButton");
const sideBar = document.querySelector(".searchRes");
const rendSect = document.querySelector(".mainStr");
import { fetchData } from "./model.js";
import { resultHTML, renderView } from "./view.js";

function updateRes(results) {
  sideBar.innerHTML = "";
  const delay = 300;
  results.forEach((result, index) => {
    const { image_url, title, publisher, source_url } = result;
    const resultMarkUp = resultHTML(image_url, title);

    setTimeout(() => {
      sideBar.insertAdjacentElement("beforeend", resultMarkUp);

      setTimeout(() => {
        sideBar.style.opacity = "1";
      }, 100);
    }, index * delay);
  });
}

// function displayOnClickS() {
//   resultMarkUp.addEventListener(
//     "click",
//     renderView(
//       rendSect,
//       image_url,
//       title,
//       "./assets/icons8-bookmark-64.png",
//       "./assets/icons8-time-50.png",
//       publisher,
//       "./assets/icons8-right-50.png",
//       source_url
//     )
//   );
// }

async function searchBtnClick() {
  const query = searchText.value;
  try {
    const result = await fetchData(query);
    updateRes(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

searchButton.addEventListener("click", searchBtnClick);
