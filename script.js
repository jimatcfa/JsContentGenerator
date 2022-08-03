let guests = [
  {
    name: "Jim",
    age: 25,
    likes: ["corn", "chicken"],
    hates: ["diet soda"],
    allergicTo: ["eggs"]
  },
  {
    name: "Steve",
    age: 27,
    likes: ["potatoes", "pancakes"],
    hates: ["liver"],
    allergicTo: ["milk"]
  },
  {
    name: "Russell",
    age: 23,
    likes: ["hamburgers"],
    hates: ["mushrooas"],
    allergicTo: []
  },
]

const listGuests = function(guests) {
  const guestList = document.querySelector("#guestList");
  guests.forEach(function(guest) {
    const guestHtml = document.createElement("section");
    guestHtml.classList.add("guest");
    guestHtml.innerHTML = `
      <h1>${guest.name}</h1>
      <p>${guest.age} years old</p>
      <section class = "likes">Likes:
        <ul></ul>
      </section>

    
    `
    const likesHtml = guestHtml.querySelector(".likes>ul");
    guest.likes.forEach(
      function(item) {
        const likesItem = document.createElement("li");
        const itemText = document.createTextNode(item);
        likesItem.appendChild(itemText);
        likesHtml.appendChild(likesItem);
      }
    )
    guestList.appendChild(guestHtml);
  }
  )

}

listGuests(guests);