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
import EditGroup from './modals/EditGroup';
import './govGroup.css';

const GovGroup = () => {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [govGroup, setGovGroup] = useState([])
  const [addGroup, setAddGroup] = useState(false)
  const [addEmployee, setAddEmployee] = useState({ isShow: false, id: 0 })
  const [deleteModal, setDeleteModal] = useState({ isShow: false, id: 0, type: "", index: 0 })
  const [editEmployee, setEditEmployee] = useState({ isShow: false, id: 0, data: {} })
  const [editDesc, setEditDesc] = useState({ isShow: false, data: {} })
  const [editGroup, setEditGroup] = useState({ isShow: false, data: {} })
  const { subMenuId } = useParams()

  // group o'qib olish
  useEffect(() => {
    let isMounted = true;

    axiosInstance.get(`subGovGroup/getBySubmenuId/?code=${subMenuId}`).then(res => {
      if (isMounted)
        setGovGroup(res.data)
    })

    return () => isMounted = false;
  }, [subMenuId]);

  // change input orderNumber
  const inputChangeHandler = async (e, govId, employee) => {
    if (e.keyCode === 13) {
      try {
        const res = await axiosInstance.post("stateEmployee/editOrderForSubGovGroup", {
          id: employee.id,
          parentId: govId,
          order: e.target.value
        });
        let arr = govGroup.filter(g => {
          if (g.id === govId) {
            g.orderList = res.data;
          }
          return g;
        })
        setGovGroup(arr);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="card-body p-0 pt-3 px-3">
      <div className="card px-3 py-2" style={{ minHeight: "calc(100vh - 94px)" }}>
        <div className="d-flex mb-2" style={{ alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Xodimlar guruhi</h3>
          <button type="submit" className="btn btn-primary" onClick={() => setAddGroup(true)}>
            <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i>Bo'lim qo'shish
          </button>
        </div>

        {govGroup.length > 0 && (
          <div id="accordion-parent">
            {govGroup.map((gov, govIndex) => (
              <div className="card py-0" key={gov.id}>
                <div className="card-header bg-primary px-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h6 className="card-title text-white collapsed" style={{ width: "100%", cursor: "pointer", textTransform: "uppercase" }}
                    data-toggle="collapse" href={`#accordion-item-nested-parent${gov.id}`} aria-expanded="false">
                    {gov.uzName}
                  </h6>
                  <div className="d-flex" style={{ gap: "16px" }}>
                    <i className="icon-pencil5 text-white"
                      onClick={() => setEditGroup({ isShow: true, data: gov })}
                      style={{ fontSize: "18px", cursor: "pointer" }}
                    ></i>
                    <i className="icon-bin text-white"
                      onClick={() => setDeleteModal({ isShow: true, id: gov.id, type: "govGroup", index: 0 })}
                      style={{ fontSize: "18px", cursor: "pointer" }}
                    ></i>
                  </div>
                </div>

                <div id={`accordion-item-nested-parent${gov.id}`} className="collapse" data-parent="#accordion-parent">
                  <div className="card-body">
                    <div id={`accordion-child${gov.id}`}>
                      <div className="card">
                        <div className="card-header bg-primary px-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h6 className="card-title text-white collapsed" style={{ width: "100%", cursor: "pointer", textTransform: "uppercase" }} data-toggle="collapse"
                            href={`#accordion-item-nested-child${gov.id}`} aria-expanded="false">
                            {gov.uzDescriptionTitle}
                          </h6>
                          <i className="icon-pencil5 text-white"
                            onClick={() => setEditDesc({ isShow: true, data: gov })}
                            style={{ fontSize: "18px", cursor: "pointer" }}
                          ></i>
                        </div>
                        <div id={`accordion-item-nested-child${gov.id}`} className="collapse" data-parent={`#accordion-child${gov.id}`}>
                          <div className="card-body">
                            {parse(gov.uzDescription)}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-2" style={{ alignItems: "center", justifyContent: "space-between" }}>
                        <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>{gov.uzTitle}</h3>
                        <button type="submit" className="btn btn-primary" onClick={() => setAddEmployee({ isShow: true, id: gov.id })}>
                          <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i>Xodim qo'shish
                        </button>
                      </div>
                      <table id="myTable" className="table table-bordered mb-3 table-striped table-hover Tab">
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
                          {gov?.orderList.map((employee) => (
                            <tr key={employee.id}>
                              {/* <td className="text-center">{index + 1}</td> */}
                              <td className="text-center">
                                <input type="number" className='inputOrder' defaultValue={employee.orderNumber} onKeyDown={e => inputChangeHandler(e, gov.id, employee)} />
                              </td>
                              <td className='text-center'>
                                <img src={`${urlFile}/${employee.imageID}`} style={{ width: "50%", minWidth: "100px", }} alt="" />
                              </td>
                              <td className={'text-center'}>{employee?.lastName} {employee?.firstName} {employee?.patronymic}</td>
                              <td className="text-center"> {employee?.uzPosition} </td>

                              <td className="text-center">
                                <button
                                  onClick={() => setEditEmployee({ isShow: true, id: gov.id, data: employee })}
                                  type="submit"
                                  title="O'zgartirish"
                                  className="btn btn-primary mr-1"
                                  style={{ padding: "8px 16px" }}>
                                  <i className="icon-pencil5" style={{ fontSize: "18px" }}></i>
                                </button>
                                <button type="submit"
                                  onClick={() => setDeleteModal({ isShow: true, id: employee.id, type: "employee", index: govIndex })}
                                  className="btn btn-danger ml-1"
                                  title="O'chirish"
                                  style={{ padding: "8px 16px" }}>
                                  <i className="icon-bin" style={{ fontSize: "18px" }}></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {addGroup && (
          <AddGroup
            Alert={Alert}
            setAlert={setAlert}
            setGovGroup={setGovGroup}
            setAddGroup={setAddGroup}
            govGroup={govGroup}
          />
        )}

        {editGroup.isShow && (
          <EditGroup
            Alert={Alert}
            setAlert={setAlert}
            govGroup={govGroup}
            setGovGroup={setGovGroup}
            editGroup={editGroup}
            setEditGroup={setEditGroup}
          />

        )}

        {editDesc.isShow && (
          <EditDesc
            govGroup={govGroup}
            setGovGroup={setGovGroup}
            Alert={Alert}
            setAlert={setAlert}
            editDesc={editDesc}
            setEditDesc={setEditDesc}
          />
        )}

        {addEmployee.isShow && (
          <AddEmployee
            Alert={Alert}
            setAlert={setAlert}
            govGroup={govGroup}
            setGovGroup={setGovGroup}
            addEmployee={addEmployee}
            setAddEmployee={setAddEmployee}
          />
        )}

        {editEmployee.isShow && (
          <EditEmployee
            govGroup={govGroup}
            setGovGroup={setGovGroup}
            Alert={Alert}
            setAlert={setAlert}
            editEmployee={editEmployee}
            setEditEmployee={setEditEmployee}
          />
        )}

        {deleteModal.isShow && (
          <Delete
            govGroup={govGroup}
            setGovGroup={setGovGroup}
            Alert={Alert}
            setAlert={setAlert}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
          />
        )}

        {/* alert */}
        <AlertContent alert={alert} />
      </div>
    </div>
  );
}

export default React.memo(GovGroup);

