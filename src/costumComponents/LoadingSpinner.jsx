const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <div className="text-center">
                {/* Brand Name */}
                <h1 className="text-5xl font-bold text-white mb-8 animate-pulse">
                    N.Ahmad
                </h1>

                {/* Spinner */}
                <div className="spinner mb-6" />

                {/* Loading Text */}
                <p className="text-white/80 text-lg animate-pulse">
                    Loading your experience...
                </p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
