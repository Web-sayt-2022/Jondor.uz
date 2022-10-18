import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Select from "react-select";
import { axiosInstance } from "../../config";
import "./adminPanel.css";
import CkeEditor from "../../components/ckeEditor/CkeEditor";

const AdminPanel = () => {
  const [file, setFile] = useState(null);
  const [sphere, setSphere] = useState([]);
  const [govSphere, setGovSphere] = useState([]);
  const [newsData, setNewsData] = useState("");
  const titleUzref = useRef();
  const titleUzKrilref = useRef();
  const titleRuref = useRef();
  const sourceref = useRef();
  const proDirectionref = useRef();
  const directionref = useRef();
  const smmCheckboxref = useRef();
  const mainPageCheckboxref = useRef();
  const formresetref = useRef();

  // barcha yo'nalishlarni o'qib olish
  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const res = await axiosInstance.get("sphere/");
        console.log(res.data);
        if (res.data?.length > 0) {
          let arr = [];
          res.data.forEach((dat) => {
            arr.push({ value: dat.id, label: dat.uzName });
          });
          setSphere(arr);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();

    return () => (isMounted = false);
  }, []);

  // barcha soha y'nalishlarini o'qib olish
  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const res1 = await axiosInstance.get("govSphere/");
        console.log(res1.data);
        if (res1.data?.length > 0) {
          let arr = [];
          res1.data.forEach((dat) => {
            arr.push({ value: dat.id, label: dat.uzName });
          });
          setGovSphere(arr);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();

    return () => (isMounted = false);
  }, []);

  // ckeditor change
  const handleFunction = useCallback(
    (event, editor) => {
      setNewsData(String(event?.editor?.getData()));
    },
    [setNewsData]
  );

  const trashFile = (index) => {
    if (file?.length > 0) {
      let arr = file.filter((f, i) => i !== index);
      setFile(arr);
    }
  };

  const saveData = async (e) => {
    e.preventDefault();
    if (file?.length > 0) {
      try {
        let formData = new FormData();
        file.forEach((f) => {
          formData.append("images", f);
        });
        const allFilesId = await axiosInstance.post("file/uploads", formData);
        try {
          const res = await axiosInstance.post("news/create", {
            uzTitle: titleUzref.current.value,
            krTitle: titleUzKrilref.current.value,
            ruTitle: titleRuref.current.value,
            uzBody: newsData,
            ruBody: newsData,
            krBody: newsData,
            sphereID: directionref.current.props.value.value,
            govSphereID: proDirectionref.current.props.value.value,
            actual: mainPageCheckboxref.current.checked,
            source: sourceref.current.value,
            imageIDs: allFilesId.data,
            smm: smmCheckboxref.current.checked,
          });
          formresetref.current.reset();
          proDirectionref.current.removeValue(
            proDirectionref.current.props.value
          );
          directionref.current.removeValue(directionref.current.props.value);
          setNewsData("");
          setFile(null);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="content-wrapper">
      <div className="content-inner">
        <div className="card mt-3 mx-3">
          <form onSubmit={saveData} ref={formresetref}>
            <div className="card-header d-flex justify-content-between align-items-center bg-primary text-light">
              <h3 className="text-uppercase" style={{ fontWeight: "600" }}>
                Davlat ramzlari
              </h3>
              <button
                type={"submit"}
                className="btn btn-white text-primary"
              >
                <i className="icon-file-upload mr-1"></i>
                Saqlash
              </button>
            </div>
            <div className="card-body" style={{ minHeight: "80vh" }}>
              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={titleUzref}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="./utils/flags/uz.png" alt="uz" />
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
                      ref={titleUzKrilref}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="./utils/flags/uz.png" alt="uz" />
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
                      ref={titleRuref}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="./utils/flags/ru.png" alt="ru" />
                    </div>
                    <label className="label-floating">Заголовок</label>
                  </div>
                </div>
              </div>

              <div className="form-group form-group-floating row">
                <div className="col-lg-3">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={sourceref}
                    />
                    <label className="label-floating">Manba</label>
                  </div>
                </div>

                <div className="col-lg-3">
                  <Select
                    placeholder="Yo'nalish"
                    options={sphere}
                    isClearable={true}
                    ref={directionref}
                  />
                </div>

                <div className="col-lg-3">
                  <Select
                    placeholder="Soha yo'nalishi"
                    options={govSphere}
                    isClearable={true}
                    ref={proDirectionref}
                  />
                </div>

                <div className="col-lg-3">
                  <div className="form-check form-check-inline h-100">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                      ref={mainPageCheckboxref}
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      BOSH SAHIFA
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                      ref={smmCheckboxref}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineRadio2"
                    >
                      SMM
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-lg-12">
                  {/* <input type="file" /> */}
                  <div className="image_container">
                    <div className="image_wrapper">
                      {file?.length > 0 && (
                        <div className="image_top">
                          <div className="border_dash">
                            <ul className="fileList">
                              {file &&
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
                                ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      <div className="image_bottom">
                        <div className="input_text_content">
                          <input
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
                            type="button"
                            onClick={() => setFile(null)}
                          >
                            <i className="fas fa-close"></i> REMOVE
                          </button>
                          {/* <button type="button" onClick={uploadAllFiles}>
                              <i className="fas fa-upload"></i>UPLOAD
                            </button> */}
                              <label htmlFor="browser">
                                <i className="fas fa-upload"></i>BROWSER
                                <input
                                  type="file"
                                  multiple="multiple"
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

              <div className="card-body p-0 m-0">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink	px-1">
                  <li className="nav-item">
                    <a
                      href="#basic-tab1"
                      className="nav-link active"
                      data-toggle="tab"
                    >
                      <img
                        className="mr-2"
                        src="./utils/flags/uz.png"
                        alt="uz"
                      />
                      Qisqacha ma'lumot{" "}
                      <i
                        className="icon-stack-empty ml-2 text-danger"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#basic-tab2"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      <img
                        className="mr-2"
                        src="./utils/flags/uz.png"
                        alt="uz"
                      />
                      Қисқача маълумот
                      <i
                        className="icon-stack-text ml-2 text-success"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#basic-tab3"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      <img
                        className="ml-2"
                        src="./utils/flags/ru.png"
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
              </div>

              {/* ckeditor */}
              <CkeEditor handleFunction={handleFunction} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
