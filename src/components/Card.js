import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../redux/noteActions";
import { deleteNote } from "../redux/noteActions";
import { motion } from "framer-motion";

function Card({ modal, note }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleModal = (e) => {
    e.preventDefault();
    let editNote = { id: note.id, title, content, lastModified: Date.now() };

   
    if ((note.title !== title || note.content !== content)&&(title !== '' && content.lemgth !== '')) {
      dispatch(updateNote(editNote));
    }

    setShowModal(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteNote(note.id));
    setShowModal(false);
  };

  return (
    <div className=" ">
      <div className=" relative bg-white xl:w-80  md:w-80 w-80  shadow-lg  md:h-52 h-fit rounded-md px-5 py-4 mb-4     hover:bg-yellow-300 transition duration-500   ">
        <h3 className="border-b border-slate-700 text-sky-800 w-20 min-w-fit  px-2 font-semibold mb-4 select-text">
          {note.title.length >= 10 ?  note.title.substr(0, 25) + "..." : note.title}
        </h3>
        <p
          className="text-sky-900 font-normal  md:h-14 h-10 mb-10 select-text cursor-pointer "
          onClick={modal}
        >
          {note.content.length >= 100 ?  note.content.substr(0, 90) + "..." : note.content +" "}

          <button
            className="text-sm text-center text-white  cursor-pointer bg-sky-900 px-1 rounded-sm"
            onClick={modal}
          >
           <p>view more</p>
          </button>
        </p>
        <div className="relative flex items-center justify-between mt-14 gap-1 cursor-pointer  text-sky-900  ">
          <div className="">
            <i
              className="bx bxs-edit  bx-tada-hover"
              onClick={() => setShowModal(true)}
            />
            <i
              className="bx bxs-trash-alt bx-tada-hover text-red-500"
              onClick={handleDelete}
            />
          </div>
          <small className="text-sky-900 text-xs select-text ">
            Last-Modified:{" "}
            {new Date(note.lastModified).toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
        </div>
        {showModal ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  transition
            ease-in-out"
            >
              <div className="relative lg:w-5/12 my-6 mx-auto w-96 ">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col  md:w-full  h-fit md:h-full sm:w-96 bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 bg-sky-800 rounded-t">
                    <h3 className="text-3xl font-semibold text-white">
                      edit note
                    </h3>
                    <button
                      className="p-1 ml-auto  border-0 text-black  "
                      onClick={() => setShowModal(false)}
                    >
                      <i className="bx bxs-x-circle text-2xl text-white bx-burst-hover "></i>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative py-6 flex-auto items-center  w-full px-4">
                    <input
                      type="text"
                      id="simple-email"
                      className=" flex-1 appearance-none wrap border-b border-sky-900  focus:outline-none focus:ring-0   py-2 px-4  text-sky-900  bg-transparent lg:w-full w-full h-fit mb-4"
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
                    
                    placeholder-sky-900
                    transition
                    ease-in-out
                    m-0
                    focus:text-sky-900  focus:outline-none focus:ring-0
                     scrollbar scrollbar-thumb-sky-900 scrollbar-white
                "
                      id="exampleFormControlTextarea1"
                      rows="10"
                      placeholder="Notes here..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                  </div>
                  {/*footer*/}
                  <button
                    type="submit"
                    className="flex items-center justify-end p-6  rounded-b md:h-fit h-20 "
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
    </div>
  );
}

export default Card;
