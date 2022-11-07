import React, { useState } from 'react';
import { axiosInstance, urlFile } from '../../../config';
import AlertContent, { Alert } from '../../../components/alert/Alert';
import { useEffect } from 'react';
import Add from './modals/Add';
import Edit from './modals/Edit';
import Delete from './modals/Delete';

const GoodKnow = () => {
  const [data, setData] = useState([])
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [addCarousel, setAddCarousel] = useState(false)
  const [editCarousel, setEditCarousel] = useState({ isShow: false, data: {} })
  const [deleteCarousel, setDeleteCarousel] = useState({ isShow: false, id: 0 })

  useEffect(() => {
    axiosInstance.get(`link/list/1`).then((res) => {
      console.log(res.data);
      setData(res.data)
    })
  }, [])

  const addFunc = () => {
    if (data.length >= 10) {
      Alert(setAlert, "warning", "Bilish foydali 10 ta ziyot bo`lishi mumkin emas!")
    } else {
      setAddCarousel(true)
    }
  }

  return (
    <div className="card-body p-0 pt-3 px-3">
      <div className="card px-3 py-2" style={{ minHeight: "100vh" }}>

        <div className="d-flex mb-2" style={{ alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Bilish foydali</h3>
          <button type="submit" className="btn btn-primary" onClick={() => addFunc()}>
            <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i>qo'shish
          </button>
        </div>

        <table id="myTable" className="table table-bordered mb-3 table-striped table-hover Tab">
          <thead>
            <tr className="bg-dark text-white NavLink text-center">
              <th id='tabRow' style={{ width: "10%" }}>№</th>
              <th style={{ width: "20%" }}>Rasm</th>
              <th style={{ width: "25%" }}>Nomi</th>
              <th style={{ width: "25%" }}>Url</th>
              <th style={{ width: "20%" }}>Amal</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td className="text-center">{index + 1}</td>
                    <td className='text-center'>
                      <img src={`${urlFile}/${item.imageID}`} style={{ width: "50%", minWidth: "100px", }} alt="" />
                    </td>
                    <td className={'text-center'}>{item?.uzName}</td>
                    <td className="text-center"> {item?.url} </td>

                    <td className="text-center">
                      <button
                        onClick={() => setEditCarousel({ isShow: true, data: item })}
                        type="submit"
                        title="O'zgartirish"
                        className="btn btn-primary mr-1"
                        style={{ padding: "8px 16px" }}>
                        <i className="icon-pencil5" style={{ fontSize: "18px" }}></i>
                      </button>
                      <button type="submit"
                        onClick={() => setDeleteCarousel({ isShow: true, id: item.id })}
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

        {
          addCarousel && (
            <Add
              data={data}
              setData={setData}
              setAddCarousel={setAddCarousel}
              Alert={Alert}
              setAlert={setAlert}
            />
          )
        }

        {
          editCarousel.isShow && (
            <Edit
              data={data}
              setData={setData}
              editCarousel={editCarousel}
              setEditCarousel={setEditCarousel}
              Alert={Alert}
              setAlert={setAlert}
            />
          )
        }

        {
          deleteCarousel.isShow && (
            <Delete
              data={data}
              setData={setData}
              deleteCarousel={deleteCarousel}
              setDeleteCarousel={setDeleteCarousel}
              Alert={Alert}
              setAlert={setAlert}
            />
          )
        }

        {/* alert */}
        <AlertContent alert={alert} />
      </div>
    </div>
  );
}

export default React.memo(GoodKnow);
