import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { axiosInstance } from '../../config';
import AlertContent, { Alert } from '../alert/Alert';
import AddMenu from './modals/AddMenu';
import AddSubMenu from './modals/AddSubMenu';
import Delete from './modals/Delete';
import Send from './modals/Send';
import Update from './modals/Update';

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
    let isMounted = true;

    axiosInstance.get("menu/getForAdmin").then((res) => {
      if (isMounted) {
        setMenu(res.data?.menuDTOS);
        setSubMenu(res.data?.submenuDTOS)
      }
    })

    return () => isMounted = false;
  }, [])

  return (
    <Wrapper>
      <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg sidebar-main-resized">
        <div className="sidebar-content sidebar-content-hover" style={{ postion: 'relative' }}>
          <div className="sidebar-section sidebar-user">
            <div className="sidebar-user-material">
              <div className="sidebar-section-body">
                {/* <div className="d-flex">
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
                </div> */}

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
                        <MdOutlineClose />
                        <span>{item.uzName}</span>
                      </div>

                      <button onClick={() => { setUpdateModal({ isShow: true, data: item, type: "menu" }) }} type="button" className="btn btn-white sub-menu-edit-button" style={{ borderRadius: "0", width: "50px" }}>
                        <MdOutlineClose />
                      </button>
                    </div>

                    <ul className="nav-item-ul m-0" style={{ display: "none", listStyle: "none" }}>
                      {subMenu.length > 0 && subMenu.filter((data) => data.menuId === item.id).map((item2) => (
                        <li key={Math.random()} className="nav-item liItem hover-menu-edit-button">
                          <div className="btn-group position-static" style={{ justifyContent: "space-between", width: "100%" }}>
                            {item2.type !== "link" ? (
                              <Link to={`/admin/${item2.type}/${item.id}/${item2.id}`} className="nav-link liHover" style={{ fontSize: '18px', width: "100%" }}>
                                <MdOutlineClose />
                                <span>{item2.uzName}</span>
                              </Link>
                            ) : (
                              <a href={`${item2.url}`} target="_blank" rel="noopener noreferrer"
                                className="nav-link liHover" style={{ fontSize: '18px', width: "100%" }}>
                                <MdOutlineClose />
                                <span>{item2.uzName}</span>
                              </a>
                            )}
                            <button onClick={() => { setUpdateModal({ isShow: true, data: item2, type: "subMenu" }) }} type="button" className="btn btn-white menu-edit-button" style={{ borderRadius: "0", width: "50px" }}>
                              <MdOutlineClose />
                            </button>
                          </div>
                        </li>
                      ))}

                      <li className="nav-item"
                        style={{ paddingLeft: "16px", cursor: "pointer" }}
                        onClick={() => setAddSubMenuModal({ isShow: true, menuId: item.id })}
                      >
                        <div className="nav-link liHover" style={{ fontSize: '18px' }}>
                          <MdOutlineClose />
                          <span>Menu osti qo'shish</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                )
              })}

              <li className="nav-item " style={{ fontSize: '18px' }}>
                <Link to="/admin/sectors" className="nav-link liHover ">
                  <MdOutlineClose />
                  <span>Sektorlar</span>
                </Link>
              </li>

              <li className="nav-item" style={{ fontSize: '18px' }}>
                <Link to="/admin/carousel" className="nav-link liHover">
                  <MdOutlineClose />
                  <span>Foydali manzillar</span>
                </Link>
              </li>

              <li className="nav-item" style={{ fontSize: '18px' }}>
                <Link to="/admin/good_know" className="nav-link liHover">
                  <MdOutlineClose />
                  <span>Bilish foydali</span>
                </Link>
              </li>

              <li className="nav-item" style={{ fontSize: '18px' }}>
                <Link to="/admin/tegs" className="nav-link liHover">
                  <MdOutlineClose />
                  <span>Teglar</span>
                </Link>
              </li>

              <li className="nav-item"
                style={{ fontSize: '18px', cursor: "pointer" }}
                onClick={() => setAddMenuModal(true)}
              >
                <div className="nav-link liHover">
                  <MdOutlineClose />
                  <span>Menu qo'shish</span>
                </div>
              </li>

              {/* reglamentlar */}
              <li className="nav-item" style={{ fontSize: '18px' }}>
                <Link to="/admin/hotline" className="nav-link liHover">
                  <MdOutlineClose />
                  <span>Reglamentlar</span>
                </Link>
              </li>

              {/* reglamentlar */}
              <li className="nav-item" style={{ fontSize: '18px' }}>
                <Link to="/admin/management" className="nav-link liHover">
                  <MdOutlineClose />
                  <span>Rahbariyat</span>
                </Link>
              </li>
            </ul>
          </div>


          {addMenuModal && (
            <AddMenu
              setAddMenuModal={setAddMenuModal}
              Alert={Alert}
              setAlert={setAlert}
              menu={menu}
              setMenu={setMenu}
            />
          )}

          {addSubMenuModal.isShow && (
            <AddSubMenu
              Alert={Alert}
              setAlert={setAlert}
              subMenu={subMenu}
              setSubMenu={setSubMenu}
              setAddSubMenuModal={setAddSubMenuModal}
              addSubMenuModal={addSubMenuModal}
            />
          )}

          {updateModal.isShow && (
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
          )}

          {deleteModal.isShow && (
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
          )}

          {sendModal.isShow && (
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
          )}

          {/* alert */}
          <AlertContent alert={alert} />
        </div>
      </div>
    </Wrapper>

  )
}

