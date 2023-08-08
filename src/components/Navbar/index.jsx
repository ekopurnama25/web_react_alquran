import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-teal-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex h-screen w-full object-center justify-center items-center">
              <h1 className="text-3xl text-white b-200">
                Baca Surat Al Qur'an
              </h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
