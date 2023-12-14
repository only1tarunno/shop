/* eslint-disable react/prop-types */
const AddCategory = ({ handleAddcategory }) => {
  return (
    <form className="py-8 px-0 lg:px-5" onSubmit={handleAddcategory}>
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Category Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Category Name"
            className="w-full px-3 py-2 border rounded-md border-[#f76b6a] focus:outline-[#f76b6a] text-gray-900"
            data-temp-mail-org="0"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Category Logo URL
          </label>
          <input
            type="url"
            name="photo"
            placeholder="Category Logo URL"
            required
            className="w-full px-3 py-2 border rounded-md border-[#f76b6a] focus:outline-[#f76b6a] text-gray-900"
            data-temp-mail-org="0"
          />
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="bg-[#f76b6a] w-32 rounded-md py-3 text-white"
        >
          Add Category
        </button>
      </div>
    </form>
  );
};

export default AddCategory;
