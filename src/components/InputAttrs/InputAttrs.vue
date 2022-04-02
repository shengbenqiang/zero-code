<template>
  <div class="input-attrs-con">
    <div class="common-right-item-attr">
      <span>组件唯一 key：</span>
      <a-input v-model:value="selectComponent.uuid" disabled />
    </div>
    <div class="common-right-item-attr">
      <span>禁用：</span>
      <a-switch
        v-model:checked="selectComponent.props.disabled"
        checked-children="是"
        un-checked-children="否"
      />
    </div>
    <div class="common-right-item-attr">
      <span>展示边框：</span>
      <a-switch
        v-model:checked="selectComponent.props.bordered"
        checked-children="是"
        un-checked-children="否"
      />
    </div>
    <div class="common-right-item-attr">
      <span>输入提示：</span>
      <a-input v-model:value="selectComponent.props.placeholder" />
    </div>
    <div class="common-right-item-attr">
      <span>最大长度：</span>
      <a-input v-model:value="selectComponent.props.maxlength" />
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
      <span>标签内容：</span>
      <a-input v-model:value="selectComponent.formItemProps.label" />
    </div>
    <div class="common-right-item-attr">
      <span>标签字段：</span>
      <a-input v-model:value="selectComponent.formItemProps.name" />
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
    <div class="common-right-item-attr">
      <span>输入框大小：</span>
      <a-select
        v-model:value="selectComponent.props.size"
        class="common-right-item-attr-select"
      >
        <template
          v-for="itemSize in selectComponent.config.size"
          :key="itemSize.key"
        >
          <a-select-option :value="itemSize.value">
            {{ itemSize.key }}
          </a-select-option>
        </template>
      </a-select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import "./InputAttrs.css";
import "@/assets/commonCss/rightCom.css";
import { DesignDate } from "@/untils/types";

export default defineComponent({
  name: "InputAttrs",
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
