import { Panel } from "./types.d";
import { reactive, ref ,toRef} from "vue";
const PanelsCollection:Record<number,Panel[]>={}

function getPanels(key:number):Panel[]{
    return PanelsCollection[key]??= [];
}
function deletePanel(key:number):void{
    delete PanelsCollection[key];
}
function register(key:number):()=>Panel{
   const panels=getPanels(key);
   function registerTemp():Panel {
    const panel = reactive({
      visable:false,
      id:Math.random(),
    });
    panels.push(panel);
    return panel;
  }
  return registerTemp;
}
function unregister(key:number):(id:number)=>void{
   const panels=getPanels(key);
    function unregisterTemp(id: number):void {
        var index = panels.findIndex((i) => i.id === id);
        if (index > -1) {
            panels.splice(index, 1);
        }
    }
  return unregisterTemp;
}
function toggle(key:number):(id:number)=>void{
   const panels=getPanels(key);
    function toggleTemp(id: number) {
        for (const item of panels) {
            var visable=toRef(item,"visable")
            visable.value =(item.id===id)? !visable.value:false;
        }
    }
    return toggleTemp;
}
export default function useAcordion(key:number=0){
    return {register:register(key),unregister:unregister(key),toggle:toggle(key)}
}
export { deletePanel,getPanels};