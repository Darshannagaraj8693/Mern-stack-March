

async function* callAPI() {
  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }); 

  const posts = await response.json(); 
  console.log("response", posts);

  yield posts;
}

const callAPIObject = callAPI();

callAPIObject.next().then((res) => {
  let data = res.value.data;
  let root = document.querySelector(".root");
  data.forEach((entry) => {
    root.innerHTML += `<div class="card" style="width: 90%; margin-top: 20px">
      <img src="${entry.avatar}" class ="card-img-top"/>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <p class="card-text"><strong>ID: </strong>${entry.id}</p>
          </li>
          <li class="list-group-item">
            <p class="card-text"><strong>Name: </strong>${entry.first_name} ${entry.last_name}</p>
          </li>
          <li class="list-group-item">
            <p class="card-text"><strong>Email: </strong>${entry.email}</p>
          </li>
        </ul>
        </div>
      </div>`;
  });
});
