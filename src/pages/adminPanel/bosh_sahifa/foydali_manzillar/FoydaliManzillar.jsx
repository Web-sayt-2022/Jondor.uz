import React, { useRef, useState } from 'react';
import ReactPaginate from "react-paginate";
import AlertContent, { Alert } from '../../../../components/alert/Alert';
import { axiosInstance } from '../../../../config';


const FoydaliManzillar = () => {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [currentPage, setCurrentPage] = useState(0)
  const [size, setSize] = useState(10)
  const [addModal, setAddModal] = useState(false)
  const [file, setFile] = useState(null);

  const titleUzref = useRef();
  const titleUzKrilref = useRef();
  const titleRuref = useRef();

  const trashFile = (index) => {
    if (file?.length > 0) {
      let arr = file.filter((f, i) => i !== index);
      setFile(arr);
    }
  };

  const handlePageClick = (e) => {
    axiosInstance.get(``, {
      page: e.selected,
      size: size
    }).then(res => {
      console.log(1);
    }).catch((error) => {
      Alert(setAlert, "warning", error.response.data)
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
              <button type="submit" onClick={() => { setAddModal(true); }} className="btn btn-primary">
                <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i>Yangilik qo'shish
              </button>
            </div>

            <table id="myTable" className="table table-bordered mb-3 table-striped table-hover Tab">
              <thead>
                <tr className="bg-dark text-white NavLink text-center">
                  <th id='tabRow' style={{ width: "10%" }} className="id">№</th>
                  <th style={{ width: "20%" }} className="qabul">Rasm</th>
                  <th style={{ width: "20%" }} className="reg">Sarlavha</th>
                  <th style={{ width: "35%" }} className="ijrochi">Link</th>
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


          </div>
        </div>


        {
          addModal && (
            <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: "9999", background: "rgba(0, 0, 0, 0.5)" }}>
              <div className="" style={{ width: "80%" }}>
                <div className="modal-content">
                  <div className="modal-header bg-primary text-white">
                    <h5 className="modal-title">Yangilik qo'shish</h5>

                    <div className="d-flex" style={{ justifyContent: "center", alignItems: "center" }}>
                      <button onClick={() => { setAddModal(false) }} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
                        &times;
                      </button>
                    </div>
                  </div>

                  <div className="modal-body">
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
                                          <label htmlFor="browser">
                                            <i className="fas fa-upload"></i>BROWSER
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

                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* alert */}
        <AlertContent alert={alert} />
      </div>
    </div >
  );
}

export default FoydaliManzillar;
