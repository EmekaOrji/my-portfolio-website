import Typify from "./typify.js";

var name = document.querySelector(".name");
var comma = document.querySelector(".comma");
var iCode = document.querySelector(".i_code");

function introduce() {
  new Typify(name, {
    words: ["I'm Emeka"],
    pause: 3000,
    speed: 200
  });
  new Typify(iCode, {
    words: ["...", "and I develop the web"],
    start: 3000,
    pause: 2000,
    speed: 200,
    deleteSpeed: 300
  });
  new Typify(comma, {
    words: [","],
    start: 2000
  });

  var profile = document.querySelector(".profile");
  profile.classList.add("profile_visible");
  return;
}


introduce();