import React, { useState } from 'react';
import AfterLoginNav from '../components/AfterLoginNav';
import { postsData } from '../data/postData';
import FeedShowCommets from '../components/FeedShowCommets';

const Feed = () => {
  // =========== show comment function ==============
  const [isCommentClicked, setIsCommentClicked] = useState({});
  const commentsToggleFunction = postId => {
    setIsCommentClicked(prev => {
      return { ...prev, [postId]: !prev[postId] };
    });
  };

  // =========== Image layout render function ==============
  const renderImagePreview = images => {
    const count = images.length;
    if (count === 0) return null;

    return (
      <div className="w-full h-60 sm:h-90 lg:h-100 mt-5 mb-5 border rounded-lg border-gray-300 relative overflow-hidden">
        {/* ----------- 1 image ---------- */}
        {count === 1 && (
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={images[0]}
              alt="image 1"
            />
          </div>
        )}
        {/* ----------- 2 images ---------- */}
        {count === 2 && (
          <div className="w-full h-full grid grid-cols-2 gap-2 bg-white">
            <img
              className="w-full h-full object-cover"
              src={images[0]}
              alt="image 1"
            />
            <img
              className="w-full h-full object-cover"
              src={images[1]}
              alt="image 2"
            />
          </div>
        )}
        {/* ----------- 3 images ---------- */}
        {count === 3 && (
          <div className="w-full h-full grid grid-cols-2 gap-2 grid-rows-2 bg-white">
            <img
              className="w-full h-full object-cover row-span-2"
              src={images[0]}
              alt="image 1"
            />
            <img
              className="w-full h-full object-cover"
              src={images[1]}
              alt="image 2"
            />
            <img
              className="w-full h-full object-cover"
              src={images[2]}
              alt="image 3"
            />
          </div>
        )}
        {/* ----------- 4 or 4+ images ---------- */}
        {count >= 4 && (
          <div className="w-full h-full grid grid-cols-2 gap-2 grid-rows-2 bg-white">
            <img
              className="w-full h-full object-cover"
              src={images[0]}
              alt="image 1"
            />
            <img
              className="w-full h-full object-cover"
              src={images[1]}
              alt="image 2"
            />
            <img
              className="w-full h-full object-cover"
              src={images[2]}
              alt="image 3"
            />

            <div className="relative w-full h-full group">
              <img
                className="w-full h-full object-cover"
                src={images[3]}
                alt="image 4"
              />
              {count > 4 && (
                <div className="absolute inset-0 flex bg-black/40 justify-center items-center cursor-pointer">
                  <span className="font-semibold text-2xl text-white">
                    +{count - 4}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-300 m-auto pt-23 sm:pt-28 ">
      <AfterLoginNav />
      {/* ============ post section ============== */}
      <div className="grid gap-5 bg-gray-50 w-full max-w-150 m-auto">
        {postsData.map(singlePost => (
          <div key={singlePost.id} className=" py-4 px-2">
            {/* -------- user info ------  */}
            <div className="flex gap-3 items-center mb-3">
              <img
                className="w-11 h-11 object-cover rounded-full"
                src={singlePost.user.profileImage}
                alt="user profile image"
              />
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-sm text-gray-700">
                  {singlePost.user.name}
                </h3>
                <p className="text-xs text-gray-400">
                  {singlePost.user.userName}
                </p>
              </div>
            </div>

            {/* ------------- post data ---------- */}
            <div>
              <h3 className="font-semibold text-sm text-gray-700">
                {singlePost.post.headline}
              </h3>
              <p className="text-sm text-gray-500">{singlePost.post.content}</p>
            </div>

            {/* -------- post images ---------  */}
            {renderImagePreview(singlePost.post.images)}

            {/* ----------- love and comment --------- */}
            <div className="flex gap-5">
              {/* ----- love counter -----  */}
              <div className="flex gap-0 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-red-500/50 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <p className="text-red-500/50 font-bold text-sm mb-1">
                  {singlePost.post.love}
                </p>
              </div>
              {/* ------- comment counter -------  */}
              <div
                onClick={() => commentsToggleFunction(singlePost.id)}
                className="flex gap-1 items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <p className="font-bold text-sm mb-1 text-gray-500">
                  {singlePost.post.comments.length}
                </p>
              </div>
            </div>

            {/* -------------- All comments ----------- */}
            <FeedShowCommets
              comments={singlePost.post.comments}
              isOpen={!!isCommentClicked[singlePost.id]}
            />

            {/* --------------- comment box --------------  */}
            <form className="mt-2">
              <p className="text-sm text-gray-500">Leave a comment </p>
              <div className="w-full h-10 border border-gray-400 px-3 rounded-2xl mt-2 flex items-center justify-between gap-1">
                <input
                  className="block  text-sm text-gray-500 w-full outline-0"
                  type="text"
                  placeholder="Comment here...."
                />
                <button className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
