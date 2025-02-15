import React, { useState } from "react";

const Inventory = () => {
  let [allList, setAllList]=useState ([]);
  let [productName, setProductName]= useState();
  let [productQuantity, setProductQuantity]= useState();
  let [productPrice, setProductPrice]= useState();


  let addBtn= (event)=>{
    event.preventDefault();
    setProductName(event.target.name.value);
    setProductQuantity(event.target.number1.value);
    setProductPrice(event.target.number2.value);

    let newProduct={
      name: productName,
      quantity: productQuantity,
      price: productPrice,
    }
    setAllList ([...allList, newProduct]);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-[896px] bg-white mx-auto p-5 rounded-md shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-5">
            Inventory Management
          </h1>
          <div>
            <form action="#" onSubmit={addBtn}>
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
                  type="number"
                  placeholder="Quantity"
                  name="number1"
                  className="p-2 w-full border-1 rounded-md outline-none"
                />
              </div>

              <div className="mb-6">
                <input
                  type="number"
                  placeholder="Price"
                  name="number2"
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

          <div>
            <h2 className="text-2xl font-semibold mb-5 text-center">
              Product List
            </h2>
            <div>
              <table className=" w-full border-black border-1 text-center ">
                <thead>
                  <tr>
                    <td className="py-2 px-3 border-1 font-semibold">
                      Product Name
                    </td>
                    <td className="py-2 px-3 border-1 font-semibold">
                      Quantity
                    </td>
                    <td className="py-2 px-3 border-1 font-semibold">Price</td>
                    <td className="py-2 px-3 border-1 font-semibold">
                      More Option
                    </td>
                  </tr>
                </thead>


              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
