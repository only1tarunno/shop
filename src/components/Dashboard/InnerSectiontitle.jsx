/* eslint-disable react/prop-types */
const InnerSectiontitle = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold pb-2 capitalize">{title}</h2>
      <p className="text-xl capitalize">{subtitle}</p>
    </div>
  );
};

export default InnerSectiontitle;
