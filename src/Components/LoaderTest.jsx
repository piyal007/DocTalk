import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const LoaderTest = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulate data loading with a 3-second delay
        const timer = setTimeout(() => {
            setData('Test data loaded successfully!');
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            {loading && (
                <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-50 flex items-center justify-center">
                    <span className="loading loading-bars loading-xl text-blue-600"></span>
                </div>
            )}
            <div className="min-h-[50vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">{data}</h2>
                    <button
                        onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                                setLoading(false);
                            }, 3000);
                        }}
                        className="btn bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Test Loader Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoaderTest;