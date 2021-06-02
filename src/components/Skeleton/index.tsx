import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface ISkeletonBoxProps {
  circle?: boolean;
  height?: number | string;
  width?: number | string;
  count?: number;
  margin?: string;
}

const SkeletonBox: React.FC<ISkeletonBoxProps> = ({ circle, height, width, count, margin }) => (
    <div style={{ width: width || '100%', margin: margin || '0px' }}>
      <SkeletonTheme color="#faf9f9" highlightColor="#e4e2e2">
        <Skeleton 
          circle={circle || false}
          count={count || 1}
          height={height || '100%'}
          width={width || '100%'}
        />
      </SkeletonTheme>
    </div>
  );

export default SkeletonBox;
