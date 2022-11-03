import React, { useCallback, useState } from 'react';
import { axiosInstance } from '../../../../config';
import CkeEditor from "../../../../components/ckeEditor/CkeEditor";


const EditDesc = ({ Alert, setAlert, setEditDesc, editDesc, govGroup, setGovGroup }) => {
  const [newsData1, setNewsData1] = useState("");
  const [newsData2, setNewsData2] = useState("");
  const [newsData3, setNewsData3] = useState("");

  console.log(editDesc);

  const editDescFunc = async (e) => {
    e.preventDefault()
    console.log(1);
    try {
      const sendingData = {
        id: editDesc.data?.id,
        uzDescription: newsData1 ? newsData1 : editDesc.data.uzDescription,
        krDescription: newsData2 ? newsData2 : editDesc.data.krDescription,
        ruDescription: newsData3 ? newsData3 : editDesc.data.ruDescription,
      }
      console.log(sendingData);
      const res = await axiosInstance.patch("subGovGroup/updateDescription", sendingData);
      console.log(res.data);
      const newGovGroup = govGroup.map((gov) => {
        if (gov.id === editDesc.data.id) {
          gov.uzDescription = res.data.uzDescription
          gov.krDescription = res.data.krDescription
          gov.ruDescription = res.data.ruDescription
        }
        return gov
      })
      console.log(newGovGroup);
      setGovGroup(newGovGroup)
      setEditDesc({ isShow: false, data: {} });
      Alert(setAlert, "success", "Muvafaqqiyatli o'zgartirildi");
    } catch (error) {
      console.log(error);
    }
  }

  const handleFunction1 = useCallback(
    (event, editor) => {
      setNewsData1(String(event?.editor?.getData()));
    },
    [setNewsData1]
  );

  const handleFunction2 = useCallback(
    (event, editor) => {
      setNewsData2(String(event?.editor?.getData()));
    },
    [setNewsData2]
  );

  const handleFunction3 = useCallback(
    (event, editor) => {
      setNewsData3(String(event?.editor?.getData()));
    },
    [setNewsData3]
  );

  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div style={{ width: "75%", margin: "0 auto" }}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Bo'lim haqida ma'lumotni o'zgartirish</h5>
            <button onClick={() => setEditDesc({ isShow: false, id: 0, data: {} })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>

          <div className="card-body" style={{ height: "80vh", overflowY: "auto" }}>
            <form onSubmit={editDescFunc} id="form1">
              <div className="card">

                <div className="card-body p-0 m-0">
                  <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink	px-1">
                    <li className="nav-item mt-2">
                      <a
                        href="#basic-tab1"
                        className="nav-link active"
                        data-toggle="tab"
                      >
                        <img
                          className="mr-2"
                          src="../../../utils/flags/uz.png"
                          alt="uz"
                        />
                        Qisqacha ma'lumot{" "}
                      </a>
                    </li>
                    <li className="nav-item mt-2">
                      <a
                        href="#basic-tab2"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        <img
                          className="mr-2"
                          src="../../../utils/flags/uz.png"
                          alt="uz"
                        />
                        Қисқача маълумот
                      </a>
                    </li>
                    <li className="nav-item mt-2">
                      <a
                        href="#basic-tab3"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        <img
                          className="mr-2"
                          src="../../../utils/flags/ru.png"
                          alt="ru"
                        />
                        Краткая информация{" "}
                      </a>{" "}
                    </li>
                  </ul>

                  <div className="tab-content">
                    {/* uz */}
                    <div className="tab-pane fade show active" id="basic-tab1">

                      {/* ckeditor */}
                      <div className="templateCkeditor1">
                        <CkeEditor handleFunction={handleFunction1} initData={editDesc.data?.uzDescription || ""} />
                      </div>
                    </div>

                    {/* уз */}
                    <div className="tab-pane fade" id="basic-tab2">

                      {/* ckeditor */}
                      <div className="templateCkeditor2">
                        <CkeEditor handleFunction={handleFunction2} initData={editDesc.data?.krDescription || ""} />
                      </div>
                    </div>

                    {/* ru */}
                    <div className="tab-pane fade" id="basic-tab3">

                      {/* ckeditor */}
                      <div className="templateCkeditor3">
                        <CkeEditor handleFunction={handleFunction3} initData={editDesc.data?.ruDescription || ""} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="modal-footer p-2" style={{ display: "flex", justifyContent: "end" }}>
            <button className='btn btn-success py-2' type='submit' form="form1" value="Submit">O'zgartirish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(EditDesc);
