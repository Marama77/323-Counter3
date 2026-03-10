
import { diff, patch } from "virtual-dom";
import createElement from "virtual-dom/create-element";

//imports function view from view.js
import { view } from './view.js';

// Messages which can be used to update the model
const MSGS = {
    INCREASE_COUNT: "INCREASE_COUNT",
    DECREASE_COUNT: "DECREASE_COUNT",
    RESET_COUNT: "RESET_COUNT"
  };

  // Update function which takes a message and a model and returns a new/updated model
function update(msg, model) {
    switch (msg) {
      case MSGS.INCREASE_COUNT:
        return { ...model, counter: model.counter + 1 };
      case MSGS.DECREASE_COUNT:
        return { ...model, counter: model.counter - 1 };
      case MSGS.RESET_COUNT:
        return { ...model, counter: model.counter = 0 };
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
    counter: 0,
  };
  
  // The root node of the app (the div with id="app" in index.html)
  const rootNode = document.getElementById("app");
  
  // Start the app
  app(initModel, update, (dispatch, model) => view(dispatch, model, MSGS), rootNode);
