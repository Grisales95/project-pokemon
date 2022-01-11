import styled from 'styled-components';

export const ContainerBtnPaginator = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ButtonPaginator = styled.li`
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: ${({ theme }) => theme.border};
  color: ${({ active }) => active && '#fff'};
  background-color: ${({ active, theme }) => active && theme.secondary};
  cursor: pointer;
  margin: 0 2px;
  padding: 2px 8px;
  transition: all 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: #fff;
  }
`;

export const IconPage = styled.i`
  cursor: pointer;
  color: ${({ disabled }) => disabled && 'gray'};
  margin: 0 5px;
`;
