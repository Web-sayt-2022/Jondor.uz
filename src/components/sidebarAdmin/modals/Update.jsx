import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../config';

const Update = ({ Alert, setAlert, setUpdateModal, updateModal, subMenu, setSubMenu, menu, setMenu, setDeleteModal, setSendModal, setMenuOption }) => {

  const editSubMenuUzName = useRef()
  const editSubMenuKrName = useRef()
  const editSubMenuRuName = useRef()
  const editIsVisible = useRef()
  const editSubMenuLink = useRef()

  const navigate = useNavigate()

  const updateFunc = (e) => {
    e.preventDefault()
    console.log(updateModal);
    let sendData = {
      menuId: updateModal.data.menuId,
      id: updateModal.data.id,
      uzName: editSubMenuUzName.current.value,
      krName: editSubMenuKrName.current.value,
      ruName: editSubMenuRuName.current.value,
      url: editSubMenuLink.current ? editSubMenuLink.current.value : null,
      visible: editIsVisible.current.checked,
    }

    if (updateModal.type === "subMenu") {
      axiosInstance.patch(`submenu/update`, sendData).then(res => {
        console.log(res.data);
        Alert(setAlert, "success", "Muvafaqqiyatli o'zgartirildi")
        const newSubMenu = subMenu.map((item) => {
          if (item.id === updateModal.data?.id) {
            item.uzName = sendData.uzName
            item.krName = sendData.krName
            item.ruName = sendData.ruName
            item.visible = sendData.visible
            item.url = sendData.url
          }
          return item
        })
        setSubMenu(newSubMenu);
        setUpdateModal({ isShow: false, data: {}, type: "" })
        navigate("/admin/bosh_sahifa")
      }).catch(err => {
        Alert(setAlert, "warning", err.response.data)
      })
    } else {
      axiosInstance.patch(`menu/update`, sendData).then(res => {
        console.log(res.data);
        Alert(setAlert, "success", "Muvafaqqiyatli o'zgartirildi");
        const newMenu = menu.map((item) => {
          if (item.id === updateModal.data?.id) {
            item.uzName = sendData.uzName
            item.krName = sendData.krName
            item.ruName = sendData.ruName
            item.visible = sendData.visible
          }
          return item
        })
        setMenu(newMenu);
        setUpdateModal({ isShow: false, data: {}, type: "" })
        navigate("/admin/bosh_sahifa")
      }).catch(err => {
        Alert(setAlert, "warning", err.response.data)
      })
    }
    console.log(sendData);
  }

  const sendOptionFunc = (menuId) => {
    const newMenuOption = menu.filter((m) => m.id !== menuId)?.map((item) => {
      const option = {
        value: item.id,
        label: item.uzName
      }

      return option
    })

    console.log(newMenuOption);
    setMenuOption(newMenuOption)
  }

  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-lg" style={{ width: "100%" }}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Tahrirlash</h5>
            <button onClick={() => setUpdateModal({ isShow: false, data: {}, type: "" })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>
          <div className="modal-body pb-0 px-3">
            <form onSubmit={updateFunc} id="form1">
              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={editSubMenuUzName}
                      defaultValue={updateModal?.data?.uzName}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Nomi</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={editSubMenuKrName}
                      defaultValue={updateModal?.data?.krName}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Номи</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={editSubMenuRuName}
                      defaultValue={updateModal?.data?.ruName}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/ru.png" alt="ru" />
                    </div>
                    <label className="label-floating">Имя</label>
                  </div>
                </div>
              </div>

              <div className="form-group form-group-floating row">
                <div className="col-lg-12">
                  {updateModal.data?.url && <div className="form-group form-group-floating row">
                    <div className="col-lg-12">
                      <div className="form-group-feedback form-group-feedback-right">
                        <input
                          type="text"
                          className="form-control form-control-outline"
                          placeholder="Placeholder"
                          defaultValue={updateModal.data?.url}
                          ref={editSubMenuLink}
                          required={true}
                        />
                        <label className="label-floating">URL</label>
                      </div>
                    </div>
                  </div>}
                </div>
              </div>

              <div className="modal-footer px-0" style={{ display: "flex", justifyContent: "space-between" }}>

                <div className="custom-control custom-checkbox custom-control-success" style={{ fontSize: "1rem", display: "flex", alignContent: "center" }}>
                  <input type="checkbox"
                    className="custom-control-input"
                    id="chek"
                    ref={editIsVisible}
                    defaultChecked={updateModal?.data?.visible}
                  />
                  <label className="custom-control-label" for="chek" style={{ textTransform: "uppercase" }}>Faolligi</label>
                </div>

                <div className="d-flex" style={{ gap: "1rem" }}>
                  <button type="submit" className="btn btn-success" style={{ height: "48px" }}>
                    <i className="fa-solid fa-floppy-disk mr-1"></i> Saqlash</button>

                  {updateModal.type === "subMenu" && (
                    <button onClick={() => {
                      sendOptionFunc(updateModal.data.menuId);
                      setSendModal({ isShow: true, data: updateModal.data, type: updateModal.type })
                    }}
                      type="button" className="btn btn-info" style={{ height: "48px" }}>
                      <i className="fa-solid fa-paper-plane"></i> Ko'chirish</button>
                  )}

                  <button onClick={() => setDeleteModal({ isShow: true, data: updateModal.data, type: updateModal.type })} type="button" className="btn btn-danger" style={{ height: "48px" }}>
                    <i className="icon-bin mr-1"></i> O'chirish</button>
                </div>
              </div>

            </form>




          </div>


        </div>
      </div>
    </div>
  );
}

export default React.memo(Update);
