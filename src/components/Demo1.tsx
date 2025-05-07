import React from "react";
import { GoPerson } from "react-icons/go"; 
import { CiShoppingCart } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { PiSmileyFill } from "react-icons/pi";

export const Demo1 = () => {
  return (
    <div>
      <div className="bg-orange-500 p-3 w-full h-10">
        <p className="text-[#ffffff] text-center">
          The One Stop Shop for all Your Electrical Needs
        </p>
      </div>
    </div>
  );
};
export const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-orange-400 border-b">
        {/* logo  */}

        <div>
          <img
            className="w-30 h-25 ml-35 mt-4 mb-2"
            src="https://corporate.homedepot.com/sites/default/files/image_gallery/THD_logo.jpg"
          />
        </div>
        <div>

<form className="max-w-lg mx-auto">
    <div className="flex">
        <label itemType="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">Menu <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Deals</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Support & Services</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Brands</button>
            </li>
            </ul>
        </div>
        <div className="relative w-500">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="What can we help you find today?" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange-500 rounded-e-lg border border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

        </div>

        {/* Link */}
       
        {/* icons  */}
        <div className="flex items-center justify-between gap-3 mr-20">
          <GoPerson  className="hover:text-black text-white text-3xl"/>
          <CiShoppingCart  className="hover:text-black text-white text-3xl ml-5"/>
          
        </div>
      </div>
    </>
  );
};
export const Navba = () => {
  return(
    <>
     <div className="flex bg-orange-400 pl-35 pt-5 pb-5 justify-center">
          <ul className="flex items-center justify-between gap-7 font-bold">
            <li className="hover:text-white text-black">Top Deals</li>
            <li className="hover:text-white text-black">Deals of the day</li>
            <li className="hover:text-white text-black">Credit Cards</li>
            <li className="hover:text-white text-black">Gift Cards</li>
            <li className="hover:text-white text-black ">Recently Viewed </li>
            <li className="hover:text-white text-black">Order Status</li>
            <li className="hover:text-white text-black">Saved Items</li>
          </ul>
        </div>
    </>
  )
}

export const Menu = () => {
  return (
    <>
      <div className=" flex items-center justify-evenly gap-0.2 pl-60 pr-60 h-48 bg-orange-100">
        <div className="">
          <img
            className=" rounded-full block w[100px] hover:bg-amber-50 w-[100px] h[100px] hover:scale-110 hover:shadow-2xl"
            src="https://images.thdstatic.com/productImages/617baeef-8101-4300-84f3-7e848edd3b00/svn/mighty-max-battery-12v-batteries-max3926702-64_600.jpg"
          />
          <h1 className="pl-2 font-bold mt-3">Batteries</h1>
        </div>
        <div className="">
          <img
            className=" rounded-full block w[100px] hover:bg-amber-50  w-[100px] h[100px] hover:scale-110 hover:shadow-2xl"
            src="https://images.thdstatic.com/productImages/e4ecccb7-b182-4e84-ba4c-3789fdaf1425/svn/milwaukee-tester-combination-kits-2222-20-64_600.jpg"
          />
          <h1 className="pl-2 font-bold mt-3">Power Tools</h1>
        </div>
        <div className="">
          {" "}
          <img
            className=" rounded-full block w[100px] hover:bg-amber-50  w-[100px] h[100px] hover:scale-110 hover:shadow-2xl"
            src="https://images.thdstatic.com/productImages/802462e3-58c3-4577-931e-99d0cf073f78/svn/klein-tools-clamp-meters-cl120vp-64_600.jpg"
          />
          <h1 className="pl-3 font-bold mt-3 ">Tester Kit</h1>
        </div>

        <div className="">
          <img
            className=" rounded-full block w[100px] hover:bg-sky-700  w-[100px] h[100px] hover:scale-110 hover:shadow-2xl"
            src="https://images.thdstatic.com/productImages/d03770af-b715-4237-961a-5d459f84b588/svn/abb-generator-transfer-switches-tc10324r-64_600.jpg"
          />
          <h1 className=" font-bold mt-3">Transfer Switch</h1>
        </div>
        <div className="">
          <img
            className=" rounded-full block w[100px] hover:bg-sky-700  w-[100px] h[100px] hover:scale-110 hover:shadow-2xl"
            src="https://static.grainger.com/rp/s/is/image/Grainger/201SP-STAR100W_v1?$adapimg$&hei=120&wid=120"
          />
          <h1 className="pl-2 font-bold mt-3">Solar Panels</h1>
        </div>
        <div className="">
          {" "}
          <img
            className=" rounded-full block w[100px] hover:bg-sky-700  w-[100px] h[100px] hover:scale-110 hover:shadow-2xl"
            src="https://dam.thdstatic.com/content/production/8guWivogumQbVVNcMwgn6Q/kirGx91zWzFF5DDMRs6UoA/optimizedFile/16a52987-5874-49f4-9e37-079b81daf7a1_HOM2448M100PCVP.jpg.jpeg?im=Resize=(703,703)"
          />
          <h1 className="pl font-bold mt-3">Circuit Breakers</h1>
        </div>
      </div>
    </>
  );
  
};


