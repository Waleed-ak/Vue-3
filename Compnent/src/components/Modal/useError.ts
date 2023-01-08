import { ref } from "vue";
const ShowError = ref(false);
const Error = ref("");

function Display(error: string) {
  Error.value = error;
  ShowError.value = true;
}
function Remove() {
  Error.value = "Remove";
  ShowError.value = false;
}

function useError() {
  return {
    Display,
    Remove,
  };
}
function useErrorVar() {
  return {
    ShowError,
    Error,
  };
}

export default useError;

export { useErrorVar };
