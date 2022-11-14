import React, { useState, useRef, useCallback, useEffect } from "react";
import AlertContent, { Alert } from "../../../components/alert/Alert";
import CkeEditor from "../../../components/ckeEditor/CkeEditor";
import { axiosInstance } from "../../../config";
import ManagementNavbar from "./managementNavbar/ManagementNavbar";

const Management = () => {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [ckeditorData, setCkeditorData] = useState("");
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);
  const [change, setChange] = useState(false);
  const [chooseLanguage, setChooseLanguage] = useState("");
  const selectRef = useRef();
  const firstNameref = useRef();
  const lastNameref = useRef();
  const middleNameref = useRef();
  const positionref = useRef();
  const birthdayref = useRef();
  const placeref = useRef();
  const nationref = useRef();
  const userInformationref = useRef();
  const facebookUrlref = useRef();
  const emailref = useRef();

  // hokimni o'qib olish
  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const res = await axiosInstance.get("stateEmployee/getHokim");
        if (isMounted) {
          console.log(res.data);
          setData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [change]);

  // choose language
  const changeHandler = (e) => {
    setChooseLanguage(e.target.value);
    if (data?.id) {
      if (parseInt(e.target.value) === 1) {
        document.querySelector('.tabContent').querySelector('.cke_wysiwyg_div').innerHTML = data.uzAdditionalInformation;
        setCkeditorData(data.uzAdditionalInformation);
      } else if (parseInt(e.target.value) === 2) {
        document.querySelector('.tabContent').querySelector('.cke_wysiwyg_div').innerHTML = data.krAdditionalInformation;
        setCkeditorData(data.krAdditionalInformation);
      } else {
        document.querySelector('.tabContent').querySelector('.cke_wysiwyg_div').innerHTML = data.ruAdditionalInformation;
        setCkeditorData(data.ruAdditionalInformation);
      }
    }
  }

  // change ckeditor
  const handleFunction = useCallback((event, editor) => {
    setCkeditorData(String(event?.editor?.getData()));
  }, [setCkeditorData]);

  // save data
  const saveData = async () => {
    try {
      if (chooseLanguage) {
        if (firstNameref.current.value) {
          if (lastNameref.current.value) {
            if (middleNameref.current.value) {
              if (positionref.current.value) {
                if (birthdayref.current.value) {
                  if (placeref.current.value) {
                    if (nationref.current.value) {
                      if (userInformationref.current.value) {
                        if (ckeditorData) {
                          let fileId;
                          if (file) {
                            try {
                              let formData = new FormData();
                              formData.append("images", file);

                              fileId = await axiosInstance.post("file/uploads", formData);
                            } catch (error) {
                              console.log(error);
                            }
                          } else {
                            if (!data.imageID)
                              Alert(setAlert, "warning", "Fayl tanlanmagan");
                          }

                          const res = await axiosInstance.post("stateEmployee/createHokim", {
                            firstName: firstNameref.current.value,
                            lastName: lastNameref.current.value,
                            patronymic: middleNameref.current.value,
                            uzPosition: chooseLanguage === "1" ? positionref.current.value : data.uzPosition ? data.uzPosition : "",
                            krPosition: chooseLanguage === "2" ? positionref.current.value : data.krPosition ? data.krPosition : "",
                            ruPosition: chooseLanguage === "3" ? positionref.current.value : data.ruPosition ? data.ruPosition : "",
                            birthDate: birthdayref.current.value,
                            uzBirthPlace: chooseLanguage === "1" ? placeref.current.value : data.uzBirthPlace ? data.uzBirthPlace : "",
                            krBirthPlace: chooseLanguage === "2" ? placeref.current.value : data.krBirthPlace ? data.krBirthPlace : "",
                            ruBirthPlace: chooseLanguage === "3" ? placeref.current.value : data.ruBirthPlace ? data.ruBirthPlace : "",
                            nation: nationref.current.value,
                            degree: userInformationref.current.value,
                            imageID: fileId ? fileId.data[0] : data.imageID,
                            uzAdditionalInformation: parseInt(chooseLanguage) === 1 ? ckeditorData : data?.uzAdditionalInformation ? data?.uzAdditionalInformation : "",
                            krAdditionalInformation: parseInt(chooseLanguage) === 2 ? ckeditorData : data?.krAdditionalInformation ? data?.krAdditionalInformation : "",
                            ruAdditionalInformation: parseInt(chooseLanguage) === 3 ? ckeditorData : data?.ruAdditionalInformation ? data?.ruAdditionalInformation : "",
                            facebook: facebookUrlref.current.value,
                            email: emailref.current.value,
                          });
                          console.log(res.data);
                          Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli saqlandi");
                          setChange(!change);
                        } else {
                          Alert(setAlert, "warning", "Ckeditor ga malumot kiritilmagan");
                        }
                      } else {
                        Alert(setAlert, "warning", "Ma'lumoti kiritilmagan");
                      }
                    } else {
                      Alert(setAlert, "warning", "Millati kiritilmagan");
                    }
                  } else {
                    Alert(setAlert, "warning", "Tug'ilgan joyi kiritilmagan");
                  }
                } else {
                  Alert(setAlert, "warning", "Tug'ilgan kuni kiritilmagan");
                }
              } else {
                Alert(setAlert, "warning", "Lavozimi kiritilmagan");
              }
            } else {
              Alert(setAlert, "warning", "Otasining ismi kiritilmagan");
            }
          } else {
            Alert(setAlert, "warning", "Familiya kiritish majburiy");
          }
        } else {
          Alert(setAlert, "warning", "Ism kiritish majburiy");
        }
      } else {
        Alert(setAlert, "warning", "Tilni tanlang");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="content mb-5 content-mobile" style={{ height: "calc(100vh - 50px)", overflowY: "scroll" }}>
      <h4 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Hokim qo'shish</h4>
      <div className="card-body card-body-mobile pt-0 px-0">
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ paddingTop: "2px" }}>
          <ManagementNavbar />
        </ul>

        <div className="tab-content tabContent">
          <div className="tab-pane fade show active" id="colored-tab1">
            <div className="card">
              <div className="card-body card-body-mobile cardBody" style={{ padding: "10px 20px" }}>
                <div className="row">
                  {/* row 1 */}
                  <div className="col-lg-12" style={{ textAlign: "right" }}>
                    <select id="chooseLanguage" className="btn btn-light" onChange={changeHandler} ref={selectRef}>
                      <option selected="selected" disabled hidden>Tilni tanlang:</option>
                      <option value="1">Uz</option>
                      <option value="2">Kr</option>
                      <option value="3">Ru</option>
                    </select>
                  </div>
                  {/* row 2 */}
                  {chooseLanguage && (
                    <>
                      <div className="col-lg-4">
                        <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                          <div className="position-relative w-100">
                            <input
                              type="text"
                              className="form-control form-control-outline "
                              placeholder="Placeholder"
                              required
                              ref={firstNameref}
                              defaultValue={data?.firstName}
                            />
                            <label className="label-floating">Ism</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                          <div className="position-relative w-100">
                            <input
                              type="text"
                              className="form-control form-control-outline "
                              placeholder="Placeholder"
                              required
                              ref={lastNameref}
                              defaultValue={data?.lastName}
                            />
                            <label className="label-floating">Familiyasi</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                          <div className="position-relative w-100">
                            <input
                              type="text"
                              className="form-control form-control-outline "
                              placeholder="Placeholder"
                              required
                              ref={middleNameref}
                              defaultValue={data?.patronymic}
                            />
                            <label className="label-floating">Otasining ismi</label>
                          </div>
                        </div>
                      </div>

                      {/* row 3 */}
                      {chooseLanguage === "1" && (
                        <div className="col-lg-4">
                          <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                            <div className="position-relative w-100">
                              <input
                                type="text"
                                className="form-control form-control-outline "
                                placeholder="Placeholder"
                                required
                                ref={positionref}
                                defaultValue={data?.uzPosition}
                              />
                              <label className="label-floating">Lavozimi</label>
                            </div>
                          </div>
                        </div>
                      )}
                      {chooseLanguage === "2" && (
                        <div className="col-lg-4">
                          <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                            <div className="position-relative w-100">
                              <input
                                type="text"
                                className="form-control form-control-outline "
                                placeholder="Placeholder"
                                required
                                ref={positionref}
                                defaultValue={data?.krPosition}
                              />
                              <label className="label-floating">Лавозими</label>
                            </div>
                          </div>
                        </div>
                      )}
                      {chooseLanguage === "3" && (
                        <div className="col-lg-4">
                          <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                            <div className="position-relative w-100">
                              <input
                                type="text"
                                className="form-control form-control-outline "
                                placeholder="Placeholder"
                                required
                                ref={positionref}
                                defaultValue={data?.ruPosition}
                              />
                              <label className="label-floating">Должность</label>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* row 4 */}
                      <div className="col-lg-4">
                        <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                          <div className="position-relative w-100">
                            <input
                              type="text"
                              className="form-control form-control-outline "
                              placeholder="Placeholder"
                              required
                              ref={birthdayref}
                              data-mask="9999-99-99"
                              defaultValue={new Date(data?.birthDate).toISOString()}
                            />
                            <label className="label-floating">Tug'ilgan kuni</label>
                          </div>
                        </div>
                      </div>
                      {chooseLanguage === "1" && (
                        <div className="col-lg-4">
                          <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                            <div className="position-relative w-100">
                              <input
                                type="text"
                                className="form-control form-control-outline "
                                placeholder="Placeholder"
                                required
                                ref={placeref}
                                defaultValue={data?.uzBirthPlace}
                              />
                              <label className="label-floating">Tug'ilgan joyi</label>
                            </div>
                          </div>
                        </div>
                      )}
                      {chooseLanguage === "2" && (
                        <div className="col-lg-4">
                          <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                            <div className="position-relative w-100">
                              <input
                                type="text"
                                className="form-control form-control-outline "
                                placeholder="Placeholder"
                                required
                                ref={placeref}
                                defaultValue={data?.krBirthPlace}
                              />
                              <label className="label-floating">Тугилган жойи</label>
                            </div>
                          </div>
                        </div>
                      )}
                      {chooseLanguage === "3" && (
                        <div className="col-lg-4">
                          <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                            <div className="position-relative w-100">
                              <input
                                type="text"
                                className="form-control form-control-outline "
                                placeholder="Placeholder"
                                required
                                ref={placeref}
                                defaultValue={data?.ruBirthPlace}
                              />
                              <label className="label-floating">Место рождения</label>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="col-lg-4">
                        <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                          <div className="position-relative w-100">
                            <input
                              type="text"
                              className="form-control form-control-outline "
                              placeholder="Placeholder"
                              required
                              ref={nationref}
                              defaultValue={data?.nation}
                            />
                            <label className="label-floating">Millati</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                          <div className="position-relative w-100">
                            <input
                              type="text"
                              className="form-control form-control-outline "
                              placeholder="Placeholder"
                              required
                              ref={userInformationref}
                              defaultValue={data?.degree}
                            />
                            <label className="label-floating">Ma'lumoti</label>
                          </div>
                        </div>
                      </div>

                      {/* row 5 */}
                      <div className="col-lg-4">
                        <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                          <div className="position-relative w-100">
                            <input
                              type="url"
                              className="form-control form-control-outline "
                              placeholder="Placeholder"
                              required
                              ref={facebookUrlref}
                              defaultValue={data?.facebook}
                            />
                            <label className="label-floating">Facebook url</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                          <div className="position-relative w-100">
                            <input
                              type="text"
                              className="form-control form-control-outline "
                              placeholder="Placeholder"
                              required
                              ref={emailref}
                              defaultValue={data?.email}
                            />
                            <label className="label-floating">Email</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group form-group-floating sm-mb-10 formGroup">
                          <div className="custom-file" style={{ height: "50px" }}>
                            <input
                              type="file"
                              className="custom-file-input"
                              style={{ height: "100%" }}
                              id="custom-file-visible"
                              accept='.png, .jpeg, .jpg'
                              onClick={(e) => e.target.value = null}
                              onChange={(e) => setFile(e.target.files[0])}
                              required
                            />
                            <label style={{ height: "100%" }} className={`custom-file-label mb-0 d-flex align-items-center ${(file || data?.imageID) ? "text-success" : "text-muted"}`}
                              htmlFor="custom-file-visible">
                              {file ? `Fayl tanlandi` : data?.imageID ? "Fayl oldin tanlangan" : "Faylni tanlash"}
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <CkeEditor initData={""} handleFunction={handleFunction} />
                <div className="btnSave">
                  <button className="btn btn-primary" onClick={saveData}>Saqlash</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* alert content */}
      <AlertContent alert={alert} />
    </div>
  )
}

export default React.memo(Management);