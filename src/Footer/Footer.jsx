import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-900 py-20 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          <div className=" col-span-2 ">
            <h2 className="text-white text-3xl font-bold mb-10">ProJobs</h2>
            <p className="text-gray-200 w-3/5">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <button className="my-6">
              <img src="../../public/icons/social.png" alt="" />
            </button>
          </div>
          <div className=" col-span-4 grid grid-cols-1 gap-5 md:grid-cols-4">
            <div>
              <h2 className="text-xl text-white mb-10 font-bold">Company</h2>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                About Us
              </Link>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Works
              </Link>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Latest News
              </Link>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Careers
              </Link>
            </div>
            <div>
              <h2 className="text-xl text-white mb-10 font-bold">Products</h2>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Prototype
              </Link>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Plans & Pricing
              </Link>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Customer's
              </Link>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Integrations
              </Link>
            </div>
            <div>
              <h2 className="text-xl text-white mb-10 font-bold">Support</h2>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Help Desk
              </Link>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Sales
              </Link>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Become a Partner
              </Link>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                Developers
              </Link>
            </div>
            <div>
              <h2 className="text-xl text-white mb-10 font-bold">Contact</h2>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                524 Broadway , NYC
              </Link>
              <Link className="block mb-3 text-sm text-gray-300" to={"#"}>
                +1 777 - 978 - 5570
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-10 border-gray-600" />
        <div className=" flex flex-col justify-between items-center md:flex-row ">
          <p className="text-xs text-gray-500">
            @2023 ProJobs. All Rights Reserved
          </p>
          <p className="text-xs text-gray-500">Powered by AmitIT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