export default SidebarAdmin

const Wrapper = styled.div`
  .richtexteditor {
    height: 100vh;
  }
  .nav-link {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .nav-item svg {
    color: #0056B8;
  }

  .nav-tabs-solid-custom .nav-link.active {
    background-color: #fff;
    color: #000;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-weight: bold;
  }

  .nav-tabs-solid-custom .nav-link.active .nav-tabs-solid-custom .nav-link.active span {
    color: red !important;
  }

  /* file upload */
  .border_dash {
    width: 100%;
    padding: 10px;
    border: 1px dashed silver;
  }

  .fileList {
    width: 100%;
    list-style: none;
    display: flex;
    align-items: flex-start;
    gap: 5px;
    flex-wrap: wrap;
  }

  .fileList li {
    width: 20%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    text-align: center;
    max-height: 300px !important;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: rgb(237, 237, 237);
    /* margin: auto; */
  }

  .fileList img {
    width: 100%;
    height: 170px !important;
    object-fit: cover;
    border-radius: 5px;
  }

  .fileList span {
    height: 38px;
  }

  .fileList li i {
    width: 100%;
    text-align: right;
    cursor: pointer;
    color: rgb(215, 41, 75);
    font-size: 16px;
    transition: all ease-in 0.12s;
  }

  .fileList li i:hover {
    color: rgb(192, 46, 75);
  }

  .image_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .input_text_content {
    width: 100%;
  }

  .image_bottom input {
    width: 100%;
    padding: 3px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  .image_bottom input:focus {
    outline: none;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .buttons button,
  .buttons label {
    border: none;
    border-radius: 5px;
    padding: 5px;
    background-color: #2272f2;
    color: #fff;
    font-weight: 400;
    font-size: 13px;
  }

  .buttons button,
  .buttons label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .buttons label {
    cursor: pointer;
    margin: 0;
  }

  /* sidebar */
  .page-content {
    position: sticky !important;
    height: calc(100vh - 74px) !important;
    top: 74px !important;
    left: 0;
  }

  .navbarComponents {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 0 !important;
  }

  .liItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
  }

  .menu-edit-button {
    display: none;
  }

  .hover-menu-edit-button:hover .menu-edit-button {
    display: block;
  }

  .sub-menu-edit-button {
    display: none;
  }

  .hover-sub-menu-edit-button:hover .sub-menu-edit-button {
    display: block;
  }

  .sidebar {
    height: 100vh;
  }
`