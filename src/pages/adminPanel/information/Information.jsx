import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import AlertContent, { Alert } from '../../../components/alert/Alert';
import { axiosInstance, urlFile } from '../../../config';
// import Select from "react-select";
import { useParams } from 'react-router-dom';
import AddInformation from './modals/AddInformation';
import EditInformation from './modals/EditInformation';

function Information() {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [currentPage, setCurrentPage] = useState(0)
  const [size, setSize] = useState(4)
  const [selected, setSelected] = useState(0)
  const [totalElements, setTotalElements] = useState(0)
  const [addModal, setAddModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState({ isShow: false, id: 0 })
  const [editModal, setEditModal] = useState({ isShow: false, data: {} })
  const [data, setData] = useState([])
  const [fileIds, setFileIds] = useState([])


  const { subMenuId } = useParams()

  useEffect(() => {
    axiosInstance.get(`information/getBySubmenuId?size=${size}&page=${currentPage}&code=${subMenuId}`).then(res => {
      console.log(res.data);
      setData(res.data.content)
      setTotalElements(res.data?.totalElements)
    })
  }, [currentPage, size, subMenuId])

  const handlePageClick = (e) => {
    setSelected(e.selected)
    console.log(1);
    axiosInstance.get(`information/getBySubmenuId?size=${size}&page=${e.selected}&code=${subMenuId}`).then(res => {
      console.log(res.data);
      setData(res.data.content)
      setTotalElements(res.data?.totalElements)
    })
  }


  const deleteFunc = (id) => {
    console.log(id);
    axiosInstance.delete(`information/delete/${id}`).then((res) => {
      Alert(setAlert, "success", "Muvafaqqiyatli o'chirildi")
      console.log(res.data);
      const newData = data?.filter((item) => item.id !== id)
      console.log(newData);
      setData(newData)
    })

    setDeleteModal({ isShow: false, id: 0 })
  }





  const editModalFunc = (item) => {
    setEditModal({ isShow: true, data: item })
    setFileIds(item.generatedNames)
  }

  return (
    <div className="card-body p-0 pt-3 px-3">
      <div className="card">

        <div className="tab-pane fade show active bg-white" id="colored-tab1">
          <div className="card-body py-2">
            <div className="d-flex" style={{ alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Ma'lumotlar</h3>
              <button type="submit" onClick={() => { setAddModal(true) }} className="btn btn-primary">
                <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i>Ma'lumot qo'shish
              </button>
            </div>

            <table id="myTable" className="table table-bordered mb-3 table-striped table-hover Tab">
              <thead>
                <tr className="bg-dark text-white NavLink text-center">
                  <th id='tabRow' style={{ width: "10%" }} className="id">№</th>
                  <th style={{ width: "20%" }} className="qabul">Rasm</th>
                  <th style={{ width: "20%" }} className="reg">Sarlavha</th>
                  <th style={{ width: "35%" }} className="ijrochi">Qisqacha ma'lumot</th>
                  <th style={{ width: "15%" }} className="ijrochi">Amal</th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td className="text-center">{index + 1}</td>
                        <td className='text-center'>
                          <img src={`${urlFile}/${item?.generatedNames[0]}`} style={{ width: "50%", minWidth: "100px", }} alt="" />
                        </td>
                        <td className={'text-center'}>{item.uzTitle}</td>
                        <td className="text-center"> {item.uzDescription} </td>

                        <td className="text-center">
                          <button onClick={() => editModalFunc(item)}
                            type="submit"
                            title="O'zgartirish"
                            className="btn btn-primary mr-1"
                            style={{ padding: "8px 16px" }}>
                            <i className="icon-pencil5" style={{ fontSize: "18px" }}></i>
                          </button>
                          <button type="submit"
                            onClick={() => setDeleteModal({ isShow: true, id: item.id })}
                            className="btn btn-danger ml-1"
                            title="O'chirish"
                            style={{ padding: "8px 16px" }}>
                            <i className="icon-bin" style={{ fontSize: "18px" }}></i>
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>

            <ReactPaginate
              previousLabel="<<"
              nextLabel=">>"
              pageCount={totalElements / size}
              breakLabel="..."
              className="paginate"
              activeClassName="active"
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              forcePage={currentPage}
              onPageActive={selected}
            />
          </div>

          {
            addModal && (
              <AddInformation
                setAddModal={setAddModal}
                Alert={Alert}
                setAlert={setAlert}
                data={data}
                setData={setData}
                totalElements={totalElements}
                setTotalElements={setTotalElements}
              />
            )
          }

          {
            deleteModal.isShow && (
              <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header bg-primary text-white">
                      <h5 className="modal-title">O'chirish</h5>
                      <button onClick={() => setDeleteModal({ isShow: false, id: 0 })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
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
                        <button onClick={() => { deleteFunc(deleteModal.id) }} type="button" style={{ minWidth: "80px" }} className="btn btn-danger">Ha</button>
                        <button onClick={() => setDeleteModal({ isShow: false, id: 0 })} type="button" style={{ minWidth: "80px" }} className="btn btn-primary">Yo'q</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )
          }


          {editModal.isShow && (
            <EditInformation
              editModal={editModal}
              setEditModal={setEditModal}
              Alert={Alert}
              setAlert={setAlert}
              data={data}
              setData={setData}
              fileIds={fileIds}
              setFileIds={setFileIds}
            />
          )
          }

          {/* alert */}
          <AlertContent alert={alert} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Information)