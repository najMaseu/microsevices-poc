import { css } from "@emotion/css";

export const appStyles = css({
  height: "100%",
  width: "100%",
  position: "relative",
  perspective: "190000px",
  top: 0,
  left: 0,

  "h1, h2": {
    fontFamily: "Comic Neue",
    color: "white",

    position: "absolute",
    fontSize: "3rem",
  },
  h1: { bottom: 180, left: 60 },
  h2: { bottom: 80, left: 80 },
});

export const radalStyles = css({
  position: "relative",
  height: "98vh",
  width: "100%",
});
