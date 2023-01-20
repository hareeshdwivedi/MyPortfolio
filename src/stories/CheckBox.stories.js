import { CheckBox } from "components";
export default {
  title: "hareesh_s_application2/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder4",
  variant: "OutlineGray90026",
  size: "sm",
  inputClassName: "mr-1",
};
