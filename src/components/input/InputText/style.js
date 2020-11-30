import styled from "styled-components";

const InputUnderline = styled.input`
	width: 100%;
  border:none;
	border-bottom: 2px solid ${({ theme }) => theme.gray3};
	background: none;
  &::placeholder{
    color:${({theme}) => theme.gray3}
  }
	&:hover,
	&:focus {
		border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
	}
`;

const StyledInputText = styled.div``;

export default StyledInputText;
export { InputUnderline };
