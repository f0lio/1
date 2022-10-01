import React from "react";

import { motion } from "framer-motion";

interface TechBoxesProps {
  name: string;
  icon: any;
}

export const TechBox: React.FC<TechBoxesProps> = ({ name, icon }) => {
  const Icon = icon;
  return (
    <motion.li
      className="flex max-w-max cursor-pointer items-center gap-x-3 p-3 text-gray-300 duration-150 hover:text-primary-3"
      whileTap={{ scale: 0.9 }}
    >
      <div className="cursor-pointer ">
        {icon && <Icon className="h-7 w-7" />}
      </div>
      <p className="min-w-max cursor-pointer  text-sm">{name}</p>
    </motion.li>
  );
};
