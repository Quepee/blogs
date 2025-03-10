import React from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";

const Blog = ({ id, titleProp, bodyProp, authorProp, deleteProp }) => {
  return (
    <>
      <div className=" border rounded p-5 bg-orange-200 mt-7">
        <h2> {titleProp}</h2>

        <p>{bodyProp}</p>

        <div className="flex justify-between">
          <h4 className="italic"> author: {authorProp}</h4>

          <div className="flex ">
            <div className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center hover:text-blue-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <Link to={`/update/${id}`}>
              <CiEdit />
              </Link>
            </div>
            <div className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center hover:text-red-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <CiTrash onClick={deleteProp}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
