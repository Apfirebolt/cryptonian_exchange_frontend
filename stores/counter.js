import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  return {
    count: 3,
    increment() {
      this.count++;
    },
  };
});