export const Body = () => {
  return (
    <>
      <img
        className="w-full h-[700px]"
        src="https://dam.thdstatic.com/content/production/RXiCYwRl01RhVOfBW4CYDw/VYCa9boXJgGCWNV6cIa34w/Original%20file/SD25-electrical-hero.jpg"
      />
    </>
  );
};

export const Favorite = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-orange-500">
          Shop Our Customers Favorite
        </h1>

        <div className="flex justify-center border-b border-gray-200">
          <button className="px-6 py-2 font-medium text-lg text-black border-b-2 border-stone-800 hover:bg-orange-400">
            Best Sellers
          </button>

          <button className="px-6 py-2 font-medium text-lg text-gray-400 hover:bg-orange-300">
            New Arrivals
          </button>
        </div>
      </div>
    </>
  );
};
export const Items = () => {
  return(
    <>
    <div className="flex flex-row bg-amber-50 gap-12 pl-25 pr-20"> 
      <div className="flex flex-col bg-white mt-5 rounded-2xl justify-center items-center ">
        <img className="rounded-2xl h-90 w-90" src="https://images.thdstatic.com/productImages/7eab5091-dac3-4915-802d-ee300e146fc0/svn/abb-circuit-breakers-thql2150a-64_600.jpg"></img>
      <div className="flex flex-row mt-2 mb-2"><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-gray-500" /></div>
      <div className="font-bold text-amber-950">Miniature Circuit Breaker</div>
      <select className="bg-gray-50 mt-3 w-[90%] text-amber-950 rounded">
        <option>1</option>
        <option>6</option>
        <option>12</option>
      </select>
      <div className="pr-35 pt-2 pl-4 text-amber-950 font-bold">Rs. 3,299.00<s className="text-gray-500 pl-2">Rs. 3,400.00</s></div>
      <button className="bg-orange-600 text-white w-[90%] mt-2 mb-2 pt-1 pb-1 rounded font-bold hover:bg-orange-500">Add To Cart</button>
      </div>

      <div className="flex flex-col bg-white mt-5 rounded-2xl justify-center items-center">
        <img className="rounded-2xl w-90 h-90" src="https://images.thdstatic.com/productImages/d69fa59f-0a39-4392-8efb-cfd368a1b91a/svn/siemens-disconnect-switches-lnf222rau-64_600.jpg"></img>
      <div className="flex flex-row mt-2 mb-2"><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-gray-500" /></div>
      <div className="font-bold text-amber-950">Safety Switch</div>
      <select className="bg-gray-50 mt-3 w-[90%] text-amber-950 rounded">
        <option>1</option>
        <option>12</option>
      </select>
      <div className="pr-44 pt-2 pl-4 text-amber-950 font-bold">Rs. 900.00<s className="text-gray-500 pl-2">Rs. 1,000.00</s></div>
      <button className="bg-orange-600 text-white w-[90%] mt-2 mb-2 pt-1 pb-1 rounded font-bold hover:bg-orange-500">Add To Cart</button>
      </div>
    
      <div className="flex flex-col bg-white mt-5 rounded-2xl justify-center items-center">
        <img className="rounded-2xl h-90 w-90 object-cover" src="https://images.thdstatic.com/productImages/38aa8345-7f6e-4c34-a867-7cad06d6180d/svn/cerrowire-thhn-wires-112-1655j-64_600.jpg"></img>
      <div className="flex flex-row mt-2 mb-2"><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-gray-500" /></div>
      <div className="font-bold text-amber-950">Copper Wire</div>
      <select className="bg-gray-50 mt-3 w-[90%] text-amber-950 rounded">
        <option>1</option>
        <option>12</option>
      </select>
      <div className="pr-40 pt-2 pl-4 text-amber-950 font-bold">Rs. 5,099.00<s className="text-gray-500 pl-2">Rs. 5,200.00</s></div>
      <button className="bg-orange-600 text-white w-[90%] mt-2 mb-2 pt-1 pb-1 rounded font-bold hover:bg-orange-500">Add To Cart</button>
      </div>

      <div className="flex flex-col bg-white mt-5 rounded-2xl justify-center items-center">
        <img className="rounded-2xl h-90 w-90 object-cover" src="https://images.thdstatic.com/productImages/bffc4f1b-81af-4e7a-832a-dab3b13c0c2f/svn/white-leviton-outlets-r02-t5832-0bw-64_600.jpg"></img>
      <div className="flex flex-row mt-2 mb-2"><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-gray-500" /></div>
      <div className="font-bold text-amber-950">Electrical Outlet</div>
      <select className="bg-gray-50 mt-3 w-[90%] text-amber-950 rounded">
        <option>1</option>
        <option>12</option>
      </select>
      <div className="pr-60 pt-2 l-4 text-amber-950 font-bold">Rs. 1,249.00</div>
      <button className="bg-orange-600 text-white w-[90%] mt-2 mb-2 pt-1 pb-1 rounded font-bold hover:bg-orange-500">Add To Cart</button>
      </div>
      
    </div>
    </>
  )
} 
export const Viewall = () => {
  return(
    <>
    <div className="justify-center flex bg-amber-50 pt-6 ">
        <button className="bg-orange-600 text-white font-bold w-60 h-10 mb-6 rounded hover:bg-orange-500">VIEW ALL</button>
      </div>
    </>
  )
}
export const Category = () => {
  return(
    <>
    <h1 className="font-extrabold bg-orange-400 text-white text-6xl justify-center pl-170 pt-10 border-dashed border-black">Our Top Brands</h1>
    <div className="flex flex-row bg-orange-400 justify-center pt-7 gap-3 pb-15">
      <div className="flex flex-col bg-white rounded-2xl justify-center items-center w-80 h-100 overflow-hidden">
        <img className="rounded-2xl w-50 h-60 object-cover hover:scale-110 transition-all duration-300" src="https://images.ctfassets.net/7rldri896b2a/18JsVPmzFfNkrALQCF72K2/8290383813a1b338ba4d50b963833274/GE_D27_AI__1_.Jpg"></img>
    
        <label className="font-extrabold text-2xl pt-10 text-black">General Electric</label>
      </div>

      <div className="flex flex-col bg-white rounded-2xl justify-center items-center w-80 h-100 overflow-hidden">
        <img className="rounded-2xl w-50 h-60 object-cover hover:scale-110 transition-all duration-300" src="https://images.ctfassets.net/7rldri896b2a/4i0v8CxGWwfv56TT0kUvGx/81ec543fc4a46726d1c46dff7e8d08f5/1-4_Siemens.jpg"></img>
        <label className="font-extrabold text-black pt-10 text-2xl">Siemens</label>
        
      </div>

      <div className="flex flex-col bg-white rounded-2xl justify-center items-center w-80 h-100 overflow-hidden">
        <img className="rounded-2xl w-50 h-60 object-cover hover:scale-110 transition-all duration-300" src="https://dam.thdstatic.com/content/production/v0IS3Here64q8-p5EGuJOw/vvilrVSUPEiqPSYxbOFZZg/Original%20file/2023_P1_Ring.jpg?im=Resize=(703,703)"></img>
        <label className="font-extrabold text-black pt-10 text-2xl">Ring</label>
        
      </div>

      <div className="flex flex-col bg-white rounded-2xl justify-center items-center w-80 h-100 overflow-hidden">
        <img className="rounded-2xl w-50 h-60 object-cover hover:scale-110 transition-all duration-300" src="https://images.ctfassets.net/7rldri896b2a/1UkEk8P5l3k5RTFr4TKMER/f3fa9b83edeec14a1b3cee3a6608c312/4-3_Milwaukee.jpg"></img>
        <label className="font-extrabold text-black pt-10 text-2xl">Milwaukee Tool</label>
        
      </div>
    </div>
    </>
  )
}
export const Menucard = () => {
  return(
    <>
    <div className="flex bg-amber-50 pt-20">
    <h1 className="font-extrabold text-black text-4xl pl-20">Our Top Sellers</h1>
    <button className="text-orange-600 border-orange-600 bg-amber-50 border-1 justify-center rounded-3xl ml-260 font-bold pl-6 pr-6 hover:bg-orange-500 hover:text-amber-50">Home Use</button>
    <button className="text-gray-400 border-gray-400 bg-amber-50 border-1 justify-center rounded-3xl ml-10 font-bold pl-5 pr-5">Equipments</button>
    </div>
    <div className="flex bg-amber-50 gap-3 pl-20 pr-20 pb-10">
    <div className="flex flex-col bg-white mt-5 rounded-2xl justify-center items-center">
        <img className="rounded-2xl w-90 h-90" src="https://images.thdstatic.com/productImages/e721c6e6-e4fd-4fae-963c-adbc9ce1575e/svn/satin-nickel-ring-doorbell-cameras-b0blxz6hlt-64_600.jpg"></img>
      <div className="flex flex-row mt-2 mb-2"><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-neutral-500" /></div>
      <div className="font-bold text-amber-950">Doorbell Camera</div>
      <select className="bg-gray-50 mt-3 w-[90%] text-amber-950 rounded">
        <option>1</option>
      </select>
      <div className="pr-45 pt-2 text-amber-950 font-bold">Rs. 3,245.00</div>
      <button className="bg-orange-600 text-white w-[90%] mt-2 mb-2 pt-1 pb-1 rounded font-bold hover:bg-orange-500">Add To Cart</button>
      </div>

      <div className="flex flex-col bg-white mt-5 rounded-2xl justify-center items-center">
        <img className="rounded-2xl h-90 w-90" src="https://images.thdstatic.com/productImages/c3ad0bf0-babf-4656-b636-aceff2d792db/svn/kidde-battery-smoke-detectors-21031466-64_600.jpg"></img>
      <div className="flex flex-row mt-2 mb-2"><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-neutral-500" /></div>
      <div className="font-bold text-amber-950">Smoke Detector</div>
      <select className="bg-gray-50 mt-3 w-[90%] text-amber-950 rounded">
        <option>1</option>
      </select>
      <div className="pr-45 pt-2 text-amber-950 font-bold">Rs. 2,245.00</div>
      <button className="bg-orange-600 text-white w-[90%] mt-2 mb-2 pt-1 pb-1 rounded font-bold hover:bg-orange-500">Add To Cart</button>
      </div>

      <div className="flex flex-col bg-white mt-5 rounded-2xl justify-center items-center">
        <img className="rounded-2xl h-90 w-90" src="https://images.thdstatic.com/productImages/39f61b17-a2dc-4a9c-81eb-f3c84fa90c31/svn/mighty-max-battery-12v-batteries-ml100-12-64_600.jpg"></img>
      <div className="flex flex-row mt-2 mb-2"><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-neutral-500" /></div>
      <div className="font-bold text-amber-950">Battery</div>
      <select className="bg-gray-50 mt-3 w-[90%] text-amber-950 rounded">
        <option>1</option>
      </select>
      <div className="pr-45 pt-2 text-amber-950 font-bold">Rs. 2,245.00</div>
      <button className="bg-orange-600 text-white w-[90%] mt-2 mb-2 pt-1 pb-1 rounded font-bold hover:bg-orange-500">Add To Cart</button>
      </div>

      <div className="flex flex-col bg-white mt-5 rounded-2xl justify-center items-center">
        <img className="rounded-2xl h-90 w-90" src="https://images.thdstatic.com/productImages/fb847433-60c7-4ebb-8844-7d94365d509e/svn/ev-chargers-cph50-nema14-50-l23-64_600.jpg"></img>
      <div className="flex flex-row mt-2 mb-2"><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-neutral-500" /></div>
      <div className="font-bold text-amber-950">EV Charger</div>
      <select className="bg-gray-50 mt-3 w-[90%] text-amber-950 rounded">
        <option>1</option>
      </select>
      <div className="pr-45 pt-2 text-amber-950 font-bold">Rs. 6,225.00</div>
      <button className="bg-orange-600 text-white w-[90%] mt-2 mb-2 pt-1 pb-1 rounded font-bold hover:bg-orange-500">Add To Cart</button>
      </div>

      <div className="flex flex-col bg-white mt-5 rounded-2xl justify-center items-center">
        <img className="rounded-2xl h-90 w-90" src="https://images.thdstatic.com/productImages/296e24c9-c0e9-4c8a-a5a2-ecc293933379/svn/black-ring-floodlights-b0cg6rxmnv-64_600.jpg"></img>
      <div className="flex flex-row mt-2 mb-2"><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-amber-300" /><IoStar className="fill-neutral-500" /></div>
      <div className="font-bold text-amber-950">Security Camera</div>
      <select className="bg-gray-50 mt-3 w-[90%] text-amber-950 rounded">
        <option className="bg-gray-500 text-black">1</option>
      </select>
      <div className="pr-53 pt-2 text-amber-950 font-bold">Rs. 3,245.00</div>
      <button className="bg-gray-300 text-white w-[90%] mt-2 mb-2 pt-1 pb-1 rounded font-bold">Sold Out</button>
      </div>
    </div>
    </>
  )
}


