<template>
  <div class="button-attrs">
    <div class="button-attrs-item-attr">
      <span>组件唯一 key：</span>
      <a-input v-model:value="selectComponent.uuid" disabled />
    </div>
    <div class="button-attrs-item-attr">
      <span>禁用：</span>
      <a-switch
        v-model:checked="selectComponent.props.disabled"
        checked-children="是"
        un-checked-children="否"
      />
    </div>
    <div class="button-attrs-item-attr">
      <span>父级宽度：</span>
      <a-switch
        v-model:checked="selectComponent.props.block"
        checked-children="是"
        un-checked-children="否"
      />
    </div>
    <div class="button-attrs-item-attr">
      <span>危险按钮：</span>
      <a-switch
        v-model:checked="selectComponent.props.danger"
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
        :min="2"
      />
    </div>
    <div class="common-right-item-attr">
      <span>按钮内容：</span>
      <a-input v-model:value="selectComponent.locateProps.content" />
    </div>
    <div class="button-attrs-item-attr">
      <span>按钮形状：</span>
      <a-select
        v-model:value="selectComponent.props.shape"
        class="button-attrs-item-attr-select"
      >
        <template
          v-for="itemShape in selectComponent.config.shape"
          :key="itemShape.key"
        >
          <a-select-option :value="itemShape.value">
            {{ itemShape.key }}
          </a-select-option>
        </template>
      </a-select>
    </div>
    <div class="button-attrs-item-attr">
      <span>按钮大小：</span>
      <a-select
        v-model:value="selectComponent.props.size"
        class="button-attrs-item-attr-select"
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
    <div class="button-attrs-item-attr">
      <span>按钮类型：</span>
      <a-select
        v-model:value="selectComponent.props.type"
        class="button-attrs-item-attr-select"
      >
        <template
          v-for="itemType in selectComponent.config.type"
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
import "./ButtonAttrs.css";
import { DesignDate } from "@/untils/types";

export default defineComponent({
  name: "ButtonAttrs",
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
