<template>
  <div class="left-components">
    <div class="left-components-block-con">
      <div class="left-components-block-con-title">公共组件</div>
      <div class="left-components-block-con-components-con">
        <ItemComponent
          v-for="itemComponent in componentGeneralArr"
          :key="itemComponent.key"
          :component="itemComponent"
        />
      </div>
    </div>
    <div class="left-components-block-con">
      <div class="left-components-block-con-title">布局组件</div>
      <div class="left-components-block-con-components-con">
        <ItemComponent
          v-for="itemComponent in componentLayoutArr"
          :key="itemComponent.key"
          :component="itemComponent"
        />
      </div>
    </div>
    <div class="left-components-block-con">
      <div class="left-components-block-con-title">导航组件</div>
      <div class="left-components-block-con-components-con">
        <ItemComponent
          v-for="itemComponent in componentNavigationArr"
          :key="itemComponent.key"
          :component="itemComponent"
        />
      </div>
    </div>
    <div class="left-components-block-con">
      <div class="left-components-block-con-title">输入组件</div>
      <div class="left-components-block-con-components-con">
        <ItemComponent
          v-for="itemComponent in componentDataEntryArr"
          :key="itemComponent.key"
          :component="itemComponent"
        />
      </div>
    </div>
    <div class="left-components-block-con">
      <div class="left-components-block-con-title">展示组件</div>
      <div class="left-components-block-con-components-con">
        <ItemComponent
          v-for="itemComponent in componentDataDisplayArr"
          :key="itemComponent.key"
          :component="itemComponent"
        />
      </div>
    </div>
    <div class="left-components-block-con">
      <div class="left-components-block-con-title">提示组件</div>
      <div class="left-components-block-con-components-con">
        <ItemComponent
          v-for="itemComponent in componentFeedbackArr"
          :key="itemComponent.key"
          :component="itemComponent"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./LeftComponents.css";
import {
  componentLayoutArr,
  componentGeneralArr,
  componentFeedbackArr,
  componentDataEntryArr,
  componentNavigationArr,
  componentDataDisplayArr,
} from "@/untils/components";
import ItemComponent from "@/components/ItemComponent/ItemComponent.vue";

export default defineComponent({
  name: "LeftComponents",
  components: {
    ItemComponent,
  },
  setup() {
    return {
      componentLayoutArr,
      componentGeneralArr,
      componentFeedbackArr,
      componentDataEntryArr,
      componentNavigationArr,
      componentDataDisplayArr,
    };
  },
});
</script>
