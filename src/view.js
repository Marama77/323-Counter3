import hh from "hyperscript-helpers";
import { h } from "virtual-dom";

const { div, button, p, h1 } = hh(h);

const btnStyle = "bg-indigo-500 hover:bg-fuchsia-500 text-white font-bold py-2 px-4 rounded-full";
  
  // View function which represents the UI as HTML-tag functions
  export function view(dispatch, model, MSGS) {
    return div({ className: "flex flex-col gap-4 items-center" }, [
      h1({ className: "font-bold md:text-5xl" }, `323-Counter`),
      p({ className: "size-32 bg-white/50 text-6xl font-bold flex items-center justify-center" }, `${model.counter}`),
      div({ className: "flex gap-4"}, [
        button({ className: btnStyle, onclick: () => dispatch(MSGS.INCREASE_COUNT) }, "+"),
        button({ className: btnStyle, onclick: () => dispatch(MSGS.RESET_COUNT) }, "Reset Counter"),
        button({ className: btnStyle, onclick: () => dispatch(MSGS.DECREASE_COUNT) }, "-"),
      ])
    ]);
  }

 