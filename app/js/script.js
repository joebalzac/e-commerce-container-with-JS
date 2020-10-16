//fetch local json file
fetch("productData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
//main data function
function appendData(data) {
  var mainContainer = document.getElementById("myData");

  //loop
  for (const [key, value] of Object.entries(data["data"])) {
    //sub-containers and classes
    var itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    var copyContainer = document.createElement("div");
    copyContainer.classList.add("copy-container");
    var priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");

    //main container
    document.getElementById("myData").innerHTML;
    var title = document.createElement("div");
    title.classList.add("item-name");
    var images = document.createElement("img");
    images.classList.add("images");
    var price = document.createElement("div");
    price.classList.add("sale-price");
    var list = document.createElement("div");
    list.classList.add("list-price");
    var button = document.createElement("button");

    //parsing json info
    title.innerHTML = value.title;
    images.src = value.images[0].name;
    list.innerHTML = "$" + value.prices.list;
    price.innerHTML = "$" + value.prices.price;
    button.innerHTML = "Add to Cart";

    //appends
    itemContainer.appendChild(images);
    copyContainer.appendChild(title);
    priceContainer.appendChild(list);
    priceContainer.appendChild(price);
    itemContainer.appendChild(copyContainer);
    mainContainer.appendChild(itemContainer);
    itemContainer.appendChild(button);
    copyContainer.appendChild(priceContainer);
  }
}

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 4,
    dots: "#dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
