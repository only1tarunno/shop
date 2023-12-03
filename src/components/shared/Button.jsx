/* eslint-disable react/prop-types */
const Button = ({ text }) => {
  return (
    <>
      <button className="btn bg-[#f76b6a] border-[#f76b6a] px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase">
        {text}
      </button>
    </>
  );
};

export default Button;
