import React from "react";
import Navbar from "../../components/Navbar.jsx/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";

const Home = () => {
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

      <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10" onClick={()=>{}}>
        <MdAdd className="text-[32px] text-white"/>
      </button>
    </>
  );
};

export default Home;
