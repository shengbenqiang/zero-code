<template>
  <div class="render-com-con">
    <div
      class="render-item-component"
      v-for="itemCom in renderArr"
      :key="itemCom.key"
    >
      <component :is="itemCom.tag" v-bind="itemCom.props">
        {{ itemCom.content }}
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, watch, ref } from "vue";
import "./RenderCom.css";
import { Component, RenderDate } from "@/untils/types";

export default defineComponent({
  name: "RenderCom",
  setup() {
    const RenderView: RenderDate = inject<RenderDate>(
      "RenderView",
      {} as RenderDate
    );
    const renderArr = ref<Component[]>([]);

    watch(
      () => RenderView.renderComponents,
      (newRender) => {
        if (newRender.length > 0) {
          newRender.forEach((itemRender) => {
            renderArr.value.push(itemRender);
          });
        }
      },
      { deep: true }
    );

    return {
      renderArr,
    };
  },
});
</script>
