// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
  if (state == "DIRTY") return "CLEAN";
  else if (location == "A") return "RIGHT";
  else return "LEFT";
}

function test(states) {
  var location = states[0];
  var state = location == "A" ? states[1] : states[2];
  var action_result = reflex_agent(location, state);
  document.getElementById("log").innerHTML += "<br>Location: " + location + " | Action: " + action_result;
  if (action_result == "CLEAN") {
    if (location == "A") states[1] = "CLEAN";
    else states[2] = "CLEAN";
  } else if (action_result == "RIGHT") states[0] = "B";
  else if (action_result == "LEFT") states[0] = "A";
  if (Math.random() < 0.5) states[1] = "DIRTY";
  if (Math.random() < 0.5) states[2] = "DIRTY";
  var current = states[0] + states[1] + states[2];
  if (visited.indexOf(current) == -1) visited.push(current);
  if (visited.length < 8) setTimeout(function () { test(states); }, 1000);
  else document.getElementById("log").innerHTML += "<br>Se han visitado los 8 estados.";
}

var visited = [];
var states = ["A", "DIRTY", "DIRTY"];
test(states);
