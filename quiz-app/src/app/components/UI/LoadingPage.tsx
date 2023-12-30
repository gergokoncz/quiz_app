const LoadingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        <p className="text-center text-xl mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
