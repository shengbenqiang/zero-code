<template>
  <a-form class="render-com-con">
    <template v-for="itemCom in renderArr" :key="itemCom.key">
      <a-row
        class="render-item-component"
        :class="[
          selectComponent.uuid === itemCom.uuid
            ? 'render-select-item-component'
            : '',
        ]"
        type="flex"
        :align="itemCom.locateProps.align"
        :justify="itemCom.locateProps.justify"
        @click="handleItemComClick"
      >
        <a-col :span="itemCom.formItemProps.span">
          <a-form-item
            class="render-form-item"
            :label="itemCom.formItemProps.label"
            :name="itemCom.formItemProps.name"
          >
            <component :is="itemCom.tag" v-bind="itemCom.props">
              {{ itemCom.content }}
            </component>
          </a-form-item>
        </a-col>
      </a-row>
    </template>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, inject, watch, ref } from "vue";
import "./RenderCom.css";
import { RenderDate, Component, DesignDate } from "@/untils/types";
import { deepClone } from "@/untils/renderSolve";

export default defineComponent({
  name: "RenderCom",
  setup() {
    const RenderView: RenderDate = inject<RenderDate>(
      "RenderView",
      {} as RenderDate
    );
    // const { changeSelectComponent } = RenderView;

    const DesignView: DesignDate = inject("DesignView", {} as DesignDate);
    const { selectComponent } = DesignView;

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

    function handleItemComClick(uuid: string) {
      console.log(uuid);
    }

    return {
      renderArr,
      selectComponent,
      handleItemComClick,
    };
  },
});
</script>
