import { Ref,ToRef } from "vue";
/**
 * Acordion Panel Interface
 * https://github.com/Jacobs63/vue3-tabs-component/blob/master/src/components/Tab.vue
 */
export interface Panel {
  /**Show or hide @type boolean */
  visable: boolean;
  /**unique id @type number */
  id: number;
  /**header @type string */
  name:string
}
