const searchShow = document.getElementById("input_show");

const submitBtn = document.getElementById("submit_data");
submitBtn.addEventListener("click", getShows);

function showTemplate() {
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
