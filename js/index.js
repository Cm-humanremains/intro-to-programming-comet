// lesson 4-2
// copyright and footer
const today = new Date();
const thisyear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `Chris McCourt &copy; ${thisyear}`;
const footer = document.querySelector("footer");
footer.appendChild(copyright)
//console.log("copyright");


// create skills section
let skills = ["JavaScript", "HTML", "R-Programming", "CSS"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

// generate skills list
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
};

//lesson 4-3 handle message form
const messageForm = document.querySelector('form[name="leave_message"]')
messageForm.addEventListener("submit", (e) => {
    e.preventDefault()
let name = messageForm.querySelector('input[id ="name"]').value;
console.log(name);
let email = messageForm.querySelector('input[name ="email"]').value;
console.log(email);
let message = messageForm.querySelector("#message").value;
console.log(message);

let messageSection = document.getElementById("messages")
let messageList = messageSection.querySelector("ul")
console.log(messageList);
    
let newMessage = document.createElement("li");
let a = document.createElement("a");
let link = document.createElement("span");
    a.appendChild(link);
    a.innerText = name;
    a.href = "mailto:" + email;
    newMessage.appendChild(a);

const messageText=document.createElement("span")
messageText.innerText=" - " + message + " "
    newMessage.appendChild(messageText)

    // remove button to remove message.
const removeButton = document.createElement("button");
    removeButton.innerText = "remove"
    removeButton.type = "button";
    removeButton.addEventListener("click", (event) => {
const entry = event.target.parentNode
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});


// Github stuff lesson 6-1 and 602 adding projects section.

const User = "cm-humanremains";
const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");


fetch(`https://api.github.com/users/${User}/repos`)
  .then((repos) => repos.json())
  .then((repositories) => {
    repositories.forEach((repo) => {
const project = document.createElement("li");
   project.innerText = repo.name;
      projectList.appendChild(project);
    });
  });


// Dark Mode

function dark() {
    var element = document.body;
    element.classList.toggle("mode");
  }

  //var currentTime = new Date().getHours();
  //if (document.body) {
      //if (6 <= currentTime && currentTime < 20) {
         // document.body.background = "img\Slide1.jpg";
     // }
      //else {
         // document.body.background = "img\Slide1dk.jpg";
      //}
      //console.log(currentTime);
  //}

  // change color of home button landing page

