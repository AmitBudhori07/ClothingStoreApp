import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client'

function SignupModel() {
  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:justify-center">
                <img src="/Gym_logo.png" alt="gym_logo" />
              </div>
            </div>
            <div>
              <h1 className="font-dropdown font-black	text-4xl text-center text-900">YOU FIRST</h1>
              <p className="font-dropdown text-gray-lightdark font-normal	text-base px-14 py-4 text-center text-900">Sign up for our newsletter and get our product release dates, news, and exciting offers before anyone else does.</p>
              <div className="sm:w-11/12 m-0 m-auto">
                <input className="bg-white sm:w-full border p-2 border-black-lightdark" type="search" name="search" placeholder="Your Email Address" />
              </div>
            </div>
            <div className="flex bg-white-dark p-4 mt-4 justify-between">
              <p className="font-dropdown font-bold text-base mt-4 leading-6">Login with Your Social Profile</p>
              <div className="flex flex-grow justify-evenly">
                <button onClick={() => signIn()}><img src="/Facebook_logo.png" /></button>
                <button onClick={() => signIn()}><img src="/Google.png" /></button>
              </div>
            </div>
            <div className="sm:w-11/12 m-0 m-auto">
              <button type="button" className="mt-3 w-full font-semibold bg-red-dark leading-5 text-center uppercase text-white p-4 my-4	">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupModel;
