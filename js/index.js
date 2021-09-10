/*var d = document.getElementById('i');
  d.style.position = "absolute";
  d.style.left = 700+'px';
  d.style.top = 450+'px';

*/
function remove(el) {
    var element = el;
    element.remove();
  };

// lesson 4-2
// copyright and footer
const today = new Date();
const thisyear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `Chris McCourt &copy; ${thisyear}`;
const footer = document.querySelector("footer");
    footer.appendChild(copyright)
//console.log("copyright");


// create web skills section
let skills = ["JavaScript", "HTML", "R-Programming", "CSS"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

// generate web skills list
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
};

/*//create People skillz section
let skillz = ["Communication", "Conflict Resolution", "Critical Thinking", "Organizaiton"];
let skillzSection = document.getElementById("skillz");
let skillzList = skillzSection.querySelector("ul");

// generate People skillz list
for (let i = 0; i < skillz.length; i++) {
    let skillx = document.createElement("li");
    skillx.innerHTML = skillz[i];
    skillzList.appendChild(skillx)
};
*/

//create Work History section
let workh = ["Custodian", "Library Associate", "Public Works Intern", "Economic Researcher","Financial Analyst","Purchasing Director"];
let workSection = document.getElementById("works");
let workList = workSection.querySelector("ul");

// work history list
for (let i = 0; i < workh.length; i++) {
    let worksh = document.createElement("li");
    worksh.innerHTML = workh[i];
    workList.appendChild(worksh)
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


// Github stuff lesson 6-1 and 6-2 adding projects section.

const user = "cm-humanremains";
const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");
projectList.innerHTML ="Portfolio".link("https://github.com/Cm-humanremains");

fetch(`https://api.github.com/users/${user}/repos`)
  .then((repos) => repos.json())
    .then((repositories) => {
        repositories.forEach((repo) => {

const project = document.createElement("li");
   project.innerText = repo.name;
      projectList.appendChild(project);
      
    });
  });




// Dark Mode - space mode for better viewing in teh afternoon evening time.



function dark() {
    var element = document.body;
    element.classList.toggle("mode");
  }


 
