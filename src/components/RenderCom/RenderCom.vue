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
        @click="handleItemComClick(itemCom.uuid)"
      >
        <div
          v-show="selectComponent.uuid === itemCom.uuid"
          class="render-com-item-operate"
        >
          <SIcon
            icon="icon-jiantou_xiangshang"
            :size="15"
            class="render-com-icon-color"
            @handleIconClick="handleIconClick(1)"
          />
          <SIcon
            icon="icon-jiantou_xiangxia"
            :size="15"
            class="render-com-icon-color"
            @handleIconClick="handleIconClick(2)"
          />
          <SIcon
            icon="icon-tianjia"
            :size="15"
            class="render-com-icon-color"
            @handleIconClick="handleIconClick(3)"
          />
          <SIcon
            icon="icon-shanchu1"
            :size="15"
            class="render-com-icon-color"
            @handleIconClick="handleIconClick(4)"
          />
        </div>
        <a-col :span="itemCom.formItemProps.span">
          <a-form-item
            class="render-form-item"
            :label="itemCom.formItemProps.label"
            :name="itemCom.formItemProps.name"
          >
            <component :is="itemCom.tag" v-bind="itemCom.props">
              {{ itemCom.locateProps.content }}
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
import SIcon from "@/components/SIcon/SIcon.vue";
import { RenderDate, Component, DesignDate } from "@/untils/types";
import { deepClone } from "@/untils/renderSolve";

export default defineComponent({
  name: "RenderCom",
  components: {
    SIcon,
  },
  setup() {
    const RenderView: RenderDate = inject<RenderDate>(
      "RenderView",
      {} as RenderDate
    );
    const { changeSelectComponent } = RenderView;

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
      changeSelectComponent(uuid);
    }

    function handleIconClick(iconType: number) {
      console.log(iconType);
    }

    return {
      renderArr,
      selectComponent,
      handleIconClick,
      handleItemComClick,
    };
  },
});
</script>
