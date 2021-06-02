import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface ISkeletonBoxProps {
  circle?: boolean;
  height: number | string;
  width: number | string;
  count?: number;
}

const SkeletonBox: React.FC<ISkeletonBoxProps> = ({ circle, height, width, count }) => (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <Skeleton 
        circle={circle || false}
        count={count || 1}
        height={height || '100%'}
        width={width || '100%'}
      />
    </SkeletonTheme>
  );

export default SkeletonBox;
