import hh from "hyperscript-helpers";
import { h } from "virtual-dom";

const { div, button, p, h1 } = hh(h);

const btnStyle = "bg-indigo-500 hover:bg-fuchsia-500 text-white font-bold py-2 px-4 rounded-full";
  
  // View function which represents the UI as HTML-tag functions
  export function view(dispatch, model, MSGS) {
    return div({ className: "flex flex-col gap-4 items-center" }, [
      h1({ className: "font-bold md:text-5xl" }, `323-Counter`),
      button({ className: btnStyle, onclick: () => dispatch(MSGS.UPDATE_MODEL) }, "Update Model"),
      p({ className: "text-2xl" }, `Time: ${model.currentTime}`),
      button({ className: btnStyle, onclick: () => dispatch(MSGS.UPDATE_RANDOM_NUMBER) }, "Update Random Number"),
      p({ className: "text-2xl" }, `Random Number: ${model.randomNumber}`),
      // ... ℹ️ additional elements
    ]);
  }

 