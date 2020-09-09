import styled from 'styled-components';
import { FiMessageSquare } from 'react-icons/fi';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;
  height: 48px;

  background-color: var(--color-linkedin);

  @media(min-width: 1180px) {
    display: none;
  }
`;

export const ProfileCircle = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  flex: 1;
  margin-left: 16px;
  background: var(--color-input);
  color: var(--color-black);
  padding: 8px;
  border: 0;
  outline: 0;
  border-radius: 2px;

  &:focus {
    background: var(--color-white);
  }
`

export const MessageIcon = styled(FiMessageSquare)`
  margin-left: 16px;
  width: 24px;
  height: 24px;
  color: var(--color-white);
  border-radius: 4px;
  flex-shrink: 0;
`
