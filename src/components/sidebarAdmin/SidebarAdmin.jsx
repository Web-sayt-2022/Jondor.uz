import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Select from "react-select";
import { axiosInstance } from '../../config';
import AlertContent, { Alert } from '../alert/Alert';
import "./sidebar.css"

function SidebarAdmin() {
  const navigate = useNavigate()
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  // menu
  const [addMenuModal, setAddMenuModal] = useState(false)
  const [menuOption, setMenuOption] = useState([])
  const menuUzName = useRef()
  const menuKrName = useRef()
  const menuRuName = useRef()
  const sendMenuRef = useRef()

  const [menu, setMenu] = useState([
    {
      id: 1,
      uzName: "Tuman haqida uz",
      krName: "Tuman haqida kr",
      ruName: "Tuman haqida ru",
      rank: 1
    },
    {
      id: 2,
      uzName: "Yangiliklar uz",
      krName: "Yangiliklar kr",
      ruName: "Yangiliklar ru",
      rank: 2
    },
  ])

  // subMenu
  const [addSubMenuModal, setAddSubMenuModal] = useState({ isShow: false, menuId: 0 })
  const [updateModal, setUpdateModal] = useState({ isShow: false, data: {}, type: "" })
  const [deleteModal, setDeleteModal] = useState({ isShow: false, data: {}, type: "" })
  const [sendModal, setSendModal] = useState({ isShow: false, data: {}, type: "" })
  const [subMenuTypeOption, setSubMenuTypeOption] = useState([{ value: "news", label: "Yangilik", url: "sphere" }, { value: "information", label: "Informatsion", url: "infoGroup" }])
  const subMenuUzName = useRef()
  const subMenuKrName = useRef()
  const subMenuRuName = useRef()
  const subMenuType = useRef()

  //edit
  const editSubMenuUzName = useRef()
  const editSubMenuKrName = useRef()
  const editSubMenuRuName = useRef()
  const editIsVisible = useRef()

  const [subMenu, setSubMenu] = useState([
    {
      id: 1,
      menuId: 1,
      uzName: "Tuman haqida1 uz sub",
      krName: "Tuman haqida1 kr sub",
      ruName: "Tuman haqida1 ru sub",
      rank: 1,
      type: "information"
    },
    {
      id: 2,
      menuId: 1,
      uzName: "Tuman haqida2 uz sub",
      krName: "Tuman haqida2 kr sub",
      ruName: "Tuman haqida2 ru sub",
      rank: 2,
      type: "news"
    },
    {
      id: 3,
      menuId: 2,
      uzName: "Yangiliklar1 uz sub",
      krName: "Yangiliklar1 kr sub",
      ruName: "Yangiliklar1 ru sub",
      rank: 1,
      type: "information"
    },
    {
      id: 4,
      menuId: 2,
      uzName: "Yangiliklar2 uz sub",
      krName: "Yangiliklar2 kr sub",
      ruName: "Yangiliklar2 ru sub",
      rank: 2,
      type: "news"
    },
  ])

  const open = (name) => {
    if (document.querySelector(`#${name}`).querySelector('ul').style.display === "none") {
      document.querySelector(`#${name}`).querySelector('ul').style.display = "block";
    } else {
      document.querySelector(`#${name}`).querySelector('ul').style.display = "none";
    }
  }

  useEffect(() => {
    axiosInstance.get("menu/getForAdmin").then((res) => {
      console.log(res.data);
      setMenu(res.data?.menuDTOS);
      setSubMenu(res.data?.subMenuAdminDTOS)
    })
  }, [])

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
      Alert(setAlert, "danger", err.response.data)
    })
  }

  const addSubMenuFunc = (e) => {
    e.preventDefault();
    const newSubMenu = {
      menuId: addSubMenuModal.menuId,
      uzName: subMenuUzName.current.value,
      krName: subMenuKrName.current.value,
      ruName: subMenuRuName.current.value,
      type: subMenuType?.current?.props?.value?.value,
    }

    console.log(newSubMenu);

    axiosInstance.post(`${subMenuType?.current?.props?.value?.url}/create`, newSubMenu).then((res) => {
      console.log(res.data);
      setSubMenu([...subMenu, res.data])
      setAddSubMenuModal(false)
      Alert(setAlert, "success", "Muvafaqqiyatli qo'shildi")
      navigate(`/admin/${newSubMenu.type}/${newSubMenu.menuId}/${res.data?.id}`)
    }).catch(err => {
      Alert(setAlert, "danger", err.response.data)
    })

    setSubMenu([...subMenu, newSubMenu])
    setAddSubMenuModal({ isShow: false, menuId: 0 })
    Alert(setAlert, "success", "Muvafaqqiyatli qo'shildi")
  }

  const deleteSubMenu = () => {
    console.log(deleteModal);
    let url = deleteModal.data?.type === "news" ? "sphere" : "infoGroup"
    console.log(url);

    if (deleteModal.type === "subMenu") {
      axiosInstance.delete(`${url}/delete/${deleteModal.data?.id}`).then(res => {
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

  const updateFunc = (e) => {
    e.preventDefault()
    console.log(updateModal);
    let sendData = {
      id: updateModal.data.id,
      uzName: editSubMenuUzName.current.value,
      krName: editSubMenuKrName.current.value,
      ruName: editSubMenuRuName.current.value,
      visible: editIsVisible.current.checked,
    }

    let url = updateModal.data?.type === "news" ? "sphere" : "infoGroup"
    console.log(url);

    if (updateModal.type === "subMenu") {
      axiosInstance.patch(`${url}/update`, sendData).then(res => {
        console.log(res.data);
        Alert(setAlert, "success", "Muvafaqqiyatli o'zgartirildi")
        const newSubMenu = subMenu.map((item) => {
          if (item.id === updateModal.data?.id) {
            item.uzName = sendData.uzName
            item.krName = sendData.krName
            item.ruName = sendData.ruName
            item.visible = sendData.visible
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

  const sendFunc = () => {
    const sendData = {
      submenuId: sendModal.data.id,
      menuId: sendMenuRef.current.props.value.value
    }
    console.log(sendData);

    let url = sendModal.data?.type === "news" ? "sphere" : "infoGroup"

    axiosInstance.patch(`${url}/changeMenu`, sendData).then(res => {
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

  console.log(subMenu);

  return (
    <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg sidebar-main-resized">
      <div className="sidebar-content sidebar-content-hover" style={{ postion: 'relative' }}>
        <div className="sidebar-section sidebar-user">
          <div className="sidebar-user-material">
            <div className="sidebar-section-body">
              <div className="d-flex">
                <div className={'flex-1'} />
                <span className="text-center">
                  sadfasd
                </span>

                <div className="text-right position-absolute" style={{ right: 10 }}>
                  <button type="button"
                    className="btn btn-outline-light border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-main-resize d-none d-lg-inline-flex">
                    <i className="icon-transmission" />
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h6 className="mb-0 text-white text-shadow-dark mt-3 cursor-pointer"> fdsdfsd </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-section" style={{ paddingBottom: 30 }}>
          <ul className="nav nav-sidebar" data-nav-type="accordion">

            {menu.length > 0 && menu.map((item) => {
              return (
                <li key={Math.random()} className="nav-item nav-item-submenu hover-sub-menu-edit-button" id={`menu${item.id}`} style={{ display: "block" }}>
                  <div className="btn-group position-static" style={{ justifyContent: "space-between", width: "100%" }}>
                    <div className="nav-link" style={{ fontSize: '18px', cursor: "pointer", width: "100%" }}
                      onClick={() => open(`menu${item.id}`)}>
                      <i className="fa-solid fa-folder" style={{ color: "#0056B8" }} />
                      <span>{item.uzName}</span>
                    </div>

                    <button onClick={() => { setUpdateModal({ isShow: true, data: item, type: "menu" }) }} type="button" className="btn btn-white sub-menu-edit-button" style={{ borderRadius: "0", width: "50px" }}>
                      <i className="fa-solid fa-pen" style={{ color: "#0056B8" }}></i>
                    </button>
                  </div>

                  <ul className="nav-item-ul m-0" style={{ display: "none", listStyle: "none" }}>
                    {
                      subMenu.length > 0 && subMenu.filter((data) => data.menuId === item.id).map((item2) => {
                        return (
                          <li key={Math.random()} className="nav-item liItem hover-menu-edit-button">
                            <div className="btn-group position-static" style={{ justifyContent: "space-between", width: "100%" }}>
                              <Link to={`/admin/${item2.type}/${item.id}/${item2.id}`} className="nav-link liHover" style={{ fontSize: '18px', width: "100%" }}>
                                <i className="icon-file-text3" style={{ color: "#0056B8" }} />
                                <span>{item2.uzName}</span>
                              </Link>

                              <button onClick={() => { setUpdateModal({ isShow: true, data: item2, type: "subMenu" }) }} type="button" className="btn btn-white menu-edit-button" style={{ borderRadius: "0", width: "50px" }}>
                                <i className="fa-solid fa-pen" style={{ color: "#0056B8" }}></i>
                              </button>
                            </div>
                          </li>
                        )
                      })
                    }

                    <li className="nav-item"
                      style={{ paddingLeft: "16px", cursor: "pointer" }}
                      onClick={() => setAddSubMenuModal({ isShow: true, menuId: item.id })}
                    >
                      <div className="nav-link liHover" style={{ fontSize: '18px' }}>
                        <i className="icon-file-plus2" style={{ color: "#0056B8" }} />
                        <span>Menu osti qo'shish</span>
                      </div>
                    </li>

                  </ul>
                </li>
              )
            })}

            <li className="nav-item"
              style={{ fontSize: '18px', cursor: "pointer" }}
              onClick={() => setAddMenuModal(true)}
            >
              <div className="nav-link liHover">
                <i className="fa-solid fa-folder-plus" style={{ color: "#0056B8" }} />
                <span>Menu qo'shish</span>
              </div>
            </li>

          </ul>
        </div>


        {
          addMenuModal && (
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
          )
        }

        {
          addSubMenuModal.isShow && (
            <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header bg-primary text-white">
                    <h5 className="modal-title">Menu osti qo'shish</h5>
                    <button onClick={() => setAddSubMenuModal({ isShow: false, menuId: 0 })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
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

                      <div className="form-group form-group-floating row" style={{ justifyContent: "end" }}>
                        <div className="col-lg-6">
                          <Select
                            placeholder="Turi"
                            options={subMenuTypeOption}
                            isClearable={true}
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
          )
        }

        {
          updateModal.isShow && (
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
          )
        }

        {
          deleteModal.isShow && (
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
          )
        }

        {
          sendModal.isShow && (
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
          )
        }

        {/* alert */}
        <AlertContent alert={alert} />

      </div>
    </div>
  )
}

export default SidebarAdmin