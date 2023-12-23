import ContentLoader from 'react-content-loader';

const BigSkeleton = props => (
  <ContentLoader
    speed={2}
    width={700}
    height={750}
    viewBox="0 0 700 750"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="96" y="1" rx="0" ry="0" width="623" height="16" />
    <rect x="97" y="31" rx="0" ry="0" width="608" height="15" />
    <rect x="97" y="59" rx="0" ry="0" width="613" height="18" />
    <rect x="97" y="94" rx="0" ry="0" width="619" height="17" />
    <rect x="97" y="124" rx="0" ry="0" width="634" height="16" />
    <rect x="100" y="149" rx="0" ry="0" width="623" height="16" />
    <rect x="100" y="179" rx="0" ry="0" width="623" height="16" />
    <rect x="101" y="207" rx="0" ry="0" width="613" height="18" />
    <rect x="101" y="232" rx="0" ry="0" width="619" height="17" />
    <rect x="101" y="262" rx="0" ry="0" width="619" height="17" />
    <rect x="101" y="287" rx="0" ry="0" width="613" height="18" />
    <rect x="101" y="297" rx="0" ry="0" width="613" height="18" />
    <rect x="101" y="327" rx="0" ry="0" width="613" height="18" />
    <rect x="101" y="357" rx="0" ry="0" width="613" height="18" />
    <rect x="101" y="387" rx="0" ry="0" width="613" height="18" />
  </ContentLoader>
);

export default BigSkeleton;
