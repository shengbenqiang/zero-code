import { Component } from "./types";

export const componentGeneralArr: Component[] = [
  {
    key: "ButtonAttrs",
    name: "按钮",
    tag: "a-button",
    uuid: "",
    props: {
      block: true,
      danger: false,
      disabled: false,
      shape: "",
      size: "default",
      type: "default",
    },
    config: {
      shape: [
        {
          key: "默认",
          value: "",
        },
        {
          key: "circle",
          value: "circle",
        },
        {
          key: "round",
          value: "round",
        },
      ],
      size: [
        {
          key: "large",
          value: "large",
        },
        {
          key: "middle",
          value: "middle",
        },
        {
          key: "small",
          value: "small",
        },
      ],
      type: [
        {
          key: "primary",
          value: "primary",
        },
        {
          key: "dashed",
          value: "dashed",
        },
        {
          key: "ghost",
          value: "ghost",
        },
        {
          key: "link",
          value: "link",
        },
        {
          key: "default",
          value: "default",
        },
        {
          key: "text",
          value: "text",
        },
      ],
      locateAlign: [
        {
          key: "top",
          value: "top",
        },
        {
          key: "middle",
          value: "middle",
        },
        {
          key: "bottom",
          value: "bottom",
        },
      ],
      locateJustify: [
        {
          key: "start",
          value: "start",
        },
        {
          key: "end",
          value: "end",
        },
        {
          key: "center",
          value: "center",
        },
        {
          key: "space-around",
          value: "space-around",
        },
        {
          key: "space-between",
          value: "space-between",
        },
      ],
    },
    locateProps: {
      justify: "start",
      align: "middle",
      content: "默认内容",
    },
    formItemProps: {
      span: 2,
      label: "",
      name: "",
    },
  },
];

export const componentLayoutArr: Component[] = [
  {
    key: "GridRow",
    name: "栅格",
    tag: "a-row",
    uuid: "",
    props: {},
  },
  {
    key: "GridCol",
    name: "栅格",
    tag: "a-col",
    uuid: "",
    props: {},
  },
  {
    key: "Space",
    name: "间距",
    tag: "a-space",
    uuid: "",
    props: {},
  },
];

export const componentNavigationArr: Component[] = [
  {
    key: "Affix",
    name: "固钉",
    tag: "a-affix",
    uuid: "",
    props: {},
  },
  {
    key: "Breadcrumb",
    name: "面包屑",
    tag: "a-breadcrumb",
    uuid: "",
    props: {},
  },
  {
    key: "Dropdown",
    name: "下拉菜单",
    tag: "a-dropdown",
    uuid: "",
    props: {},
  },
  {
    key: "Menu",
    name: "导航菜单",
    tag: "a-menu",
    uuid: "",
    props: {},
  },
  {
    key: "PageHeader",
    name: "页头",
    tag: "a-page-header",
    uuid: "",
    props: {},
  },
  {
    key: "Pagination",
    name: "分页",
    tag: "a-pagination",
    uuid: "",
    props: {},
  },
  {
    key: "Steps",
    name: "步骤条",
    tag: "a-steps",
    uuid: "",
    props: {},
  },
];

export const componentDataEntryArr: Component[] = [
  {
    key: "AutoComplete",
    name: "自动完成",
    tag: "a-auto-complete",
    uuid: "",
    props: {},
  },
  {
    key: "Cascader",
    name: "级联选择",
    tag: "a-cascader",
    uuid: "",
    props: {},
  },
  {
    key: "Checkbox",
    name: "多选框",
    tag: "a-checkbox",
    uuid: "",
    props: {},
  },
  {
    key: "DatePicker",
    name: "日期选择框",
    tag: "a-date-picker",
    uuid: "",
    props: {},
  },
  {
    key: "FormModel",
    name: "日期选择框",
    tag: "a-form",
    uuid: "",
    props: {},
  },
  {
    key: "InputAttrs",
    name: "输入框",
    tag: "a-input",
    uuid: "",
    props: {
      disabled: false,
      maxlength: undefined,
      size: "default",
      bordered: false,
      placeholder: "默认内容",
    },
    config: {
      size: [
        {
          key: "large",
          value: "large",
        },
        {
          key: "default",
          value: "default",
        },
        {
          key: "small",
          value: "small",
        },
      ],
      locateAlign: [
        {
          key: "top",
          value: "top",
        },
        {
          key: "middle",
          value: "middle",
        },
        {
          key: "bottom",
          value: "bottom",
        },
      ],
      locateJustify: [
        {
          key: "start",
          value: "start",
        },
        {
          key: "end",
          value: "end",
        },
        {
          key: "center",
          value: "center",
        },
        {
          key: "space-around",
          value: "space-around",
        },
        {
          key: "space-between",
          value: "space-between",
        },
      ],
    },
    locateProps: {
      justify: "start",
      align: "middle",
    },
    formItemProps: {
      span: undefined,
      label: "默认标签",
      name: "defaultTag",
    },
  },
  {
    key: "InputNumber",
    name: "数字输入框",
    tag: "a-input-number",
    uuid: "",
    props: {},
  },
  {
    key: "Mentions",
    name: "提及",
    tag: "a-mentions",
    uuid: "",
    props: {},
  },
  {
    key: "Radio",
    name: "单选框",
    tag: "a-radio",
    uuid: "",
    props: {},
  },
  {
    key: "Rate",
    name: "评分",
    tag: "a-rate",
    uuid: "",
    props: {},
  },
  {
    key: "Select",
    name: "选择器",
    tag: "a-select",
    uuid: "",
    props: {},
  },
  {
    key: "Slider",
    name: "滑动输入条",
    tag: "a-slider",
    uuid: "",
    props: {},
  },
  {
    key: "Switch",
    name: "开关",
    tag: "a-switch",
    uuid: "",
    props: {},
  },
  {
    key: "TimePicker",
    name: "时间选择框",
    tag: "a-time-picker",
    uuid: "",
    props: {},
  },
  {
    key: "Transfer",
    name: "穿梭框",
    tag: "a-transfer",
    uuid: "",
    props: {},
  },
  {
    key: "TreeSelect",
    name: "树选择",
    tag: "a-tree-select",
    uuid: "",
    props: {},
  },
  {
    key: "Upload",
    name: "上传",
    tag: "a-upload",
    uuid: "",
    props: {},
  },
];

