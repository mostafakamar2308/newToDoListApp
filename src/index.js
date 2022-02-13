var sectionObj = {
  Programming: {
    "Productive Hero": {
      "Make The app": {},
      "Publish the app": {},
      "Make Money": {},
      "Marry ?": {},
    },
    "Social Media Limiting app": {
      "Make The app": {},
      "Publish the app": {},
      "Make Money": {},
      "Marry ?": {},
    },
  },
  "Medical School": {
    CVS: { Anatomy: {}, physiology: {}, Pharmacology: {} },
    CNS: { Anatomy: {}, physiology: {}, Pathology: {} },
  },
  Home: {
    "clean Bedroom": {
      "Make the bed": {},
      "Clean your desk": {},
      "Organize Your books": {},
    },
    cook: { "get Ingredients": {}, "make Fire": {} },
  },
  Personal: {
    Diary: { "10/2": {}, "11/2": {} },
    Family: { "Talk to Sister": {}, "Get mother from Grandmother": {} },
    Training: { "Leg Day": {}, "10KM Run": {} },
    Friends: { "Talk to Khattab": {} },
  },
};
let colorIndex = 0;

document.addEventListener("click", function (event) {
  if (!event.target.closest(".add") && document.querySelector(".options")) {
    closeModal(document.querySelector(".options"));
  }
  if (event.target.id === "modal-container") {
    closeModal(document.querySelector("#modal-container"));
  }
  if (event.target.id === "taskWindowContainer") {
    removeModal(document.querySelector("#taskWindowContainer"));
    createSection(document.querySelector("main"));
    document.querySelector(`#${openedSection}`).click();
    document.querySelector(".add").style.display = "block";
  }
  if (event.target.id === "new-task-container") {
    removeModal(document.querySelector("#new-task-container"));
  }
});
let openedSection = "";
let openedProject = "";
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
  document.querySelector(".categories-list").firstChild.click();
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

  scrollOrNo(catSection, "x");
  window.addEventListener("resize", scrollOrNo, catSection, "x");
}
function createSectionsDivs(ele, item) {
  let newProj = document.createElement("div");
  newProj.textContent = `${item}`;
  let newId = item.split(" ").join("-");
  newProj.setAttribute("id", `${newId}`);
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
function scrollOrNo(el, dimension) {
  var curOverflow = el.style.overflow;

  if (dimension == "x") {
    if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden";

    let isOverflowing = el.clientWidth < el.scrollWidth;

    el.style.overflow = "hidden";
    if (isOverflowing == true) {
      el.style.overflowX = "scroll";
    } else {
      el.style.overflowX = "hidden";
    }
  } else if (dimension == "y") {
    if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden";

    let isOverflowing = el.clientHeight < el.scrollHeight;

    el.style.overflow = "hidden";
    if (isOverflowing == true) {
      el.style.overflowY = "scroll";
    } else {
      el.style.overflowY = "hidden";
    }
  }
}
function createProjectList(eleClicked) {
  openedSection = eleClicked.path[0].id;
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
  scrollOrNo(projectSection, "y");
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
  project.id = ele.split(" ").join("-");
  chooseColor(project);
  project.addEventListener("click", function l() {
    openedProject = ele;
    let taskColor = getComputedStyle(project).backgroundColor;
    animateProjectList();
    setTimeout(() => {
      document
        .querySelector("main")
        .removeChild(document.querySelector("#project-section"));
      document
        .querySelector("main")
        .removeChild(document.querySelector(".categories-list"));
      closeModal(document.querySelector(".add"));
    }, 1000);

    createTasksWindow(taskColor);
  });
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
  newSection.value = "";
  closeModal(document.querySelector("#modal-container"));
  scrollOrNo(document.querySelector(".categories-list", "x"));
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
    sectionObj[document.querySelector("h2").textContent][inpt.value] = [];
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
function removeModal(ele) {
  ele.parentNode.removeChild(ele);
}
function closeModal(ele) {
  ele.style.display = "none";
}
function animateProjects() {
  let i = 2;
  document.querySelectorAll(".project").forEach((ele) => {
    if (i % 2 == 0) {
      ele.classList.add("left");
      i++;
    } else {
      ele.classList.add("right");
      i++;
    }
  });
  gsap.from(".left", {
    duration: 0.5,
    opacity: 0,
    x: -400,
    stagger: 1,
    ease: "ease",
  });
  gsap.from(".right", {
    duration: 0.5,
    delay: 0.5,
    x: 400,
    opacity: 0,
    ease: "ease",
    stagger: 1,
  });
}

function animateProjectList() {
  let list = document.querySelector("#project-section");
  gsap.to(list, {
    duration: 1,
    transformOrigin: "50% 50%",
    rotateX: "360",
    opacity: "0",
    display: "none",
  });
}

function createTasksWindow(color) {
  let taskWindowContainer = document.createElement("section");
  taskWindowContainer.id = "taskWindowContainer";
  let taskWindow = document.createElement("section");
  taskWindow.id = "task-window";
  taskWindowContainer.append(taskWindow);
  document.querySelector("main").append(taskWindowContainer);
  taskWindow.style.backgroundColor = color;
  animateTaskWindow(taskWindow);
  let tasksContainer = document.createElement("section");
  tasksContainer.id = "tasks-container";
  taskWindow.append(tasksContainer);
  createTasks();
  createAddTaskBtn();
  scrollOrNo(taskWindow, "y");
}
function createTasks() {
  Object.keys(
    sectionObj[openedSection.split("-").join(" ")][
      openedProject.split("-").join(" ")
    ]
  ).forEach((ele) => {
    createTask(ele);
  });
}
function createTask(ele) {
  let task = document.createElement("div");
  task.classList.add("task");
  task.id = ele.split(" ").join("-");
  task.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") {
      markTask(task);
      markTaskInObject(ele);
    }
  });
  let taskText = document.createElement("label");
  taskText.innerText = ele;
  let mark = document.createElement("span");

  let btn = document.createElement("button");
  btn.textContent = "Work on the task";
  btn.addEventListener("click", function () {
    createTimerModal(task);
  });

  task.append(mark);
  task.append(taskText);
  task.append(btn);
  document.querySelector("#tasks-container").append(task);
  let taskSyntax =
    sectionObj[openedSection.split("-").join(" ")][
      openedProject.split("-").join(" ")
    ][ele];
  if (!taskSyntax.hasOwnProperty("done") || taskSyntax["done"] == false) {
  } else {
    markTask(task);
  }
}
function createTimerModal(task) {
  let timerContainer = document.createElement("section");
  timerContainer.classList.add("container");
  timerContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "SECTION") {
      workk = 0;
      removeModal(timerContainer);
    }
  });

  let timer = document.createElement("div");
  timer.id = "timer";

  let label = document.createElement("label");
  label.setAttribute("for", "pomodoro-setions");
  label.textContent = "Number Of Pomodoro Setions";

  let inpt = document.createElement("input");
  inpt.type = "number";
  inpt.id = "pomodoro-number";
  inpt.name = "pomodoro-number";
  inpt.defaultValue = 1;

  let startBtn = document.createElement("button");
  startBtn.id = "pomodoro-start";
  startBtn.innerHTML = "&#9658;";
  startBtn.addEventListener("click", function () {
    if (workk == 1) {
      return;
    } else {
      timerF(inpt.value, startBtn, task);
    }
  });
  timer.append(label);
  timer.append(startBtn);
  timer.append(inpt);
  timerContainer.append(timer);
  document.body.append(timerContainer);
}
function createAddTaskBtn() {
  let btn = document.createElement("button");
  btn.id = "add-task";
  btn.textContent = "Add New Task";
  btn.addEventListener("click", function () {
    createNewTaskModal();
  });
  document.querySelector("#task-window").append(btn);
}
function animateTaskWindow(t) {
  gsap.from(t, { duration: 1, delay: 1, scale: 0, opacity: 0 });
}

