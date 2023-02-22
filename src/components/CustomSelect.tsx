import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onChange: (x: any) => void;
}
export const CustomSelect = ({ children, onChange }: Props) => {
  return (
    <select
      onChange={onChange}
      id="countries"
      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {children}
    </select>
  );
};
