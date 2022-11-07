import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../../../config';

const EditGroup = ({ editGroup, setEditGroup, setGovGroup, govGroup, Alert, setAlert }) => {
  const { subMenuId } = useParams()

  const uzGroupName = useRef()
  const krGroupName = useRef()
  const ruGroupName = useRef()
  const uzGroupDescription = useRef()
  const krGroupDescription = useRef()
  const ruGroupDescription = useRef()
  const uzGroupTitle = useRef()
  const krGroupTitle = useRef()
  const ruGroupTitle = useRef()

  const addGroupFunc = (e) => {
    e.preventDefault();

    const sendData = {
      id: editGroup.data.id,
      uzName: uzGroupName.current.value,
      krName: krGroupName.current.value,
      ruName: ruGroupName.current.value,
      uzDescriptionTitle: uzGroupDescription.current.value,
      krDescriptionTitle: krGroupDescription.current.value,
      ruDescriptionTitle: ruGroupDescription.current.value,
      uzTitle: uzGroupTitle.current.value,
      krTitle: krGroupTitle.current.value,
      ruTitle: ruGroupTitle.current.value
    }
    console.log(sendData);
    axiosInstance.patch(`subGovGroup/updateName`, sendData).then(res => {
      console.log(res.data);
      const newGovGroup = govGroup.map(gov => {
        if (gov.id === editGroup.data.id) {
          gov.uzName = uzGroupName.current.value;
          gov.krName = krGroupName.current.value;
          gov.ruName = ruGroupName.current.value;
          gov.uzDescriptionTitle = uzGroupDescription.current.value;
          gov.krDescriptionTitle = krGroupDescription.current.value;
          gov.ruDescriptionTitle = ruGroupDescription.current.value;
          gov.uzTitle = uzGroupTitle.current.value;
          gov.krTitle = krGroupTitle.current.value;
          gov.ruTitle = ruGroupTitle.current.value;
        }
        return gov
      })
      setGovGroup(newGovGroup)
      setEditGroup({ isShow: false, data: {} })
      Alert(setAlert, "success", "Muvafaqqiyatli qo'shildi");
    })
  }

  console.log(editGroup);

  return (

    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div style={{ width: "75%", margin: "0 auto" }}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Bo'limni o'zgartirish</h5>
            <button onClick={() => setEditGroup({ isShow: false, data: {} })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>
          <div className="card-body">
            <form onSubmit={addGroupFunc} id="form1">
              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      defaultValue={editGroup.data.uzName}
                      ref={uzGroupName}
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
                      defaultValue={editGroup.data.krName}
                      ref={krGroupName}
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
                      defaultValue={editGroup.data.ruName}
                      ref={ruGroupName}
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
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={uzGroupDescription}
                      defaultValue={editGroup.data.uzDescriptionTitle}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Sarlavha</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      defaultValue={editGroup.data.krDescriptionTitle}
                      ref={krGroupDescription}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Cарлавҳа</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      defaultValue={editGroup.data.ruDescriptionTitle}
                      ref={ruGroupDescription}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/ru.png" alt="ru" />
                    </div>
                    <label className="label-floating">Заголовок</label>
                  </div>
                </div>
              </div>

              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      defaultValue={editGroup.data.uzTitle}
                      ref={uzGroupTitle}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Bo'lim tarkibi nomi</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      defaultValue={editGroup.data.krTitle}
                      ref={krGroupTitle}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/uz.png" alt="uz" />
                    </div>
                    <label className="label-floating">Бўлим таркиби номи</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      defaultValue={editGroup.data.ruTitle}
                      ref={ruGroupTitle}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/ru.png" alt="ru" />
                    </div>
                    <label className="label-floating">Название содержимого раздела</label>
                  </div>
                </div>
              </div>

              <div className="form-group form-group-floating row mb-0" style={{ justifyContent: "end" }}>
                <div className="col-lg-4">
                  <button className='btn btn-success w-100 h-100 py-2' type='submit' form="form1" value="Submit">O'zgartirish</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(EditGroup);
