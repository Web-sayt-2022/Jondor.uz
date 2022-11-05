import React, { useState } from 'react';
import { axiosInstance, urlFile } from '../../../config';
import AddFooterCarousel from './modals/AddFooterCarousel';
import EditFooterCarousel from './modals/EditFooterCarousel';
import AlertContent, { Alert } from '../../../components/alert/Alert';
import DeleteFooterCarousel from './modals/DeleteFooterCarousel';
import { useEffect } from 'react';

const FooterCarousel = () => {
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

  return (
    <div className="card-body p-0 pt-3 px-3">
      <div className="card px-3 py-2" style={{ minHeight: "100vh" }}>

        <div className="d-flex mb-2" style={{ alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Footer Carousel</h3>
          <button type="submit" className="btn btn-primary" onClick={() => setAddCarousel(true)}>
            <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i>Link qo'shish
          </button>
        </div>

        <table id="myTable" className="table table-bordered mb-3 table-striped table-hover Tab">
          <thead>
            <tr className="bg-dark text-white NavLink text-center">
              <th id='tabRow' style={{ width: "10%" }} className="id">№</th>
              <th style={{ width: "20%" }} className="qabul">Rasm</th>
              <th style={{ width: "20%" }} className="reg">Nomi</th>
              <th style={{ width: "35%" }} className="ijrochi">Url</th>
              <th style={{ width: "15%" }} className="ijrochi">Amal</th>
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
            <AddFooterCarousel
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
            <EditFooterCarousel
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
            <DeleteFooterCarousel
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

export default React.memo(FooterCarousel);
