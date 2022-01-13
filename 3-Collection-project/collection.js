const Flowers = [
  {
    picture: "./images/Apeldoorn.jpg",
    name: "Anemoon Mr. Fokker",
    price: "5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
  },
  {
    picture: "./images/Anemoon Mr. Fokker.jpg",
    name: "Anemoon Mr. Fokker",
    price: "5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
  },
  {
    picture: "./images/Barcelona.jpg",
    name: "Anemoon Mr. Fokker",
    price: "5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
  },
  {
    picture: "./images/Prinses Irene.jpg",
    name: "Anemoon Mr. Fokker",
    price: "5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
  },
  {
    picture: "./images/Carnaval de Nice.jpg",
    name: "Anemoon Mr. Fokker",
    price: "5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
  },
  {
    picture: "./images/Groenland.jpg",
    name: "Anemoon Mr. Fokker",
    price: "5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
  },
  {
    picture: "./images/Negrita Dubbel.jpg",
    name: "Anemoon Mr. Fokker",
    price: "5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
  },
  {
    picture: "./images/Blanda Blue Shade.jpg",
    name: "Anemoon Mr. Fokker",
    price: "5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
  },
  {
    picture: "./images/Ranonkel Oranje.jpg",
    name: "Anemoon Mr. Fokker",
    price: "5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
  },
  {
    picture: "./images/Ranonkel Rood.jpg",
    name: "Anemoon Mr. Fokker",
    price: "5.99$",
    height: "Height: 10 - 30cm",
    color: "Color: Orange",
    PlantPeriode: "Plant: august-november",
    FloweringPeriod: "Flower: january-december",
  },
];
console.log(Flowers.length);
const sec = document.querySelector(".collection-sec");
for (let i = 0; i < Flowers.length; i++) {
  // container
  let containerDiv = document.createElement("div");
  containerDiv.className = "container";
  sec.appendChild(containerDiv);

  // imageDiv
  let imgDiv = document.createElement("div");
  imgDiv.className = "imageDiv";

  let image = document.createElement("img");
  let nameH = document.createElement("h3");
  let priceH = document.createElement("h4");
  let heightP = document.createElement("p");
  let colorP = document.createElement("p");
  let FloweringPeriodP = document.createElement("p");
  let PlantPeriodeP = document.createElement("p");

  // description
  let DescriptionDiv = document.createElement("div");
  DescriptionDiv.className = "description";

  containerDiv.appendChild(imgDiv);
  containerDiv.appendChild(DescriptionDiv);
  imgDiv.appendChild(image);
  DescriptionDiv.appendChild(nameH);
  DescriptionDiv.appendChild(priceH);
  DescriptionDiv.appendChild(heightP);
  DescriptionDiv.appendChild(colorP);
  DescriptionDiv.appendChild(PlantPeriodeP);
  DescriptionDiv.appendChild(FloweringPeriodP);

  image.src = Flowers[i].picture;
  nameH.innerText = Flowers[i].name;
  priceH.innerText = Flowers[i].price;
  heightP.innerText = Flowers[i].height;
  colorP.innerText = Flowers[i].color;
  PlantPeriodeP.innerText = Flowers[i].PlantPeriode;
  FloweringPeriodP.innerText = Flowers[i].FloweringPeriod;
};
