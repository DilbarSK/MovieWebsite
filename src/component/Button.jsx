import styled from "styled-components";

const Button = styled.button`
  padding: 5px 15px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: white;
  border: none;

  a {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1rem;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export default Button;
