import { ref } from "vue";

const localStore = () => {
  const count = ref(0);
  const clickMeP = () => count.value++;
  const clickMeM = () => count.value--;
  return {
    clickMeP,
    clickMeM,
    count,
  };
};
let storeValue: ReturnType<typeof localStore> | undefined = undefined;
const globalStore = () => (storeValue ??= localStore());
export default { localStore, globalStore };
