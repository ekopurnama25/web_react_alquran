import React, { useEffect } from "react";
import Navbar from "../Navbar";

const Layout = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-teal-500 shadow">
          <div className="flex w-full object-center justify-center items-center">
            <img
              width="200"
              height="200"
              src="https://quran.kemenag.go.id/assets/images/defaults/ic_quran_logo.png"
              alt="Your Company"
            />
          </div>
          <div className="flex w-full object-center justify-center items-center">
            <img
              width="400"
              height="400"
              src="https://quran.kemenag.go.id/assets/images/defaults/ic_arabic_sentence.png"
              alt="Your Company"
            />
          </div>
          <div className="sm:col-span-3 m-8">
            <div className="mt-2 m-8 my-8">
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="cari surat yang ingin anda baca? (Contoh : Al-Fatihah, An-Nas"
              />
            </div>
            <br />
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
