const Flowers = [
  {
    picture: "./images/Apeldoorn.jpg",
    name: "Name: Apeldoorn",
    price: "Price: 5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Dark red",
    PlantPeriode: "Plant: july-november",
    FloweringPeriod: "Flower: december",
    buyProduct: "Buy",
  },
  {
    picture: "./images/Anemoon Mr. Fokker.jpg",
    name: "Name: Anemoon",
    price: " Price: 10.99$",
    height: "Height: 10 - 20cm",
    color: "Color: Purple",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
    buyProduct: "Buy",
  },
  {
    picture: "./images/Barcelona.jpg",
    name: "Name: Barcelona",
    price: "Price: 12.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Hot pink",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
    buyProduct: "Buy",
  },
  {
    picture: "./images/Prinses Irene.jpg",
    name: "Name: princes",
    price: "Price: 4.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
    buyProduct: "Buy",
  },
  {
    picture: "./images/Carnaval de Nice.jpg",
    name: "Name: Carnaval-nice",
    price: "Price: 5.99$",
    height: "Height: 10 - 35cm",
    color: "Color: White Pink",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
    buyProduct: "Buy",
  },
  {
    picture: "./images/Groenland.jpg",
    name: "Name: Groenland",
    price: "Price: 8.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Light Pink",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
    buyProduct: "Buy",
  },
  {
    picture: "./images/Negrita Dubbel.jpg",
    name: "Name: Negrita",
    price: "Price: 11.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Purple",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
    buyProduct: "Buy",
  },
  {
    picture: "./images/Blanda Blue Shade.jpg",
    name: "Name: Blanda-Blue",
    price: "Price: 3.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Dark Blue",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
    buyProduct: "Buy",
  },
  {
    picture: "./images/Ranonkel Oranje.jpg",
    name: "Name: Ranonkel",
    price: "Price: 6.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
    buyProduct: "Buy",
  },
  {
    picture: "./images/Ranonkel Rood.jpg",
    name: "Name: Ranonkel-Red",
    price: "Price: 5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Dark Red",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
    buyProduct: "Buy",
  },
];

/* Select the section element by class name */
const sec = document.querySelector(".collection-sec");

for (let i = 0; i < Flowers.length; i++) {
  // container
  let containerDiv = document.createElement("div");
  containerDiv.className = "container";
  sec.appendChild(containerDiv);

  // image
  let imgDiv = document.createElement("div");
  imgDiv.className = "imageDiv";
  containerDiv.appendChild(imgDiv);

  let image = document.createElement("img");
  let nameH = document.createElement("h3");
  let priceH = document.createElement("h4");
  let heightP = document.createElement("p");
  let colorP = document.createElement("p");
  let FloweringPeriodP = document.createElement("p");
  let PlantPeriodeP = document.createElement("p");
  let byProductA = document.createElement("a");

  // description
  let DescriptionDiv = document.createElement("div");
  DescriptionDiv.className = "description";
  containerDiv.appendChild(DescriptionDiv);

  // Append child to the the containers
  imgDiv.appendChild(image);
  DescriptionDiv.appendChild(nameH);
  DescriptionDiv.appendChild(priceH);
  DescriptionDiv.appendChild(heightP);
  DescriptionDiv.appendChild(colorP);
  DescriptionDiv.appendChild(PlantPeriodeP);
  DescriptionDiv.appendChild(FloweringPeriodP);
  DescriptionDiv.appendChild(byProductA);

  // Set the inner text of the element to the array variables
  image.src = Flowers[i].picture;
  nameH.innerText = Flowers[i].name;
  priceH.innerText = Flowers[i].price;
  heightP.innerText = Flowers[i].height;
  colorP.innerText = Flowers[i].color;
  PlantPeriodeP.innerText = Flowers[i].PlantPeriode;
  FloweringPeriodP.innerText = Flowers[i].FloweringPeriod;
  byProductA.innerText = Flowers[i].buyProduct;

  let flowerClassName = (priceH.className = "nameClass");
  let byFlower = (byProductA.className = "byProductClass");
}


