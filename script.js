"use strict";

const getPage = document.querySelector(".page");
const getOverlay = document.querySelector(".overlay");
const exitBtn = document.querySelector(".exit-page");
const pageBtn = document.querySelectorAll(".show-page");
const getReset = document.querySelector(".reset");
const getSubmit = document.querySelector(".submit");
const getUser = document.querySelector(".user");

const getPass = document.querySelector(".pass");

const getSubmitPage = document.querySelector(".submit-page");
const getShowSubmit = document.querySelector(".show-submit");
const okBtn = document.querySelector(".ok");

const closePage = function () {
  getPage.classList.add("hidden");
  getOverlay.classList.add("hidden");
};

const openPage = function () {
  getPage.classList.remove("hidden");
  getOverlay.classList.remove("hidden");
};

const resetBtn = function () {
  getUser.value = "";
  getPass.value = "";
  document.querySelector(".invalid").textContent = "";
};

const checkLength = function () {
  if (getUser.value.length > 1 && getPass.value.length > 1) {
    return true;
  }
};

const showPage = function () {
  if (checkLength()) {
    getSubmitPage.classList.remove("hidden");
    getShowSubmit.textContent = `Login Successful. Welcome ${getUser.value} 🥇`;
  } else if (getUser.value.length > 1 || getPass.value.length >= 0) {
    document.querySelector(
      ".invalid"
    ).textContent = `Invalid Login Parameters! ⛔`;
  }
};

const closeOk = function () {
  getSubmitPage.classList.add("hidden");
  resetBtn();
};

getReset.addEventListener("click", resetBtn);

okBtn.addEventListener("click", closeOk);

for (let i = 0; i < pageBtn.length; i++)
  pageBtn[i].addEventListener("click", openPage);

exitBtn.addEventListener("click", closePage);

getOverlay.addEventListener("click", closePage);

getSubmit.addEventListener("click", showPage);
