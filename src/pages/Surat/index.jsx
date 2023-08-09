import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SurahAlQuran } from "../../utils/ApiQuran";
import Layout from "../../components/Layout";

const SuratPages = () => {
  const { id } = useParams();
  const [alsurat, setAlsurat] = useState();

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
                <div className="max-w-full py-8 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-gray-200">
                  <div className="mx-8" style={{ marginLeft: "end" }}>
                    {Value?.ar}
                  </div>
                  <br />
                  <div className="mx-8">{Value.tr}</div>
                </div>
              </div>
              <div className="mx-8">
                {index + 1} Artinya : {Value.idn}
              </div>
            </div>
          );
        })}
    </Layout>
  );
};

export default SuratPages;
