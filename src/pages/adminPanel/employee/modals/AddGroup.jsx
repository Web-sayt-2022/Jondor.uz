import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../../../config';

const AddGroup = ({ setAddGroup, setGovGroup, govGroup, Alert, setAlert }) => {
  const { subMenuId } = useParams()

  // add group
  const uzGroupName = useRef()
  const krGroupName = useRef()
  const ruGroupName = useRef()
  const uzGroupDescription = useRef()
  const krGroupDescription = useRef()
  const ruGroupDescription = useRef()
  const uzGroupTitle = useRef()
  const krGroupTitle = useRef()
  const ruGroupTitle = useRef()

  // group qo'shish
  const addGroupFunc = (e) => {
    e.preventDefault();

    const sendData = {
      uzName: uzGroupName.current.value,
      krName: krGroupName.current.value,
      ruName: ruGroupName.current.value,
      uzDescriptionTitle: uzGroupDescription.current.value,
      krDescriptionTitle: krGroupDescription.current.value,
      ruDescriptionTitle: ruGroupDescription.current.value,
      uzTitle: uzGroupTitle.current.value,
      krTitle: krGroupTitle.current.value,
      ruTitle: ruGroupTitle.current.value,
      submenuId: subMenuId,
    }
    console.log(sendData);
    axiosInstance.post(`subGovGroup/create`, sendData).then(res => {
      console.log(res.data);
      Alert(setAlert, "success", "Muvafaqqiyatli qo'shildi");
      setGovGroup([...govGroup, res.data])
      setAddGroup(false)
    })
  }

  return (

    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div style={{ width: "75%", margin: "0 auto" }}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Bo'lim qo'shish</h5>
            <button onClick={() => setAddGroup(false)} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
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
                      defaultValue={"Bo'lim haqida ma'lumot"}
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
                      ref={krGroupDescription}
                      defaultValue={"Бўлим ҳақида маълумот"}
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
                      ref={ruGroupDescription}
                      defaultValue={"Информация об отделении"}
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
                      ref={uzGroupTitle}
                      defaultValue={"Bo'lim xodimlari"}
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
                      ref={krGroupTitle}
                      defaultValue={"Бўлим ходимлари"}
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
                      ref={ruGroupTitle}
                      defaultValue={"Сотрудники отдела"}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/ru.png" alt="ru" />
                    </div>
                    <label className="label-floating">Название содержимого раздела</label>
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

export default React.memo(AddGroup);
