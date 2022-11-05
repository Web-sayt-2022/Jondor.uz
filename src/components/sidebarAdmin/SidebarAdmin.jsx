import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../config';
import AlertContent, { Alert } from '../alert/Alert';
import AddMenu from './modals/AddMenu';
import AddSubMenu from './modals/AddSubMenu';
import Delete from './modals/Delete';
import Send from './modals/Send';
import Update from './modals/Update';
import "./sidebar.css"

function SidebarAdmin() {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [addMenuModal, setAddMenuModal] = useState(false)
  const [menuOption, setMenuOption] = useState([])
  const [menu, setMenu] = useState([])
  const [subMenu, setSubMenu] = useState([])
  const [addSubMenuModal, setAddSubMenuModal] = useState({ isShow: false, menuId: 0 })
  const [updateModal, setUpdateModal] = useState({ isShow: false, data: {}, type: "" })
  const [deleteModal, setDeleteModal] = useState({ isShow: false, data: {}, type: "" })
  const [sendModal, setSendModal] = useState({ isShow: false, data: {}, type: "" })


  const open = (name) => {
    if (document.querySelector(`#${name}`).querySelector('ul').style.display === "none") {
      document.querySelector(`#${name}`).querySelector('ul').style.display = "block";
    } else {
      document.querySelector(`#${name}`).querySelector('ul').style.display = "none";
    }
  }

  // menularni o'qib olish
  useEffect(() => {
    axiosInstance.get("menu/getForAdmin").then((res) => {
      console.log(res.data);
      setMenu(res.data?.menuDTOS);
      setSubMenu(res.data?.submenuDTOS)
    })
  }, [])

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
                              {item2.type !== "link" ? (
                                <Link to={`/admin/${item2.type}/${item.id}/${item2.id}`} className="nav-link liHover" style={{ fontSize: '18px', width: "100%" }}>
                                  <i className="icon-file-text3" style={{ color: "#0056B8" }} />
                                  <span>{item2.uzName}</span>
                                </Link>
                              ) : (
                                <a href={`${item2.url}`} target="_blank" rel="noopener noreferrer"
                                  className="nav-link liHover" style={{ fontSize: '18px', width: "100%" }}>
                                  <i className="icon-file-text3" style={{ color: "#0056B8" }} />
                                  <span>{item2.uzName}</span>
                                </a>
                              )

                              }


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
            <AddMenu
              setAddMenuModal={setAddMenuModal}
              Alert={Alert}
              setAlert={setAlert}
              menu={menu}
              setMenu={setMenu}
            />
          )
        }

        {
          addSubMenuModal.isShow && (
            <AddSubMenu
              Alert={Alert}
              setAlert={setAlert}
              subMenu={subMenu}
              setSubMenu={setSubMenu}
              setAddSubMenuModal={setAddSubMenuModal}
              addSubMenuModal={addSubMenuModal}
            />
          )
        }

        {
          updateModal.isShow && (
            <Update
              Alert={Alert}
              setAlert={setAlert}
              updateModal={updateModal}
              setUpdateModal={setUpdateModal}
              subMenu={subMenu}
              setSubMenu={setSubMenu}
              menu={menu}
              setMenu={setMenu}
              setDeleteModal={setDeleteModal}
              setSendModal={setSendModal}
              setMenuOption={setMenuOption}
            />
          )
        }

        {
          deleteModal.isShow && (
            <Delete
              Alert={Alert}
              setAlert={setAlert}
              deleteModal={deleteModal}
              setDeleteModal={setDeleteModal}
              subMenu={subMenu}
              setSubMenu={setSubMenu}
              menu={menu}
              setMenu={setMenu}
              setUpdateModal={setUpdateModal}
            />
          )
        }

        {
          sendModal.isShow && (
            <Send
              Alert={Alert}
              setAlert={setAlert}
              sendModal={sendModal}
              setSendModal={setSendModal}
              subMenu={subMenu}
              setSubMenu={setSubMenu}
              menuOption={menuOption}
              setUpdateModal={setUpdateModal}
            />
          )
        }

        {/* alert */}
        <AlertContent alert={alert} />

      </div>
    </div>
  )
}

export default SidebarAdmin