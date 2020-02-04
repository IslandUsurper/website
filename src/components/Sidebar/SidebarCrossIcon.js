import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import CrossIcon from 'emotion-icons/fa-solid/Times';

import { matchBreakpointDown } from '../../utils/rwd';
import { media } from '../../utils/emotion';

const StyledCrossIcon = styled(CrossIcon)`
  position: absolute;
  z-index: 2;
  left: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  display: block;
  color: ${({ theme }) => theme.colors.icon};

  ${media.desktop`
      display: none;
  `};
`;

const SidebarCrossIcon = ({ onClick }) => {
  return (
    <>
      {matchBreakpointDown('desktop') && (
        <StyledCrossIcon
          size={24}
          onClick={onClick}
          aria-controls="main-menu"
        />
      )}
    </>
  );
};

SidebarCrossIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SidebarCrossIcon;
