import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const IOTDSpline = () => {
  return (
    <div>
      <Suspense fallback={<div className='w-fulll min-h-[80vh] flex items-center justify-center text-[100px]'>Loading...</div>}>
        {/* https://prod.spline.design/Vq4P9h7FFn0PXiyW/scene.splinecode */}
        <Spline scene="https://draft.spline.design/sEQSjc9OP9SYZVzc/scene.splinecode"  />
      </Suspense>
    </div>
  );
}

export default IOTDSpline
