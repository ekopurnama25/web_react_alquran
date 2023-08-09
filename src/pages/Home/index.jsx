import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { getSurah } from "../../utils/ApiQuran";
import { Link, useNavigate } from "react-router-dom";

const HomePages = () => {
  let navigate = useNavigate();
  const [surah, setSurah] = useState();

  useEffect(() => {
    const getSurahAll = async () => {
      const req = await getSurah();
      setSurah(req);
    };
    getSurahAll();
  }, []);

  const getSuratALQuran = (id) => {
    try {
      console.log("OK");
      return navigate(`/surat/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout title="Home">
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
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div>
            <div className="grid grid-cols-3 gap-3">
              {surah &&
                surah.map((Surah, index) => {
                  return (
                    <div key={Surah?.nomor}>
                      <a
                        onClick={() => {
                          getSuratALQuran(Surah?.nomor);
                        }}
                      >
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
                          <div className="grid grid-cols-2 gap-3 m-2">
                            <div className="margin-right-6">
                              <p className="font-semibold text-indigo-900">
                                {index + 1 + ". "} {Surah?.nama_latin} <br />{" "}
                              </p>
                            </div>
                            <div>
                              <div style={{ marginLeft: "60px" }}>
                                <p className="font-semibold text-indigo-900">
                                  {Surah?.nama}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full object-center justify-center items-center">
                            <p className="text-teal-700">
                              {Surah?.tempat_turun} :{" "}
                              {Surah?.jumlah_ayat + " " + "Ayat"}{" "}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePages;
