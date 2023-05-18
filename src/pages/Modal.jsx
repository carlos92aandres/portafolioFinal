import React from "react";

const Modal = () => {
  return (
    <section className="mt-8 px-7 grid gap-10 justify-center sm:grid sm:grid-cols-2 sm:max-w-[800px] mx-auto">
      <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 ">
        <h4 className="py-4 font-semibold">React</h4>
        <div className="px-5 h-[200px] min-w-screen mb-3">
          <img
            className="w-full h-full object-cover rounded "
            src="/react.png"
            alt=""
          />
        </div>
      </article>
      <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 ">
        <h4 className="py-4 font-semibold">Javascript</h4>
        <div className="px-5 h-[200px] min-w-screen mb-3">
          <img
            className="w-full h-full object-cover rounded "
            src="/js.png"
            alt=""
          />
        </div>
      </article>
      <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 ">
        <h4 className="py-4 font-semibold">Next.js</h4>
        <div className="px-5 h-[200px] min-w-screen mb-3">
          <img
            className="w-full h-full object-cover rounded "
            src="/next.png"
            alt=""
          />
        </div>
      </article>
      <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 ">
        <h4 className="py-4 font-semibold">Redux.js</h4>
        <div className="px-5 h-[200px] min-w-screen mb-3">
          <img
            className="w-full h-full object-cover rounded "
            src="/redux.png"
            alt=""
          />
        </div>
      </article>
      <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 ">
        <h4 className="py-4 font-semibold">Node.js</h4>
        <div className="px-5 h-[200px] min-w-screen mb-3">
          <img
            className="w-full h-full object-cover rounded "
            src="/node.png"
            alt=""
          />
        </div>
      </article>
      <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 ">
        <h4 className="py-4 font-semibold">Tailwind</h4>
        <div className="px-5 h-[200px] min-w-screen mb-3">
          <img
            className="w-full h-full object-fill rounded "
            src="/tail.png"
            alt=""
          />
        </div>
      </article>
      <article className="w-[300px] rounded-md py-2 border-[1px] border-slate-700 ">
        <h4 className="py-4 font-semibold">Axios</h4>
        <div className="px-5 h-[200px] min-w-screen mb-3">
          <img
            className="w-full h-full object-contain rounded "
            src="/axios.png"
            alt=""
          />
        </div>
      </article>
    </section>
  );
};

export default Modal;
