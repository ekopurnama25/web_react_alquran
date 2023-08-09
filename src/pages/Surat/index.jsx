import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SurahAlQuran } from "../../utils/ApiQuran";
import Layout from "../../components/Layout";

const SuratPages = () => {
  const { id } = useParams();
  const [alsurat, setAlsurat] = useState();
  const parser = new DOMParser();
  useEffect(() => {
    const SuratGetNomor = async () => {
      const req = await SurahAlQuran(id);
      console.log(req.ayat);
      setAlsurat(req.ayat);
    };
    SuratGetNomor();
  }, []);
  return (
    <Layout title="Surat">
      {alsurat &&
        alsurat.map((Value, index) => {
          return (
            <div
              className="mx-auto max-w-7xl mx-8sm:px-12 lg:px-8"
              key={Value?.id}
            >
              <div>
                <div className="max-w-full py-8 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-gray-100">
                  <div className="mx-8 me-8" style={{ textAlign: "right" }}>
                    <p className="font-semibold text-indigo-900">{Value?.ar}</p>
                  </div>
                  <br />
                  <div className="mx-8" style={{ textAlign: "left" }}>
                    <p
                      className="font-semibold text-emerald-800"
                      dangerouslySetInnerHTML={{ __html: Value?.tr }}
                    ></p>
                  </div>
                  <br />
                  <div className="mx-8" style={{ textAlign: "left" }}>
                    <p className="text-teal-700 font-sans md:font-serif">
                      {index + 1} Artinya : {Value.idn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </Layout>
  );
};

export default SuratPages;
