<template>
  <Teleport to="body">
    <transition name="modal">
      <div class="modal" v-if="myVal">
        <div class="mwrapper">
          <div class="mcontainer">
            <div class="mheader">
              <slot name="header" />
            </div>
            <div class="mbody">
              <slot name="body" />
            </div>
            <div class="mfooter">
              <div class="mfooterSlot">
                <slot name="footer" />
              </div>
              <button class="mfooterClose" @click="myVal = false">Close</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { toRefs, toRaw, computed } from "vue";

const emits = defineEmits(["close", "update:modelValue"]);
const props = defineProps<{ modelValue: boolean }>();
const myVal = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
    if (!val) {
      emits("close");
    }
  },
});
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.4s ease;

  & > .mwrapper {
    --modelBgColor: linear-gradient(green, red, green);
    --modelColor: black;

    & > .mcontainer {
      display: inline-block;
      min-width: 20vw;
      max-width: 98vw;
      margin: 0px auto;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.4s ease;
      font-family: Helvetica, Arial, sans-serif;

      & > .mheader {
        margin: 3px;
        background: var(--modelBgColor);
        color: var(--modelColor);
      }

      & > .mbody {
        margin: 5px;
      }

      & > .mfooter {
        margin: 3px;
        display: flex;
        & > .mfooterSlot {
          flex: auto;
        }
        & > .mfooterClose {
          flex: none;
        }
      }
    }
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .mcontainer,
.modal-leave-active .mcontainer {
  transform: scale(1.05);
}
</style>
