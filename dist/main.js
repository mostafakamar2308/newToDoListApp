/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sounds/alarm.mp3":
/*!******************************!*\
  !*** ./src/sounds/alarm.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"aac0f2ae573d5c88a8c259fed236ff44.mp3\");\n\n//# sourceURL=webpack://my-to-do-list/./src/sounds/alarm.mp3?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_images_LogoMakr_00DE1M_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/images/LogoMakr-00DE1M.png */ \"./src/images/LogoMakr-00DE1M.png\");\n/* harmony import */ var _src_images_man_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/images/man.png */ \"./src/images/man.png\");\n/* harmony import */ var _src_sounds_alarm_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/sounds/alarm.mp3 */ \"./src/sounds/alarm.mp3\");\nlet storage = window.localStorage,\r\n  sectionObj;\r\n\r\n\r\n\r\nlet alarmSound = new Audio(_src_sounds_alarm_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\nif (!storage.getItem(\"sectionObj\")) {\r\n  sectionObj = {\r\n    Programming: {\r\n      \"Not Done\": {\r\n        \"Productive Hero\": {\r\n          \"Make The app\": {},\r\n          \"Publish the app\": {},\r\n          \"Make Money\": {},\r\n          \"Marry ?\": {},\r\n        },\r\n        \"Social Media Limiting app\": {\r\n          \"Make The app\": {},\r\n          \"Publish the app\": {},\r\n          \"Make Money\": {},\r\n          \"Marry ?\": {},\r\n        },\r\n      },\r\n      Done: {},\r\n    },\r\n    \"Medical School\": {\r\n      \"Not Done\": {\r\n        CVS: { Anatomy: {}, physiology: {}, Pharmacology: {} },\r\n        CNS: { Anatomy: {}, physiology: {}, Pathology: {} },\r\n      },\r\n      Done: {},\r\n    },\r\n    Home: {\r\n      \"Not Done\": {\r\n        \"clean Bedroom\": {\r\n          \"Make the bed\": {},\r\n          \"Clean your desk\": {},\r\n          \"Organize Your books\": {},\r\n        },\r\n        cook: { \"get Ingredients\": {}, \"make Fire\": {} },\r\n      },\r\n      Done: {},\r\n    },\r\n    Personal: {\r\n      \"Not Done\": {\r\n        Diary: { \"10/2\": {}, \"11/2\": {} },\r\n        Family: { \"Talk to Sister\": {}, \"Get mother from Grandmother\": {} },\r\n        Training: { \"Leg Day\": {}, \"10KM Run\": {} },\r\n        Friends: { \"Talk to Khattab\": {} },\r\n      },\r\n      Done: {},\r\n    },\r\n  };\r\n  storage.setItem(\"sectionObj\", JSON.stringify(sectionObj));\r\n} else {\r\n  sectionObj = JSON.parse(storage.getItem(\"sectionObj\"));\r\n  console.log(sectionObj);\r\n}\r\n\r\nlet colorIndex = 0;\r\nlet menuuAppear = 0;\r\n\r\ndocument.addEventListener(\"click\", function (event) {\r\n  if (!event.target.closest(\".add\") && document.querySelector(\".options\")) {\r\n    returnToStablePlusSign();\r\n    closeAddMenu();\r\n    menuuAppear = 0;\r\n  }\r\n  if (event.target.id === \"modal-container\") {\r\n    closeModal(document.querySelector(\"#modal-container\"));\r\n  }\r\n  if (event.target.id === \"taskWindowContainer\") {\r\n    removeModal(document.querySelector(\"#taskWindowContainer\"));\r\n    createSection(document.querySelector(\"main\"));\r\n    document.querySelector(`#${openedSection}`).click();\r\n    document.querySelector(\".add\").style.display = \"block\";\r\n  }\r\n  if (event.target.id === \"new-task-container\") {\r\n    removeModal(document.querySelector(\"#new-task-container\"));\r\n  }\r\n  if (\r\n    !event.target.closest(\".settings\") &&\r\n    document.querySelector(\".mark-complete\")\r\n  ) {\r\n    removeModal(document.querySelector(\".list\"));\r\n  }\r\n});\r\nlet openedSection = \"\";\r\nlet openedProject = \"\";\r\nlet startTime,\r\n  clickTime = 750;\r\n\r\n(function createHeader() {\r\n  //creating the header for the site\r\n  let header = document.createElement(\"header\");\r\n  document.body.append(header);\r\n  createLogo(header);\r\n  createUserImage(header);\r\n})();\r\nfunction createLogo(ele) {\r\n  let logo = document.createElement(\"img\");\r\n  logo.src = _src_images_LogoMakr_00DE1M_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  logo.classList.add(\"logo\");\r\n  ele.append(logo);\r\n}\r\nfunction createUserImage(ele) {\r\n  let userSection = document.createElement(\"div\");\r\n  userSection.classList.add(\"user-profile\");\r\n  let userImg = document.createElement(\"img\");\r\n  userImg.src = _src_images_man_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  userSection.append(userImg);\r\n  ele.append(userSection);\r\n}\r\n\r\n//create the main contnet\r\nfunction createMainContent() {\r\n  let main = document.createElement(\"main\");\r\n  document.body.append(main);\r\n  createSection(main);\r\n  document.querySelector(\".categories-list\").firstChild.click();\r\n  createAddSection(main);\r\n}\r\ncreateMainContent();\r\n\r\nfunction createSection(ele) {\r\n  let catSection = document.createElement(\"section\");\r\n  catSection.classList.add(\"categories-list\");\r\n  ele.append(catSection);\r\n\r\n  //create content of Category Lists\r\n  Object.keys(sectionObj).forEach((item) => {\r\n    createSectionsDivs(catSection, item);\r\n  });\r\n  addsectionDiv(catSection);\r\n  scrollOrNo(catSection, \"x\");\r\n  window.addEventListener(\"resize\", scrollOrNo, catSection, \"x\");\r\n}\r\nfunction createSectionsDivs(ele, item) {\r\n  let newProj = document.createElement(\"div\");\r\n  newProj.textContent = `${item}`;\r\n  let newId = item.split(\" \").join(\"-\");\r\n  newProj.setAttribute(\"id\", `${newId}`);\r\n  chooseColor(newProj);\r\n  ele.append(newProj);\r\n  newProj.addEventListener(\"click\", createProjectList, newProj.path);\r\n  newProj.addEventListener(\"mousedown\", function () {\r\n    startTime = new Date();\r\n  });\r\n  newProj.addEventListener(\"mouseup\", function () {\r\n    let elapsedTime = new Date() - startTime;\r\n    if (elapsedTime >= clickTime) {\r\n      console.log(`You Holded Me for${elapsedTime}ms`);\r\n      removeSectionMenu(newProj);\r\n    }\r\n  });\r\n}\r\nfunction removeSectionMenu(ele) {\r\n  let container = document.createElement(\"div\");\r\n  container.classList.add(\"Section-remove-container\");\r\n  document.body.append(container);\r\n  container.addEventListener(\"click\", function () {\r\n    removeModal(container);\r\n  });\r\n  let btn = document.createElement(\"button\");\r\n  btn.classList.add(\"remove-section\");\r\n  btn.textContent = \"Remove The Whole Section\";\r\n  btn.addEventListener(\"click\", function () {\r\n    delete sectionObj[ele.textContent];\r\n    storage.setItem(\"sectionObj\", JSON.stringify(sectionObj));\r\n    removeModal(ele);\r\n    document.querySelector(\".categories-list\").firstChild.click();\r\n  });\r\n  container.appendChild(btn);\r\n}\r\nfunction addsectionDiv(ele) {\r\n  let addSection = document.createElement(\"div\");\r\n  addSection.classList.add(\"add-section\");\r\n  addSection.textContent = \"+\";\r\n  ele.append(addSection);\r\n  addSection.addEventListener(\"click\", showSectionModal);\r\n}\r\n\r\n//The function which determines what is the background color for element\r\nfunction chooseColor(newProj) {\r\n  if (colorIndex < 4) {\r\n    switch (colorIndex) {\r\n      case 0:\r\n        newProj.classList.add(\"red\");\r\n        break;\r\n      case 1:\r\n        newProj.classList.add(\"orange\");\r\n        break;\r\n      case 2:\r\n        newProj.classList.add(\"yellow\");\r\n        break;\r\n      case 3:\r\n        newProj.classList.add(\"blue\");\r\n        break;\r\n    }\r\n    colorIndex++;\r\n  } else {\r\n    colorIndex = 0;\r\n    colorIndex++;\r\n\r\n    newProj.classList.add(\"red\");\r\n  }\r\n}\r\n//the function which determines if anyscrolling happens or no\r\nfunction scrollOrNo(el, dimension) {\r\n  var curOverflow = el.style.overflow;\r\n\r\n  if (dimension == \"x\") {\r\n    if (!curOverflow || curOverflow === \"visible\") el.style.overflow = \"hidden\";\r\n\r\n    let isOverflowing = el.clientWidth < el.scrollWidth;\r\n\r\n    if (isOverflowing == true) {\r\n      el.style.overflowX = \"scroll\";\r\n    } else {\r\n      el.style.overflowX = \"hidden\";\r\n    }\r\n  } else if (dimension == \"y\") {\r\n    if (!curOverflow || curOverflow === \"visible\") el.style.overflow = \"hidden\";\r\n\r\n    let isOverflowing = el.clientHeight < el.scrollHeight;\r\n\r\n    if (isOverflowing == true) {\r\n      el.style.overflowY = \"scroll\";\r\n    } else {\r\n      el.style.overflowY = \"hidden\";\r\n    }\r\n  }\r\n}\r\nfunction createProjectList(eleClicked) {\r\n  openedSection = eleClicked.path[0].id;\r\n  let ele;\r\n  if (document.querySelector(\"#project-section\")) {\r\n    document\r\n      .querySelector(\"#project-section\")\r\n      .parentNode.removeChild(document.querySelector(\"#project-section\"));\r\n  }\r\n  let projectSection = document.createElement(\"section\");\r\n  projectSection.id = \"project-section\";\r\n  document.querySelector(\"main\").append(projectSection);\r\n\r\n  let projectTitle = document.createElement(\"h2\");\r\n  projectTitle.textContent = `${eleClicked.path[0].textContent}`;\r\n  projectSection.append(projectTitle);\r\n  createProjectsInProjectList(eleClicked, projectSection);\r\n  addNewProjectDiv(projectSection);\r\n\r\n  scrollOrNo(document.querySelector(\"main\"), \"y\");\r\n}\r\n\r\nfunction createProjectsInProjectList(eleClicked, projectSection) {\r\n  let notDone = document.createElement(\"section\");\r\n  notDone.id = \"projects-not-done-container\";\r\n  let notDoneTitle = document.createElement(\"h3\");\r\n  if (!sectionObj[eleClicked.path[0].textContent].hasOwnProperty(\"Not Done\")) {\r\n    console.log(sectionObj);\r\n  }\r\n\r\n  notDoneTitle.innerHTML =\r\n    \"<div class='not-lol' style='display:inline-block; transform: rotate(0deg)'> &#9658; </div>Not Completed\";\r\n  notDone.append(notDoneTitle);\r\n  notDone.addEventListener(\"click\", function (event) {\r\n    if (event.target.classList.contains(\"not-lol\")) {\r\n      if (\r\n        document.querySelector(\".not-lol\").style.transform == \"rotate(0deg)\" ||\r\n        document.querySelector(\".not-lol\").style.transform ==\r\n          \"translate(0px, 0px)\"\r\n      ) {\r\n        gsap.to(\".not-lol\", { duration: 0.3, rotationZ: 90 });\r\n        if (\r\n          Object.keys(sectionObj[eleClicked.path[0].textContent][\"Not Done\"])\r\n            .length === 0\r\n        ) {\r\n          console.log(\"works\");\r\n          let no = document.createElement(\"div\");\r\n          no.textContent = \"No projects Yet\";\r\n          document.querySelector(\"#projects-not-done-container\").append(no);\r\n        } else {\r\n          Object.keys(\r\n            sectionObj[eleClicked.path[0].textContent][\"Not Done\"]\r\n          ).forEach((ele) => {\r\n            createProject(ele, notDone, \"Not Done\");\r\n          });\r\n        }\r\n        scrollOrNo(document.querySelector(\"main\"), `y`);\r\n        animateProjectsInNotDone();\r\n      } else {\r\n        gsap.to(\".not-lol\", { duration: 0.3, rotationZ: 0 });\r\n        for (\r\n          let i = 0;\r\n          i < document.querySelectorAll(\".Not-Done\").length;\r\n          i++\r\n        ) {\r\n          removeModal(document.querySelector(\".Not-Done\"));\r\n        }\r\n\r\n        if (\r\n          document.querySelector(\"#projects-not-done-container\").lastChild\r\n            .tagName !== \"H3\"\r\n        ) {\r\n          removeModal(\r\n            document.querySelector(\"#projects-not-done-container\").lastChild\r\n          );\r\n        }\r\n      }\r\n    }\r\n  });\r\n  projectSection.append(notDone);\r\n\r\n  //make Done Section\r\n  let Done = document.createElement(\"section\");\r\n  Done.id = \"projects-done-container\";\r\n  let DoneTitle = document.createElement(\"h3\");\r\n  DoneTitle.innerHTML =\r\n    \"<div class='lol' style='display:inline-block; transform: rotate(0deg)'> &#9658; </div>Completed\";\r\n  Done.append(DoneTitle);\r\n  if (!sectionObj[eleClicked.path[0].textContent].hasOwnProperty(\"Done\")) {\r\n    sectionObj[eleClicked.path[0].textContent][\"Done\"] = {};\r\n  }\r\n\r\n  Done.addEventListener(\"click\", function (event) {\r\n    if (event.target.classList.contains(\"lol\")) {\r\n      if (\r\n        document.querySelector(\".lol\").style.transform == \"rotate(0deg)\" ||\r\n        document.querySelector(\".lol\").style.transform == \"translate(0px, 0px)\"\r\n      ) {\r\n        gsap.to(\".lol\", { duration: 0.3, rotationZ: 90 });\r\n        if (\r\n          Object.keys(sectionObj[eleClicked.path[0].textContent][\"Done\"])\r\n            .length === 0\r\n        ) {\r\n          let no = document.createElement(\"div\");\r\n          no.textContent = \"No projects Yet\";\r\n          document.querySelector(\"#projects-done-container\").append(no);\r\n        } else {\r\n          Object.keys(\r\n            sectionObj[eleClicked.path[0].textContent][\"Done\"]\r\n          ).forEach((ele) => {\r\n            createProject(ele, Done, \"Done\");\r\n          });\r\n        }\r\n        scrollOrNo(document.querySelector(\"main\"), `y`);\r\n        animateProjectsInDone();\r\n      } else {\r\n        gsap.to(\".lol\", { duration: 0.3, rotationZ: 0 });\r\n        for (let i = 0; i < document.querySelectorAll(\".Done\").length; i++) {\r\n          removeModal(document.querySelector(\".Done\"));\r\n        }\r\n        if (\r\n          document.querySelector(\"#projects-done-container\").lastChild\r\n            .tagName !== \"H3\"\r\n        ) {\r\n          removeModal(\r\n            document.querySelector(\"#projects-done-container\").lastChild\r\n          );\r\n        }\r\n      }\r\n    }\r\n  });\r\n  projectSection.append(Done);\r\n}\r\nfunction createProject(ele, projectSection, division) {\r\n  let project = document.createElement(\"div\");\r\n  project.classList.add(\"project\");\r\n  project.classList.add(division.toString().split(\" \").join(\"-\"));\r\n  let text = document.createElement(\"label\");\r\n  text.textContent = ele;\r\n  project.append(text);\r\n  project.id = ele.split(\" \").join(\"-\");\r\n  projectSection.append(project);\r\n  if (project.parentNode.children[0].textContent === \" ► Not Completed\") {\r\n    let settings = document.createElement(\"span\");\r\n    settings.textContent = \"---\";\r\n    settings.classList.add(\"settings\");\r\n    settings.addEventListener(\"click\", function () {\r\n      completeMenu(settings);\r\n    });\r\n    project.append(settings);\r\n  }\r\n\r\n  chooseColor(project);\r\n  project.addEventListener(\"click\", function l(event) {\r\n    if (event.target.tagName === \"LABEL\" || event.target.tagName === \"DIV\") {\r\n      openedProject = ele;\r\n      let taskColor = getComputedStyle(project).backgroundColor;\r\n      animateProjectList();\r\n      setTimeout(() => {\r\n        document\r\n          .querySelector(\"main\")\r\n          .removeChild(document.querySelector(\"#project-section\"));\r\n        document\r\n          .querySelector(\"main\")\r\n          .removeChild(document.querySelector(\".categories-list\"));\r\n        closeModal(document.querySelector(\".add\"));\r\n      }, 1000);\r\n\r\n      createTasksWindow(taskColor, division);\r\n    }\r\n  });\r\n}\r\n\r\nfunction createAddSection(ele) {\r\n  let add = document.createElement(\"Section\");\r\n  add.className = \"add\";\r\n  ele.append(add);\r\n  createAddSign(add);\r\n}\r\nfunction createAddSign(ele) {\r\n  let addSign = document.createElement(\"div\");\r\n  addSign.classList.add(\"add-new\");\r\n  addSign.textContent = \"+\";\r\n  ele.append(addSign);\r\n  addSign.addEventListener(\"click\", showAdding);\r\n}\r\n\r\nfunction createAddList() {\r\n  let options = document.createElement(\"div\");\r\n  options.classList.add(\"options\");\r\n  let chooseSection = document.createElement(\"div\");\r\n  chooseSection.classList.add(\"add-menu-section\");\r\n  chooseSection.innerHTML = \"<span> &#9658; </span> Section\";\r\n  chooseSection.addEventListener(\"click\", showSectionModal);\r\n  options.append(chooseSection);\r\n\r\n  let chooseProject = document.createElement(\"div\");\r\n  chooseProject.innerHTML = \" <span> &#9658; </span> Project \";\r\n  chooseProject.classList.add(\"add-menu-project\");\r\n  chooseProject.addEventListener(\"click\", addNewProject);\r\n\r\n  options.append(chooseProject);\r\n  document.querySelector(\".add\").append(options);\r\n}\r\ncreateAddList();\r\n\r\nfunction createSectionModal() {\r\n  let modalContainer = document.createElement(\"section\");\r\n  modalContainer.id = \"modal-container\";\r\n\r\n  let modal = document.createElement(\"div\");\r\n  modal.id = \"newSection-modal\";\r\n  let sectionName = document.createElement(\"input\");\r\n  sectionName.id = \"newSectionName\";\r\n  sectionName.name = \"newSectionName\";\r\n\r\n  let sectionLabel = document.createElement(\"label\");\r\n  sectionLabel.setAttribute(\"for\", \"newSectionName\");\r\n  sectionLabel.textContent = \"What is the new Section in your life?\";\r\n\r\n  let addSectionBtn = document.createElement(\"btn\");\r\n  addSectionBtn.textContent = \"Start New Journey\";\r\n  addSectionBtn.id = \"addSectionBtn\";\r\n  addSectionBtn.addEventListener(\"click\", addSection);\r\n\r\n  modal.append(sectionLabel);\r\n  modal.append(sectionName);\r\n  modal.append(addSectionBtn);\r\n  modalContainer.append(modal);\r\n  document.body.append(modalContainer);\r\n}\r\ncreateSectionModal();\r\nfunction showSectionModal() {\r\n  document.querySelector(\"#modal-container\").style.display = \"flex\";\r\n}\r\n\r\nfunction addSection() {\r\n  let newSection = document.querySelector(\"#newSectionName\");\r\n  document\r\n    .querySelector(\".categories-list\")\r\n    .removeChild(document.querySelector(\".categories-list\").lastChild);\r\n  createSectionsDivs(\r\n    document.querySelector(\".categories-list\"),\r\n    newSection.value.charAt(0).toUpperCase() + newSection.value.slice(1)\r\n  );\r\n  addsectionDiv(document.querySelector(\".categories-list\"));\r\n  let newObj = {\r\n    [newSection.value.charAt(0).toUpperCase() + newSection.value.slice(1)]: {\r\n      Done: {},\r\n      \"Not Done\": {},\r\n    },\r\n  };\r\n  addSectionToMainObj(sectionObj, newObj);\r\n  newSection.value = \"\";\r\n  closeModal(document.querySelector(\"#modal-container\"));\r\n  scrollOrNo(document.querySelector(\".categories-list\", \"x\"));\r\n}\r\n\r\nfunction addSectionToMainObj(obj, ele) {\r\n  Object.assign(obj, ele);\r\n\r\n  storage.setItem(\"sectionObj\", JSON.stringify(obj));\r\n  console.log(storage);\r\n  console.log(obj);\r\n}\r\n\r\ndocument.querySelectorAll(\".add-section\").forEach((ele) => {\r\n  ele.addEventListener(\"click\", showSectionModal);\r\n});\r\n\r\nfunction addNewProjectDiv(container) {\r\n  let add = document.createElement(\"div\");\r\n  add.textContent = \"Start New Project\";\r\n  add.classList.add(\"new-project\");\r\n  add.addEventListener(\"click\", addNewProject);\r\n  container.append(add);\r\n}\r\nfunction addNewProject() {\r\n  let section = document.querySelector(\"h2\").textContent;\r\n  showProjectModal();\r\n}\r\nfunction showProjectModal() {\r\n  document.querySelector(\".project-modal\").style.display = \"flex\";\r\n}\r\nfunction createProjectModal() {\r\n  let container = document.createElement(\"section\");\r\n  container.classList.add(\"project-modal\");\r\n  container.addEventListener(\"click\", function (event) {\r\n    if (event.target === this) {\r\n      container.style.display = \"none\";\r\n    }\r\n  });\r\n  let div = document.createElement(\"div\");\r\n  let h3 = document.createElement(\"h3\");\r\n  h3.textContent = \"What is your New Project's Name?\";\r\n\r\n  let inpt = document.createElement(\"input\");\r\n  inpt.id = \"new-project-name\";\r\n\r\n  let btn = document.createElement(\"div\");\r\n  btn.textContent = \"Start New Project\";\r\n  btn.addEventListener(\"click\", function h() {\r\n    sectionObj[document.querySelector(\"h2\").textContent][\"Not Done\"][\r\n      inpt.value\r\n    ] = {};\r\n    storage.setItem(\"sectionObj\", JSON.stringify(sectionObj));\r\n    console.log(openedSection);\r\n    document.querySelector(`#${openedSection}`).click();\r\n    document.querySelector(\".not-lol\").click();\r\n    closeModal(document.querySelector(\".project-modal\"));\r\n  });\r\n  div.append(h3);\r\n  div.append(inpt);\r\n  div.append(btn);\r\n  container.append(div);\r\n  document.body.append(container);\r\n}\r\ncreateProjectModal();\r\n\r\n//make the add section disappear if the user clicked outside\r\nfunction removeModal(ele) {\r\n  ele.parentNode.removeChild(ele);\r\n}\r\nfunction closeModal(ele) {\r\n  ele.style.display = \"none\";\r\n}\r\nfunction animateProjectsInNotDone() {\r\n  let i = 2;\r\n  document.querySelectorAll(\".Not-Done\").forEach((ele) => {\r\n    if (i % 2 == 0) {\r\n      ele.classList.add(\"left-notDone\");\r\n      i++;\r\n    } else {\r\n      ele.classList.add(\"right-notDone\");\r\n      i++;\r\n    }\r\n  });\r\n  gsap.from(\".left-notDone\", {\r\n    duration: 0.5,\r\n    opacity: 0,\r\n    x: -400,\r\n    stagger: 1,\r\n    ease: \"ease\",\r\n  });\r\n  gsap.from(\".right-notDone\", {\r\n    duration: 0.5,\r\n    delay: 0.5,\r\n    x: 400,\r\n    opacity: 0,\r\n    ease: \"ease\",\r\n    stagger: 1,\r\n  });\r\n}\r\nfunction animateProjectsInDone() {\r\n  let i = 2;\r\n  document.querySelectorAll(\".Done\").forEach((ele) => {\r\n    if (i % 2 == 0) {\r\n      ele.classList.add(\"left-Done\");\r\n      i++;\r\n    } else {\r\n      ele.classList.add(\"right-Done\");\r\n      i++;\r\n    }\r\n  });\r\n  gsap.from(\".left-Done\", {\r\n    duration: 0.5,\r\n    opacity: 0,\r\n    x: -400,\r\n    stagger: 1,\r\n    ease: \"ease\",\r\n  });\r\n  gsap.from(\".right-Done\", {\r\n    duration: 0.5,\r\n    delay: 0.5,\r\n    x: 400,\r\n    opacity: 0,\r\n    ease: \"ease\",\r\n    stagger: 1,\r\n  });\r\n}\r\n\r\nfunction animateProjectList() {\r\n  let list = document.querySelector(\"#project-section\");\r\n  gsap.to(list, {\r\n    duration: 1,\r\n    transformOrigin: \"50% 50%\",\r\n    rotateX: \"360\",\r\n    opacity: \"0\",\r\n    display: \"none\",\r\n  });\r\n}\r\n\r\nfunction createTasksWindow(color, division) {\r\n  let taskWindowContainer = document.createElement(\"section\");\r\n  taskWindowContainer.id = \"taskWindowContainer\";\r\n  let taskWindow = document.createElement(\"section\");\r\n  taskWindow.id = \"task-window\";\r\n  taskWindowContainer.append(taskWindow);\r\n  document.querySelector(\"main\").append(taskWindowContainer);\r\n  taskWindow.style.backgroundColor = color;\r\n  animateTaskWindow(taskWindow);\r\n  let tasksContainer = document.createElement(\"section\");\r\n  tasksContainer.id = \"tasks-container\";\r\n  taskWindow.append(tasksContainer);\r\n  createTasks(division);\r\n  createAddTaskBtn(division);\r\n  scrollOrNo(taskWindow, \"y\");\r\n}\r\nfunction createTasks(division) {\r\n  Object.keys(\r\n    sectionObj[openedSection.split(\"-\").join(\" \")][division][\r\n      openedProject.split(\"-\").join(\" \")\r\n    ]\r\n  ).forEach((ele) => {\r\n    createTask(ele, division);\r\n  });\r\n}\r\nfunction createTask(ele, division) {\r\n  let task = document.createElement(\"div\");\r\n  task.classList.add(\"task\");\r\n  task.id = ele.split(\" \").join(\"-\");\r\n  task.addEventListener(\"click\", function (event) {\r\n    if (event.target.tagName !== \"BUTTON\") {\r\n      markTask(task);\r\n      markTaskInObject(ele, division);\r\n    }\r\n  });\r\n  let taskText = document.createElement(\"label\");\r\n  taskText.innerText = ele;\r\n  let mark = document.createElement(\"span\");\r\n\r\n  let btn = document.createElement(\"button\");\r\n  btn.textContent = \"Work on the task\";\r\n  btn.addEventListener(\"click\", function () {\r\n    createTimerModal(task);\r\n  });\r\n\r\n  task.append(mark);\r\n  task.append(taskText);\r\n  task.append(btn);\r\n  document.querySelector(\"#tasks-container\").append(task);\r\n  let taskSyntax =\r\n    sectionObj[openedSection.split(\"-\").join(\" \")][division][\r\n      openedProject.split(\"-\").join(\" \")\r\n    ][ele];\r\n  if (!taskSyntax.hasOwnProperty(\"done\") || taskSyntax[\"done\"] == false) {\r\n  } else {\r\n    markTask(task);\r\n  }\r\n}\r\nfunction createTimerModal(task) {\r\n  let timerContainer = document.createElement(\"section\");\r\n  timerContainer.classList.add(\"container\");\r\n  timerContainer.addEventListener(\"click\", function (event) {\r\n    if (event.target.tagName === \"SECTION\") {\r\n      workk = 0;\r\n      removeModal(timerContainer);\r\n    }\r\n  });\r\n\r\n  let timer = document.createElement(\"div\");\r\n  timer.id = \"timer\";\r\n\r\n  let label = document.createElement(\"label\");\r\n  label.setAttribute(\"for\", \"pomodoro-setions\");\r\n  label.textContent = \"Number Of Pomodoro Setions\";\r\n\r\n  let inpt = document.createElement(\"input\");\r\n  inpt.type = \"number\";\r\n  inpt.id = \"pomodoro-number\";\r\n  inpt.name = \"pomodoro-number\";\r\n  inpt.defaultValue = 1;\r\n\r\n  let startBtn = document.createElement(\"button\");\r\n  startBtn.id = \"pomodoro-start\";\r\n  startBtn.innerHTML = \"&#9658;\";\r\n  startBtn.addEventListener(\"click\", function () {\r\n    if (workk == 1) {\r\n      return;\r\n    } else {\r\n      removeModal(document.querySelector(\"#pomodoro-number\"));\r\n      timerF(inpt.value, startBtn, task);\r\n    }\r\n  });\r\n  timer.append(label);\r\n  timer.append(inpt);\r\n  timer.append(startBtn);\r\n  timerContainer.append(timer);\r\n  document.body.append(timerContainer);\r\n}\r\nfunction createAddTaskBtn(division) {\r\n  let btn = document.createElement(\"button\");\r\n  btn.id = \"add-task\";\r\n  btn.textContent = \"Add New Task\";\r\n  btn.addEventListener(\"click\", function () {\r\n    createNewTaskModal(division);\r\n  });\r\n  document.querySelector(\"#task-window\").append(btn);\r\n}\r\nfunction animateTaskWindow(t) {\r\n  gsap.from(t, { duration: 1, delay: 1, scale: 0, opacity: 0 });\r\n}\r\n\r\nfunction createNewTaskModal(division) {\r\n  let container = document.createElement(\"section\");\r\n  container.id = \"new-task-container\";\r\n  let modal = document.createElement(\"section\");\r\n  modal.id = \"new-task-window\";\r\n  let span = document.createElement(\"span\");\r\n  span.textContent = \"What will you do today?\";\r\n  let input = document.createElement(\"input\");\r\n  input.id = \"nameOfTask\";\r\n  let btn = document.createElement(\"div\");\r\n  btn.id = \"add-task-final\";\r\n  btn.textContent = \"Add New Task\";\r\n  btn.addEventListener(\"click\", function () {\r\n    sectionObj[openedSection.split(\"-\").join(\" \")][division][\r\n      openedProject.split(\"-\").join(\" \")\r\n    ][input.value] = { done: false };\r\n    createTask(input.value, division);\r\n    removeModal(document.querySelector(\"#new-task-container\"));\r\n    removeModal(document.querySelector(\"#add-task\"));\r\n    createAddTaskBtn(division);\r\n    scrollOrNo(document.querySelector(\"#task-window\"), \"y\");\r\n    storage.setItem(\"sectionObj\", JSON.stringify(sectionObj));\r\n  });\r\n  modal.append(span);\r\n  modal.append(input);\r\n  modal.append(btn);\r\n  container.append(modal);\r\n  document.body.append(container);\r\n}\r\nfunction markTask(ele) {\r\n  ele.children[1].classList.toggle(\"marked\");\r\n  if (ele.children[0].textContent.length > 0) {\r\n    ele.children[0].textContent = \"\";\r\n  } else {\r\n    ele.children[0].innerHTML = \"&#10003;\";\r\n  }\r\n  ele.children[0].classList.toggle(\"marked\");\r\n}\r\n\r\nfunction markTaskInObject(ele, division) {\r\n  let task =\r\n    sectionObj[openedSection.split(\"-\").join(\" \")][division][\r\n      openedProject.split(\"-\").join(\" \")\r\n    ][ele];\r\n  if (!task.hasOwnProperty(\"done\") || task.done != true) {\r\n    task[\"done\"] = true;\r\n  } else {\r\n    task[\"done\"] = false;\r\n  }\r\n  storage.setItem(\"sectionObj\", JSON.stringify(sectionObj));\r\n}\r\nfunction timerF(num, ele, task) {\r\n  workk = 1;\r\n  if (num == \"\") {\r\n    num = 1;\r\n  }\r\n  let min = num;\r\n  let hours, minutes, s;\r\n  hours = Math.floor(min / 60);\r\n  minutes = min - hours * 60;\r\n  s = 0;\r\n  ele.textContent = `${hours.toString().padStart(2, \"0\")}:${minutes\r\n    .toString()\r\n    .padStart(2, \"0\")}:${s.toString().padStart(2, \"0\")}`;\r\n  countDownF(s, minutes, hours, ele);\r\n}\r\n\r\nfunction countDownF(s, m, h, ele, task) {\r\n  let ss = s,\r\n    mm = m,\r\n    hh = h;\r\n\r\n  var myInterval = setInterval(function () {\r\n    if (Number(ss) == 0) {\r\n      ss = 59;\r\n      if (Number(mm) == 0) {\r\n        mm = 59;\r\n        Number(hh--);\r\n      } else {\r\n        mm--;\r\n      }\r\n    } else {\r\n      ss--;\r\n    }\r\n    let myCounter = `${hh.toString().padStart(2, \"0\")}:${mm\r\n      .toString()\r\n      .padStart(2, \"0\")}:${ss.toString().padStart(2, \"0\")}`;\r\n    ele.textContent = myCounter;\r\n    if (myCounter === \"00:00:00\") {\r\n      clearInterval(myInterval);\r\n      ele.textContent = \"Nice Work\";\r\n      alarmSound.play();\r\n    }\r\n  }, 1000);\r\n}\r\nlet workk = 0;\r\nlet menu = 0;\r\nfunction markAllTasksInObj(hmmm) {\r\n  let project = sectionObj[openedSection.split(\"-\").join(\" \")][\"Done\"][hmmm];\r\n  for (let i = 0; i < Object.keys(project).length; i++) {\r\n    project[Object.keys(project)[i]] = { done: true };\r\n  }\r\n}\r\nfunction completeMenu(ele) {\r\n  let container = document.createElement(\"span\");\r\n  container.classList.add(\"list\");\r\n  let markAsComplete = document.createElement(\"span\");\r\n  markAsComplete.textContent = \"Mark As Complete\";\r\n  markAsComplete.classList.add(\"mark-complete\");\r\n  markAsComplete.addEventListener(\"click\", function () {\r\n    moveCompletedProject(\r\n      sectionObj[openedSection.split(\"-\").join(\" \")][\"Not Done\"],\r\n      markAsComplete.parentNode.parentNode.parentNode.id.split(\"-\").join(\" \")\r\n    );\r\n    let index = ele.parentNode.textContent.indexOf(\"---Mark As Complete\");\r\n    let hmmm = ele.parentNode.textContent.slice(0, index);\r\n    markAllTasksInObj(hmmm);\r\n\r\n    if (\r\n      document.querySelector(\".lol\").style.transform == \"rotate(90deg)\" ||\r\n      document.querySelector(\".lol\").style.transform == \"translate(0px, 0px)\"\r\n    ) {\r\n      createProject(\r\n        markAsComplete.parentNode.parentNode.parentNode.id.split(\"-\").join(\" \"),\r\n        document.querySelector(\"#projects-done-container\"),\r\n        \"Done\"\r\n      );\r\n    }\r\n    removecompleteObject(\r\n      markAsComplete.parentNode.parentNode.parentNode.id.split(\"-\").join(\" \")\r\n    );\r\n    removeModal(\r\n      document.querySelector(\r\n        `#${markAsComplete.parentNode.parentNode.parentNode.id}`\r\n      )\r\n    );\r\n    storage.setItem(\"sectionObj\", JSON.stringify(sectionObj));\r\n  });\r\n  container.append(markAsComplete);\r\n  let removeProject = document.createElement(\"span\");\r\n  removeProject.textContent = \"Remove Project\";\r\n  removeProject.classList.add(\"remove-project\");\r\n  removeProject.addEventListener(\"click\", function () {\r\n    delete sectionObj[\r\n      openedSection.split(\"-\").join(\" \")\r\n    ][\"Not Done\"][removeProject.parentNode.parentNode.parentNode.id.split(\"-\").join(\" \")];\r\n    storage.setItem(\"sectionObj\", JSON.stringify(sectionObj));\r\n    document.querySelector(`#${openedSection}`).click();\r\n    document.querySelector(\".not-lol\").click();\r\n  });\r\n  container.append(removeProject);\r\n  ele.append(container);\r\n}\r\nfunction moveCompletedProject(obj, l) {\r\n  sectionObj[openedSection.split(\"-\").join(\" \")][\"Done\"][\r\n    Object.keys(obj)[Object.keys(obj).indexOf(l)]\r\n  ] = obj[l];\r\n}\r\nfunction removecompleteObject(property) {\r\n  delete sectionObj[openedSection.split(\"-\").join(\" \")][\"Not Done\"][property];\r\n}\r\nfunction rotatePlusSign() {\r\n  gsap.to(\".add-new\", {\r\n    duration: 0.8,\r\n    rotateZ: 270,\r\n  });\r\n}\r\n\r\nfunction returnToStablePlusSign() {\r\n  gsap.to(\".add-new\", { duration: 0.8, rotateZ: 0 });\r\n}\r\nfunction closeAddMenu() {\r\n  gsap.to(\".options\", {\r\n    duration: 1,\r\n    scaleX: 0,\r\n    scaleY: 0,\r\n  });\r\n}\r\nfunction showAdding() {\r\n  if (menuuAppear == 0) {\r\n    rotatePlusSign();\r\n    gsap.to(\".add\", {\r\n      duration: 1,\r\n      backgroundColor: \"#22a35e\",\r\n      borderRadius: \"40%\",\r\n    });\r\n    gsap.to(\".options\", {\r\n      duration: 0.5,\r\n      scaleX: 1,\r\n    });\r\n    gsap.to(\".options\", {\r\n      duration: 0.5,\r\n      scaleY: 1,\r\n    });\r\n    moveItems();\r\n    menuuAppear = 1;\r\n  } else {\r\n    returnToStablePlusSign();\r\n    closeAddMenu();\r\n    menuuAppear = 0;\r\n  }\r\n}\r\nfunction moveItems() {\r\n  gsap.from(\".add-menu-project\", { duration: 0.5, y: 500 });\r\n  gsap.from(\".add-menu-section\", { duration: 0.8, y: 500 });\r\n}\r\n\n\n//# sourceURL=webpack://my-to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/images/LogoMakr-00DE1M.png":
/*!****************************************!*\
  !*** ./src/images/LogoMakr-00DE1M.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28aa6cd01b04cfae367b.png\";\n\n//# sourceURL=webpack://my-to-do-list/./src/images/LogoMakr-00DE1M.png?");

/***/ }),

/***/ "./src/images/man.png":
/*!****************************!*\
  !*** ./src/images/man.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ab45eb1d42b1faaf3d12.png\";\n\n//# sourceURL=webpack://my-to-do-list/./src/images/man.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;