
import { diff, patch } from "virtual-dom";
import createElement from "virtual-dom/create-element";

//imports function view from view.js
import { view } from './view.js';

// Messages which can be used to update the model
const MSGS = {
    UPDATE_MODEL: "UPDATE_MODEL",
    UPDATE_RANDOM_NUMBER: "UPDATE_RANDOM_NUMBER",
    INCREASE_COUNT: "INCREASE_COUNT",
    DECREASE_COUNT: "DECREASE_COUNT"
    // ... ℹ️ additional messages
  };

  // Update function which takes a message and a model and returns a new/updated model
function update(msg, model) {
    switch (msg) {
      case MSGS.UPDATE_MODEL:
        return { ...model, currentTime: new Date().toLocaleTimeString() };
  
      case MSGS.UPDATE_RANDOM_NUMBER:
        return { ...model, randomNumber: Math.random() };
      default:
        return model;
    }
  }

  // ⚠️ Impure code below (not avoidable but controllable)
function app(initModel, update, view, node) {
    let model = initModel;
    let currentView = view(dispatch, model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);
    function dispatch(msg) {
      model = update(msg, model);
      const updatedView = view(dispatch, model);
      const patches = diff(currentView, updatedView);
      rootNode = patch(rootNode, patches);
      currentView = updatedView;
    }
  }

  // The initial model when the app starts
const initModel = {
    currentTime: new Date().toLocaleTimeString(),
    randomNumber: 1,
  };
  
  // The root node of the app (the div with id="app" in index.html)
  const rootNode = document.getElementById("app");
  
  // Start the app
  app(initModel, update, (dispatch, model) => view(dispatch, model, MSGS), rootNode);
