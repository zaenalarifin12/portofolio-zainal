import styled from "styled-components";
import {Typography} from "antd";
import themes from "../../../config/themes";

const Text = Typography

export const TextStyle = styled(Text)`
  
`

export const TextLink = styled(Text)`
  font-size: 20px !important;
  color: ${themes.color.white} !important;
  padding: 5px 10px !important;
  border: 1px solid transparent !important;
  border-radius: 5px !important;
  &:hover {
    border: 1px solid ${themes.color.green} !important;
    color: ${themes.color.green} !important;
    cursor: pointer !important;
  }
`


export const TextTitleContent = styled(Text)`
    color: ${ themes.color.white } !important;
    font-size: 30px !important;
    border-bottom: 1px solid ${themes.color.purple} !important;
    padding-bottom: 10px !important;
`