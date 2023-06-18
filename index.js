fetch("data/db.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.careers[0].id);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
