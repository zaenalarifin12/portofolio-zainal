import styled from "styled-components";
import {Button} from "antd";
import themes from "../../../config/themes";

export const ButtonSuccess = styled(Button)`
  background: transparent !important;
  border-radius: 10px !important;
  color: ${themes.color.green};
  border: 1px solid ${themes.color.green} !important;
  &:hover {
    background: ${themes.color.green} !important;
    border-radius: 10px !important;
    color: ${themes.color.navy};
    border: 1px solid ${themes.color.green} !important;

  }
`