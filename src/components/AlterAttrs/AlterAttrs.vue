<template>
  <div class="alter-attrs-con">
    <div class="common-right-item-attr">
      <span>组件唯一 key：</span>
      <a-input v-model:value="selectComponent.uuid" disabled />
    </div>
    <div class="common-right-item-attr">
      <span>显示图标：</span>
      <a-switch
        v-model:checked="selectComponent.props.showIcon"
        checked-children="是"
        un-checked-children="否"
      />
    </div>
    <div class="common-right-item-attr">
      <span>元素宽度：</span>
      <a-input
        v-model:value="selectComponent.formItemProps.span"
        type="number"
        :max="24"
        :min="4"
      />
    </div>
    <div class="common-right-item-attr">
      <span>提示内容：</span>
      <a-input v-model:value="selectComponent.props.message" />
    </div>
    <div class="button-attrs-item-attr">
      <span>提示类型：</span>
      <a-select
        v-model:value="selectComponent.props.type"
        class="button-attrs-item-attr-select"
      >
        <template
          v-for="itemType in selectComponent.config.alterType"
          :key="itemType.key"
        >
          <a-select-option :value="itemType.value">
            {{ itemType.key }}
          </a-select-option>
        </template>
      </a-select>
    </div>
    <div class="button-attrs-item-attr">
      <span>垂直方向：</span>
      <a-select
        v-model:value="selectComponent.locateProps.align"
        class="button-attrs-item-attr-select"
      >
        <template
          v-for="itemAlign in selectComponent.config.locateAlign"
          :key="itemAlign.key"
        >
          <a-select-option :value="itemAlign.value">
            {{ itemAlign.key }}
          </a-select-option>
        </template>
      </a-select>
    </div>
    <div class="button-attrs-item-attr">
      <span>水平方向：</span>
      <a-select
        v-model:value="selectComponent.locateProps.justify"
        class="button-attrs-item-attr-select"
      >
        <template
          v-for="itemJustify in selectComponent.config.locateJustify"
          :key="itemJustify.key"
        >
          <a-select-option :value="itemJustify.value">
            {{ itemJustify.key }}
          </a-select-option>
        </template>
      </a-select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import "./AlterAttrs.css";
import "@/assets/commonCss/rightCom.css";
import { DesignDate } from "@/untils/types";

export default defineComponent({
  name: "AlterAttrs",
  setup() {
    const DesignView: DesignDate = inject<DesignDate>(
      "DesignView",
      {} as DesignDate
    );

    const { selectComponent } = DesignView;

    return {
      selectComponent,
    };
  },
});
</script>
