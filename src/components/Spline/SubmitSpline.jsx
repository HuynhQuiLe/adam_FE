import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SubmitSpline = () => {
    const {item} = useSelector(state => state.itemSlice)
    if(!item.model) {
        return null
    }
    return (
        <div className='opacity-60'>
            <Suspense  fallback={<div className='w-fulll min-h-[80vh] flex items-center justify-center text-[100px]'>Loading...</div>}>
                {/* https://prod.spline.design/Vq4P9h7FFn0PXiyW/scene.splinecode */}
                <Spline onLoad={(e) => console.log(e._scene.uuid)} scene={item.model}  />
            </Suspense>
        </div>
    );
}

export default SubmitSpline
