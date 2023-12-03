/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto 2xl:px-56 xl:px-48 md:px-10 sm:px-2 px-5">
      {children}
    </div>
  );
};

export default Container;
