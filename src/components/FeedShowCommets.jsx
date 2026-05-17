import React, { useState } from 'react';

const FeedShowCommets = ({ comments , isOpen}) => {
  return (
    <div>
      {isOpen && (
        <div className="grid gap-2 mt-5">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-slate-200 w-[90%] p-2 py-3 rounded-lg"
            >
              <div className="flex gap-2 ">
                <img
                  src={comment.profileImage}
                  className="w-8 h-8 object-cover rounded-full"
                />
                <div>
                  <span className="text-sm font-semibold text-gray-500 mr-2">
                    {comment.name}
                  </span>
                  <p className="text-sm text-gray-600 inline">{comment.text}</p>
                </div>
              </div>
            </div>
          ))}
          <button className="text-sm text-gray-500 cursor-pointer mb-3 mt-2 text-left pl-2">
            More...
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedShowCommets