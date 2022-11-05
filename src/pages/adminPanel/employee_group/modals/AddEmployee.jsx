import React, { useCallback, useRef, useState } from 'react';
import { axiosInstance } from '../../../../config';
import CkeEditor from "../../../../components/ckeEditor/CkeEditor";
import { useParams } from 'react-router-dom';


const AddEmployee = ({ addEmployee, setAddEmployee, employeeGroup, setEmployeeGroup, Alert, setAlert }) => {
  const [file, setFile] = useState(null);
  const [newsData1, setNewsData1] = useState("");
  const [newsData2, setNewsData2] = useState("");
  const [newsData3, setNewsData3] = useState("");
  const [newsData4, setNewsData4] = useState("");
  const [newsData5, setNewsData5] = useState("");
  const [newsData6, setNewsData6] = useState("");
  const { subMenuId } = useParams()

  // add employee
  const lastNameRef = useRef()
  const firstNameRef = useRef()
  const middleNameRef = useRef()
  const uzPositionRef = useRef()
  const krPositionRef = useRef()
  const ruPositionRef = useRef()
  const birthDateRef = useRef()
  const birthPlaceRef = useRef()
  const nationRef = useRef()
  const degreeRef = useRef()
  const phoneRef = useRef()

  //xodim qo'shish
  const addEmployeeFunc = async (e) => {
    e.preventDefault()
    console.log(1);
    if (file?.length > 0) {
      try {
        let formData = new FormData();
        file.forEach((f) => {
          formData.append("images", f);
        });
        const allFilesId = await axiosInstance.post("file/uploads", formData);
        console.log(allFilesId);
        try {
          const sendingData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            patronymic: middleNameRef.current.value,
            uzPosition: uzPositionRef.current.value,
            krPosition: krPositionRef.current.value,
            ruPosition: ruPositionRef.current.value,
            birthDate: birthDateRef.current.value,
            uzBirthPlace: birthPlaceRef.current.value,
            krBirthPlace: birthPlaceRef.current.value,
            ruBirthPlace: birthPlaceRef.current.value,
            nation: nationRef.current.value,
            degree: degreeRef.current.value,
            phoneNumber: phoneRef.current.value,
            uzAdditionalInformation: newsData1,
            krAdditionalInformation: newsData2,
            ruAdditionalInformation: newsData3,
            uzResponsibility: newsData4,
            krResponsibility: newsData5,
            ruResponsibility: newsData6,
            imageID: allFilesId.data[0],
            submenuID: subMenuId
          }
          console.log(sendingData);
          const res = await axiosInstance.post("stateEmployee/createForEmployeeGroup", sendingData);
          console.log(res.data);
          Alert(setAlert, "success", "Muvafaqqiyatli qo'shildi");
          setEmployeeGroup([...employeeGroup, res.data])
          setFile(null);
          setAddEmployee(false);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert(setAlert, "warning", "Rasm tanlamadingiz!")
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

  const handleFunction4 = useCallback(
    (event, editor) => {
      setNewsData4(String(event?.editor?.getData()));
    },
    [setNewsData4]
  );

  const handleFunction5 = useCallback(
    (event, editor) => {
      setNewsData5(String(event?.editor?.getData()));
    },
    [setNewsData5]
  );

  const handleFunction6 = useCallback(
    (event, editor) => {
      setNewsData6(String(event?.editor?.getData()));
    },
    [setNewsData6]
  );
  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div style={{ width: "75%", margin: "0 auto" }}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Xodim qo'shish</h5>
            <button onClick={() => setAddEmployee(false)} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>

          <div className="card-body" style={{ height: "80vh", overflowY: "auto" }}>
            <form onSubmit={addEmployeeFunc} id="form1">
              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={firstNameRef}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Ism</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={lastNameRef}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Familiyasi</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={middleNameRef}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="ru" />
                    </div>
                    <label className="label-floating">Otasining ismi</label>
                  </div>
                </div>
              </div>

              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={uzPositionRef}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Lavozimi</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={krPositionRef}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Лавозими</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={ruPositionRef}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/ru.png" alt="ru" />
                    </div>
                    <label className="label-floating">Должность</label>
                  </div>
                </div>
              </div>

              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={birthDateRef}
                      data-mask="9999-99-99"
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Tug'ilgan kuni</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={birthPlaceRef}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Tug'ilgan joyi</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={nationRef}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="ru" />
                    </div>
                    <label className="label-floating">Millati</label>
                  </div>
                </div>
              </div>

              <div className="form-group form-group-floating row">

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={phoneRef}
                      data-mask="+998 (99) 999-99-99"
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Telefon raqami</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={degreeRef}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Ma'lumoti</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="image_container">
                    <div className="image_wrapper">
                      <div className="image_bottom">
                        <div className="input_text_content">
                          <input
                            className='p-2'
                            style={{ height: "56px", background: "#fff" }}
                            type="text"
                            defaultValue={
                              file && "Rasm tanlandi"
                            }
                            disabled
                            accept=".png, .jpeg, .jpg"
                          />
                        </div>
                        <div className="buttons">
                          <button
                            className='p-2' style={{ height: "56px" }}
                            type="button"
                            onClick={() => setFile(null)}
                          >
                            <i className="fas fa-close"></i>
                            O'chirish
                          </button>
                          <label htmlFor="browser" className='p-2' style={{ height: "56px" }}>
                            <i className="fas fa-upload"></i>
                            Tanlash
                            <input
                              type="file"
                              id="browser"
                              onClick={(e) => (e.target.value = null)}
                              onChange={(e) =>
                                setFile(Object.values(e.target.files))
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
                        {
                          (newsData1) ? (
                            <i className="icon-stack-text ml-2 text-success"
                              style={{ fontSize: "1.5rem" }}></i>
                          ) : (
                            <i className="icon-stack-empty ml-2 text-danger"
                              style={{ fontSize: "1.5rem" }}></i>
                          )
                        }
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
                        {
                          (newsData2) ? (
                            <i className="icon-stack-text ml-2 text-success"
                              style={{ fontSize: "1.5rem" }}></i>
                          ) : (
                            <i className="icon-stack-empty ml-2 text-danger"
                              style={{ fontSize: "1.5rem" }}></i>
                          )
                        }
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
                        {
                          (newsData3) ? (
                            <i className="icon-stack-text ml-2 text-success"
                              style={{ fontSize: "1.5rem" }}></i>
                          ) : (
                            <i className="icon-stack-empty ml-2 text-danger"
                              style={{ fontSize: "1.5rem" }}></i>
                          )
                        }
                      </a>{" "}
                    </li>
                  </ul>

                  <div className="tab-content">
                    {/* uz */}
                    <div className="tab-pane fade show active" id="basic-tab1">

                      {/* ckeditor */}
                      <div className="templateCkeditor1">
                        <CkeEditor handleFunction={handleFunction1} initData={""} />
                      </div>
                    </div>

                    {/* уз */}
                    <div className="tab-pane fade" id="basic-tab2">

                      {/* ckeditor */}
                      <div className="templateCkeditor2">
                        <CkeEditor handleFunction={handleFunction2} initData={""} />
                      </div>
                    </div>

                    {/* ru */}
                    <div className="tab-pane fade" id="basic-tab3">

                      {/* ckeditor */}
                      <div className="templateCkeditor3">
                        <CkeEditor handleFunction={handleFunction3} initData={""} />
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
                        href="#basic-tab4"
                        className="nav-link active"
                        data-toggle="tab"
                      >
                        <img
                          className="mr-2"
                          src="../../../utils/flags/uz.png"
                          alt="uz"
                        />
                        Funksiya va vazifalari{" "}
                        {
                          (newsData4) ? (
                            <i className="icon-stack-text ml-2 text-success"
                              style={{ fontSize: "1.5rem" }}></i>
                          ) : (
                            <i className="icon-stack-empty ml-2 text-danger"
                              style={{ fontSize: "1.5rem" }}></i>
                          )
                        }
                      </a>
                    </li>
                    <li className="nav-item mt-2">
                      <a
                        href="#basic-tab5"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        <img
                          className="mr-2"
                          src="../../../utils/flags/uz.png"
                          alt="uz"
                        />
                        Функсия ва вазифалари
                        {
                          (newsData5) ? (
                            <i className="icon-stack-text ml-2 text-success"
                              style={{ fontSize: "1.5rem" }}></i>
                          ) : (
                            <i className="icon-stack-empty ml-2 text-danger"
                              style={{ fontSize: "1.5rem" }}></i>
                          )
                        }
                      </a>
                    </li>
                    <li className="nav-item mt-2">
                      <a
                        href="#basic-tab6"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        <img
                          className="mr-2"
                          src="../../../utils/flags/ru.png"
                          alt="ru"
                        />
                        Функции и задачи{" "}
                        {
                          (newsData6) ? (
                            <i className="icon-stack-text ml-2 text-success"
                              style={{ fontSize: "1.5rem" }}></i>
                          ) : (
                            <i className="icon-stack-empty ml-2 text-danger"
                              style={{ fontSize: "1.5rem" }}></i>
                          )
                        }
                      </a>{" "}
                    </li>
                  </ul>

                  <div className="tab-content">
                    {/* uz */}
                    <div className="tab-pane fade show active" id="basic-tab4">

                      {/* ckeditor */}
                      <div className="templateCkeditor4">
                        <CkeEditor handleFunction={handleFunction4} initData={""} />
                      </div>
                    </div>

                    {/* уз */}
                    <div className="tab-pane fade" id="basic-tab5">

                      {/* ckeditor */}
                      <div className="templateCkeditor5">
                        <CkeEditor handleFunction={handleFunction5} initData={""} />
                      </div>
                    </div>

                    {/* ru */}
                    <div className="tab-pane fade" id="basic-tab6">

                      {/* ckeditor */}
                      <div className="templateCkeditor6">
                        <CkeEditor handleFunction={handleFunction6} initData={""} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>


          <div className="modal-footer p-2" style={{ display: "flex", justifyContent: "end" }}>
            <button className='btn btn-success py-2' type='submit' form="form1" value="Submit">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AddEmployee);
