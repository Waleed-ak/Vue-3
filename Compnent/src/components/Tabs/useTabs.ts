import { Panel } from "./types";
import { reactive, ref, Ref } from "vue";
const PanelsCollection: Record<number, Ref<Panel[]>> = {};

function getPanels(key: number): Ref<Panel[]> {
  return (PanelsCollection[key] ??= ref([]));
}
function deletePanel(key: number): void {
  delete PanelsCollection[key];
}
function createPanel(): Panel {
  return reactive({
    id: Math.random(),
    name: "",
    visable: false,
  });
}
function register(key: number): (name: string, panel: Panel) => void {
  const panels = getPanels(key);
  return registerTemp;
  function registerTemp(name: string, panel: Panel): void {
    name = name?.trim();
    panel.name = name ? name : "No Title";
    panels.value.push(panel);
  }
}
function unregister(key: number): (panel: Panel) => void {
  const panels = getPanels(key);
  return unregisterTemp;
  function unregisterTemp(panel: Panel): void {
    var index = panels.value.findIndex((i) => i.id === panel.id);
    if (index > -1) {
      panels.value.splice(index, 1);
    }
  }
}
function open(key: number): (id: number) => void {
  const panels = getPanels(key);
  return openTemp;
  function openTemp(id: number) {
    panels.value.forEach(c=>c.visable=c.id === id)
  }
}

const useTabs = (key: number = 0) => ({
  createPanel: createPanel,
  register: register(key),
  unregister: unregister(key),
  open: open(key),
  pannels: getPanels(key),
});

export default useTabs;
export { deletePanel, getPanels };
