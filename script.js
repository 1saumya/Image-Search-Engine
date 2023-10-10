const accesskey = "dzaCjD1YWnN19SD7C1ewFstmpwiCWEwdJdoMgCpPmSE";

const searchForm = document.getElementById("form")
const searchBox = document.getElementById("Search-box")
const searchResult = document.getElementById("searchResult")
const showMore = document.getElementById("showMore")

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if(page === 1) {
        searchResult.innerHTML = "";
    }

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMore.addEventListener("click", ()=>{
    page++;
    searchImages();
})