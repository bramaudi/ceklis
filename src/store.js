import { writable } from "svelte/store";

const ls = window.localStorage

export const todos = writable(
  JSON.parse(ls.getItem('todos') || '[]')
);

export const sync = (todos) => {
  ls.setItem('todos', JSON.stringify(todos))
}