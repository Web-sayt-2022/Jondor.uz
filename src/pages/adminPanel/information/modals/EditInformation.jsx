import React, { useCallback, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import CkeEditor from '../../../../components/ckeEditor/CkeEditor';
import { axiosInstance, urlFile } from '../../../../config';

const EditInformation = ({ editModal, setEditModal, Alert, setAlert, data, setData, fileIds, setFileIds }) => {
  const [file, setFile] = useState(null);
  const [newsData1, setNewsData1] = useState("");
  const [newsData2, setNewsData2] = useState("");
  const [newsData3, setNewsData3] = useState("");

  const { subMenuId } = useParams()

  const editTitleUzref = useRef();
  const editTitleUzKrilref = useRef();
  const editTitleRuref = useRef();
  const editSourceref = useRef();
  const editUzDescRef = useRef();
  const editKrDescRef = useRef();
  const editRuDescRef = useRef();

  const editFunc = async () => {
    console.log(1);
    if (file?.length > 0 || fileIds.length > 0) {
      try {

        let formData = new FormData();
        file?.forEach((f) => {
          formData.append("images", f);
        });
        const newfileIds = await axiosInstance.post("file/uploads", formData);
        const allFiles = [...fileIds, ...newfileIds.data]
        console.log(allFiles);

        try {
          const sendingData = {
            id: editModal.data.id,
            uzTitle: editTitleUzref.current.value,
            krTitle: editTitleUzKrilref.current.value,
            ruTitle: editTitleRuref.current.value,
            uzDescription: editUzDescRef.current.value,
            krDescription: editKrDescRef.current.value,
            ruDescription: editRuDescRef.current.value,
            uzBody: newsData1 ? newsData1 : editModal.data?.uzBody,
            krBody: newsData2 ? newsData2 : editModal.data?.krBody,
            ruBody: newsData3 ? newsData3 : editModal.data?.ruBody,
            submenuID: subMenuId,
            source: editSourceref.current.value,
            imageIDs: allFiles,
            // oldGeneratedNames: fileIds
          }
          console.log(sendingData);
          const res = await axiosInstance.patch("information/update", sendingData);
          console.log(res.data);

          const newData = data?.map((item) => {
            if (item.id === res.data?.id) {
              item.uzTitle = res.data?.uzTitle
              item.krTitle = res.data?.krTitle
              item.ruTitle = res.data?.ruTitle
              item.uzDescription = res.data?.uzDescription
              item.krDescription = res.data?.krDescription
              item.ruDescription = res.data?.ruDescription
              item.uzBody = res.data?.uzBody
              item.krBody = res.data?.krBody
              item.ruBody = res.data?.ruBody
              item.source = res.data?.source
              item.generatedNames = res.data?.generatedNames
            }
            return item
          })
          setData(newData)
          setFileIds([])
          setFile(null)
          setNewsData1("");
          setNewsData2("");
          setNewsData3("");
          setEditModal({ isShow: false, data: {} });
          Alert(setAlert, "success", "Muvafaqqiyatli o'zgartirildi");
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }


  const trashFile = (index) => {
    if (file?.length > 0) {
      let arr = file.filter((f, i) => i !== index);
      setFile(arr);
    }
  };


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

  const deleteTrashFile = (id) => {
    if (fileIds?.length > 0) {
      let arr = fileIds.filter((f) => f !== id);
      setFileIds(arr);
    }
  }

  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: "9999", background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="" style={{ width: "80%", height: "100vh" }}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Yangilik qo'shish</h5>

            <div className="d-flex" style={{ justifyContent: "center", alignItems: "center" }}>
              <button onClick={() => setEditModal({ isShow: false, data: {} })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
                &times;
              </button>
            </div>
          </div>

          <div className="modal-body px-2 pb-0" style={{ height: 'calc(100vh - 130px)', overflowY: 'scroll', overflowX: "hidden" }}>
            <div className="content-wrapper">
              <div className="content-inner">
                <div className="m-0">
                  <form>
                    <div className="card-body" style={{ minHeight: "80vh" }}>
                      <div className="form-group form-group-floating row">
                        <div className="col-lg-4">
                          <div className="form-group-feedback form-group-feedback-right">
                            <input
                              type="text"
                              className="form-control form-control-outline"
                              placeholder="Placeholder"
                              ref={editTitleUzref}
                              defaultValue={editModal.data?.uzTitle}
                            />
                            <div className="form-control-feedback text-bold text-primary">
                              <img src="../../../utils/flags/uz.png" alt="uz" />
                            </div>
                            <label className="label-floating">Sarlavha</label>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="form-group-feedback form-group-feedback-right">
                            <input
                              type="text"
                              className="form-control form-control-outline"
                              placeholder="Placeholder"
                              ref={editTitleUzKrilref}
                              defaultValue={editModal.data?.krTitle}
                            />
                            <div className="form-control-feedback text-bold text-primary">
                              <img src="../../../utils/flags/uz.png" alt="uz" />
                            </div>
                            <label className="label-floating">Сарлавҳа</label>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="form-group-feedback form-group-feedback-right">
                            <input
                              type="text"
                              className="form-control form-control-outline"
                              placeholder="Placeholder"
                              ref={editTitleRuref}
                              defaultValue={editModal.data?.ruTitle}
                            />
                            <div className="form-control-feedback text-bold text-primary">
                              <img src="../../../utils/flags/ru.png" alt="ru" />
                            </div>
                            <label className="label-floating">Заголовок</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-group form-group-floating row mb-2">
                        <div className="col-lg-4">
                          <div className="form-group-feedback form-group-feedback-right">
                            <input
                              type="text"
                              className="form-control form-control-outline"
                              placeholder="Placeholder"
                              ref={editSourceref}
                              defaultValue={editModal.data?.source}
                            />
                            <label className="label-floating">Manba</label>
                          </div>
                        </div>

                        {/* <div className="col-lg-4">
                          <Select
                            placeholder="Yo'nalish"
                            options={sphere}
                            isClearable={true}
                            ref={editDirectionref}
                          />
                        </div> */}

                        {/* <div className="col-lg-4" style={{ display: "flex", alignItems: "center" }}>
                        <div className="custom-control custom-checkbox custom-control-success"
                          style={{ fontSize: "1rem", display: "flex" }}>
                          <input type="checkbox"
                            className="custom-control-input"
                            id="chek"
                            ref={editMainPageCheckboxref}
                            defaultChecked={editModal.data?.actual}
                          />
                          <label className="custom-control-label"
                            for="chek"
                            style={{ textTransform: "uppercase" }}>
                            BOSH SAHIFA
                          </label>
                        </div>
                      </div> */}
                      </div>

                      <div className="form-group row">
                        <div className="col-lg-12">
                          {/* <input type="file" /> */}
                          <div className="image_container">
                            <div className="image_wrapper">

                              <div className="image_top">
                                <div className="border_dash">
                                  <ul className="fileList">
                                    {/* kelgan data */}
                                    {fileIds?.length > 0 && (
                                      fileIds.map((f, i) => (
                                        <li key={i}>
                                          <img
                                            src={urlFile + `/${f}`}
                                            alt=""
                                          />
                                          <span>Oldin tanlangan</span>
                                          <div>
                                            <i
                                              className="fas fa-trash"
                                              onClick={() => deleteTrashFile(f)}
                                            ></i>
                                          </div>
                                        </li>
                                      ))
                                    )}

                                    {/* // yuboriladigan data */}
                                    {file?.length > 0 && (
                                      file.map((f, i) => (
                                        <li key={i}>
                                          <img
                                            src={URL.createObjectURL(f)}
                                            alt=""
                                          />
                                          <span>{f.name}</span>
                                          <div>
                                            <i
                                              className="fas fa-trash"
                                              onClick={() => trashFile(i)}
                                            ></i>
                                          </div>
                                        </li>
                                      ))
                                    )}
                                  </ul>
                                </div>
                              </div>


                              <div className="image_bottom mt-2">
                                <div className="input_text_content">
                                  <input
                                    className='p-2'
                                    style={{ height: "40px" }}
                                    type="text"
                                    defaultValue={
                                      file && file?.length + " ta fayl tanlandi"
                                    }
                                    disabled
                                    accept=".png, .jpeg, .jpg"
                                  />
                                </div>
                                <div className="buttons">
                                  <button
                                    className='p-2' style={{ height: "40px" }}
                                    type="button"
                                    onClick={() => setFile(null)}
                                  >
                                    <i className="fas fa-close"></i>
                                    O'chirish
                                  </button>
                                  <label htmlFor="browser" className='p-2' style={{ height: "40px" }}>
                                    <i className="fas fa-upload"></i>
                                    Tanlash
                                    <input
                                      type="file"
                                      multiple="multiple"
                                      id="browser"
                                      onClick={(e) => (e.target.value = null)}
                                      onChange={(e) => {
                                        setFile(Object.values(e.target.files))
                                        console.log(e);
                                      }
                                      }
                                      style={{ display: "none" }}
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

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
                                <i
                                  className="icon-stack-empty ml-2 text-danger"
                                  style={{ fontSize: "1.5rem" }}
                                ></i>
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
                                <i
                                  className="icon-stack-text ml-2 text-success"
                                  style={{ fontSize: "1.5rem" }}
                                ></i>
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
                                <i
                                  className="icon-stack-text ml-2 text-success"
                                  style={{ fontSize: "1.5rem" }}
                                ></i>{" "}
                              </a>{" "}
                            </li>
                          </ul>

                          <div className="tab-content">
                            {/* uz */}
                            <div className="tab-pane fade show active" id="basic-tab1">

                              <div className="form-group form-group-floating">
                                <div className='pt-4' style={{ display: "flex", justifyContent: "center" }}>
                                  <div className="position-relative">
                                    <textarea style={{ width: "850px", height: "200px" }}
                                      className="form-control form-control-outline"
                                      placeholder="Placeholder"
                                      ref={editUzDescRef}
                                      defaultValue={editModal.data?.uzDescription}
                                    >
                                    </textarea>
                                    <label className="label-floating">Qisqacha ma'lumot</label>
                                  </div>
                                </div>
                              </div>

                              {/* ckeditor */}
                              <div className="templateCkeditor1">
                                <CkeEditor handleFunction={handleFunction1} initData={editModal.data?.uzBody} />
                              </div>
                            </div>

                            {/* уз */}
                            <div className="tab-pane fade" id="basic-tab2">
                              <div className="form-group form-group-floating">
                                <div className='pt-4' style={{ display: "flex", justifyContent: "center" }}>
                                  <div className="position-relative">
                                    <textarea style={{ width: "850px", height: "200px" }}
                                      className="form-control form-control-outline"
                                      placeholder="Placeholder"
                                      ref={editKrDescRef}
                                      defaultValue={editModal.data?.krDescription}
                                    >
                                    </textarea>
                                    <label className="label-floating">Қисқача маълумот</label>
                                  </div>
                                </div>
                              </div>

                              {/* ckeditor */}
                              <div className="templateCkeditor2">
                                <CkeEditor handleFunction={handleFunction2} initData={editModal.data?.krBody} />
                              </div>
                            </div>

                            {/* ru */}
                            <div className="tab-pane fade" id="basic-tab3">
                              <div className="form-group form-group-floating">
                                <div className='pt-4' style={{ display: "flex", justifyContent: "center" }}>
                                  <div className="position-relative">
                                    <textarea style={{ width: "850px", height: "200px" }}
                                      className="form-control form-control-outline"
                                      placeholder="Placeholder"
                                      ref={editRuDescRef}
                                      defaultValue={editModal.data?.ruDescription}
                                    >
                                    </textarea>
                                    <label className="label-floating">Краткая информация</label>
                                  </div>
                                </div>
                              </div>

                              {/* ckeditor */}
                              <div className="templateCkeditor3">
                                <CkeEditor handleFunction={handleFunction3} initData={editModal.data?.ruBody} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer p-2" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", backgroundColor: "transparent" }}>
            <button
              type='button'
              onClick={() => editFunc()}
              className="btn btn-success">
              <i className="icon-file-upload mr-1"></i>
              O'zgartirish
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default React.memo(EditInformation);
