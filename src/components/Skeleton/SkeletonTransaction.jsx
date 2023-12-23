import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonTransaction = props => {
  return (
    <ContentLoader
      height={200}
      width={400}
      viewBox="0 0 400 200"
      backgroundColor="#d9d9d9"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="15" y="15" rx="4" ry="4" width="80" height="10" />
      <rect x="155" y="15" rx="3" ry="3" width="230" height="10" />
      <rect x="15" y="15" rx="4" ry="4" width="80" height="10" />
      <rect x="35" y="45" rx="4" ry="4" width="80" height="10" />
      <rect x="155" y="45" rx="3" ry="3" width="230" height="10" />
      <rect x="15" y="45" rx="4" ry="4" width="80" height="10" />
      <rect x="50" y="75" rx="4" ry="4" width="80" height="10" />
      <rect x="155" y="75" rx="3" ry="3" width="230" height="10" />
      <rect x="15" y="75" rx="4" ry="4" width="80" height="10" />
      <rect x="35" y="100" rx="4" ry="4" width="80" height="10" />
      <rect x="155" y="100" rx="3" ry="3" width="230" height="10" />
      <rect x="15" y="100" rx="4" ry="4" width="80" height="10" />
      <rect x="50" y="130" rx="4" ry="4" width="80" height="10" />
      <rect x="155" y="130" rx="3" ry="3" width="230" height="10" />
      <rect x="15" y="130" rx="4" ry="4" width="80" height="10" />

      <rect x="15" y="155" rx="4" ry="4" width="80" height="10" />
      <rect x="155" y="155" rx="3" ry="3" width="230" height="10" />
      <rect x="15" y="155" rx="4" ry="4" width="80" height="10" />
    </ContentLoader>
  );
};

export default SkeletonTransaction;
