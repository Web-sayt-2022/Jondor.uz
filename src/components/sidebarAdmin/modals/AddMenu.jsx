import React from 'react';
import { useRef } from 'react';
import { axiosInstance } from '../../../config';

const AddMenu = ({setAddMenuModal, Alert, setAlert, menu, setMenu}) => {
  const menuUzName = useRef()
  const menuKrName = useRef()
  const menuRuName = useRef()

  const addMenuFunc = (e) => {
    e.preventDefault();
    const newMenu = {
      uzName: menuUzName.current.value,
      krName: menuKrName.current.value,
      ruName: menuRuName.current.value,
    }

    axiosInstance.post("menu/create", newMenu).then((res) => {
      console.log(res.data);
      setMenu([...menu, res.data])
      setAddMenuModal(false)
      Alert(setAlert, "success", "Muvafaqqiyatli qo'shildi")
    }).catch(err => {
      Alert(setAlert, "warning", err.response.data)
    })
  }

  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Menu qo'shish</h5>
            <button onClick={() => setAddMenuModal(false)} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>

          <div className="card-body">
            <form onSubmit={addMenuFunc} id="form1">
              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={menuUzName}
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
                      ref={menuKrName}
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
                      ref={menuRuName}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/ru.png" alt="ru" />
                    </div>
                    <label className="label-floating">Имя</label>
                  </div>
                </div>
              </div>

              <div className="form-group form-group-floating row" style={{ justifyContent: "end" }}>
                <div className="col-lg-4">
                  <button className='btn btn-success w-100 h-100 py-2' type='submit' form="form1" value="Submit">Qo'shish</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AddMenu);
