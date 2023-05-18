import React from "react";

const Main = () => {
  return (
    <section className="mt-8 px-7 grid gap-10 justify-center sm:grid sm:grid-cols-2 sm:max-w-[800px] mx-auto">
      {/* cards de portafolio */}
      <a href="https://flagsoftheworld92.netlify.app">
        <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 shadow:sm hover:shadow-white duration-200 ">
          <h4 className="py-4 font-semibold"> Work whit controlled input and flag´s API</h4>
          <div className="px-5 h-[250px] min-w-screen mb-3">
            <img
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/flgas.jpeg"
              alt=""
            />
          </div>
        </article>
      </a>

      <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 ">
        <a href="https://rickandmorty92aa.netlify.app/">
          <h4 className="py-4 font-semibold"> work whit HTTP ecommers-cart</h4>
          <div className="px-5 h-[250px] min-w-screen mb-3">
            <img
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/commerce.jpeg"
              alt=""
            />
          </div>
        </a>
      </article>
      <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 ">
        <h4 className="py-4 font-semibold">
          {" "}
          Work whit API and controlled inputs
        </h4>
        <div className="px-5 h-[250px] min-w-screen mb-3">
          <a href="https://andresecommerce92.netlify.app/">
            <img
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/rick.jpeg"
              alt=""
            />
          </a>
        </div>
      </article>
      <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 ">
      <a href="https://wheather9202.netlify.app/">
        <h4 className="py-4 font-semibold"> Work whit weather´s API whit actualitation by location</h4>
        <div className="px-5 h-[250px] min-w-screen mb-3">
         
            <img
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/weather.jpeg"
              alt=""
            />
         
        </div>
        </a>
      </article>

     
    </section>
  );
};

export default Main;