export const Choose = () => {
  return(
    <>
    <h1 className="font-extrabold bg-amber-50 text-6xl text-orange-500 flex justify-center">Resources</h1>
    <div className="bg-amber-50 justify-center pb-10 flex gap-10 pl-20 pr-20">
      
      <div className="flex flex-col h-140 w-100 rounded-2xl bg-orange-400 mt-10 pt-5 pb-5 pl-5 pr-5 hover:scale-110">
        <img className="h-100 w-100 object-cover" src="https://dam.thdstatic.com/content/production/JZNUUas2foHr2IB8FSXUpQ/XsjfYG1e3Abn6TaZE_GDgw/Original%20file/2023_P2_Wireless_Security_Cameras.jpg?im=Resize=(703,395.44)"></img>
        <h1 className="font-extrabold text-2xl text-black pt-3">Security Camera Installation</h1>
        <p className="text-white font-extrabold">Let us help you learn the basics of how to install a security camera and plan your home security camera setup.</p>
      </div>

      <div className="flex flex-col h-140 w-100 rounded-2xl bg-orange-400 mt-10 pt-5 pb-5 pl-5 pr-5 hover:scale-110">
        <img className="h-100 w-100 object-cover" src="https://dam.thdstatic.com/content/production/FfpQUtluC7r1wTeIKL0P6g/ZFV6aoDqQQvre7NMuJT9gw/Original%20file/2023_RP3_Install_Dimmer_Switch.jpg?im=Resize=(703,395.44)"></img>
        <h1 className="font-extrabold text-2xl text-black pt-3">How to Install a Dimmer Switch</h1>
        <p className="text-white font-extrabold">Get a wide range of light with a dimmer switch. We can show you how to install one with confidence.</p>
      </div>

      <div className="flex flex-col h-140 w-100 rounded-2xl bg-orange-400 mt-10 pt-5 pb-5 pl-5 pr-5 hover:scale-110">
        <img className="h-100 w-100 object-cover" src="https://dam.thdstatic.com/content/production/dhhQKn2eAhS-ahyqPPVCmw/HkHliQ7a42tKuWlZXAXFZg/Original%20file/2023_RP3_Types_Smoke_Detectors.jpg?im=Resize=(703,395.44)"></img>
        <h1 className="font-extrabold text-2xl text-black pt-3">Types of Smoke Detectors</h1>
        <p className="text-white font-extrabold">An essential safety tool for your home, smoke detectors sound an alarm when they sense the presence of smoke in the air.</p>
      </div>

    </div>
    </>
  )
}
export const Reviews = () => {
  return(
    <>
    <div className="bg-orange-500 flex justify-center pb-20">
      <div className="flex flex-col justify-center">
      <h1 className="font-extrabold text-4xl text-white pt-20 pb-15 pl-55">Listen From Our Customers</h1>
      <div className="flex pr-15 justify-center pb-5">
      <IoStar className="fill-white text-2xl"/>
      <IoStar className="fill-white text-2xl"/>
      <IoStar className="fill-white text-2xl"/>
      <IoStar className="fill-white text-2xl"/>
      </div>
      <div className="flex flex-col justify-center">
      <p className="font-extrabold text-2xl text-white pb-5">The equipments sold are of the highest quality, and the service is truly impeccable.</p>
      <h1 className="text-white font-bold pl-92">Venkateshwara Rao</h1>
      </div>
      </div>
    </div>
    </>
  )
}

