import hh from "hyperscript-helpers";
import { h } from "virtual-dom";

const { div, button, p, h1 } = hh(h);

const btnStyle = "bg-indigo-500 hover:bg-fuchsia-500 text-white font-bold py-2 px-4 rounded-full";
  
  // View function which represents the UI as HTML-tag functions
  export function view(dispatch, model, MSGS) {
    return div({ className: "bg-white p-6 rounded-lg shadow-lg w-96" }, [
      h1({ className: "text-3xl font-bold mb-4 text-center" }, `323-Counter`),
      p({ className: "size-32 mx-auto bg-indigo-200/50 text-6xl font-bold flex items-center justify-center" }, `${model.counter}`),
      div({ className: "flex gap-4 items-center justify-center mt-6"}, [
        button({ className: btnStyle, onclick: () => dispatch(MSGS.INCREASE_COUNT) }, "+"),
        button({ className: btnStyle, onclick: () => dispatch(MSGS.RESET_COUNT) }, "Reset Counter"),
        button({ className: btnStyle, onclick: () => dispatch(MSGS.DECREASE_COUNT) }, "-"),
      ])
    ]);
  }

 