/* eslint-disable @next/next/no-img-element */
const Investment = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center text-center md:text-left min-h-screen py-8 md:py-0 bg-background-200">
      <div className="w-full md:w-[50%] flex justify-center md:justify-end">
        <img
          src="assets/investment.jpg"
          alt="investment"
          className="h-[40lvh] md:h-[80lvh] w-auto object-cover my-4 md:mb-0"
        ></img>
      </div>
      <div className="w-full md:w-[50%] pl-0 md:pl-8 text-text space-y-8">
        <div>
          <p className="text-6xl md:text-7xl xl:text-8xl font-thin">
            YOUR INVESTMENT
          </p>
          <p className="text-5xl ml-0 md:ml-16"> with Magic Hour Portraits</p>
        </div>
        <p className="text-xl ml-0 md:ml-16 mr-0 md:mr-8">
          Wedding collections are curated to ensure your big day is captured
          with all the gentle care and loving excitement it deserves.
        </p>
        <p className="text-xl ml-0 md:ml-16">Investment begins at $2,799</p>
        <button
          className="p-2 px-8 bg-primary-300 hover:bg-primary-400 text-text-800 hover:text-white ml-0 md:ml-16 text-xl transition-colors"
          onClick={() => (window.location.href = "/contact")}
        >
          Inquire →
        </button>
      </div>
    </div>
  );
};
export default Investment;
