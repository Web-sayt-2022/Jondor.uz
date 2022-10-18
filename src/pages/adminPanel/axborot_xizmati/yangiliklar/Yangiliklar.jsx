import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import AlertContent, { Alert } from '../../../../components/alert/Alert';
import { axiosInstance } from '../../../../config';


function Yangiliklar() {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(10)

    useEffect(() => {
      axiosInstance.get(`news/getAll`, {
        page: currentPage,
        size: size,
        sort: null
      }).then(res => {
        console.log(res.data);
      })
    }, [])

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
                            <button type="submit" className="btn btn-primary">
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