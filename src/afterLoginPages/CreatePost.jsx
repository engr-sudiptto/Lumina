import React, { useEffect, useRef, useState } from 'react'
import AfterLoginNav from '../components/AfterLoginNav'

const CreatePost = () => {
  const fileInputRef = useRef(null)
  const [headLine, setHadeLine] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);


  const handleFileProcessing = (files) => {
    const selectedFiles = Array.from(files);
    const newImages = selectedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages(prev => [...prev, ...newImages])
  }

  const onFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileProcessing(e.target.files)
    }
  }

  // ============= full screen drag and drop functionality ============
  useEffect(() => {
    const handleDragOver = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      if (e.clientX === 0 && e.clientY === 0) {
        setIsDragging(false);
      }
    }

    const handleDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileProcessing(e.dataTransfer.files)
      }
    }

    window.addEventListener('dragover', handleDragOver)
    window.addEventListener('dragleave', handleDragLeave)
    window.addEventListener('drop', handleDrop)

    return ()=>{
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    }

  }, [])


  // ================ handle form submit ==================
  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert('Post create successfully!') // backend code here
  }

  // =========== Image layout render function ==============
  const renderImagePreview = () => {
    const count = images.length;
    if (count === 0) return null;

    return (
      <div className="w-full h-60 sm:h-90 lg:h-100 mt-5 mb-5 border rounded-lg border-gray-300 relative overflow-hidden">
        <button
          onClick={()=>setImages([])}
          title="Clear all images"
          className="w-5 h-5 flex items-center justify-center bg-black/50 text-white absolute top-2 right-2 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>

        {/* ----------- 1 image ---------- */}
        {count === 1 && (
          <div className='w-full h-full'>
            <img className='w-full h-full object-cover' src={images[0].preview} alt="image 1" />
          </div>
        )}
        {/* ----------- 2 images ---------- */}
        {count === 2 && (
          <div className='w-full h-full grid grid-cols-2 gap-2 bg-white'>
            <img className='w-full h-full object-cover' src={images[0].preview} alt="image 1" />
            <img className='w-full h-full object-cover' src={images[1].preview} alt="image 2" />
          </div>
        )}
        {/* ----------- 3 images ---------- */}
        {count === 3 && (
          <div className='w-full h-full grid grid-cols-2 gap-2 grid-rows-2 bg-white'>
            <img className='w-full h-full object-cover row-span-2' src={images[0].preview} alt="image 1" />
            <img className='w-full h-full object-cover' src={images[1].preview} alt="image 2" />
            <img className='w-full h-full object-cover' src={images[2].preview} alt="image 3" />
          </div>
        )}
        {/* ----------- 4 or 4+ images ---------- */}
        {count >= 4 && (
          <div className='w-full h-full grid grid-cols-2 gap-2 grid-rows-2 bg-white'>
            <img className='w-full h-full object-cover' src={images[0].preview} alt="image 1" />
            <img className='w-full h-full object-cover' src={images[1].preview} alt="image 2" />
            <img className='w-full h-full object-cover' src={images[2].preview} alt="image 3" />
            
            <div className='relative w-full h-full group'>
              <img className='w-full h-full object-cover' src={images[3].preview} alt="image 4" />
              {count > 4 && (
                <div className='absolute inset-0 flex bg-black/40 justify-center items-center cursor-pointer'>
                  <span className='font-semibold text-2xl text-white'>+{count - 4}</span>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    );
  }

  return (
    <div className="w-full max-w-300 m-auto pt-23 sm:pt-28 ">
      <AfterLoginNav />

      <div className="w-full h-auto max-w-200 m-auto p-5 pb-10 bg-slate-100 sm:p-10 sm:pb-15 lg:mt-10 lg:rounded-xl">
        <h2 className="text-2xl text-center my-5 font-semibold text-gray-500">
          Create a new post
        </h2>
        <form onSubmit={formSubmitHandler}>
          {/* ------------- title input ------------  */}
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-400"
          >
            Post head line
          </label>
          <input
            type="text"
            value={headLine}
            onChange={e => setHadeLine(e.target.value)}
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
              value={content}
              onChange={e => setContent(e.target.value)}
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
              className={`w-full h-40 border border-gray-300 rounded-lg flex flex-col items-center justify-center gap-3 mt-3 sm:h-50 cursor-pointer ${isDragging ? 'border-indigo-300 bg-indigo-300/20' : 'border-gray-300 bg-transparent'}`}
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
                onChange={onFileSelect}
                className=" hidden"
              />
            </div>
          </div>

          {/* ------------- Dynamic image grid preview -------------  */}

          {renderImagePreview()}

          {/* -------------- post button ------------- */}
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