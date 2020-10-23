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

new Glider(document.querySelector(".glider"), {
  slidesToShow: 1.5,
  slidesToScroll: 1,
  dots: "#dots",
  draggable: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 500,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: "2.5",
        slidesToScroll: "2",
        
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 775px
      breakpoint: 900,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: "auto",
        slidesToScroll: "auto",
        itemWidth: 0,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 1024px
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        itemWidth: 0,
        duration: 0.25,
      },
    },
  ],
});
