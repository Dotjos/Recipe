const searchText = document.querySelector(".searchText");
const searchButton = document.querySelector(".searchButton");
const sideBar = document.querySelector(".searchRes");
const paginationArea = document.querySelector(".paginationArea");
const main = document.querySelector("main");
import { fetchData } from "./model.js";
import { resultHTML, displayFunc } from "./view.js";

const itemsPerPage = 9;
let currentPage = 1;
let totalPages;
let query;

function updateRes(results) {
  //Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = itemsPerPage + startIndex;
  const reciperAge = results.slice(startIndex, endIndex);

  while (sideBar.firstElementChild) {
    sideBar.removeChild(sideBar.firstElementChild);
  }

  const delay = 200;
  reciperAge.forEach((result, index) => {
    const { image_url, title } = result;
    const resultMarkUp = resultHTML(image_url, title);
    console.log(resultHTML);
    resultMarkUp.setAttribute("data-index", index);
    setTimeout(() => {
      sideBar.insertAdjacentElement("beforeend", resultMarkUp);

      setTimeout(() => {
        sideBar.style.opacity = "1";
      }, 300);
    }, index * delay);
  });
  createPaginationControls(results);
}

function createPaginationControls(data) {
  // Create Previous button
  const prevButton = document.createElement("button");
  prevButton.classList.add("rounded-md");
  prevButton.textContent = "Previous";
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateRes(data);
    }
  });

  // Create Next button
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateRes(data);
      console.log("next");
    }
  });

  // Create Page numbers
  const pageNumbers = document.createElement("div");
  pageNumbers.classList.add(
    "ml-auto",
    "mr-auto",
    "w-1/3",
    "flex",
    "justify-between"
  );
  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement("span");
    pageNumber.classList.add("rounded-md", "p-3");
    pageNumber.textContent = i;
    pageNumber.addEventListener("click", () => {
      currentPage = i;
      updateRes(data);
    });
    pageNumbers.appendChild(pageNumber);
  }

  // Append controls to the page
  while (paginationArea.firstChild) {
    paginationArea.removeChild(paginationArea.firstChild);
  } // Clear previous controls
  paginationArea.appendChild(prevButton);
  paginationArea.appendChild(pageNumbers);
  paginationArea.appendChild(nextButton);
}

async function initialize() {
  const fetcheData = await fetchData(query);
  totalPages = Math.ceil(fetcheData.length / itemsPerPage);
  return totalPages;
}

// initialize();

async function searchBtnClick() {
  query = searchText.value;
  try {
    const result = await fetchData(query);
    initialize();
    updateRes(result);
  } catch (error) {
    displayFunc(sideBar, error, paginationArea);
  }
}

searchButton.addEventListener("click", searchBtnClick);
