import { writable, readable } from "svelte/store";
import dayjs from "dayjs";

const historyStored = typeof window !== "undefined" && window.localStorage.getItem("history");
export const history = writable(historyStored ? JSON.parse(historyStored) : []);
history.subscribe((history) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("history", JSON.stringify(history));
});

export const dateTime = readable(
  dayjs().format("ddd MMM DD hh:mm:ss A"),
  function start(set) {
    set(dayjs().format("ddd MMM DD hh:mm:ss A"));
    const interval = setInterval(
      () => set(dayjs().format("ddd MMM DD hh:mm:ss A")),
      1000
    );

    return function stop() {
      clearInterval(interval);
    };
  }
);