export const Faq = () => {
  return(
    <>
    <div className="flex border-2 border-black border-r-0 border-l-0 border-dashed bg-amber-50">
      <div className="w-250 h-150 flex flex-col ml-100">
      <h1 className="font-extrabold text-4xl text-orange-500 pt-10 pb-10">FAQs</h1>
      <div className="w-full h-35 bg-orange-400">
        <p className="font-extrabold text-2xl text-white pl-5 pt-5">How much time does it take for shipping?</p>
        <div className="w-full h-20 bg-amber-50 mt-7 border-2 border-orange-400">
          <p className="font-bold  text-black pl-5 pt-5">It takes around 4-6 days for your order to get delivered</p></div>
      </div>
      <div className="w-full h-20 bg-orange-400 mt-15 mb-10 font-extrabold text-2xl text-white pl-6 pt-5">Do you accept returns and refunds?</div>
      <div className="w-full h-20 bg-orange-400 mb-10 font-extrabold text-2xl text-white pl-6 pt-5">What payment gateways do you accept?</div>
      </div>
    </div>
    </>
  )
}
export const Icons = () => {
  return(
    <>
    <div className="bg-amber-50 flex justify-center pb-10 gap-8">
      <div className="bg-orange-500 w-80 h-40 mt-10 flex flex-col justify-center items-center rounded-2xl hover:scale-110 transition-all">
      <FaShippingFast className="text-4xl fill-amber-50 "/>
      <label className="font-bold text-white text-2xl pt-3 ">Fast Shipping</label>
      </div>

      <div className="bg-orange-500 w-80 h-40 mt-10 flex flex-col justify-center items-center rounded-2xl hover:scale-110 transition-all">
      <IoChatbubbleEllipses className="text-4xl fill-amber-50"/>
      <label className="font-bold text-white text-2xl pt-3">Customer Support</label>
      </div>

      <div className="bg-orange-500 w-80 h-40 mt-10 flex flex-col justify-center items-center rounded-2xl hover:scale-110 transition-all">
      <IoShieldCheckmark className="text-4xl fill-amber-50"/>
      <label className="font-bold text-white text-2xl pt-3">Secure Shopping</label>
      </div>

      <div className="bg-orange-500 w-80 h-40 mt-10 flex flex-col justify-center items-center rounded-2xl hover:scale-110 transition-all">
      <PiSmileyFill className="text-4xl fill-amber-50 "/>
      <label className="font-bold text-white text-2xl pt-3">60,000+ Customers</label>
      </div>
    </div>
    </>
  )
}
export const Footer = () => {
  return(
    <>
    <div className="bg-orange-400 flex flex-col">
      <div className="flex flex-col items-center ml-40 justify-center w-[80%] h-50 border-b-2 border-b-amber-50">
        <img className="w-30 h-30" src="https://corporate.homedepot.com/sites/default/files/image_gallery/THD_logo.jpg"></img>
      </div>
      <div className=" bg-orange-400 flex border-b-2 border-b-amber-50 justify-center gap-130 pb-10">
        <div className="flex flex-col pt-10">
          <ul className="text-white font-bold group-"><label>Quick links</label>
            <li className="pt-5 group-hover:max-w-full transition-all">Top Deals</li>
            <li className="pt-2">Deals of the Day</li>
            <li className="pt-2">Credit Cards</li>
            <li className="pt-2">Services</li>
            <li className="pt-2">Order Status</li>
            <li className="pt-2">Saved Items</li>
          </ul>
        </div>
        <div className="flex flex-col pt-10">
          <ul className="text-white font-bold"><label>Customer Care</label>
            <li className="pt-5">FAQ</li>
            <li className="pt-2">Shipping Policy</li>
            <li className="pt-2">Refund Policy</li>
            <li className="pt-2">Cancellation Policy</li>
            <li className="pt-2">Privacy Policy</li>
            <li className="pt-2">Terms of Service</li>
            <li className="pt-2">Contact Information</li>
            <li className="pt-2">Warranty Information</li>
            <li className="pt-2">Safety Certificate</li>
          </ul>
        </div>
      </div>
      <div className="flex pt-10">
        <footer className="text-white font-bold pl-10">Copyright 2025 The Home Depot</footer>
        <select className="bg-gray-200 ml-160">
          <option>English</option>
        </select>
      </div>
    </div>
    </>
  )
}