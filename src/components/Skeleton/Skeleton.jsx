import React from 'react';
import ContentLoader from 'react-content-loader';

const SmallSkeleton = props => (
  <ContentLoader width={355} height={90} viewBox="0 0 355 90" {...props}>
    <rect x="4" y="8" rx="16" ry="16" width="7" height="86" />
    <rect x="6" y="8" rx="16" ry="16" width="675" height="8" />
    <rect x="6" y="86" rx="16" ry="16" width="669" height="8" />
    <rect x="350" y="8" rx="16" ry="16" width="6" height="86" />
    <rect x="25" y="25" rx="16" ry="16" width="150" height="50" />
    <rect x="290" y="35" rx="3" ry="3" width="50" height="30" />
  </ContentLoader>
);

export default SmallSkeleton;
