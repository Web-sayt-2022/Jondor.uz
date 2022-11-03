import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import { axiosInstance } from '../../../config';

const AddSubMenu = ({ addSubMenuModal, setAddSubMenuModal, setSubMenu, subMenu, Alert, setAlert }) => {
  const [isLink, setIsLink] = useState(false)
  const [subMenuTypeOption, setSubMenuTypeOption] = useState([
    { value: "news", label: "Yangilik" },
    { value: "information", label: "Ma'lumot" },
    { value: "employeeGroup", label: "Xodimlar" },
    { value: "subGovGroup", label: "Xodimlar guruhi" },
    { value: "link", label: "Linklar" },

  ])

  const subMenuUzName = useRef()
  const subMenuKrName = useRef()
  const subMenuRuName = useRef()
  const subMenuType = useRef()
  const subMenuLink = useRef()

  const navigate = useNavigate()

  const addSubMenuFunc = (e) => {
    e.preventDefault();
    const newSubMenu = {
      menuId: addSubMenuModal.menuId,
      uzName: subMenuUzName.current.value,
      krName: subMenuKrName.current.value,
      ruName: subMenuRuName.current.value,
      type: subMenuType?.current?.props?.value?.value,
      url: subMenuLink.current ? subMenuLink.current.value : null,
    }

    console.log(newSubMenu);
    console.log(Boolean(subMenuType?.current?.props?.value?.value));
    if (Boolean(subMenuType?.current?.props?.value?.value)) {
      axiosInstance.post(`submenu/create`, newSubMenu).then((res) => {
        console.log(res.data);
        setSubMenu([...subMenu, res.data])
        setAddSubMenuModal(false)
        Alert(setAlert, "success", "Muvafaqqiyatli qo'shildi")
        if (newSubMenu.type !== "link") {
          navigate(`/admin/${newSubMenu.type}/${newSubMenu.menuId}/${res.data?.id}`)
        } else {
          navigate(`/admin/bosh_sahifa`)
        }
      }).catch(err => {
        Alert(setAlert, "warning", err.response.data)
      })
    } else {
      Alert(setAlert, "warning", "Menu turini tanlamadingiz")
    }

    setIsLink(false)
  }

  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Menu osti qo'shish</h5>
            <button onClick={() => { setAddSubMenuModal({ isShow: false, menuId: 0 }); setIsLink(false) }} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>

          <div className="card-body">
            <form onSubmit={addSubMenuFunc} id="form1">
              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={subMenuUzName}
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
                      ref={subMenuKrName}
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
                      ref={subMenuRuName}
                      required={true}
                    />
                    <div className="form-control-feedback text-bold text-primary">
                      <img src="../../../utils/flags/ru.png" alt="ru" />
                    </div>
                    <label className="label-floating">Имя</label>
                  </div>
                </div>
              </div>

              {isLink && <div className="form-group form-group-floating row">
                <div className="col-lg-12">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={subMenuLink}
                      required={true}
                    />
                    <label className="label-floating">URL</label>
                  </div>
                </div>
              </div>}

              <div className="form-group form-group-floating row" style={{ justifyContent: "end" }}>
                <div className="col-lg-6">
                  <Select
                    placeholder="Turi"
                    options={subMenuTypeOption}
                    isClearable={true}
                    onChange={(e) => setIsLink(Boolean(e.value === "link"))}
                    ref={subMenuType}
                  />
                </div>
                <div className="col-lg-6">
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

export default React.memo(AddSubMenu);
