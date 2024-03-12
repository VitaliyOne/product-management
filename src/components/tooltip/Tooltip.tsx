import React, { useState } from 'react';
import { type ITooltipProps } from './types';

const Tooltip: React.FC<ITooltipProps> = ({ description, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      {children}
      {showTooltip && <div className="tooltip">{description}</div>}
    </div>
  );
};

export default Tooltip;
