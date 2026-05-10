import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import luminaLogo from '../assets/lumina.png';

const ResetPassword = () => {
  const [userInfo, setUserInfo] = useState('');
  const [sendOtpFormVisible, setSendOtpFormVisible] = useState(true);
  const [inputOtp, setInputOtp] = useState(new Array(6).fill(''));
  const [inputOtpFormVisible, setInputOtpFormVisible] = useState(true);

  // ============= send otp button click function ===============
  const sendOtpFormHandeler = e => {
    e.preventDefault();
    if (userInfo !== '') {
      setSendOtpFormVisible(false);
    }
  };

  // =================== verify OTP form sunction =============
  const handelChange = (e, index) => {
    const value = e.target.value;
    if (value === ' ' || isNaN(value)) return; // only number allow

    const lastChar = value.slice(-1); // Accepting last value to avoid overwrite

    const newOtp = [...inputOtp];
    newOtp[index] = lastChar;
    setInputOtp(newOtp);

    if (lastChar && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  // ------------ keyDown function ----------- 
  const handelKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (!inputOtp[index] && index > 0) {
        e.target.previousSibling.focus();
      }
    }
  } 

  // ------------- copy paste function ----------- 
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, 6);

    // only number can paste
    if (!isNaN(pasteData)) {
      const newOtp = pasteData.split('');

      // if number is less than 6, another box will be empty
      const paddedOtp = [...newOtp, ...new Array(6 - newOtp.length).fill('')].slice(0, 6);

      setInputOtp(paddedOtp);

      // move focus to the last box
      const lastBoxIndex = Math.min(newOtp.length, 5);
      const inputs = e.target.parentElement.querySelectorAll('input')
      inputs[lastBoxIndex].focus()
    }
  };


  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <Link>
        <img className="w-50 mb-5" src={luminaLogo} />
      </Link>

      {/* =========== send OTP form is here ===========  */}
      {sendOtpFormVisible && (
        <form
          onSubmit={sendOtpFormHandeler}
          className=" w-[95%] max-w-170 p-4 shadow-2xl rounded-xl sm:px-15 sm:py-10"
        >
          <h1 className="text-3xl font-semibold text-center mt-3 text-gray-700">
            Reset Password
          </h1>
          <p className="text-center text-sm mt-3 text-gray-400">
            An OTP will be sent to your authenticated email addesss for security
            reasons.
          </p>
          <label className="mt-10 block text-sm text-gray-700 font-semibold ">
            Username or Email
          </label>
          <input
            onChange={() => setUserInfo()}
            className="block w-full h-12 mb-3 mt-2 border px-4 rounded-lg border-gray-300 outline-0 text-gray-600 tracking-wider text-sm sm:mb-7 sm:mt-5"
            type="text"
            placeholder="e.g.name@example.com"
            required
          />
          <button
            className="block cursor-pointer w-full h-12 bg-blue-400/50 rounded-lg text-sm font-bold text-gray-700 hover:-translate-y-1 duration-300 hover:shadow-2xl"
            type="submit"
          >
            Send OTP
          </button>
          <Link
            to="/login"
            className="text-xs font-bold block text-right mt-10 mb-2 hover:-translate-x-1 text-gray-500 hover:text-blue-400/80 duration-150"
          >
            &larr; Back to Login
          </Link>
        </form>
      )}

      {/* ================ input OTP form is here ===========  */}
      {!sendOtpFormVisible && inputOtpFormVisible && (
        <form className=" w-[95%] max-w-170 p-4 shadow-2xl rounded-xl sm:px-15 sm:py-10">
          <h1 className="text-3xl font-semibold text-center mt-3 text-gray-700">
            Verify Your Identity
          </h1>
          <p className="text-center text-sm mt-3 text-gray-400">
            A 6-digit verification code has been sent to your registered email
            address. Please enter it below to continue.
          </p>
          <label className="mt-10 block text-sm text-gray-700 font-semibold ">
            6-Digit Verification Code
          </label>

          {/* ---------- 6 input box is here ---------  */}
          <div className="flex gap-3 mt-5 items-center justify-center">
            {inputOtp.map((data, index) => (
              <input
                onChange={e => handelChange(e, index)}
                onKeyDown={e => handelKeyDown(e, index)}
                onPaste={handlePaste}
                key={index}
                value={data}
                maxLength="1"
                type="text"
                className="w-10 h-10 sm:w-12 sm:h-12 xl:w-13 xl:h-13 border border-gray-300 rounded text-center content-center p-2 block font-bold text-2xl text-gray-700 outline-0 sm:mt-2 lg:mt-3 xl:mt-5 mt-1"
                required
              ></input>
            ))}
          </div>

          <button
            className="block cursor-pointer w-full h-12 bg-blue-400/50 rounded-lg text-sm font-bold text-gray-700 hover:-translate-y-1 duration-300 hover:shadow-2xl mt-10 mb-5"
            type="submit"
          >
            Verify Now
          </button>
          <p className="text-center text-sm text-gray-400 mb-5 mt-10">
            Didn't receive the code?{' '}
            <button className="text-xs hover:underline hover:text-blue-400 cursor-pointer">
              Resend OTP
            </button>
          </p>
        </form>
      )}

    </div>
  );
};

export default ResetPassword;
