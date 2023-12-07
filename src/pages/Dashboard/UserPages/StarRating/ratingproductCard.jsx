/* eslint-disable react/prop-types */
const RatingproductCard = ({ product }) => {
  console.log(product);
  const { _id, thumbnail_url, title } = product || {};
  return (
    <>
      <div className="card bg-base-100 shadow-sm rounded">
        <figure>
          <img
            src={thumbnail_url}
            className="w-full object-cover"
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-lg text-center">{title}</h2>

          <div className="card-actions justify-center">
            <button className="btn bg-[#f76b6a] border-[#f76b6a] px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase">
              Rate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingproductCard;
