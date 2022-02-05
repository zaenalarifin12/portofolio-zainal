import styled from "styled-components";
import {Form} from "antd";
import themes from "../../../config/themes";

export const ItemStyle = styled(Form.Item)`
  .ant-form-item-label > label {
    color: ${themes.color.white} !important;
  }
`