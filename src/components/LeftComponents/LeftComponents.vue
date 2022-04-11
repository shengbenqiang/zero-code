<template>
  <div class="left-components">
    <template v-for="item in LeftComponents" :key="item.key">
      <div class="left-components-block-con">
        <div class="left-components-block-con-title">{{ item.title }}</div>
        <draggable
          class="left-components-block-con-components-con"
          :list="item.components"
          :group="{ name: 'component', pull: 'clone', put: false }"
          :sort="false"
          :clone="handleCloneCom"
          draggable=".left-components-drag-item"
          @end="dragEnd"
        >
          <ItemComponent
            class="left-components-drag-item"
            v-for="itemComponent in item.components"
            :key="itemComponent.key"
            :component="itemComponent"
          />
        </draggable>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./LeftComponents.css";
import { LeftComponents } from "@/untils/components";
import ItemComponent from "@/components/ItemComponent/ItemComponent.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { OpenObject } from "@/untils/types";

export default defineComponent({
  name: "LeftComponents",
  components: {
    ItemComponent,
    draggable: VueDraggableNext,
  },
  setup() {
    function dragEnd(e: OpenObject) {
      console.log(e);
      console.log(e.to.className);
    }

    function handleCloneCom(origin: unknown) {
      console.log(origin);
    }

    return {
      dragEnd,
      LeftComponents,
      handleCloneCom,
    };
  },
});
</script>
