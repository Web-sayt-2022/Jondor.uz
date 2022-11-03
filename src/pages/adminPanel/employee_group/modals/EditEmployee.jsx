import React, { useCallback, useRef, useState } from 'react';
import { axiosInstance } from '../../../../config';
import CkeEditor from "../../../../components/ckeEditor/CkeEditor";


const EditEmployee = ({ employeeGroup, setEmployeeGroup, editEmployee, setEditEmployee, Alert, setAlert }) => {
  const [file, setFile] = useState([]);
  const [newsData1, setNewsData1] = useState("");
  const [newsData2, setNewsData2] = useState("");
  const [newsData3, setNewsData3] = useState("");
  const [newsData4, setNewsData4] = useState("");
  const [newsData5, setNewsData5] = useState("");
  const [newsData6, setNewsData6] = useState("");

  console.log(editEmployee);

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

  // const trashFile = (index) => {
  //   if (file?.length > 0) {
  //     let arr = file.filter((f, i) => i !== index);
  //     setFile(arr);
  //   }
  // };

  //xodim qo'shish
  const editEmployeeFunc = async (e) => {
    e.preventDefault()
    try {
      let formData = new FormData();
      if (file.length > 0) {
        formData.append("images", file[0]);
      } else {
        formData.append("images", file);
      }
      const allFilesId = await axiosInstance.post("file/uploads", formData);
      console.log(allFilesId);
      try {
        const sendingData = {
          id: editEmployee.data.id,
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
          additionalInformationUz: newsData1 ? newsData1 : editEmployee.data.additionalInformationUz,
          additionalInformationKr: newsData2 ? newsData2 : editEmployee.data.additionalInformationKr,
          additionalInformationRu: newsData3 ? newsData3 : editEmployee.data.additionalInformationRu,
          uzResponsibility: newsData4 ? newsData4 : editEmployee.data.uzResponsibility,
          krResponsibility: newsData5 ? newsData5 : editEmployee.data.krResponsibility,
          ruResponsibility: newsData6 ? newsData6 : editEmployee.data.ruResponsibility,
          imageID: allFilesId.data.length > 0 ? allFilesId.data[0] : editEmployee.data.imageID,
        }
        console.log(sendingData);
        const res = await axiosInstance.patch("stateEmployee/update", sendingData);
        console.log(res.data);
        const newEmployeeGroup = employeeGroup?.map(employee => {
          if (employee.id === editEmployee.id) {
            employee.firstName = res.data.firstName;
            employee.lastName = lastNameRef.current.value;
            employee.patronymic = middleNameRef.current.value;
            employee.uzPosition = uzPositionRef.current.value;
            employee.krPosition = krPositionRef.current.value;
            employee.ruPosition = ruPositionRef.current.value;
            employee.birthDate = birthDateRef.current.value;
            employee.uzBirthPlace = birthPlaceRef.current.value;
            employee.krBirthPlace = birthPlaceRef.current.value;
            employee.ruBirthPlace = birthPlaceRef.current.value;
            employee.nation = nationRef.current.value;
            employee.degree = degreeRef.current.value;
            employee.phoneNumber = phoneRef.current.value;
            employee.additionalInformationUz = newsData1 ? newsData1 : editEmployee.data.additionalInformationUz;
            employee.additionalInformationKr = newsData2 ? newsData2 : editEmployee.data.additionalInformationKr;
            employee.additionalInformationRu = newsData3 ? newsData3 : editEmployee.data.additionalInformationRu;
            employee.uzResponsibility = newsData4 ? newsData4 : editEmployee.data.uzResponsibility;
            employee.krResponsibility = newsData5 ? newsData5 : editEmployee.data.krResponsibility;
            employee.ruResponsibility = newsData6 ? newsData6 : editEmployee.data.ruResponsibility;
            employee.imageID = allFilesId.data.length > 0 ? allFilesId.data[0] : editEmployee.data.imageID;
          }

          return employee
        })

        setEmployeeGroup(newEmployeeGroup)
        setFile([]);
        setEditEmployee({ isShow: false, data: {} });
        Alert(setAlert, "success", "Muvafaqqiyatli qo'shildi");
      } catch (error) {
        console.log(error);
      }
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
            <h5 className="modal-title">Xodim ma'lumotlarini o'zgartirish</h5>
            <button onClick={() => setEditEmployee({ isShow: false, data: {} })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>

          <div className="card-body" style={{ height: "80vh", overflowY: "auto" }}>
            <form onSubmit={editEmployeeFunc} id="form1">
              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      defaultValue={editEmployee?.data?.firstName}
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
                      defaultValue={editEmployee?.data?.lastName}
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
                      defaultValue={editEmployee?.data?.patronymic}
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
                      defaultValue={editEmployee?.data?.uzPosition}
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
                      defaultValue={editEmployee?.data?.krPosition}
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
                      defaultValue={editEmployee?.data?.ruPosition}
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
                      defaultValue={editEmployee?.data?.birthDate.substr(0, 10)}
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
                      defaultValue={editEmployee?.data?.uzBirthPlace}
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
                      defaultValue={editEmployee?.data?.nation}
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
                      defaultValue={editEmployee?.data?.phoneNumber}
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
                      defaultValue={editEmployee?.data?.degree}
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
                              file ? "Rasm tanlandi" : editEmployee.data?.imageID ? "Rasm tanlangan" : ""
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
                          {/* <button type="button" onClick={uploadAllFiles}>
                              <i className="fas fa-upload"></i>UPLOAD
                            </button> */}
                          <label htmlFor="browser" className='p-2' style={{ height: "56px" }}>
                            <i className="fas fa-upload"></i>
                            Tanlash
                            <input
                              type="file"
                              // multiple="multiple"
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
                        <CkeEditor handleFunction={handleFunction1} initData={editEmployee?.data?.additionalInformationUz || ""} />
                      </div>
                    </div>

                    {/* уз */}
                    <div className="tab-pane fade" id="basic-tab2">

                      {/* ckeditor */}
                      <div className="templateCkeditor2">
                        <CkeEditor handleFunction={handleFunction2} initData={editEmployee?.data?.additionalInformationKr || ""} />
                      </div>
                    </div>

                    {/* ru */}
                    <div className="tab-pane fade" id="basic-tab3">

                      {/* ckeditor */}
                      <div className="templateCkeditor3">
                        <CkeEditor handleFunction={handleFunction3} initData={editEmployee?.data?.additionalInformationRu || ""} />
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
                      </a>{" "}
                    </li>
                  </ul>

                  <div className="tab-content">
                    {/* uz */}
                    <div className="tab-pane fade show active" id="basic-tab4">

                      {/* ckeditor */}
                      <div className="templateCkeditor4">
                        <CkeEditor handleFunction={handleFunction4} initData={editEmployee?.data?.uzResponsibility || ""} />
                      </div>
                    </div>

                    {/* уз */}
                    <div className="tab-pane fade" id="basic-tab5">

                      {/* ckeditor */}
                      <div className="templateCkeditor5">
                        <CkeEditor handleFunction={handleFunction5} initData={editEmployee?.data?.krResponsibility || ""} />
                      </div>
                    </div>

                    {/* ru */}
                    <div className="tab-pane fade" id="basic-tab6">

                      {/* ckeditor */}
                      <div className="templateCkeditor6">
                        <CkeEditor handleFunction={handleFunction6} initData={editEmployee?.data?.ruResponsibility || ""} />
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

export default React.memo(EditEmployee);
