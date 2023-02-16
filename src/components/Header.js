import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {motion} from 'framer-motion'
import { addNotes } from "../redux/noteActions";

function Header() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleModal = (e) => {
    e.preventDefault();
    let newNote = {
      id: uuid(),
      title,
      content,
      lastModified: Date.now(),
      emptyData: "No Note Found",
    };

    if (title.length !== 0 && content.length !== 0) {
      dispatch(addNotes(newNote));
    }

    setTitle("");
    setContent("");

    setShowModal(false);
  };

  return (
    <div className=" container  mx-auto px-5 mb-10 flex flex-row flex-wrap justify-center items-center mt-10 gap-5  w-full h-full">
      <div className=" relative  mt-2 px-5 flex justify-around gap-20  w-96">
        <h2 className="mt-4 md:text-3xl text-2xl font-bold text-white">
          Add Notes
        </h2>
        <div className=" cursor-pointer" onClick={() => setShowModal(true)}>
          <i className="bx bxs-plus-square self-baseline text-3xl font-bold mt-5 text-white bx-tada-hover"></i>
        </div>
      </div>

      {showModal ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  transition
            ease-in-out"
          >
            <div className="relative lg:w-5/12  my-6 mx-auto  w-fit">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col md:w-full w-80 h-fit md:h-full  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 bg-sky-800  rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                    new note
                  </h3>
                  <button
                    className="p-1 ml-auto  border-0 text-black  "
                    onClick={() => setShowModal(false)}
                  >
                    <i className="bx bxs-x-circle text-2xl text-white bx-tada-hover"></i>
                  </button>
                </div>
                {/*body*/}
                <div className="relative py-6 px-4 flex-auto text-center">
                  <input
                    type="text"
                    id="simple-email"
                    className=" flex-1 appearance-none border-b border-sky-800  focus:outline-none  focus:ring-0   py-2 text-sky-900 placeholder-sky-900 bg-transparent lg:w-96 w-fit h-fit mb-4"
                    placeholder="title here ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                    className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal 
                    text-sky-900
                    bg-transparent bg-clip-padding
      
                    placeholder-sky-800
                    transition
                    ease-in-out
                    m-0
                    focus:text-sky-900 focus:outline-none focus:ring-0
                      scrollbar scrollbar-thumb-sky-900 scrollbar-track-white
                "
                    id="exampleFormControlTextarea1"
                    rows="6"
                    placeholder="Notes here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
                {/*footer*/}
                <button
                  type="submit"
                  className="flex items-center justify-end p-6  rounded-b md:h-fit h-20"
                  onClick={handleModal}
                >
                  <i className="bx bxs-save font-bold md:text-3xl text-2xl bx-tada-hover text-sky-900"></i>
                </button>
              </div>
            </div>
          </motion.div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default Header;
