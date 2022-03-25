export interface Component {
  key: string;
  name: string;
  tag?: string;
  content?: string;
  props?: object;
  config?: object;
}

export interface DesignDate {
  name: string;
  selectComponent: Component;
  getComponentAttributes: SelectComponent;
}

export interface RenderDate {
  renderComponents: Component[];
}

type SelectComponent = (attrs: Component) => void;
