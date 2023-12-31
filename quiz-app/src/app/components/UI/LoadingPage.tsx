const LoadingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-blue-900"></div>
        <p className="text-center text-xl mt-4 text-blue-900">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
