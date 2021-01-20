"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {

    let button = qsa("button");

    button[0].addEventListener("click", home);
    button[1].addEventListener("click", engineer);
    button[2].addEventListener("click", visual);
    button[3].addEventListener("click", model);
    button[4].addEventListener("click", entre);
    button[5].addEventListener("click", misc);

  }

  function home() {
    window.location = "https://mullena14.github.io/Personal_Site/";
  }

  function engineer() {
    window.location = "https://mullena14.github.io/Personal_Site/engineer.html";
  }

  function visual() {
    window.location = "https://mullena14.github.io/Personal_Site/visual.html";
  }

  function model() {
    window.location = "https://mullena14.github.io/Personal_Site/model.html";
  }

  function entre() {
    window.location = "https://mullena14.github.io/Personal_Site/entre.html";
  }

  function misc() {
    window.location = "https://mullena14.github.io/Personal_Site/misc.html";
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  function gen(tagName) {
    return document.createElement(tagname);
  }

})();
