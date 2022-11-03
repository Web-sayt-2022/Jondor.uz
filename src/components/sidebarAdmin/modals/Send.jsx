import React from 'react';
import { useRef } from 'react';
import Select from "react-select";
import { axiosInstance } from '../../../config';

const Send = ({ Alert, setAlert, sendModal, setSendModal, menuOption, subMenu, setSubMenu, setUpdateModal }) => {

  const sendMenuRef = useRef()

  const sendFunc = () => {
    const sendData = {
      submenuId: sendModal.data.id,
      menuId: sendMenuRef.current.props.value.value
    }
    console.log(sendData);

    axiosInstance.patch(`submenu/changeMenu`, sendData).then(res => {
      const newSubMenu = subMenu.map((item) => {
        if (item.id === sendData.submenuId) {
          item.menuId = sendData.menuId
        }
        return item
      })
      console.log(newSubMenu);
      setSubMenu(newSubMenu);
      setSendModal({ isShow: false, data: {}, type: "" })
      setUpdateModal({ isShow: false, data: {}, type: "" })
      Alert(setAlert, "success", "Muvafaqqiyatli o'zgartirildi")

    }).catch(err => {
      Alert(setAlert, "warning", err.response.data)
    })
  }


  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="" style={{ width: "40%", margin: "0 auto" }}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Ko'chirish</h5>
            <button onClick={() => setSendModal({ isShow: false, data: {}, type: "" })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>

          <div className="modal-body pb-2">
            <div className="form-group form-group-floating row mb-2">
              <div className="col-lg-8">
                <Select
                  placeholder="Menuni tanlang..."
                  options={menuOption}
                  isClearable={true}
                  ref={sendMenuRef}
                />
              </div>

              <div className="col-lg-4">
                <button onClick={() => sendFunc()}
                  type="button"
                  className="btn btn-success w-100 h-100">
                  <i className="fa-solid fa-paper-plane"></i> Yuborish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Send);
