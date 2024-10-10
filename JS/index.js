const categoryDiv = getId("pedCategories");

async function allCategory() {
  const allItems = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const convertData = await allItems.json();
  const data = convertData.categories;
  showCategories(data);
}
function showCategories(data) {
  data.forEach((v) => {
    const button = document.createElement("button");
    button.setAttribute("id", `btn${v.id}`);
    button.onclick = () => {
      categoryPed(`${v.category}`, `btn${v.id}`);
    };
    button.classList =
      "normal-btn";
    button.innerHTML = `
        <img src="${v.category_icon}"/>
        <p class="font-bold text-3xl">${v.category}</p>
        `;
    categoryDiv.append(button);
  });
}

function removeDefaultBtn(){
  let allbtn = document.getElementsByClassName("active-btn");
  for(let btn of allbtn){
    btn.classList.remove("active-btn")
  }
} 

function categoryPed(category, id) {
  removeDefaultBtn()
  let showCardDiv = document.getElementById("showCard");
  showCardDiv.innerHTML = "";
  document
    .getElementById(id)
    .classList.add("active-btn");
  const div = document.createElement("div");
  div.classList = 'w-full h-full absolute z-20 flex justify-center items-center';
  div.innerHTML = `
              <div>
                <img src="./images/loading.gif" class="w-20" alt="loading">
              </div>
  `;
  showCardDiv.append(div)
  setTimeout(async ()=>{
    const allCardInfo = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${category}`
    );
    const showCardData = await allCardInfo.json();
    const data = showCardData.data;
    showCard(data);
  },2000)
}

async function allCard() {
  const allCardInfo = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const showCardData = await allCardInfo.json();
  const data = showCardData.pets;
  showCard(data);
}
const showLikeImg = getId("showLikeImg");
function clickLike(img) {
  const div = document.createElement("div");
  div.classList = "w-5/12";
  div.innerHTML = `
  <img src="${img}" class="w-full h-[100px] rounded-xl" alt="">
  `;
  showLikeImg.appendChild(div);
}

function clickAdopt(id) {
  document.getElementById("showCounter").innerText = "3";
  getId("my_modal_2").showModal();
  let num = 2;
  let timeShow = setInterval(() => {
    document.getElementById("showCounter").innerText = num;
    if (num === 0) {
      getId("my_modal_2").close();
      clearInterval(timeShow);
    }
    num--;
  }, 1000);
  getId(`${id}`).setAttribute("disabled", "disabled");
  getId(`${id}`).classList =
    "py-2 px-5 border rounded-lg bg-zinc-200 text-zinc-500  text-lg font-medium";
}

function clickDetails(id) {
  getId("my_modal_4").showModal();
  let pedInfo = async () => {
    let ped = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    let data = await ped.json();
    let pets = data.pets;
    pets.map((v) => {
      if (v.petId == id) {
        getId("detailsImg").setAttribute("src", `${v.image}`);
        getId("detailsName").innerText = `${
          v.pet_name ? v.pet_name : "You call any name"
        }`;
        getId("detailsBreed").innerText = `Breed: ${
          v.breed ? v.breed : "Not available"
        }`;
        getId("detailsBirth").innerText = `Birth: ${
          v.date_of_birth ? v.date_of_birth : "Not available"
        }`;
        getId("detailsGender").innerText = `Gender: ${
          v.gender ? v.gender : "Not available"
        }`;
        getId("detailsPrice").innerText = `Price: ${
          v.price ? v.price : "Not available"
        }`;
        getId(
          "detailsVer"
        ).innerText = `Vaccinated status: ${v.vaccinated_status}`;
        getId("detailsDiscription").innerText = `${v.pet_details}`;
      }
    });
  };
  pedInfo();
}

const cardDiv = getId("showCard");
function showCard(data) {
  let showCardDiv = document.getElementById("showCard");
  showCardDiv.innerHTML = "";
  if (data.length == 0) {
    showCardDiv.classList.remove("grid");
    showCardDiv.innerHTML = `
      <div class="p-5 bg-zinc-100 rounded-xl flex flex-col justify-center items-center h-[500px] text-center gap-3">
      <div><img src="./images/error.webp"></div>
      <h2 class="font-bold text-3xl">No Information Available</h2>
      <p class="w-8/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
      </div>
      `;
    return;
  }
  showCardDiv.classList.add("grid");
  data.forEach((v) => {
    const img = v.image;
    const id = v.petId;
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="p-3 space-y-5 shadow-lg rounded-xl">
              <div>
                <img
                  src="${v.image}"
                  class="rounded-xl h-[250px] w-full"
                  alt=""
                />
              </div>
              <div>
                <h3 class="font-bold text-xl mb-2">${
                  v.pet_name ? v.pet_name : "You call any name"
                }</h3>
                <p class="flex items-center gap-1.5"><img src="./images/Frame.png" alt=""> Breed: ${
                  v.breed ? v.breed : "Not available"
                }</p>
                <p class="flex items-center gap-1.5"><img src="./images/Frame (1).png" alt=""> Birth: ${
                  v.date_of_birth ? v.date_of_birth : "Not available"
                }</p>
                <p class="flex items-center gap-1.5"><img src="./images/Frame (2).png" alt=""> Gender: ${
                  v.gender ? v.gender : "Not available"
                }</p>
                <p class="flex items-center gap-1.5"><img src="./images/Frame (3).png" alt=""> Price: ${
                  v.price ? v.price : "Not available"
                }$</p>
              </div>
              <div class="flex justify-between">
                <button
                  class="py-2 px-5 border rounded-lg active:border-[#0e7a81]"
                  onclick="clickLike('${img}')"
                >
                  <i class="fa-regular fa-thumbs-up text-3xl"></i>
                </button>
                <button
                  id="adopt${id}"
                  class="py-2 px-5 border rounded-lg text-[#0e7a81] text-lg font-medium active:border-[#0e7a81]"
                  onclick="clickAdopt('adopt${id}')"
                >
                  Adopt
                </button>
                <button
                  class="py-2 px-5 border rounded-lg text-[#0e7a81] text-lg font-medium active:border-[#0e7a81]"
                  onclick="clickDetails('${id}')"
                >
                  Details
                </button>
              </div>
            </div>
        `;
    cardDiv.appendChild(card);
  });
}

async function sortByPrice() {
  const allCardInfo = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const showCardData = await allCardInfo.json();
  const data = showCardData.pets;
  let newone = data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  showCard(newone)
}
allCategory();
allCard();
