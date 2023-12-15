let searchItem = document.getElementById("SearchBox");
// console.log(searchItem)

searchItem.addEventListener("keyup", e => {
  //   console.log(e);
  if (e.key === "Enter") {
    let res = e.target.value;
    getApiResult(res);
  }
});

let getApiResult = async username => {
  let response = await window.fetch(`https://api.github.com/users/${username}`);
  let data = await response.json();
  console.log(data);
  let rightBar = document.getElementById("RightsideBar");
  console.log(rightBar);
  rightBar.innerHTML = `<div class="card">
  <img src="${data.avatar_url}"
  <div class="info">
  <h1 class="header">Name:${data.login}</h1>
  <p><b>Company: </b>${data.company}</p>
  <p><b>Place:</b> ${data.location}</p>
  <p><b>Designation:</b> ${data.bio}</p>
  </div>
  </div>`;
};
