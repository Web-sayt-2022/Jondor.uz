/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AlertContent, { Alert } from '../../../components/alert/Alert';
import { axiosInstance, urlFile } from '../../../config';
import AddEmployee from './modals/AddEmployee';
import Delete from './modals/Delete';
import EditEmployee from './modals/EditEmployee';

const EmployeeGroup = () => {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [employeeGroup, setEmployeeGroup] = useState([])
  const [parentId, setParentId] = useState("")
  const [addEmployee, setAddEmployee] = useState(false)
  const [deleteModal, setDeleteModal] = useState({ isShow: false, id: 0 })
  const [editEmployee, setEditEmployee] = useState({ isShow: false, data: {} })
  const { subMenuId } = useParams()


  // employee o'qib olish
  useEffect(() => {
    axiosInstance.get(`employeeGroup/getBySubmenuId/?code=${subMenuId}`).then(res => {
      console.log(res.data);
      setEmployeeGroup(res.data?.employeeDTOS)
      setParentId(res.data?.id)
    })
  }, [subMenuId])

  // change input orderNumber
  const inputChangeHandler = async (e, employee) => {
    console.log(employee.id);
    console.log(parentId);
    console.log(e.target.value);
    if (e.keyCode === 13) {
      try {
        const res = await axiosInstance.post("stateEmployee/editOrderForEmployeeGroup", {
          id: employee.id,
          parentId: parentId,
          order: e.target.value
        });
        setEmployeeGroup(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="card-body p-0 pt-3 px-3">
      <div className="card px-3 py-2" style={{ minHeight: "calc(100vh - 94px)" }}>

        <div className="d-flex mb-2" style={{ alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Xodimlar</h3>
          <button type="submit" className="btn btn-primary" onClick={() => setAddEmployee(true)}>
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
            {
              employeeGroup.map((employee, index) => {
                return (
                  <tr key={employee.id}>
                    {/* <td className="text-center">{index + 1}</td> */}
                    <td className="text-center">
                      <input type="number" className='inputOrder' defaultValue={employee.orderNumber} onKeyDown={e => inputChangeHandler(e, employee)} />
                    </td>
                    <td className='text-center'>
                      <img src={`${urlFile}/${employee.imageID}`} style={{ width: "50%", minWidth: "100px", }} alt="" />
                    </td>
                    <td className={'text-center'}>{employee?.lastName} {employee?.firstName} {employee?.patronymic}</td>
                    <td className="text-center"> {employee?.uzPosition} </td>

                    <td className="text-center">
                      <button
                        onClick={() => setEditEmployee({ isShow: true, id: employee.id, data: employee })}
                        type="submit"
                        title="O'zgartirish"
                        className="btn btn-primary mr-1"
                        style={{ padding: "8px 16px" }}>
                        <i className="icon-pencil5" style={{ fontSize: "18px" }}></i>
                      </button>
                      <button type="submit"
                        onClick={() => setDeleteModal({ isShow: true, id: employee.id })}
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


        {addEmployee && (
          <AddEmployee
            Alert={Alert}
            setAlert={setAlert}
            employeeGroup={employeeGroup}
            setEmployeeGroup={setEmployeeGroup}
            addEmployee={addEmployee}
            setAddEmployee={setAddEmployee}
          />
        )}

        {
          editEmployee.isShow && (
            <EditEmployee
              employeeGroup={employeeGroup}
              setEmployeeGroup={setEmployeeGroup}
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
              employeeGroup={employeeGroup}
              setEmployeeGroup={setEmployeeGroup}
              Alert={Alert}
              setAlert={setAlert}
              deleteModal={deleteModal}
              setDeleteModal={setDeleteModal}
            />
          )
        }

        {/* alert */}
        <AlertContent alert={alert} />
      </div>
    </div>
  );
}

export default React.memo(EmployeeGroup);

