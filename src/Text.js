import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextStyle = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: ${props => (props.size === SIZES.SMALL ? '8px' : '20px')};
`;


const SIZES = {
    SMALL: 'small',
    MEDIUM: 'large',
  };

export function Text({
        isLink,
        ...props
    }) {
    
    return (
      <TextStyle isLink={isLink} {...props}>
        Test
      </TextStyle>
    );
}
  
Text.propTypes = {
    isLink: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(SIZES)),
};
  
Text.defaultProps = {
    isLink: false,
    size: SIZES.SMALL
};
  