let sectionObj = {
  Programming: { "Productive Hero": {}, "Social Media Limiting app": {} },
  "Medical School": { CVS: {}, CNS: {} },
  Home: { "clean Bedroom": {}, cook: {} },
  Personal: { Diary: {}, Family: {}, Training: {}, Friends: {} },
};
let colorIndex = 0;

(function createHeader() {
  //creating the header for the site
  let header = document.createElement("header");
  document.body.append(header);
  createLogo(header);
  createUserImage(header);
})();
function createLogo(ele) {
  let logo = document.createElement("img");
  logo.src = "/src/images/logo.png";
  logo.classList.add("logo");
  ele.append(logo);
}
function createUserImage(ele) {
  let userSection = document.createElement("div");
  userSection.classList.add("user-profile");
  let userImg = document.createElement("img");
  userImg.src = "/src/images/logo.png";
  userSection.append(userImg);
  ele.append(userSection);
}

//create the main contnet
function createMainContent() {
  let main = document.createElement("main");
  document.body.append(main);
  createSection(main);
  document.querySelector("#Programming").click();
  createAddSection(main);
}
createMainContent();

function createSection(ele) {
  let catSection = document.createElement("section");
  catSection.classList.add("categories-list");
  ele.append(catSection);

  //create content of Category Lists
  Object.keys(sectionObj).forEach((item) => {
    createSectionsDivs(catSection, item);
  });
  addsectionDiv(catSection);

  scrollOrNo(catSection);
  window.addEventListener("resize", scrollOrNo(catSection));
}
function createSectionsDivs(ele, item) {
  let newProj = document.createElement("div");
  newProj.setAttribute("id", `${item}`);
  newProj.textContent = `${item}`;
  chooseColor(newProj);
  ele.append(newProj);
  newProj.addEventListener("click", createProjectList, newProj.path);
}
function addsectionDiv(ele) {
  let addSection = document.createElement("div");
  addSection.classList.add("add-section");
  addSection.textContent = "+";
  ele.append(addSection);
  addSection.addEventListener("click", showSectionModal);
}

//The function which determines what is the background color for element
function chooseColor(newProj) {
  if (colorIndex < 4) {
    switch (colorIndex) {
      case 0:
        newProj.classList.add("red");
        break;
      case 1:
        newProj.classList.add("orange");
        break;
      case 2:
        newProj.classList.add("yellow");
        break;
      case 3:
        newProj.classList.add("blue");
        break;
    }
    colorIndex++;
  } else {
    colorIndex = 0;
    colorIndex++;

    newProj.classList.add("red");
  }
}
//the function which determines if anyscrolling happens or no
function scrollOrNo(ele) {
  let arr = [];
  for (let i = 0; i < ele.children.length; i++) {
    arr.push(ele.children[i].offsetWidth);
  }
  let eleWidth = arr.reduce((acc, now) => {
    return acc + now;
  }, 0);

  let mainWidth = document.querySelector("main").offsetWidth;

  if (mainWidth - eleWidth > 0) {
    ele.style.overflowX = "hidden";
  } else {
    ele.style.overflowX = "scroll";
  }
}
function createProjectList(eleClicked) {
  if (document.querySelector("#project-section")) {
    document
      .querySelector("#project-section")
      .parentNode.removeChild(document.querySelector("#project-section"));
  }
  let projectSection = document.createElement("section");
  projectSection.id = "project-section";
  document.querySelector("main").append(projectSection);

  let projectTitle = document.createElement("h2");
  projectTitle.textContent = `${eleClicked.path[0].textContent}`;
  projectSection.append(projectTitle);
  createProjectsInProjectList(eleClicked, projectSection);
}

function createProjectsInProjectList(eleClicked, projectSection) {
  Object.keys(sectionObj[eleClicked.path[0].textContent]).forEach((ele) => {
    createProject(ele, projectSection);
  });
  animateProjects();
  addNewProjectDiv(projectSection);
}
function createProject(ele, projectSection) {
  let project = document.createElement("div");
  project.classList.add("project");
  project.textContent = ele;

  chooseColor(project);
  projectSection.append(project);
}

