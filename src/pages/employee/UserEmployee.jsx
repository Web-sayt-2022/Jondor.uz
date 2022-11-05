import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Employee from '../../components/employee/Employee';
import { axiosInstance } from '../../config';

const UserEmployee = () => {
  const [employeeGroup, setEmployeeGroup] = useState([])
  const { subMenuId } = useParams()

  // employee o'qib olish
  useEffect(() => {
    axiosInstance.get(`employeeGroup/getBySubmenuId/?code=${subMenuId}`).then(res => {
      console.log(res.data);
      setEmployeeGroup(res.data?.employeeDTOS)
    })
  }, [subMenuId])
  return (
    <div className="card-body p-0 pt-3 px-3">
      <div className="card px-3 py-2" style={{ minHeight: "calc(100vh - 94px)" }}>

        <div className="d-flex mb-2" style={{ alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Xodimlar</h3>
        </div>

        {
          employeeGroup.map((employee, index) => {
            return (
              <Employee key={employee.id} employee={employee} />
            )
          })
        }

      </div>
    </div>
  );
}

export default React.memo(UserEmployee);
