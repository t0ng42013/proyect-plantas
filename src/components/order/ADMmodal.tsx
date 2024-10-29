import { ChangeEvent, useState } from "react";
import { BiX } from "react-icons/bi";

export const ADMmodal = () => {
    const[productData, setProductData] = useState({
        name: '',
        imageUrl: '',
        price: '',
        stock: '',
        quantity: ''
    });

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProductData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    
  return (    
    <>
    <div className="overlay"></div>
    
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 w-96">
                  <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">Modificar Producto</h2>
                      <button onClick={()=>{}} className="text-gray-500 hover:text-gray-700">
                          <BiX size={24} />
                      </button>
                  </div>

                  <div className="space-y-4">
                      <div>
                          <label className="block text-sm font-medium text-gray-700">Nombre:</label>
                          <input
                              type="text"
                              name="name"
                              value={productData.name}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                          />
                      </div>

                      <div>
                          <label className="block text-sm font-medium text-gray-700">URL de Imagen:</label>
                          <input
                              type="text"
                              name="imageUrl"
                              value={productData.imageUrl}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                          />
                      </div>

                      <div>
                          <label className="block text-sm font-medium text-gray-700">Precio:</label>
                          <input
                              type="number"
                              name="price"
                              value={productData.price}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                          />
                      </div>

                      <div>
                          <label className="block text-sm font-medium text-gray-700">Stock:</label>
                          <input
                              type="number"
                              name="stock"
                              value={productData.stock}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                          />
                      </div>

                      <div>
                          <label className="block text-sm font-medium text-gray-700">Cantidad:</label>
                          <input
                              type="number"
                              name="quantity"
                              value={productData.quantity}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                          />
                      </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                      <button
                          onClick={() => { }}
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                      >
                          Cancelar
                      </button>
                      <button
                          onClick={() => { }}
                          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                      >
                          Guardar
                      </button>
                  </div>
              </div>
          </div>
          </>
)
}
