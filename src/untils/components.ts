import { Component } from "./types";

export const componentGeneralArr: Component[] = [
  {
    key: "ButtonAttrs",
    name: "按钮",
    tag: "a-button",
    content: "默认内容",
    uuid: "",
    props: {
      block: false,
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
    },
  },
];

export const componentLayoutArr: Component[] = [
  {
    key: "GridRow",
    name: "栅格",
    tag: "a-row",
    props: {},
  },
  {
    key: "GridCol",
    name: "栅格",
    tag: "a-col",
    props: {},
  },
  {
    key: "Space",
    name: "间距",
    tag: "a-space",
    props: {},
  },
];

export const componentNavigationArr: Component[] = [
  {
    key: "Affix",
    name: "固钉",
    tag: "a-affix",
    props: {},
  },
  {
    key: "Breadcrumb",
    name: "面包屑",
    tag: "a-breadcrumb",
    props: {},
  },
  {
    key: "Dropdown",
    name: "下拉菜单",
    tag: "a-dropdown",
    props: {},
  },
  {
    key: "Menu",
    name: "导航菜单",
    tag: "a-menu",
    props: {},
  },
  {
    key: "PageHeader",
    name: "页头",
    tag: "a-page-header",
    props: {},
  },
  {
    key: "Pagination",
    name: "分页",
    tag: "a-pagination",
    props: {},
  },
  {
    key: "Steps",
    name: "步骤条",
    tag: "a-steps",
    props: {},
  },
];

export const componentDataEntryArr: Component[] = [
  {
    key: "AutoComplete",
    name: "自动完成",
    tag: "a-auto-complete",
    props: {},
  },
  {
    key: "Cascader",
    name: "级联选择",
    tag: "a-cascader",
    props: {},
  },
  {
    key: "Checkbox",
    name: "多选框",
    tag: "a-checkbox",
    props: {},
  },
  {
    key: "DatePicker",
    name: "日期选择框",
    tag: "a-date-picker",
    props: {},
  },
  {
    key: "FormModel",
    name: "日期选择框",
    tag: "a-form",
    props: {},
  },
  {
    key: "Input",
    name: "输入框",
    tag: "a-input",
    props: {},
  },
  {
    key: "InputNumber",
    name: "数字输入框",
    tag: "a-input-number",
    props: {},
  },
  {
    key: "Mentions",
    name: "提及",
    tag: "a-mentions",
    props: {},
  },
  {
    key: "Radio",
    name: "单选框",
    tag: "a-radio",
    props: {},
  },
  {
    key: "Rate",
    name: "评分",
    tag: "a-rate",
    props: {},
  },
  {
    key: "Select",
    name: "选择器",
    tag: "a-select",
    props: {},
  },
  {
    key: "Slider",
    name: "滑动输入条",
    tag: "a-slider",
    props: {},
  },
  {
    key: "Switch",
    name: "开关",
    tag: "a-switch",
    props: {},
  },
  {
    key: "TimePicker",
    name: "时间选择框",
    tag: "a-time-picker",
    props: {},
  },
  {
    key: "Transfer",
    name: "穿梭框",
    tag: "a-transfer",
    props: {},
  },
  {
    key: "TreeSelect",
    name: "树选择",
    tag: "a-tree-select",
    props: {},
  },
  {
    key: "Upload",
    name: "上传",
    tag: "a-upload",
    props: {},
  },
];

export const componentDataDisplayArr: Component[] = [
  {
    key: "Avatar",
    name: "头像",
    tag: "a-avatar",
    props: {},
  },
  {
    key: "Badge",
    name: "徽标数",
    tag: "a-badge",
    props: {},
  },
  {
    key: "Calendar",
    name: "日历",
    tag: "a-calendar",
    props: {},
  },
  {
    key: "Card",
    name: "卡片",
    tag: "a-card",
    props: {},
  },
  {
    key: "Carousel",
    name: "走马灯",
    tag: "a-carousel",
    props: {},
  },
  {
    key: "Collapse",
    name: "折叠面板",
    tag: "a-collapse",
    props: {},
  },
  {
    key: "Comment",
    name: "评论",
    tag: "a-comment",
    props: {},
  },
  {
    key: "Descriptions",
    name: "描述列表",
    tag: "a-descriptions",
    props: {},
  },
  {
    key: "Empty",
    name: "空状态",
    tag: "a-empty",
    props: {},
  },
  {
    key: "List",
    name: "列表",
    tag: "a-list",
    props: {},
  },
  {
    key: "Popover",
    name: "气泡卡片",
    tag: "a-popover",
    props: {},
  },
  {
    key: "Statistic",
    name: "统计数值",
    tag: "a-statistic",
    props: {},
  },
  {
    key: "Table",
    name: "表格",
    tag: "a-table",
    props: {},
  },
  {
    key: "Tabs",
    name: "标签页",
    tag: "a-tabs",
    props: {},
  },
  {
    key: "Tag",
    name: "标签",
    tag: "a-tag",
    props: {},
  },
  {
    key: "Timeline",
    name: "时间轴",
    tag: "a-timeline",
    props: {},
  },
  {
    key: "Tooltip",
    name: "文字提示",
    tag: "a-tooltip",
    props: {},
  },
  {
    key: "Tree",
    name: "树形控件",
    tag: "a-tree",
    props: {},
  },
];

export const componentFeedbackArr: Component[] = [
  {
    key: "Alter",
    name: "警告提示",
    tag: "a-alter",
    props: {},
  },
  {
    key: "Drawer",
    name: "抽屉",
    tag: "a-drawer",
    props: {},
  },
  {
    key: "Modal",
    name: "对话框",
    tag: "a-modal",
    props: {},
  },
  {
    key: "Popconfirm",
    name: "警告提示",
    tag: "a-popconfirm",
    props: {},
  },
  {
    key: "Progress",
    name: "进度条",
    tag: "a-progress",
    props: {},
  },
  {
    key: "Result",
    name: "结果",
    tag: "a-result",
    props: {},
  },
  {
    key: "Skeleton",
    name: "骨架屏",
    tag: "a-skeleton",
    props: {},
  },
];
