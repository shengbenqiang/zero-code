<template>
  <div class="design-view">
    <div class="design-view-left design-view-common-parent">
      <LeftComponents />
    </div>
    <div class="design-view-center design-view-common-parent">
      <RenderCom />
    </div>
    <div class="design-view-right design-view-common-parent">
      <OperateCom />
      <a-tabs v-model:activeKey="activeKey" class="design-view-tab-con">
        <a-tab-pane
          key="component"
          tab="组件属性"
          class="design-view-tab-item-con"
        >
          <RightComAttrs v-show="Object.keys(selectComponent).length > 0" />
          <div v-show="Object.keys(selectComponent).length === 0">
            <a-empty
              class="design-view-tab-item-empty"
              description="请选择组件"
            />
          </div>
        </a-tab-pane>
        <a-tab-pane
          key="formAttrs"
          tab="表单属性"
          class="design-view-tab-item-con"
        >
          表单属性
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref } from "vue";
import "./DesignView.css";
import RenderCom from "@/components/RenderCom/RenderCom.vue";
import OperateCom from "@/components/OperateCom/OperateCom.vue";
import RightComAttrs from "@/components/RightComAttrs/RightComAttrs.vue";
import LeftComponents from "@/components/LeftComponents/LeftComponents.vue";
import { Component, DesignDate } from "@/untils/types";
import { guid, deepCloneCom } from "@/untils/renderSolve";

export default defineComponent({
  name: "DesignView",
  components: {
    RenderCom,
    OperateCom,
    RightComAttrs,
    LeftComponents,
  },
  setup() {
    let selectComponent: Component = reactive<Component>({} as Component);
    const renderComponents = ref<Component[]>([]);
    const activeKey = ref<string>("component");

    // 已渲染组件的切换方法
    function changeSelectComponent(uuid: string) {
      const findCom = renderComponents.value.find((com) => com.uuid === uuid);
      Object.keys(selectComponent).map((key) => {
        delete selectComponent[key];
      });
      Object.assign(selectComponent, findCom);
    }
    // 左边点击新增渲染组件方法
    function addRenderComponent(com: Component) {
      const tempCom = deepCloneCom(com);
      tempCom.uuid = guid();
      renderComponents.value.push(tempCom);
      Object.keys(selectComponent).map((key) => {
        delete selectComponent[key];
      });
      Object.assign(selectComponent, tempCom);
    }

    provide(
      "DesignView",
      reactive<DesignDate>({
        name: "DesignView",
        selectComponent,
        addRenderComponent,
      })
    );

    provide(
      "RenderView",
      reactive({
        renderComponents,
        changeSelectComponent,
      })
    );

    return {
      activeKey,
      selectComponent,
    };
  },
});
</script>
