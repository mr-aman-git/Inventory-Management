import React from "react";

const Inventory = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-[896px] bg-red-400 mx-auto p-5 rounded-md shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-5">
            Inventory Management
          </h1>
          <form action="">

            <div className="mb-6">
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                className="p-2 w-full border-1 rounded-md outline-none"
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                className="p-2 w-full border-1 rounded-md outline-none"
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                className="p-2 w-full border-1 rounded-md outline-none"
              />
            </div>

            <div className="mb-6">
              <button className="p-2 w-full border-none rounded-md outline-none bg-blue-500 font-bold text-[17px] cursor-pointer">
                Add Product
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Inventory;
