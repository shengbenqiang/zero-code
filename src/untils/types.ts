export interface Component {
  key: string;
  name: string;
  tag: string;
  uuid?: string;
  content?: string;
  props: commonObj;
  config?: object;
  locateProps?: commonObj;
}

export interface DesignDate {
  name: string;
  selectComponent: Component;
  getComponentAttributes: SelectComponent;
}

interface commonObj {
  [key: string]: string | boolean | number | undefined;
}

export interface RenderDate {
  renderComponents: Component[];
}

type SelectComponent = (attrs: Component) => void;
