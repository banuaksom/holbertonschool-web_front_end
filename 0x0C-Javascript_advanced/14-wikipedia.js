const createElement = (data) => {
  const p = document.createElement("p")
  p.innerText = JSON.parse(data).query.pages["21721040"].extract
  document.body.append(p);
}

const queryWikipedia = (callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
  xhr.onload = function () {
    callback(xhr.response);
  };
  xhr.send();
}

queryWikipedia(createElement);