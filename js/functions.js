import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf();

export function helloWorld() {
  notyf.success("Hello World!");
}

export function randomNumber(max) {
  const n = Math.floor(Math.random() * Number(max)) + 1;

  notyf.success(n.toString());
}
