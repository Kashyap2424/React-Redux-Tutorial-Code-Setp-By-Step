import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div className="py-6 sticky top-0 flex justify-around items-center shadow-md">
        <h2 className="text-2xl">Home - Component</h2>

        <div className="">
          <FontAwesomeIcon
            icon={faCartPlus}
            className="h-6 w-6 text-slate-500"
          />
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4 place-items-center">
        <div className="w-full flex border m-2">
          <div className="w-3/5 h-80 my-auto">
            <img
              src="https://tiaecuador.vteximg.com.br/arquivos/ids/182561-1000-1000/133470002.jpg?v=637642047364200000"
              alt=""
              className="h-full w-full cursor-pointer"
            />
          </div>
          <div className="p-5 border-l">
            <h2 className="text-xl font-semibold">
              APPLE iPhone 12 (Blue, 128 GB)
            </h2>
            <ul className="py-5 ">
              <span className="text-xs font-thin">Highlights :</span>
              <li>128 GB ROM</li>
              <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
              <li>12MP + 12MP | 12MP Front Camera</li>
              <li>
                A14 Bionic Chip with Next Generation Neural Engine Processor
              </li>
              <li>Ceramic Shield</li>
              <li>Industry-leading IP68 Water Resistance</li>
              <li>All Screen OLED Display</li>
              <li>
                12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR
                Recording
              </li>
            </ul>
            <h2>Price: $ 1'200</h2>

            <div>
              <button className="p-3 mt-3 border rounded-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all ease-in-out duration-200">
                Add to cart <FontAwesomeIcon icon={faCartPlus} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
