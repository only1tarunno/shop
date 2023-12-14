import { FaRegTrashCan } from "react-icons/fa6";
import img from "../../../../assets/categoryimg.png";

/* eslint-disable react/prop-types */
const CategoryTable = ({ categories, handleDelete }) => {
  return (
    <div className="overflow-x-auto py-8">
      <table className="table rounded overflow-hidden text-center">
        {/* head */}
        <thead className="bg-[#cccccc] text-black">
          <tr>
            <th>Sl No</th>
            <th>Image</th>
            <th>Category name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category, index) => (
            <tr key={category?._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex justify-center items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={
                          category?.catImage !== "null"
                            ? category.catImage
                            : img
                        }
                        alt="catImage"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{category?.category}</td>
              <td>
                <button
                  onClick={() => handleDelete(category?._id)}
                  className="btn rounded btn-sm bg-[#f76b6a] text-white hover:text-black"
                >
                  <FaRegTrashCan />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
