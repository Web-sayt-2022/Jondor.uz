import React, { useState, useCallback, useRef, useEffect } from "react";
import ReglamentsNavbar from "./reglamentsNavbar/ReglamentsNavbar";
import CkeEditor from "../../../components/ckeEditor/CkeEditor";
import { axiosInstance } from "../../../config";
import AlertContent, { Alert } from "../../../components/alert/Alert";
import './hotline.css';

const Hotline = () => {
  const [hotline, setHotline] = useState("");
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [data, setData] = useState({});
  const [change, setChange] = useState(false);
  const phoneref = useRef();
  const selectRef = useRef();

  // get data
  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      const res = await axiosInstance.get("footerElement/list");
      if (isMounted) {
        setData(res.data.find(d => d.type === 1));
      }
    }
    getData();

    return () => isMounted = false;
  }, [change]);

  // change ckeditor
  const handleFunction = useCallback((event, editor) => {
    setHotline(String(event?.editor?.getData()));
  }, [setHotline]);

  // choose language
  const changeHandler = (e) => {
    if (data) {
      if (parseInt(e.target.value) === 1) {
        document.querySelector('.tabContent').querySelector('.cke_wysiwyg_div').innerHTML = data.uzRegulations;
      } else if (parseInt(e.target.value) === 2) {
        document.querySelector('.tabContent').querySelector('.cke_wysiwyg_div').innerHTML = data.krRegulations;
      } else {
        document.querySelector('.tabContent').querySelector('.cke_wysiwyg_div').innerHTML = data.ruRegulations;
      }
    }
  }

  // save data
  const saveData = async () => {
    try {
      if (phoneref.current.value) {
        if (selectRef.current?.value?.length === 1) {
          if (hotline) {
            await axiosInstance.post("footerElement/create", {
              type: 1,
              body: phoneref.current.value,
              uzRegulations: parseInt(selectRef.current?.value) === 1 ? hotline : data?.uzRegulations ? data?.uzRegulations : "",
              krRegulations: parseInt(selectRef.current?.value) === 2 ? hotline : data?.krRegulations ? data?.krRegulations : "",
              ruRegulations: parseInt(selectRef.current?.value) === 3 ? hotline : data?.ruRegulations ? data?.ruRegulations : ""
            });
            setChange(!change);
          } else {
            Alert(setAlert, "warning", "Ckeditor ga malumot kiritilmagan");
          }
        } else {
          Alert(setAlert, "warning", "Til tanlanmagan");
        }
      } else {
        Alert(setAlert, "warning", "Telefon raqam kiritilmagan");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="content mb-5 content-mobile" style={{ height: "calc(100vh - 50px)", overflowY: "scroll" }}>
      <h4 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Ishonch telefoni</h4>
      <div className="card-body card-body-mobile pt-0 px-0">
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ paddingTop: "2px" }}>
          <ReglamentsNavbar />
        </ul>

        <div className="tab-content tabContent">
          <div className="tab-pane fade show active" id="colored-tab1">
            <div className="card">
              <div className="card-body card-body-mobile cardBody" style={{ padding: "10px 20px" }}>
                <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                  <div className="position-relative w-100">
                    <input
                      type="text"
                      className="form-control form-control-outline "
                      id="phone"
                      placeholder="Placeholder"
                      required
                      mask-edit="+998(99)-999-99-99"
                      ref={phoneref}
                      defaultValue={data?.body}
                    />
                    <label className="label-floating">Telefon raqam</label>
                  </div>
                  <select id="chooseLanguage" className="btn btn-light" onChange={changeHandler} ref={selectRef}>
                    <option selected="selected" disabled hidden>Tilni tanlang:</option>
                    <option value="1">Uz</option>
                    <option value="2">Kr</option>
                    <option value="3">Ru</option>
                  </select>
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

export default React.memo(Hotline);