let storage = window.localStorage,
  sectionObj;
import lil from "/src/images/LogoMakr-00DE1M.png";
import user from "/src/images/man.png";
import alarm from "/src/sounds/alarm.mp3";
let alarmSound = new Audio(alarm);
if (!storage.getItem("sectionObj")) {
  sectionObj = {
    Programming: {
      "Not Done": {
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
      Done: {},
    },
    "Medical School": {
      "Not Done": {
        CVS: { Anatomy: {}, physiology: {}, Pharmacology: {} },
        CNS: { Anatomy: {}, physiology: {}, Pathology: {} },
      },
      Done: {},
    },
    Home: {
      "Not Done": {
        "clean Bedroom": {
          "Make the bed": {},
          "Clean your desk": {},
          "Organize Your books": {},
        },
        cook: { "get Ingredients": {}, "make Fire": {} },
      },
      Done: {},
    },
    Personal: {
      "Not Done": {
        Diary: { "10/2": {}, "11/2": {} },
        Family: { "Talk to Sister": {}, "Get mother from Grandmother": {} },
        Training: { "Leg Day": {}, "10KM Run": {} },
        Friends: { "Talk to Khattab": {} },
      },
      Done: {},
    },
  };
  storage.setItem("sectionObj", JSON.stringify(sectionObj));
} else {
  sectionObj = JSON.parse(storage.getItem("sectionObj"));
  console.log(sectionObj);
}

let colorIndex = 0;
let menuuAppear = 0;

document.addEventListener("click", function (event) {
  if (!event.target.closest(".add") && document.querySelector(".options")) {
    returnToStablePlusSign();
    closeAddMenu();
    menuuAppear = 0;
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
  if (
    !event.target.closest(".settings") &&
    document.querySelector(".mark-complete")
  ) {
    removeModal(document.querySelector(".list"));
  }
});
let openedSection = "";
let openedProject = "";
let startTime,
  clickTime = 750;

(function createHeader() {
  //creating the header for the site
  let header = document.createElement("header");
  document.body.append(header);
  createLogo(header);
  createUserImage(header);
})();
function createLogo(ele) {
  let logo = document.createElement("img");
  logo.src = lil;
  logo.classList.add("logo");
  ele.append(logo);
}
function createUserImage(ele) {
  let userSection = document.createElement("div");
  userSection.classList.add("user-profile");
  let userImg = document.createElement("img");
  userImg.src = user;
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
  newProj.addEventListener("mousedown", function () {
    startTime = new Date();
  });
  newProj.addEventListener("mouseup", function () {
    let elapsedTime = new Date() - startTime;
    if (elapsedTime >= clickTime) {
      console.log(`You Holded Me for${elapsedTime}ms`);
      removeSectionMenu(newProj);
    }
  });
}
function removeSectionMenu(ele) {
  let container = document.createElement("div");
  container.classList.add("Section-remove-container");
  document.body.append(container);
  container.addEventListener("click", function () {
    removeModal(container);
  });
  let btn = document.createElement("button");
  btn.classList.add("remove-section");
  btn.textContent = "Remove The Whole Section";
  btn.addEventListener("click", function () {
    delete sectionObj[ele.textContent];
    storage.setItem("sectionObj", JSON.stringify(sectionObj));
    removeModal(ele);
    document.querySelector(".categories-list").firstChild.click();
  });
  container.appendChild(btn);
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

    if (isOverflowing == true) {
      el.style.overflowX = "scroll";
    } else {
      el.style.overflowX = "hidden";
    }
  } else if (dimension == "y") {
    if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden";

    let isOverflowing = el.clientHeight < el.scrollHeight;

    if (isOverflowing == true) {
      el.style.overflowY = "scroll";
    } else {
      el.style.overflowY = "hidden";
    }
  }
}
function createProjectList(eleClicked) {
  openedSection = eleClicked.path[0].id;
  let ele;
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
  addNewProjectDiv(projectSection);

  scrollOrNo(document.querySelector("main"), "y");
}

function createProjectsInProjectList(eleClicked, projectSection) {
  let notDone = document.createElement("section");
  notDone.id = "projects-not-done-container";
  let notDoneTitle = document.createElement("h3");
  if (!sectionObj[eleClicked.path[0].textContent].hasOwnProperty("Not Done")) {
    console.log(sectionObj);
  }

  notDoneTitle.innerHTML =
    "<div class='not-lol' style='display:inline-block; transform: rotate(0deg)'> &#9658; </div>Not Completed";
  notDone.append(notDoneTitle);
  notDone.addEventListener("click", function (event) {
    if (event.target.classList.contains("not-lol")) {
      if (
        document.querySelector(".not-lol").style.transform == "rotate(0deg)" ||
        document.querySelector(".not-lol").style.transform ==
          "translate(0px, 0px)"
      ) {
        gsap.to(".not-lol", { duration: 0.3, rotationZ: 90 });
        if (
          Object.keys(sectionObj[eleClicked.path[0].textContent]["Not Done"])
            .length === 0
        ) {
          console.log("works");
          let no = document.createElement("div");
          no.textContent = "No projects Yet";
          document.querySelector("#projects-not-done-container").append(no);
        } else {
          Object.keys(
            sectionObj[eleClicked.path[0].textContent]["Not Done"]
          ).forEach((ele) => {
            createProject(ele, notDone, "Not Done");
          });
        }
        scrollOrNo(document.querySelector("main"), `y`);
        animateProjectsInNotDone();
      } else {
        gsap.to(".not-lol", { duration: 0.3, rotationZ: 0 });
        for (
          let i = 0;
          i < document.querySelectorAll(".Not-Done").length;
          i++
        ) {
          removeModal(document.querySelector(".Not-Done"));
        }

        if (
          document.querySelector("#projects-not-done-container").lastChild
            .tagName !== "H3"
        ) {
          removeModal(
            document.querySelector("#projects-not-done-container").lastChild
          );
        }
      }
    }
  });
  projectSection.append(notDone);

  //make Done Section
  let Done = document.createElement("section");
  Done.id = "projects-done-container";
  let DoneTitle = document.createElement("h3");
  DoneTitle.innerHTML =
    "<div class='lol' style='display:inline-block; transform: rotate(0deg)'> &#9658; </div>Completed";
  Done.append(DoneTitle);
  if (!sectionObj[eleClicked.path[0].textContent].hasOwnProperty("Done")) {
    sectionObj[eleClicked.path[0].textContent]["Done"] = {};
  }

  Done.addEventListener("click", function (event) {
    if (event.target.classList.contains("lol")) {
      if (
        document.querySelector(".lol").style.transform == "rotate(0deg)" ||
        document.querySelector(".lol").style.transform == "translate(0px, 0px)"
      ) {
        gsap.to(".lol", { duration: 0.3, rotationZ: 90 });
        if (
          Object.keys(sectionObj[eleClicked.path[0].textContent]["Done"])
            .length === 0
        ) {
          let no = document.createElement("div");
          no.textContent = "No projects Yet";
          document.querySelector("#projects-done-container").append(no);
        } else {
          Object.keys(
            sectionObj[eleClicked.path[0].textContent]["Done"]
          ).forEach((ele) => {
            createProject(ele, Done, "Done");
          });
        }
        scrollOrNo(document.querySelector("main"), `y`);
        animateProjectsInDone();
      } else {
        gsap.to(".lol", { duration: 0.3, rotationZ: 0 });
        for (let i = 0; i < document.querySelectorAll(".Done").length; i++) {
          removeModal(document.querySelector(".Done"));
        }
        if (
          document.querySelector("#projects-done-container").lastChild
            .tagName !== "H3"
        ) {
          removeModal(
            document.querySelector("#projects-done-container").lastChild
          );
        }
      }
    }
  });
  projectSection.append(Done);
}
function createProject(ele, projectSection, division) {
  let project = document.createElement("div");
  project.classList.add("project");
  project.classList.add(division.toString().split(" ").join("-"));
  let text = document.createElement("label");
  text.textContent = ele;
  project.append(text);
  project.id = ele.split(" ").join("-");
  projectSection.append(project);
  if (project.parentNode.children[0].textContent === " ► Not Completed") {
    let settings = document.createElement("span");
    settings.textContent = "---";
    settings.classList.add("settings");
    settings.addEventListener("click", function () {
      completeMenu(settings);
    });
    project.append(settings);
  }

  chooseColor(project);
  project.addEventListener("click", function l(event) {
    if (event.target.tagName === "LABEL" || event.target.tagName === "DIV") {
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

      createTasksWindow(taskColor, division);
    }
  });
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

function createAddList() {
  let options = document.createElement("div");
  options.classList.add("options");
  let chooseSection = document.createElement("div");
  chooseSection.classList.add("add-menu-section");
  chooseSection.innerHTML = "<span> &#9658; </span> Section";
  chooseSection.addEventListener("click", showSectionModal);
  options.append(chooseSection);

  let chooseProject = document.createElement("div");
  chooseProject.innerHTML = " <span> &#9658; </span> Project ";
  chooseProject.classList.add("add-menu-project");
  chooseProject.addEventListener("click", addNewProject);

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
    [newSection.value.charAt(0).toUpperCase() + newSection.value.slice(1)]: {
      Done: {},
      "Not Done": {},
    },
  };
  addSectionToMainObj(sectionObj, newObj);
  newSection.value = "";
  closeModal(document.querySelector("#modal-container"));
  scrollOrNo(document.querySelector(".categories-list", "x"));
}

function addSectionToMainObj(obj, ele) {
  Object.assign(obj, ele);

  storage.setItem("sectionObj", JSON.stringify(obj));
  console.log(storage);
  console.log(obj);
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
    sectionObj[document.querySelector("h2").textContent]["Not Done"][
      inpt.value
    ] = {};
    storage.setItem("sectionObj", JSON.stringify(sectionObj));
    console.log(openedSection);
    document.querySelector(`#${openedSection}`).click();
    document.querySelector(".not-lol").click();
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
function animateProjectsInNotDone() {
  let i = 2;
  document.querySelectorAll(".Not-Done").forEach((ele) => {
    if (i % 2 == 0) {
      ele.classList.add("left-notDone");
      i++;
    } else {
      ele.classList.add("right-notDone");
      i++;
    }
  });
  gsap.from(".left-notDone", {
    duration: 0.5,
    opacity: 0,
    x: -400,
    stagger: 1,
    ease: "ease",
  });
  gsap.from(".right-notDone", {
    duration: 0.5,
    delay: 0.5,
    x: 400,
    opacity: 0,
    ease: "ease",
    stagger: 1,
  });
}
function animateProjectsInDone() {
  let i = 2;
  document.querySelectorAll(".Done").forEach((ele) => {
    if (i % 2 == 0) {
      ele.classList.add("left-Done");
      i++;
    } else {
      ele.classList.add("right-Done");
      i++;
    }
  });
  gsap.from(".left-Done", {
    duration: 0.5,
    opacity: 0,
    x: -400,
    stagger: 1,
    ease: "ease",
  });
  gsap.from(".right-Done", {
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

function createTasksWindow(color, division) {
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
  createTasks(division);
  createAddTaskBtn(division);
  scrollOrNo(taskWindow, "y");
}
function createTasks(division) {
  Object.keys(
    sectionObj[openedSection.split("-").join(" ")][division][
      openedProject.split("-").join(" ")
    ]
  ).forEach((ele) => {
    createTask(ele, division);
  });
}
function createTask(ele, division) {
  let task = document.createElement("div");
  task.classList.add("task");
  task.id = ele.split(" ").join("-");
  task.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") {
      markTask(task);
      markTaskInObject(ele, division);
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
    sectionObj[openedSection.split("-").join(" ")][division][
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
      removeModal(document.querySelector("#pomodoro-number"));
      timerF(inpt.value, startBtn, task);
    }
  });
  timer.append(label);
  timer.append(inpt);
  timer.append(startBtn);
  timerContainer.append(timer);
  document.body.append(timerContainer);
}
function createAddTaskBtn(division) {
  let btn = document.createElement("button");
  btn.id = "add-task";
  btn.textContent = "Add New Task";
  btn.addEventListener("click", function () {
    createNewTaskModal(division);
  });
  document.querySelector("#task-window").append(btn);
}
function animateTaskWindow(t) {
  gsap.from(t, { duration: 1, delay: 1, scale: 0, opacity: 0 });
}

function createNewTaskModal(division) {
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
    sectionObj[openedSection.split("-").join(" ")][division][
      openedProject.split("-").join(" ")
    ][input.value] = { done: false };
    createTask(input.value, division);
    removeModal(document.querySelector("#new-task-container"));
    removeModal(document.querySelector("#add-task"));
    createAddTaskBtn(division);
    scrollOrNo(document.querySelector("#task-window"), "y");
    storage.setItem("sectionObj", JSON.stringify(sectionObj));
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

function markTaskInObject(ele, division) {
  let task =
    sectionObj[openedSection.split("-").join(" ")][division][
      openedProject.split("-").join(" ")
    ][ele];
  if (!task.hasOwnProperty("done") || task.done != true) {
    task["done"] = true;
  } else {
    task["done"] = false;
  }
  storage.setItem("sectionObj", JSON.stringify(sectionObj));
}
function timerF(num, ele, task) {
  workk = 1;
  if (num == "") {
    num = 1;
  }
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
      alarmSound.play();
      fetch("https://type.fit/api/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let quoteIndex = Math.floor(Math.random() * 1600);
          ele.textContent = data[quoteIndex].text;
          ele.classList.add("finished-studying");
          removeModal(ele.parentNode.firstChild);
        });
    }
  }, 1000);
}
let workk = 0;
let menu = 0;
function markAllTasksInObj(hmmm) {
  let project = sectionObj[openedSection.split("-").join(" ")]["Done"][hmmm];
  for (let i = 0; i < Object.keys(project).length; i++) {
    project[Object.keys(project)[i]] = { done: true };
  }
}
function completeMenu(ele) {
  let container = document.createElement("span");
  container.classList.add("list");
  let markAsComplete = document.createElement("span");
  markAsComplete.textContent = "Mark As Complete";
  markAsComplete.classList.add("mark-complete");
  markAsComplete.addEventListener("click", function () {
    moveCompletedProject(
      sectionObj[openedSection.split("-").join(" ")]["Not Done"],
      markAsComplete.parentNode.parentNode.parentNode.id.split("-").join(" ")
    );
    let index = ele.parentNode.textContent.indexOf("---Mark As Complete");
    let hmmm = ele.parentNode.textContent.slice(0, index);
    markAllTasksInObj(hmmm);

    if (
      document.querySelector(".lol").style.transform == "rotate(90deg)" ||
      document.querySelector(".lol").style.transform == "translate(0px, 0px)"
    ) {
      createProject(
        markAsComplete.parentNode.parentNode.parentNode.id.split("-").join(" "),
        document.querySelector("#projects-done-container"),
        "Done"
      );
    }
    removecompleteObject(
      markAsComplete.parentNode.parentNode.parentNode.id.split("-").join(" ")
    );
    removeModal(
      document.querySelector(
        `#${markAsComplete.parentNode.parentNode.parentNode.id}`
      )
    );
    storage.setItem("sectionObj", JSON.stringify(sectionObj));
  });
  container.append(markAsComplete);
  let removeProject = document.createElement("span");
  removeProject.textContent = "Remove Project";
  removeProject.classList.add("remove-project");
  removeProject.addEventListener("click", function () {
    delete sectionObj[
      openedSection.split("-").join(" ")
    ]["Not Done"][removeProject.parentNode.parentNode.parentNode.id.split("-").join(" ")];
    storage.setItem("sectionObj", JSON.stringify(sectionObj));
    document.querySelector(`#${openedSection}`).click();
    document.querySelector(".not-lol").click();
  });
  container.append(removeProject);
  ele.append(container);
}
function moveCompletedProject(obj, l) {
  sectionObj[openedSection.split("-").join(" ")]["Done"][
    Object.keys(obj)[Object.keys(obj).indexOf(l)]
  ] = obj[l];
}
function removecompleteObject(property) {
  delete sectionObj[openedSection.split("-").join(" ")]["Not Done"][property];
}
function rotatePlusSign() {
  gsap.to(".add-new", {
    duration: 0.8,
    rotateZ: 270,
  });
}

function returnToStablePlusSign() {
  gsap.to(".add-new", { duration: 0.8, rotateZ: 0 });
}
function closeAddMenu() {
  gsap.to(".options", {
    duration: 1,
    scaleX: 0,
    scaleY: 0,
  });
}
function showAdding() {
  if (menuuAppear == 0) {
    rotatePlusSign();
    gsap.to(".add", {
      duration: 1,
      backgroundColor: "#22a35e",
      borderRadius: "40%",
    });
    gsap.to(".options", {
      duration: 0.5,
      scaleX: 1,
    });
    gsap.to(".options", {
      duration: 0.5,
      scaleY: 1,
    });
    moveItems();
    menuuAppear = 1;
  } else {
    returnToStablePlusSign();
    closeAddMenu();
    menuuAppear = 0;
  }
}
function moveItems() {
  gsap.from(".add-menu-project", { duration: 0.5, y: 500 });
  gsap.from(".add-menu-section", { duration: 0.8, y: 500 });
}
