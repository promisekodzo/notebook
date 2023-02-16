import React, { useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

function CardDetails({ note }) {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <div>
      {showModal ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            index={note.id}
          >
            <div className="relative lg:w-5/12 md:5/12 w-80 my-6 mx-auto  ">
              {/*content*/}
              <div className=" relative border-0 rounded-lg shadow-lg relative flex flex-col justify-center    bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" flex items-start justify-between p-5 bg-sky-800 ">
                  <h3 className="text-3xl font-semibold text-white">
                    {note.title.length >= 10
                      ? note.title.substr(0, 25) + "..."
                      : note.title}
                  </h3>
                  <button
                    className="p-1 ml-auto  border-0 text-emerald-600  "
                    onClick={() => setShowModal(false)}
                  >
                    <i className="bx bxs-x-circle text-2xl text-white bx-tada-hover"></i>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto h-72 text-sky-800 overflow-x-hidden overflow-y-auto  scrollbar scrollbar-thumb-sky-900 scrollbar-track-white">
                  {note.content}
                </div>
                {/*footer*/}
              </div>
            </div>
          </motion.div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <Card note={note} modal={handleModal} />
    </div>
  );
}

export default CardDetails;
