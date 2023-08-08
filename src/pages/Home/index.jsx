import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { getSurah } from "../../utils/ApiQuran";

const HomePages = () => {
  const [surah, setSurah] = useState();

  useEffect(() => {
    const getSurahAll = async () => {
      const req = await getSurah();
      console.log(req);
      setSurah(req);
    };
    getSurahAll();
  }, []);
  return (
    <Layout title="Home">
      <div>
        <div className="grid grid-cols-3 gap-3">
          {surah &&
            surah.map((Surah, index) => {
              return (
                <div key={Surah?.nomor}>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300">
                    <div className="grid grid-cols-3 gap-3 m-2">
                      <div>{index + 1}</div>
                      <div>
                        {Surah?.nama_latin} <br /> {Surah?.tempat_turun} :{" "}
                        {Surah?.jumlah_ayat + " " + "Ayat"}
                      </div>
                      <div>
                        <h1>{Surah?.nama}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default HomePages;
