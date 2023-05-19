import Modal from "./Modal";

const Header = ({ isShowModal, setIsShowModal, contact,setContact}) => {
  
  const changeShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  const handleOpen = () => {
    setContact(!contact)
  }

  
 
  
    
  
  

  return (
    
    <>
    
      {/* seccion de foto de perfil e iconos */}
      <section className="grid sm:grid-cols-2 max-w-[350px] mx-auto place-content-center min-h-[300px] sm:gap-2 gap-10">
        <div className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]  mx-auto  ">
          <img
            className="w-full h-full object-cover rounded-full border-[2px] border-yellow-600"
            src="/profile.jpeg"
            alt=""
          />
        </div>
        <div className="grid justify-center sm:gap-2 sm:py-2">
          <h2 className="text-2xl font-bold">Carlos García</h2>
          <h1 className="text-gray-500 font-semibold">full stack developer</h1>
          <ul className="flex gap-3 text-gray-500 justify-center text-2xl cursor-pointer">
            <li>
              <a href="https://www.instagram.com/carlos92_garcia/">
                <i className="bx bxl-instagram hover:bg-white hover:text-black rounded-full p-2 hover:-translate-y-1 duration-200"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/carlos-andres-garcia-oyola-30121b242/">
                <i className="bx bxl-linkedin-square hover:bg-white hover:text-black rounded-full p-2 hover:-translate-y-1 duration-200"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/carlos92aandres">
                <i className="bx bxl-github hover:bg-white hover:text-black rounded-full p-2 hover:-translate-y-1 duration-200 transition-colors"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* seccion de experiencia */}
      <section className="flex text-gray-500 px-2 text-sm max-w-[350px] mx-auto">
        <div>
          <h2>1</h2>
          <h2>years of work experience</h2>
        </div>
        <div>
          <h2>10+</h2>
          <h2>Complete proyects</h2>
        </div>
        <div>
          <h2>8+</h2>
          <h2>Personal side project</h2>
        </div>
      </section>
      {/* seccion de hoja de vida */}
      <section className="py-[2rem]">
        <div className="flex  justify-center gap-2">
          <button  className="text-black bg-yellow-600 py-3 rounded-md px-5 shadow-sm hover:shadow-yellow-700 hover:-tracking-tighter duration-200 font-semibold">
          <a href="/Hoja.pdf" download="cvCarlosGarcia">download cv <i className="bx bx-down-arrow-alt"></i></a>
          </button>
          <button onClick={handleOpen} className=" bg-slate-800 py-3 px-5 rounded-md shadow-sm hover:shadow-slate-700 hover:-tracking-tighter duration-200  font-semibold">
            contact me!
            <a href="/Hoja.pdf" type="pdf"></a>
          </button>
        </div>
      </section>
      {/* seccion de boton condicional */}
      <section className="sm:min-w-[400px] sm:mx-auto">
        <div className=" flex justify-between border-[5px] border-slate-800 w-[200px] mx-auto rounded-md ">
          <button
            onClick={changeShowModal}
            className={` ${
              isShowModal===false ? "bg-[#0C151D]" : "bg-slate-800"
            } duration-300  px-4 py-2 font-semibold `}
          >
            Portafolio
          </button>
          <button
            onClick={changeShowModal}
            className={`${
              
              isShowModal ? "bg-[#0C151D]" : "bg-slate-800" 
            } duration-300  px-4 py-2 font-semibold`}
          >
            Skills
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
