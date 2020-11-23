import styled from "styled-components";
import CaretDown from "assets/icon/caret_down.svg"

const StyledSelect = styled.select`
/* 除去默认下拉图标 */
  appearance: none;
  ::-ms-expand{
    display:none;
  }
  background-image:url(${CaretDown});
  background-position:right center;
  background-repeat:no-repeat;
  background-color:transparent;
  padding-right:14px;
  border:none;
  font-size:${({theme}) => theme.normal};
  color:${({theme}) => theme.grayDark};
  
`;

export default StyledSelect;

