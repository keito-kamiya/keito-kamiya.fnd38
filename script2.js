'use strict'

const drugimg = document.getElementById("drugimg");
const drugPopup = document.getElementById("drugpopup");
const closeDrugPopup = document.getElementById("close-drug-popup");

const scheduleimg = document.getElementById("scheduleimg");
const schedulePopup = document.getElementById("schedulepopup");
const closeSchedulePopup = document.getElementById("close-schedule-popup");

const timeimg = document.getElementById("timeimg");
const timePopup = document.getElementById("timepopup");
const closeTimePopup = document.getElementById("close-time-popup");

const taxiimg = document.getElementById("taxiimg");
const taxiPopup = document.getElementById("taxipopup");
const closeTaxiPopup = document.getElementById("close-taxi-popup");

const carimg = document.getElementById("carimg");
const messageimg = document.getElementById("messageimg");
const onlineimg = document.getElementById("onlineimg");
const translation = document.getElementById("translation");
const mapimg = document.getElementById("mapimg");

drugimg.addEventListener("click", function () {
 drugPopup.classList.remove("popup");
});
closeDrugPopup.addEventListener("click", function () {
 drugPopup.classList.add("popup");
});

scheduleimg.addEventListener("click", function () {
 schedulePopup.classList.remove("popup");
});
closeSchedulePopup.addEventListener("click", function () {
 schedulePopup.classList.add("popup");
});

timeimg.addEventListener("click", function () {
 timePopup.classList.remove("popup");
});
closeTimePopup.addEventListener("click", function () {
 timePopup.classList.add("popup");
});

taxiimg.addEventListener("click", function () {
 taxiPopup.classList.remove("popup");
});
closeTaxiPopup.addEventListener("click", function () {
 taxiPopup.classList.add("popup");
});


messageimg.addEventListener("click", function () {
 window.open("message-image.png", "_blank");
});

onlineimg.addEventListener("click", function () {
 window.open("online-image.png", "_blank");
});

translation.addEventListener("click", function () {
 window.open("translation-image.png", "_blank");
});

mapimg.addEventListener("click", function () {
 window.open("map-image.png", "_blank");
});

carimg.addEventListener("click", function () {
 window.open("parking-map.png", "_blank");
});
