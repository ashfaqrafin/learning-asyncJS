// fetch("data/db.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.careers[0].id);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// Async and Await

const getData = async () => {
  const response = await fetch("data/db.json");
  const data = await response.json();

  return data;
};

getData()
  .then((data) => {
    console.log("resolved", data.careers[0].id);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
