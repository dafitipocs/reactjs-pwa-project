// configureHistory.js
import { createBrowserHistory, createHashHistory } from "history";

export const configureHistory = () => {
  if (window.matchMedia("(display-mode: standalone)").matches) {
    console.log("We are in home screen");
  }
  return window.matchMedia("(display-mode: standalone)").matches
    ? createHashHistory()
    : createBrowserHistory();
};
