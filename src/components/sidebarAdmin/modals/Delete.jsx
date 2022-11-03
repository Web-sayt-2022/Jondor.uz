import React from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../config';

const Delete = ({ Alert, setAlert, deleteModal, setDeleteModal, subMenu, setSubMenu, menu, setMenu, setUpdateModal }) => {

  const navigate = useNavigate()

  const deleteSubMenu = () => {
    console.log(deleteModal);

    if (deleteModal.type === "subMenu") {
      axiosInstance.delete(`submenu/delete/${deleteModal.data?.id}`).then(res => {
        console.log(res.data);
        Alert(setAlert, "success", "Muvafaqqiyatli o'chirildi")
        const newSubMenu = subMenu.filter(item => item.id !== deleteModal.data?.id)
        setSubMenu(newSubMenu);
        setDeleteModal({ isShow: false, data: {}, type: "" })
        setUpdateModal({ isShow: false, data: {}, type: "" })
        navigate("/admin/bosh_sahifa")
      }).catch(err => {
        Alert(setAlert, "danger", err.response.data)
        setDeleteModal({ isShow: false, data: {}, type: "" })
        setUpdateModal({ isShow: false, data: {}, type: "" })
        Alert(setAlert, "warning", err.response.data);
        navigate("/admin/bosh_sahifa")
      })
    } else {
      axiosInstance.delete(`menu/delete/${deleteModal.data?.id}`).then(res => {
        console.log(res.data);
        Alert(setAlert, "success", "Muvafaqqiyatli o'chirildi");
        const newMenu = menu.filter(item => item.id !== deleteModal.data?.id)
        setMenu(newMenu);
        setDeleteModal({ isShow: false, data: {}, type: "" })
        setUpdateModal({ isShow: false, data: {}, type: "" })
        navigate("/admin/bosh_sahifa")
      }).catch(err => {
        console.log(err.response.data);
        setDeleteModal({ isShow: false, data: {}, type: "" })
        setUpdateModal({ isShow: false, data: {}, type: "" })
        Alert(setAlert, "warning", err.response.data);
        navigate("/admin/bosh_sahifa")
      })
    }
  }

  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">O'chirish</h5>
            <button onClick={() => setDeleteModal({ isShow: false, data: {}, type: "" })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
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
              <button onClick={() => { deleteSubMenu() }} type="button" style={{ minWidth: "80px" }} className="btn btn-danger">Ha</button>
              <button onClick={() => setDeleteModal({ isShow: false, data: {}, type: "" })} type="button" style={{ minWidth: "80px" }} className="btn btn-primary">Yo'q</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Delete);
