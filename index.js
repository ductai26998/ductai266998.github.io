fetch("https://ductai26998.github.io/student.json")
  .then((response) => response.json())
  .then((json) => {
    let data;
    data = json;
    console.log(data);
  });