function createAddSection(ele) {
  let add = document.createElement("Section");
  add.className = "add";
  ele.append(add);
  createAddSign(add);
}
function createAddSign(ele) {
  let addSign = document.createElement("div");
  addSign.classList.add("add-new");
  addSign.textContent = "+";
  ele.append(addSign);
  addSign.addEventListener("click", showAdding);
}
function showAdding() {
  document.querySelector(".options").style.display = "block";
}
function createAddList() {
  let options = document.createElement("div");
  options.classList.add("options");
  let chooseSection = document.createElement("div");
  chooseSection.classList.add("add-section");
  chooseSection.textContent = "Section";
  options.append(chooseSection);

  let chooseProject = document.createElement("div");
  chooseProject.textContent = "Project";
  options.append(chooseProject);
  document.querySelector(".add").append(options);
}
createAddList();

function createSectionModal() {
  let modalContainer = document.createElement("section");
  modalContainer.id = "modal-container";

  let modal = document.createElement("div");
  modal.id = "newSection-modal";
  let sectionName = document.createElement("input");
  sectionName.id = "newSectionName";
  sectionName.name = "newSectionName";

  let sectionLabel = document.createElement("label");
  sectionLabel.setAttribute("for", "newSectionName");
  sectionLabel.textContent = "What is the new Section in your life?";

  let addSectionBtn = document.createElement("btn");
  addSectionBtn.textContent = "Start New Journey";
  addSectionBtn.id = "addSectionBtn";
  addSectionBtn.addEventListener("click", addSection);

  modal.append(sectionLabel);
  modal.append(sectionName);
  modal.append(addSectionBtn);
  modalContainer.append(modal);
  document.body.append(modalContainer);
}
createSectionModal();
function showSectionModal() {
  document.querySelector("#modal-container").style.display = "flex";
}

function addSection() {
  let newSection = document.querySelector("#newSectionName");
  document
    .querySelector(".categories-list")
    .removeChild(document.querySelector(".categories-list").lastChild);
  createSectionsDivs(
    document.querySelector(".categories-list"),
    newSection.value.charAt(0).toUpperCase() + newSection.value.slice(1)
  );
  addsectionDiv(document.querySelector(".categories-list"));
  let newObj = {
    [newSection.value.charAt(0).toUpperCase() + newSection.value.slice(1)]: {},
  };
  addSectionToMainObj(sectionObj, newObj);
  console.log(sectionObj);
  newSection.value = "";
  closeModal(document.querySelector("#modal-container"));
  scrollOrNo(document.querySelector(".categories-list"));
}

function addSectionToMainObj(obj, ele) {
  Object.assign(obj, ele);
}

document.querySelectorAll(".add-section").forEach((ele) => {
  ele.addEventListener("click", showSectionModal);
});

function addNewProjectDiv(container) {
  let add = document.createElement("div");
  add.textContent = "Start New Project";
  add.classList.add("new-project");
  add.addEventListener("click", addNewProject);
  container.append(add);
}
function addNewProject() {
  let section = document.querySelector("h2").textContent;
  showProjectModal();
}
function showProjectModal() {
  document.querySelector(".project-modal").style.display = "flex";
}
function createProjectModal() {
  let container = document.createElement("section");
  container.classList.add("project-modal");
  container.addEventListener("click", function (event) {
    if (event.target === this) {
      container.style.display = "none";
    }
  });
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "What is your New Project's Name?";

  let inpt = document.createElement("input");
  inpt.id = "new-project-name";

  let btn = document.createElement("div");
  btn.textContent = "Start New Project";
  btn.addEventListener("click", function h() {
    document
      .querySelector("#project-section")
      .removeChild(document.querySelector("#project-section").lastChild);
    createProject(inpt.value, document.querySelector("#project-section"));
    sectionObj[document.querySelector("h2").textContent][inpt.value] = {};
    addNewProjectDiv(document.querySelector("#project-section"));
    closeModal(document.querySelector(".project-modal"));
  });
  div.append(h3);
  div.append(inpt);
  div.append(btn);
  container.append(div);
  document.body.append(container);
}
createProjectModal();

//make the add section disappear if the user clicked outside
document.addEventListener("click", function (event) {
  if (!event.target.closest(".add") && document.querySelector(".options")) {
    closeModal(document.querySelector(".options"));
  }
  if (event.target.id === "modal-container") {
    closeModal(document.querySelector("#modal-container"));
  }
});
function closeModal(ele) {
  ele.style.display = "none";
}
function animateProjects() {
  let i = 1;
  document.querySelectorAll(".project").forEach((ele) => {
    if (i % 2 == 0) {
      ele.classList.add("left");
      i++;
    } else {
      ele.classList.add("right");
      i++;
    }
  });
  gsap.from(".left", { duration: 0.5, x: -400 });
  gsap.from(".right", { duration: 0.5, x: 400 });
}
