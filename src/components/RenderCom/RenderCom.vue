<template>
  <div class="render-com-con">
    <template v-for="itemCom in renderArr" :key="itemCom.key">
      <a-row
        class="render-item-component"
        :align="itemCom.locateProps.align"
        :justify="itemCom.locateProps.justify"
      >
        <component :is="itemCom.tag" v-bind="itemCom.props">
          {{ itemCom.content }}
        </component>
      </a-row>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, watch, ref } from "vue";
import "./RenderCom.css";
import { RenderDate, Component } from "@/untils/types";
import { deepClone } from "@/untils/renderSolve";

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
      (newValue) => {
        const newRenderComs = deepClone(newValue);
        newRenderComs.forEach((itemCom) => {
          Object.keys(itemCom.props).forEach((itemAttr) => {
            if (
              typeof itemCom.props[itemAttr] === "string" &&
              !itemCom.props[itemAttr]
            ) {
              delete itemCom.props[itemAttr];
            }
          });
        });
        renderArr.value = newRenderComs;
      },
      { deep: true }
    );

    return {
      renderArr,
    };
  },
});
</script>
