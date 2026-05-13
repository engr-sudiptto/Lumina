import React, { useRef } from 'react'
import AfterLoginNav from '../components/AfterLoginNav'

const CreatePost = () => {
  const fileInputRef = useRef(null)
  return (
    <div className="w-full max-w-300 m-auto pt-23 sm:pt-28 ">
      <AfterLoginNav />

      <div className="w-full h-auto max-w-200 m-auto p-5 pb-10 bg-slate-100 sm:p-10 sm:pb-15 lg:mt-10 lg:rounded-xl">
        <h2 className="text-2xl text-center my-5 font-semibold text-gray-500">
          Create a new post
        </h2>
        <form>
          {/* ------------- title input ------------  */}
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-400"
          >
            Post head line
          </label>
          <input
            type="text"
            placeholder="What is this post about?"
            required
            className="my-3 w-full h-12 px-2 text-sm border border-gray-300 rounded-lg outline-0"
          />

          {/* --------------- Content area -------------  */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-semibold text-gray-400"
            >
              Post Content
            </label>
            <textarea
              required
              placeholder="Write your thoughts here..."
              className="my-3 w-full h-30 px-3 pt-2 text-xs border border-gray-300 rounded-lg resize-none outline-0 lg:text-sm"
            ></textarea>
          </div>

          {/* ------------- Image Upload / Drag and Drop area ------------ */}
          <div>
            <label className="block text-sm font-semibold text-gray-400">
              Upload Imges
            </label>
            {/* ---- image upload box ----  */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`w-full h-40 border border-gray-300 rounded-lg flex flex-col items-center justify-center gap-3 mt-3 sm:h-50`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <div className="text-center text-sm text-gray-400">
                <p>Click to upload or drag and drop</p>
                <p>SVG, PNG, JPG or GIF</p>
              </div>
              <input
                type="file"
                accept="image/*"
                multiple
                ref={fileInputRef}
                className=" hidden"
              />
            </div>
          </div>

          {/* ------------- Dynamic image grid preview -------------  */}
          <button
            type="submit"
            className="w-full h-12 bg-[#22709370] mt-5 rounded-lg text-sm font-semibold tracking-wide text-gray-700 cursor-pointer"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost