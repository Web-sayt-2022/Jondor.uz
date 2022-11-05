import React from 'react';
import { axiosInstance } from '../../../../config';

const DeleteFooterCarousel = ({ deleteCarousel, setDeleteCarousel, Alert, setAlert, data, setData }) => {
  console.log(deleteCarousel);
  const deleteFunc = () => {
    axiosInstance.delete(`link/delete/${deleteCarousel.id}`).then((res) => {
      const newData = data.filter((item) => item.id !== deleteCarousel.id)
      console.log(newData);
      setData(newData);
      setDeleteCarousel({ isShow: false, id: 0 })
      Alert(setAlert, "success", "Muvafaqqiyatli o'chirildi");
    }).catch(err => {
      Alert(setAlert, "warning", err.response.data);
    })
  }

  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">O'chirish</h5>
            <button onClick={() => setDeleteCarousel({ isShow: false, id: 0 })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>

          <div className="modal-body pb-0">
            <div className="form-group">
              <h5> Ushbu ma'lumotlarni
                <span className="text-danger" style={{ fontWeight: "600" }}> o'chirishni </span> tasdiqlaysizmi?
              </h5>
            </div>

          </div>

          <div className="modal-footer" style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={() => { deleteFunc(deleteCarousel.id) }} type="button" style={{ minWidth: "80px" }} className="btn btn-danger">Ha</button>
            <button onClick={() => setDeleteCarousel({ isShow: false, id: 0 })} type="button" style={{ minWidth: "80px" }} className="btn btn-primary">Yo'q</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DeleteFooterCarousel);
