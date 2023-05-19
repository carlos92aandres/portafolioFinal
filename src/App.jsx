import { useState } from "react";
import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Modal from "./pages/Modal";
import Contactme from "./pages/Contactme";

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [contact, setContact] = useState(false)
  return (
    <div className="min-h-screen min-w-screen bg-[#0C151D] text-center text-white font-['Poppins'] ">
      <Header contact={contact} setContact={setContact} isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
      {
        isShowModal ? <Modal/> : <Main isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
      }
      
      <h4 className="py-7 px-7 text-xl text-[#A3ABB2] font-semibold text-centerdr">© Carlos García. 2023 All rigths reserved</h4>
      <Contactme contact={contact} setContact={setContact} />
    </div>
  );
}

export default App;
