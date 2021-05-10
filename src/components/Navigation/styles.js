import styled from 'styled-components';

import {Box, Menu as CMenu, MenuItem as CMenuItem} from '@chakra-ui/react';

export const Menu = styled(CMenu)``;

export const MenuItem = styled(CMenuItem)`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: flex-start;
  color: #eee;

  @media screen and (min-width: 68rem) {
    color: #333;
  }

  &:focus {
    background: var(--chakra-colors-primary-400);
    color: black;
  }

  &.selected {
    font-weight: bold;
    border-top: 1px solid;
    border-bottom: 1px solid;
    background: var(--chakra-colors-primary-800);
    color: white;
    border-color: var(--chakra-colors-primary-900);

    @media screen and (min-width: 68rem) {
      background: var(--chakra-colors-light-50);
      color: var(--chakra-colors-primary-600);
      border-color: var(--chakra-colors-light-100);
    }
  }

  &.compact {
    padding: 0.5rem 1rem;
    width: auto;
    margin-left: var(--chakra-space-6);
    border-radius: 5px;
  }

  @media screen and (max-width: 67rem) {
    & .icon {
      display: none !important;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: var(--chakra-space-8);
`;

export default {
  Menu,
  MenuItem,
  Divider,
};