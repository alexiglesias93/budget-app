import { writable } from "svelte/store";

const defaults = [
  {
    id: "f4d6cff9-f862-4348-a741-de8d54f5f816",
    concept: "Clothes",
    type: "expenses",
    category: "Shopping",
    date: "12 May 2020",
    value: 232.05,
  },
  {
    id: "c92dfcd2-7d3b-4d3a-a5d4-244c2d1c6bd2",
    concept: "Sold Car",
    type: "income",
    category: "Sale",
    date: "05 April 2020",
    value: 2500,
  },
  {
    id: "d72ducd2-7d38-4d3a-a5d4-244c2d1c6be2",
    concept: "Salary",
    type: "income",
    category: "Salary",
    date: "18 March 2020",
    value: 1843.99,
  },
  {
    id: "c98dhcd2-7d3b-4d3a-a5d4-244cag4c6bd2",
    concept: "Travel to Japan",
    type: "expenses",
    category: "Leisure",
    date: "23 January 2020",
    value: 3273.76,
  },
];

const store = writable(defaults);

const customStore = {
  subscribe: store.subscribe,
  add: (newTransaction) => {
    store.update((items) => [newTransaction, ...items]);
  },
  remove: (id) => {
    store.update((items) => items.filter((item) => item.id !== id));
  },
  modify: (data) => {
    store.update((items) =>
      items.map((item) => (item.id === data.id ? { ...item, ...data } : item))
    );
  },
};

export default customStore;
