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
      <RightComAttrs v-show="Object.keys(selectComponent).length > 0" />
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
import { guid } from "@/untils/renderSolve";

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

    function getComponentAttributes(attrs: Component) {
      if (attrs.uuid) {
        renderComponents.value.forEach((itemCom) => {
          if (itemCom.uuid === attrs.uuid) {
            Object.assign(itemCom, attrs);
          }
        });
      } else {
        attrs.uuid = guid();
        renderComponents.value.push(attrs);
      }
      Object.assign(selectComponent, attrs);
    }

    function changeSelectComponent(uuid: string) {
      console.log(uuid);
    }

    provide(
      "DesignView",
      reactive<DesignDate>({
        name: "DesignView",
        selectComponent,
        getComponentAttributes,
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
      selectComponent,
    };
  },
});
</script>
