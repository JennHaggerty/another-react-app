import React from 'react';
import PropTypes from 'prop-types';

const conditionalRenderPropTypes = {
  children: PropTypes.array.isRequired,
  isShown: PropTypes.bool.isRequired,
}

export const ConditionalRender = ({
  children,
  isShown,
}) => {
  return (
    <>
    {isShown && (
      <>
        {children}
      </>
    )}
    </>
  )
}

ConditionalRender.propTypes = conditionalRenderPropTypes;

export default ConditionalRender;