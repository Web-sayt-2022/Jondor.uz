import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import AlertContent, { Alert } from '../../../components/alert/Alert';
import { axiosInstance, urlFile } from '../../../config';
import { useParams } from 'react-router-dom';
import AddNews from './modals/AddNews';
import EditNews from './modals/EditNews';
import DeleteNews from './modals/DeleteNews';

function News() {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [currentPage, setCurrentPage] = useState(0)
  const [size, setSize] = useState(2)
  const [selected, setSelected] = useState(0)
  const [totalElements, setTotalElements] = useState(0)
  const [addModal, setAddModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState({ isShow: false, id: 0 })
  const [editModal, setEditModal] = useState({ isShow: false, data: {} })
  const [data, setData] = useState([])
  const [fileIds, setFileIds] = useState([])
  const [sphere, setSphere] = useState([])
  const { subMenuId } = useParams()

  useEffect(() => {
    axiosInstance.get(`news/getBySubmenuId?size=${size}&page=${currentPage}&code=${subMenuId}`).then(res => {
      console.log(res.data);
      setData(res.data.content)
      setTotalElements(res.data?.totalElements)
    })
  }, [currentPage, size, subMenuId])

  // sphere 
  useEffect(() => {
    axiosInstance.get(`newsSphere/list`).then(res => {
      const option = res.data?.map(item => {
        return { label: item.uzName, value: item.id }
      })
      setSphere(option)
    })
  }, [])

  const handlePageClick = (e) => {
    setSelected(e.selected)
    console.log(1);
    axiosInstance.get(`news/getBySubmenuId?size=${size}&page=${e.selected}&code=${subMenuId}`).then(res => {
      console.log(res.data);
      setData(res.data.content)
      setTotalElements(res.data?.totalElements)
    })
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
              <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Yangiliklar</h3>
              {/* onClick={() => setNewAddModal(true)} selectFunc() */}
              <button type="submit" onClick={() => { setAddModal(true) }} className="btn btn-primary">
                <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i>Yangilik qo'shish
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
              <AddNews
                setAddModal={setAddModal}
                Alert={Alert}
                setAlert={setAlert}
                data={data}
                setData={setData}
                totalElements={totalElements}
                setTotalElements={setTotalElements}
                sphere={sphere}
              />
            )
          }

          {
            deleteModal.isShow && (
              <DeleteNews
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
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
            editModal.isShow && (
              <EditNews
                editModal={editModal}
                setEditModal={setEditModal}
                Alert={Alert}
                setAlert={setAlert}
                data={data}
                setData={setData}
                fileIds={fileIds}
                setFileIds={setFileIds}
                sphere={sphere}
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

export default React.memo(News)