import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const IOTDSplineTest = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://draft.spline.design/3wMlm2ZWlFemiQfN/scene.splinecode" />
      </Suspense>
    </div>
  );
}

export default IOTDSplineTest