function createNewTaskModal() {
  let container = document.createElement("section");
  container.id = "new-task-container";
  let modal = document.createElement("section");
  modal.id = "new-task-window";
  let span = document.createElement("span");
  span.textContent = "What will you do today?";
  let input = document.createElement("input");
  input.id = "nameOfTask";
  let btn = document.createElement("div");
  btn.id = "add-task-final";
  btn.textContent = "Add New Task";
  btn.addEventListener("click", function () {
    createTask(input.value);
    sectionObj[openedSection.split("-").join(" ")][
      openedProject.split("-").join(" ")
    ][input.value] = { done: false };
    removeModal(document.querySelector("#new-task-container"));
    removeModal(document.querySelector("#add-task"));
    createAddTaskBtn();
    scrollOrNo(document.querySelector("#task-window"), "y");
  });
  modal.append(span);
  modal.append(input);
  modal.append(btn);
  container.append(modal);
  document.body.append(container);
}
function markTask(ele) {
  ele.children[1].classList.toggle("marked");
  if (ele.children[0].textContent.length > 0) {
    ele.children[0].textContent = "";
  } else {
    ele.children[0].innerHTML = "&#10003;";
  }
  ele.children[0].classList.toggle("marked");
}

function markTaskInObject(ele) {
  let task =
    sectionObj[openedSection.split("-").join(" ")][
      openedProject.split("-").join(" ")
    ][ele];
  if (!task.hasOwnProperty("done") || task.done != true) {
    task["done"] = true;
  } else {
    task["done"] = false;
  }
}
function timerF(num, ele, task) {
  workk = 1;
  let min = num;
  let hours, minutes, s;
  hours = Math.floor(min / 60);
  minutes = min - hours * 60;
  s = 0;
  ele.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  countDownF(s, minutes, hours, ele);
}

function countDownF(s, m, h, ele, task) {
  let ss = s,
    mm = m,
    hh = h;

  var myInterval = setInterval(function () {
    if (Number(ss) == 0) {
      ss = 59;
      if (Number(mm) == 0) {
        mm = 59;
        Number(hh--);
      } else {
        mm--;
      }
    } else {
      ss--;
    }
    let myCounter = `${hh.toString().padStart(2, "0")}:${mm
      .toString()
      .padStart(2, "0")}:${ss.toString().padStart(2, "0")}`;
    ele.textContent = myCounter;
    if (myCounter === "00:00:00") {
      clearInterval(myInterval);
      ele.textContent = "Nice Work";
    }
  }, 1000);
}
let workk = 0;