export const componentDataDisplayArr: Component[] = [
  {
    key: "Avatar",
    name: "头像",
    tag: "a-avatar",
    uuid: "",
    props: {},
  },
  {
    key: "Badge",
    name: "徽标数",
    tag: "a-badge",
    uuid: "",
    props: {},
  },
  {
    key: "Calendar",
    name: "日历",
    tag: "a-calendar",
    uuid: "",
    props: {},
  },
  {
    key: "Card",
    name: "卡片",
    tag: "a-card",
    uuid: "",
    props: {},
  },
  {
    key: "Carousel",
    name: "走马灯",
    tag: "a-carousel",
    uuid: "",
    props: {},
  },
  {
    key: "Collapse",
    name: "折叠面板",
    tag: "a-collapse",
    uuid: "",
    props: {},
  },
  {
    key: "Comment",
    name: "评论",
    tag: "a-comment",
    uuid: "",
    props: {},
  },
  {
    key: "Descriptions",
    name: "描述列表",
    tag: "a-descriptions",
    uuid: "",
    props: {},
  },
  {
    key: "Empty",
    name: "空状态",
    tag: "a-empty",
    uuid: "",
    props: {},
  },
  {
    key: "List",
    name: "列表",
    tag: "a-list",
    uuid: "",
    props: {},
  },
  {
    key: "Popover",
    name: "气泡卡片",
    tag: "a-popover",
    uuid: "",
    props: {},
  },
  {
    key: "Statistic",
    name: "统计数值",
    tag: "a-statistic",
    uuid: "",
    props: {},
  },
  {
    key: "Table",
    name: "表格",
    tag: "a-table",
    uuid: "",
    props: {},
  },
  {
    key: "Tabs",
    name: "标签页",
    tag: "a-tabs",
    uuid: "",
    props: {},
  },
  {
    key: "Tag",
    name: "标签",
    tag: "a-tag",
    uuid: "",
    props: {},
  },
  {
    key: "Timeline",
    name: "时间轴",
    tag: "a-timeline",
    uuid: "",
    props: {},
  },
  {
    key: "Tooltip",
    name: "文字提示",
    tag: "a-tooltip",
    uuid: "",
    props: {},
  },
  {
    key: "Tree",
    name: "树形控件",
    tag: "a-tree",
    uuid: "",
    props: {},
  },
];

export const componentFeedbackArr: Component[] = [
  {
    key: "AlterAttrs",
    name: "警告提示",
    tag: "a-alert",
    uuid: "",
    props: {
      message: "警告组件",
      type: "info",
      showIcon: false,
    },
    formItemProps: {
      span: 4,
      label: "",
      name: "",
    },
    locateProps: {
      justify: "start",
      align: "middle",
    },
    config: {
      locateAlign: [
        {
          key: "top",
          value: "top",
        },
        {
          key: "middle",
          value: "middle",
        },
        {
          key: "bottom",
          value: "bottom",
        },
      ],
      locateJustify: [
        {
          key: "start",
          value: "start",
        },
        {
          key: "end",
          value: "end",
        },
        {
          key: "center",
          value: "center",
        },
        {
          key: "space-around",
          value: "space-around",
        },
        {
          key: "space-between",
          value: "space-between",
        },
      ],
      alterType: [
        {
          key: "success",
          value: "success",
        },
        {
          key: "info",
          value: "info",
        },
        {
          key: "warning",
          value: "warning",
        },
        {
          key: "error",
          value: "error",
        },
      ],
    },
  },
  {
    key: "Drawer",
    name: "抽屉",
    tag: "a-drawer",
    uuid: "",
    props: {},
  },
  {
    key: "Modal",
    name: "对话框",
    tag: "a-modal",
    uuid: "",
    props: {},
  },
  {
    key: "Popconfirm",
    name: "警告提示",
    tag: "a-popconfirm",
    uuid: "",
    props: {},
  },
  {
    key: "Progress",
    name: "进度条",
    tag: "a-progress",
    uuid: "",
    props: {},
  },
  {
    key: "Result",
    name: "结果",
    tag: "a-result",
    uuid: "",
    props: {},
  },
  {
    key: "Skeleton",
    name: "骨架屏",
    tag: "a-skeleton",
    uuid: "",
    props: {},
  },
];
