import { ref } from "vue";
import { defineStore } from "./defineStore";

const store = defineStore(() => {
  const count = ref(0);
  const clickMeP = () => count.value++;
  const clickMeM = () => count.value--;
  return {
    clickMeP,
    clickMeM,
    count,
  };
});
export default store;
