

const Contactme = ({contact,setContact }) => {
    
    const handleClose = () => {
        setContact(!contact)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <section className={`${contact ? "opacity-100 visible duration-200" :  "opacity-0 invisible duration-200"} `}>
        <article className=' '>
            <form onSubmit={handleSubmit} className='h-[500px] w-[300px] sm:w-[500px]  bg-[#1E1E1E] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-full grid justify-center items-center fixed rounded-md' action="">
            <i onClick={handleClose} className='bx bx-x cursor-pointer absolute right-4 top-2 text-xl text-white'></i>
                {/* Form */}
                <div className='grid outline-none mt-8'>
                    <label className="font-semibold" htmlFor="name">Name</label>
                    <input id='name' className='outline-none bg-[#1E1E1E] border-[1px] border-black border-r-0 border-l-0 border-t-0 ' type="text" />
                </div>
                <div className='grid'>
                    <label className="font-semibold" htmlFor="email">Email</label>
                    <input id='email' className='outline-none bg-[#1E1E1E] border-[1px] border-black border-r-0 border-l-0 border-t-0 ' type="text" />
                </div>
                <button onClick={handleClose} className="bg-[#323247] p-2 rounded-md font-semibold shadow-sm hover:shadow-slate-700 hover:-tracking-tighter duration-200">Enviar</button>
                <h4 className="font-bold text-xl">Carlos Garcia</h4>
                <h4 className="font-semibold"><span className="font-normal">Email:</span> carlos92aandres@gmail.com</h4>
                <h4 className="font-semibold"><span className="font-normal">Telefono:</span> +57 3007800231</h4>


                {/* Logos */}

                <ul className='flex justify-center text-2xl gap-5'>
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
                
                 
            </form>

        </article>

    </section>
  )
}

export default Contactme