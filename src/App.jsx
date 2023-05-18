import { useState } from "react";
import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Modal from "./pages/Modal";

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  return (
    <div className="min-h-screen min-w-screen bg-[#0C151D] text-center text-white font-['Poppins'] ">
      <Header isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
      {
        isShowModal ? <Modal/> : <Main isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
      }
      
      <h4 className="py-7 px-7 text-xl text-[#A3ABB2] font-semibold text-centerdr">© Carlos García. 2023 All rigths reserved</h4>
    </div>
  );
}

export default App;
