const searchShow = document.getElementById("input_show");

const submitBtn = document.getElementById("submit_data");
submitBtn.addEventListener("click", getShows);

function addShow(title, summary, img_medium) {
  let div1 = document.createElement("div");
  div1.className = "show-data";

  let img = document.createElement("img");
  img.src = img_medium;

  let div2 = document.createElement("div");
  div2.className = "show-info";

  const h1_element = document.createElement("h1");
  const p_element = document.createElement("p");

  div2.appendChild(h1_element);
  div2.appendChild(p_element);

  div1.appendChild(img);
  div1.appendChild(div2);

  document.getElementById("body").appendChild(div1);

  /*
    <div class="show-data">
    <img src="[show image medium]"> 
    <div class="show-info"> 
        <h1>[Show title]</h1> 
        <p>[Show summary]</p> 
    </div> 
</div>'
*/
  consol.log("test");
}

function getShows() {
  fetchData(searchShow.value);
}

async function fetchData(show) {
  const url = "https://api.tvmaze.com/search/shows?q=" + show;

  const showsPromise = await fetch(url);
  const showsJSON = await showsPromise.json();

  console.log(showsJSON);
}
