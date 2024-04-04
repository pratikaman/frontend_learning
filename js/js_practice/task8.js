// create a search bar that displays a live search results as user types, updating the results without refreshing the page.

var input = document.querySelector("input");
var people = document.querySelector(".people");

var persons = [
  {
    name: "John",
    src: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pratik",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tanya",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Prabhat",
    src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tannu",
    src: "https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Neha",
    src: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rahul",
    src: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Andrea",
    src: "https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Raunak",
    src: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function createList(person_list) {
  var pers = "";

  person_list.forEach(function (e) {
    pers += `<div class="person">
    <div class="img">
        <img src=${e.src} alt="">
        </div>
        <h4>${e.name}</h4>
    </div>`;
  });

  people.innerHTML = pers;
}

createList(persons);

input.addEventListener("input", function (e) {
  // console.log(e.target.value);

  var search_list = persons.filter(function (person) {
    return person.name.toLowerCase().startsWith(input.value.toLowerCase());
  });

  createList(search_list);
});
