import React, { useCallback, useState, useRef, useEffect } from "react";
import AlertContent, { Alert } from "../../../../components/alert/Alert";
import CkeEditor from "../../../../components/ckeEditor/CkeEditor";
import { axiosInstance } from "../../../../config";
import ReglamentsNavbar from "../reglamentsNavbar/ReglamentsNavbar";

const ElektronAddress = () => {
  const [electronAddress, setElectronAddress] = useState("");
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [data, setData] = useState({});
  const [change, setChange] = useState(false);
  const emailref = useRef();
  const selectRef = useRef();

  // get data
  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      const res = await axiosInstance.get("footerElement/list");
      if (isMounted) {
        setData(res.data.find(d => d.type === 3));
        console.log(res.data.find(d => d.type === 3));
      }
    }
    getData();

    return () => isMounted = false;
  }, [change]);

  // choose language
  const changeHandler = (e) => {
    if (data.id) {
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
      if (emailref.current.value) {
        if (selectRef.current?.value?.length === 1) {
          if (electronAddress) {
            await axiosInstance.post("footerElement/create", {
              type: 3,
              body: emailref.current.value,
              uzRegulations: parseInt(selectRef.current?.value) === 1 ? electronAddress : data?.uzRegulations ? data?.uzRegulations : "",
              krRegulations: parseInt(selectRef.current?.value) === 2 ? electronAddress : data?.krRegulations ? data?.krRegulations : "",
              ruRegulations: parseInt(selectRef.current?.value) === 3 ? electronAddress : data?.ruRegulations ? data?.ruRegulations : ""
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

  // change ckeditor
  const handleFunction = useCallback((event, editor) => {
    setElectronAddress(String(event?.editor?.getData()));
  }, [setElectronAddress]);

  return (
    <div className="content mb-5 content-mobile" style={{ height: "calc(100vh - 50px)", overflowY: "scroll" }}>
      <h4 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Elektron manzil</h4>
      <div className="card-body card-body-mobile pt-0 px-0">
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ paddingTop: "2px" }}>
          <ReglamentsNavbar />
        </ul>

        <div className="tab-content tabContent">
          <div className="tab-pane fade show active" id="colored-tab1">
            <div className="card">
              <div className="card-body card-body-mobile" style={{ padding: "10px 20px" }}>
                <div className="form-group form-group-floating sm-mb-10 formGroup d-flex" style={{ gap: "5px" }}>
                  <div className="position-relative w-100">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      id="phone"
                      placeholder="Placeholder"
                      required
                      ref={emailref}
                      defaultValue={data?.body}
                    />
                    <label className="label-floating">Email</label>
                  </div>
                  <select id="chooseLanguage" className="btn btn-light" onChange={changeHandler} ref={selectRef}>
                    <option selected="selected" disabled hidden>Tilni tanlang:</option>
                    <option value="1">Uz</option>
                    <option value="2">Kr</option>
                    <option value="3">Ru</option>
                  </select>
                </div>
                <CkeEditor initData="" handleFunction={handleFunction} />
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
    </div >
  )
}

export default React.memo(ElektronAddress);