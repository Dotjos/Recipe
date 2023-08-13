const searchText = document.querySelector(".searchText");
const searchButton = document.querySelector(".searchButton");
const sideBar = document.querySelector(".searchRes");
const rendSect = document.querySelector(".mainStr");
const query = searchText.value;
const paginationArea = document.querySelector(".paginationArea");
import { fetchData } from "./model.js";
import { resultHTML, renderView } from "./view.js";
const itemsPerPage = 9;
let currentPage = 1;
let totalPages;

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
    const resultMarkUp = resultHTML(image_url, title, displayOnClick);
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
  pageNumbers.classList.add("p-3");
  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement("span");
    pageNumber.classList.add("border", "rounded-md", "p-3", "ml-2");
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
  const fetcheData = await fetchData();
  totalPages = Math.ceil(fetcheData.length / itemsPerPage);
  return totalPages;
}

initialize();

export async function displayOnClick(event) {
  const clickedElement = event.currentTarget;
  const clickedIndex = clickedElement.getAttribute("data-index");
  try {
    const result = await fetchData(query);
    const { image_url, title, publisher, source_url, publisher_url } =
      result[clickedIndex];
    renderView(
      rendSect,
      image_url,
      title,
      "./assets/icons8-bookmark-64.png",
      "./assets/icons8-time-50.png",
      publisher,
      "./assets/icons8-right-50.png",
      publisher_url
    );
  } catch (error) {
    console.error(console.log(error));
  }
}

async function searchBtnClick() {
  try {
    const result = await fetchData(query);
    updateRes(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

searchButton.addEventListener("click", searchBtnClick);
