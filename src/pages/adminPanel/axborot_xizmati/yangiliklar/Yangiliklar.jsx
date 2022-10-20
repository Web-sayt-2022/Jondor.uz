import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactPaginate from "react-paginate";
import AlertContent, { Alert } from '../../../../components/alert/Alert';
import { axiosInstance } from '../../../../config';
import Select from "react-select";
import CkeEditor from "../../../../components/ckeEditor/CkeEditor";



function Yangiliklar() {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [currentPage, setCurrentPage] = useState(0)
  const [size, setSize] = useState(10)
  const [addModal, setAddModal] = useState(false)

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
  // const formresetref = useRef();

  useEffect(() => {
    
    // axiosInstance.post(`news/getAll`, {
    //   page: currentPage,
    //   size: size,
    //   sort: "aaa"
    // }).then(res => {
    //   console.log(res.data);
    // })

    axiosInstance.get(`news/getAll?size=${size}&page=${currentPage}`).then(res => {
      console.log(res.data);
    })
  }, [currentPage, size])

  const handlePageClick = (e) => {
    // axiosInstanceKadr.get(`getAll/${oi}?page=${e.selected}&size=${size}`, {
    //   page: e.selected,
    //   size: size
    // }).then(res => dispatch(getUsers(res?.data?.content)))
    axiosInstance.get(``, {
      page: e.selected,
      size: size
    }).then(res => {
      console.log(1);
    }).catch((error) => {
      Alert(setAlert, "warning", error.response.data)
    })
  }

  const trashFile = (index) => {
    if (file?.length > 0) {
      let arr = file.filter((f, i) => i !== index);
      setFile(arr);
    }
  };

  const saveData = async () => {
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
          console.log(res.data);
          // formresetref.current.reset();
          proDirectionref.current && proDirectionref.current.removeValue(
            proDirectionref.current.props.value
          );
          directionref.current && directionref.current.removeValue(directionref.current.props.value);
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

  const handleFunction = useCallback(
    (event, editor) => {
      setNewsData(String(event?.editor?.getData()));
    },
    [setNewsData]
  );

  const selectFunc = () => {
    axiosInstance.get("sphere/list").then((res) => {
      console.log(res.data);
      if (res.data?.length > 0) {
        let arr = [];
        res.data?.forEach((dat) => {
          arr.push({ value: dat.id, label: dat.uzName });
        });
        setSphere(arr);
      }
    })

    axiosInstance.get("govSphere/list").then((res) => {
      console.log(res.data);
      if (res.data?.length > 0) {
        let arr = [];
        res.data?.forEach((dat) => {
          arr.push({ value: dat.id, label: dat.uzName });
        });
        setGovSphere(arr);
      }

    })
  }

  return (
    <div className="card-body p-0 pt-3 pl-3">
      <div className="card">

        <div className="tab-pane fade show active bg-white" id="colored-tab1">
          <div className="card-body py-2">
            <div className="d-flex" style={{ alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Yangiliklar</h3>
              {/* onClick={() => setNewAddModal(true)} */}
              <button type="submit" onClick={() => { setAddModal(true); selectFunc() }} className="btn btn-primary">
                <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i>Yangilik qo'shish
              </button>
            </div>

            <table id="myTable" className="table table-bordered mb-3 table-striped table-hover Tab">
              <thead>
                <tr className="bg-dark text-white NavLink text-center">
                  <th id='tabRow' style={{ width: "10%" }} className="id">№</th>
                  <th style={{ width: "20%" }} className="qabul">Rasm</th>
                  <th style={{ width: "20%" }} className="reg">Sarlavha</th>
                  <th style={{ width: "35%" }} className="ijrochi">Matn</th>
                  <th style={{ width: "15%" }} className="ijrochi">amal</th>
                </tr>
              </thead>
              <tbody>

                <tr key={1}>
                  <td className="text-center">{"1"}</td>
                  <td className='text-center'>
                    <img src={"https://static4.depositphotos.com/1009043/363/i/600/depositphotos_3631833-stock-photo-cottage-in-winter-orlicke-hory.jpg"} style={{ width: "50%", minWidth: "100px", }} alt="" />
                  </td>
                  <td className={'text-center'}>{"sadasda"}</td>
                  <td className="text-center"> {"asdas"} </td>

                  <td className="text-center">
                    {/* onClick={() => setEditModal({ isEdit: true, data: item })} */}
                    <button type="submit" title="O'zgartirish" className="btn btn-primary mr-1" style={{ padding: "4px 8px" }}>
                      <i className="icon-pencil5" style={{ fontSize: "18px" }}></i>
                    </button>
                    {/* onClick={() => { setDeleteModal({ isModal: true, id: item.id }); }} */}
                    <button type="submit" className="btn btn-danger ml-1" title="O'chirish" style={{ padding: "4px 8px" }}>
                      <i className="icon-bin" style={{ fontSize: "18px" }}></i>
                    </button>
                  </td>
                </tr>





              </tbody>
            </table>

            <ReactPaginate
              previousLabel="<<"
              nextLabel=">>"
              pageCount={500 / size}
              breakLabel="..."
              className="paginate"
              activeClassName="active"
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              forcePage={currentPage}
            />

            {
              addModal && (
                <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: "9999", background: "rgba(0, 0, 0, 0.5)" }}>
                  <div className="" style={{ width: "80%", height: "100vh" }}>
                    <div className="modal-content">
                      <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">Yangilik qo'shish</h5>

                        <div className="d-flex" style={{ justifyContent: "center", alignItems: "center" }}>
                          <button
                            type='button'
                            onClick={() => saveData()}
                            className="btn btn-white text-primary">
                            <i className="icon-file-upload mr-1"></i>
                            Saqlash
                          </button>
                          <button onClick={() => { setAddModal(false) }} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
                            &times;
                          </button>
                        </div>
                      </div>

                      <div className="modal-body px-2 pb-0" style={{ height: 'calc(100vh - 60px)', overflowY: 'scroll', overflowX: "hidden" }}>
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
                                          ref={titleUzref}
                                        />
                                        <div className="form-control-feedback text-bold text-primary">
                                          <img src="../../utils/flags/uz.png" alt="uz" />
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
                                          <img src="../../utils/flags/uz.png" alt="uz" />
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
                                          <img src="../../utils/flags/ru.png" alt="ru" />
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
                                              src="../../utils/flags/uz.png"
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
                                              src="../../utils/flags/uz.png"
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
                                              src="../../utils/flags/ru.png"
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

                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )
            }

            {/* {editModal.isEdit && <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog modal-lg" style={{ width: "100%" }}>
              <div className="modal-content">
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title">Qarindoshni tahrirlash</h5>
                  <button onClick={() => setEditModal({ isEdit: false, date: [] })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
                    &times;
                  </button>
                </div>

                <form>
                  <div className="modal-body px-2 pb-0">
                    <div className="form-group">
                      <div className="row mb-3 form-group form-group-floating">

                        <div className="col-lg-4">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control form-control-outline InputCard "
                              placeholder="Placeholder"
                              defaultValue={editModal?.data?.lastName}
                              // disabled={true}
                              ref={editLastNameRef}
                            />
                            <label
                              className="label-floating kadrInp">Fuqaroning familiyasi:</label>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control form-control-outline InputCard "
                              placeholder="Placeholder"
                              defaultValue={editModal?.data?.firstName}
                              // disabled={true}
                              ref={editFirstNameRef}
                            />
                            <label
                              className="label-floating kadrInp">Fuqaroning ismi:</label>
                          </div>
                        </div>


                        <div className="col-lg-4">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control form-control-outline InputCard "
                              placeholder="Placeholder"
                              defaultValue={editModal?.data?.middleName}
                              // disabled={true}
                              ref={editMiddleNameRef}
                            />
                            <label
                              className="label-floating kadrInp">Fuqaroning otasining ismi:</label>
                          </div>
                        </div>


                      </div>

                      <div className="row mb-3 form-group form-group-floating">
                        <div className="col-lg-4">
                         <NumberMaskEdit />
                        </div>

                        <div className="col-lg-4">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control form-control-outline InputCard "
                              placeholder="Placeholder"
                              defaultValue={editModal?.data?.birthPlace}
                              // disabled={true}
                              ref={editBirthPlaceRef}
                            />
                            <label
                              className="label-floating kadrInp">Tug'ilgan joyi:</label>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="position-relative">
                            <Select
                              options={qarindoshlarOption}
                              // menuPlacement="top"
                              ref={editkinshipRef}
                              defaultValue={{ value: editModal?.data?.kinship, label: editModal?.data?.kinship }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3 form-group form-group-floating">
                        <div className="col-lg-4">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control form-control-outline InputCard "
                              placeholder="Placeholder"
                              defaultValue={editModal?.data?.workplace}
                              ref={editWorkPlaceRef}
                            />
                            <label
                              className="label-floating kadrInp">Ishlash joyi va lavozimi:</label>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control form-control-outline InputCard "
                              placeholder="Placeholder"
                              defaultValue={editModal?.data?.locus}
                              ref={editLocusRef}
                            />
                            <label
                              className="label-floating kadrInp">Yashash joyi:</label>
                          </div>
                        </div>

                        <div className="col-lg-4 form-group form-group-floating mb-0">
                          <button onClick={() => editFunc()} type="button" className="btn btn-primary w-100 h-100" >
                            <i className="fa-solid fa-floppy-disk mr-1"></i>Saqlash</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>} */}

            {/* {deleteModal.isModal && <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title">O'chirish</h5>
                  <button onClick={() => setDeleteModal({ isModal: false, id: 0 })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
                    &times;
                  </button>
                </div>

                <form action="#">
                  <div className="modal-body pb-0">
                    <div className="form-group">
                      <h5> Ushbu ma'lumotlarni
                        <span className="text-danger" style={{ fontWeight: "600" }}> o'chirishni </span> tasdiqlaysizmi?
                      </h5>
                    </div>

                  </div>

                  <div className="modal-footer" style={{ display: "flex", justifyContent: "center" }}>
                    <button onClick={() => { setDeleteModal({ isModal: false, id: 0 }); deleteFunc() }} type="button" style={{ minWidth: "80px" }} className="btn btn-danger">Ha</button>
                    <button onClick={() => setDeleteModal({ isModal: false, id: 0 })} type="button" style={{ minWidth: "80px" }} className="btn btn-primary">Yo'q</button>
                  </div>
                </form>
              </div>
            </div>
          </div>} */}
          </div>


          {/* alert */}
          <AlertContent alert={alert} />
        </div>
      </div>
    </div>
  )
}

export default Yangiliklar