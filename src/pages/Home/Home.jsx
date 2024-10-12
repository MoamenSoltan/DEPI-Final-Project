import React, { useState } from "react";
import Navbar from "../../components/Navbar.jsx/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNote";
import Modal from "react-modal";
const Home = () => {

  const [openAddEditModel, setOpenAddEditModel] =useState({
    isShown:false,
    type:"add",
    data:null,
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          {/* use grid for multiple components of same type in a grid like view */}
          <NoteCard
            title={"DEPI Project on the 24th"}
            date={"24/10/2024"}
            content={
              "DEPI Project on the 24th DEPI Project on the 24th DEPI Project on the 24th "
            }
            tags={"#Project"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
       className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10" 
       onClick={()=>{
         setOpenAddEditModel({isShown:true, type:"add" , data:null});
       }}
        >
        <MdAdd className="text-[32px] text-white"/>
      </button>


      <Modal
        isOpen={openAddEditModel.isShown}
        onRequestClose={() => {}}
        style={{
          overlay:{
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow"
        >


      <AddEditNotes
      type={openAddEditModel.type}
        noteData={openAddEditModel.data}
          onclose={()=>{
            setOpenAddEditModel({isShown:false, type:"add", data:null});
          }}
      />
      </Modal>
    </>
  );
};

export default Home;
