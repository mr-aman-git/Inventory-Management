import React, { useState } from "react";

const Inventory = () => {
  let [allList, setAllList] = useState([]);
  let [productName, setProductName] = useState();
  let [productQuantity, setProductQuantity] = useState();
  let [productPrice, setProductPrice] = useState();


    let addBtn = (event) => {
      event.preventDefault();

      let newProduct = {
        name: productName,
        quantity: productQuantity,
        price: productPrice,
      };

        setAllList([...allList, newProduct]);
    
    }

    
    

  let deleteItem= (index)=>{
    console.log(index);
    let upadteValue= [...allList];
    upadteValue.splice(index, 1);
    setAllList([...upadteValue]);

    
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
                  onChange={(e) => setProductName(e.target.value)}
                  className="p-2 w-full border-1 rounded-md outline-none"
                />
              </div>

              <div className="mb-6">
                <input
                  type="number"
                  placeholder="Quantity"
                  onChange={(e) => setProductQuantity(e.target.value)}
                  className="p-2 w-full border-1 rounded-md outline-none"
                />
              </div>

              <div className="mb-6">
                <input
                  type="number"
                  placeholder="Price"
                  onChange={(e) => setProductPrice(e.target.value)}
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
            <h2 className="text-2xl font-semibold mb-5 text-center text-blue-500">
              Product List
            </h2>

            <div>
            <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search Product Name"
                  onChange={searchFilter}
                  className="p-2 w-[300px] border-1 rounded-md outline-none"
                />
              </div>
            </div>

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
                <tbody>
                  {allList.map((stock, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td className="py-2 px-3 border-1">
                            {stock.name}
                          </td>

                          <td className="py-2 px-3 border-1">
                            {stock.quantity}
                          </td>

                          <td className="py-2 px-3 border-1">
                          ₹ {stock.price}
                          </td>

                          <td className="py-2 px-3 border-1">
                           <i class="ri-delete-bin-6-line text-[27px] hover:text-red-600 cursor-pointer" 
                           onClick={()=>deleteItem(index)}
                           ></i>
                          </td>

                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
