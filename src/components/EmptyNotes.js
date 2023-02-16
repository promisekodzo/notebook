import React from "react";
import { motion } from "framer-motion";

function EmptyNotes() {
  return (
    <div className="text-center p-14 mt-5">
      <motion.h2
        className=" text-xl  text-slate-300 text-bold"
        whileHover={{ scale: 1.2 }}
      >
        SORRY!. no notes found !
      </motion.h2>
    </div>
  );
}

export default EmptyNotes;
