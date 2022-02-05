import styled from "styled-components";
import {Card} from "antd";
import themes from "../../../config/themes";

export const CardContentProject = styled(Card)`
  background: transparent !important;
  border-radius: 5px !important;
  height: 100% !important;
  border: 1px solid ${themes.color.green} !important;
`

export const CardContactInformation = styled(Card)`
  background: transparent !important;
  border-radius: 5px !important;
  height: 100% !important;
  border: 1px solid ${themes.color.orange} !important;
`