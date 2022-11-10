/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AlertContent, { Alert } from '../../../components/alert/Alert';
import { axiosInstance, urlFile } from '../../../config';
import AddEmployee from './modals/AddEmployee';
import AddGroup from './modals/AddGroup';
import Delete from './modals/Delete';
import EditDesc from './modals/EditDesc';
import EditEmployee from './modals/EditEmployee';
import parse from "html-react-parser"
import EditSectorArea from './modals/EditSectorArea';

const Sectors = () => {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [govGroup, setGovGroup] = useState([])
  const [addGroup, setAddGroup] = useState(false)
  const [addEmployee, setAddEmployee] = useState({ isShow: false, id: 0 })
  const [deleteModal, setDeleteModal] = useState({ isShow: false, id: 0, sectorId: 0 })
  const [editEmployee, setEditEmployee] = useState({ isShow: false, data: {} })
  const [editDesc, setEditDesc] = useState({ isShow: false, data: {} })
  const [editSectorArea, setEditSectorArea] = useState({ isShow: false, data: {} })

  // group o'qib olish
  useEffect(() => {
    axiosInstance.get(`sector/list`).then(res => {
      const newData = res.data.sort((firstItem, secondItem) => firstItem.orderNumber - secondItem.orderNumber);
      console.log(newData);
      setGovGroup(newData)
    })
  }, [])

  return (
    <div className="card-body p-0 pt-3 px-3">
      <div className="card px-3 py-2" style={{ minHeight: "calc(100vh - 94px)" }}>

        <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Sektorlar</h3>

        <div id="accordion-parent">
          {govGroup.map((item, index) => {
            return (
              <div className="card" key={item.id}>
                <div className="card-header py-3 bg-primary text-white">
                  <h6 className="card-title text-white collapsed" style={{ width: "100%", cursor: "pointer", textTransform: "uppercase" }}
                    data-toggle="collapse" href={`#accordion-item-nested-parent${index}`} aria-expanded="false">
                    {item.uzName}
                  </h6>
                </div>

                <div id={`accordion-item-nested-parent${index}`} className="collapse" data-parent="#accordion-parent">
                  <div className="card-body">

                    <div id={`accordion-child${index}`}>
                      <div className="card">
                        <div className="card-header bg-primary px-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h6 className="card-title text-white collapsed" style={{ width: "100%", cursor: "pointer", textTransform: "uppercase" }} data-toggle="collapse"
                            href={`#accordion-item-nested-child${2 * index - 1}`} aria-expanded="false">
                            Sektor hududlari
                          </h6>
                          <i className="icon-pencil5 text-white"
                            onClick={() => setEditSectorArea({ isShow: true, data: item })}
                            style={{ fontSize: "18px", cursor: "pointer" }}
                          ></i>
                        </div>

                        <div id={`accordion-item-nested-child${2 * index - 1}`} className="collapse" data-parent={`#accordion-child${index}`}>
                          <div className="card-body">
                            {parse(item.uzSectorArea)}
                          </div>
                        </div>
                      </div>

                      <div className="card mb-0">
                        <div className="card-header bg-primary px-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h6 className="card-title text-white collapsed" style={{ width: "100%", cursor: "pointer", textTransform: "uppercase" }} data-toggle="collapse"
                            href={`#accordion-item-nested-child${2 * index}`} aria-expanded="false">
                            Qisqacha ma'lumot
                          </h6>
                          <i className="icon-pencil5 text-white"
                            onClick={() => setEditDesc({ isShow: true, data: item })}
                            style={{ fontSize: "18px", cursor: "pointer" }}
                          ></i>
                        </div>

                        <div id={`accordion-item-nested-child${2 * index}`} className="collapse" data-parent={`#accordion-child${index}`}>
                          <div className="card-body">
                            {parse(item.uzDescription)}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="d-flex mb-2 px-3" style={{ alignItems: "center", justifyContent: "space-between" }}>
                    <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Xodim</h3>
                    <button type="submit" className="btn btn-primary" onClick={() => setAddEmployee({ isShow: true, id: item.id })}>
                      <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i>Xodim qo'shish
                    </button>
                  </div>

                  <div className="px-3">
                    <table className="table table-bordered mb-3 table-striped table-hover Tab px-3">
                      <thead>
                        <tr className="bg-dark text-white NavLink text-center">
                          <th id='tabRow' style={{ width: "10%" }} className="id">№</th>
                          <th style={{ width: "20%" }} className="qabul">Rasm</th>
                          <th style={{ width: "20%" }} className="reg">Ism familiyasi otasining ismi</th>
                          <th style={{ width: "35%" }} className="ijrochi">Lavozimi</th>
                          <th style={{ width: "15%" }} className="ijrochi">Amal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item?.stateEmployeeDTO && (
                          <tr>
                            <td className="text-center">1</td>
                            <td className='text-center'>
                              <img src={`${urlFile}/${item?.stateEmployeeDTO?.imageID}`} style={{ width: "50%", minWidth: "100px", }} alt="" />
                            </td>
                            <td className={'text-center'}>{item?.stateEmployeeDTO?.lastName} {item?.stateEmployeeDTO?.firstName} {item?.stateEmployeeDTO?.patronymic}</td>
                            <td className="text-center"> {item?.stateEmployeeDTO?.uzPosition} </td>

                            <td className="text-center">
                              <button
                                onClick={() => setEditEmployee({ isShow: true, data: item })}
                                type="submit"
                                title="O'zgartirish"
                                className="btn btn-primary mr-1"
                                style={{ padding: "8px 16px" }}>
                                <i className="icon-pencil5" style={{ fontSize: "18px" }}></i>
                              </button>
                              <button type="submit"
                                onClick={() => setDeleteModal({ isShow: true, id: item?.stateEmployeeDTO?.id, sectorId: item.id })}
                                className="btn btn-danger ml-1"
                                title="O'chirish"
                                style={{ padding: "8px 16px" }}>
                                <i className="icon-bin" style={{ fontSize: "18px" }}></i>
                              </button>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          })}
        </div>


        {
          addGroup && (
            <AddGroup
              Alert={Alert}
              setAlert={setAlert}
              setGovGroup={setGovGroup}
              setAddGroup={setAddGroup}
              govGroup={govGroup}
            />

          )
        }

        {
          editSectorArea.isShow && (
            <EditSectorArea
              Alert={Alert}
              setAlert={setAlert}
              govGroup={govGroup}
              setGovGroup={setGovGroup}
              editSectorArea={editSectorArea}
              setEditSectorArea={setEditSectorArea}
            />

          )
        }

        {
          editDesc.isShow && (
            <EditDesc
              govGroup={govGroup}
              setGovGroup={setGovGroup}
              Alert={Alert}
              setAlert={setAlert}
              editDesc={editDesc}
              setEditDesc={setEditDesc}
            />
          )
        }

        {
          addEmployee.isShow && (
            <AddEmployee
              Alert={Alert}
              setAlert={setAlert}
              govGroup={govGroup}
              setGovGroup={setGovGroup}
              addEmployee={addEmployee}
              setAddEmployee={setAddEmployee}
            />
          )
        }

        {
          editEmployee.isShow && (
            <EditEmployee
              govGroup={govGroup}
              setGovGroup={setGovGroup}
              Alert={Alert}
              setAlert={setAlert}
              editEmployee={editEmployee}
              setEditEmployee={setEditEmployee}
            />
          )
        }

        {
          deleteModal.isShow && (
            <Delete
              govGroup={govGroup}
              setGovGroup={setGovGroup}
              Alert={Alert}
              setAlert={setAlert}
              deleteModal={deleteModal}
              setDeleteModal={setDeleteModal}
            />
          )
        }

        {/* alert */}
        <AlertContent alert={alert} />
      </div >
    </div >
  );
}

export default React.memo(Sectors);

