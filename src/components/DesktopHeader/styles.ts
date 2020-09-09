import styled, { css } from 'styled-components';
import { GrLinkedin} from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

const defaultIconCss = css`
  width: 24px;
  height: 24px;
`

export const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background: var(--color-header);
  padding: 0 30px;
  display: none;

  @media (min-width: 1180px) {
    display: block;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  max-width: 1128px;
  margin: 0 auto;
  height: 52px;

  .left, 
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%; 
    
    button {
      background: none;
      border: 0;
      outline: 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 90px;
      min-height: 100%;

      color: var(--color-icons);
      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }

      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`

export const LinkedInIcon= styled(GrLinkedin)`
  width: 36px;
  height: 36px;
  color: var(--color-linkedin);
  background: var(--color-white);
  border-radius: 4px;
  flex-shrink: 0;
`

export const SearchInput= styled.input`
  margin-left: 16px;
  background: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 8px;
  border: 0;
  outline: 0;
  border-radius: 2px;

  &:focus {
    background: var(--color-white);
  }
`

export const HomeIcon= styled(AiFillHome)`
  ${defaultIconCss}
`

export const NotificationsIcon= styled(AiOutlineBell)`
  ${defaultIconCss}
`

export const ProfileCircle= styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
  flex-shrink: 0;
`

export const CaretDownIcon= styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`
