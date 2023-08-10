const searchText = document.querySelector(".searchText");
const searchButton = document.querySelector(".searchButton");
const sideBar = document.querySelector(".searchRes");
import { fetchData } from "./model.js";
import { resultHTML } from "./view.js";

function updateRes(results) {
  sideBar.innerHTML = "";
  results.forEach((result) => {
    console.log(result);
    const { image_url, title } = result;
    const resultMarkUp = resultHTML(image_url, title);
    console.log(resultMarkUp);
    sideBar.insertAdjacentElement("beforeend", resultMarkUp);
  });
}

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
