import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LanguageContext } from '../../App';
import { axiosInstance } from '../../config';

const Xarita = () => {
  const [menu, setMenu] = useState([])
  const [subMenu, setSubMenu] = useState([])
  const lan = useContext(LanguageContext)
  console.log(lan.lan);
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

  const open = (name) => {
    if (document.querySelector(`#${name}`).style.display === "none") {
      document.querySelector(`#${name}`).style.display = "block";
      document.querySelector(`#${name}icon`).className = "icon-minus-circle2";
    } else {
      document.querySelector(`#${name}`).style.display = "none";
      document.querySelector(`#${name}icon`).className = "icon-plus-circle2";
    }
  }

  return (
    <div className="card-body p-0 pt-3 px-1">
      <div className="card" style={{minHeight: "90vh"}}>
        <Wrapper>
          <div className="col-xl-12 p-0" id="printarea">
            <div id="collapseDVR3" className="panel-collapse in">
              <div className="tree">
                <ul className="m-0 p-0">
                  <li>
                    <span className="asos"
                      onClick={() => open(`boshmenu`)}>
                      <i className="icon-minus-circle2"></i>
                      Bosh sahifa</span>

                    <ul id='boshmenu'>

                      {menu.length > 0 && menu.map((item, index) => {
                        return (
                          <li key={item.id}>
                            <span className="asos"
                              onClick={() => open(`menu${index}`)}>
                              <i id={`menu${index}icon`} className="icon-plus-circle2"></i>
                              {item[`${lan.lan}Name`]}
                            </span>

                            <ul id={`menu${index}`} style={{ display: "none" }}>
                              {subMenu.length > 0 && subMenu.filter((data) => data.menuId === item.id).map((item2) => (
                                <li key={item2.id}>
                                  <span>
                                    <i className="icon-redo2"></i>
                                    <Link to={`/${item2.type}/${item.id}/${item2.id}`}>
                                      {item2.uzName}
                                    </Link>
                                    {/* <a href="/">
                                  {item2.uzName}
                                </a> */}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default Xarita;

const Wrapper = styled.div`
  .tree {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #fbfbfb;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05)
  }

  .tree li {
      list-style-type: none;
      margin: 0;
      padding: 10px 5px 0 5px;
      position: relative;
      text-transform: uppercase;
      color: #2A4D85;
      cursor: pointer;
  }

  .tree ul ul ul li {
      color: #2196f3;
  }

  .tree li::before,
  .tree li::after {
      content: '';
      left: -20px;
      position: absolute;
      right: auto
  }

  .tree li::before {
      border-left: 1px solid #2A4D85;
      bottom: 50px;
      height: 100%;
      top: 0;
      width: 1px
  }

  .tree li::after {
      border-top: 1px solid #2A4D85;
      height: 20px;
      top: 30px;
      width: 25px
  }

  .tree li span {
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border: 1px solid #2A4D85;
      border-radius: 5px;
      display: inline-block;
      padding: 3px 8px;
      text-decoration: none
  }

  .tree li.parent_li>span {
      cursor: pointer
  }

  .tree>ul>li::before,
  .tree>ul>li::after {
      border: 0
  }

  .tree li:last-child::before {
      height: 30px
  }

  .tree li.parent_li>span:hover,
  .tree li.parent_li>span:hover+ {
      background: #e9f5fe;
      border: 1px solid #2A4D85;
      color: #2A4D85;
  }

  .tree .asos {
      font-weight: 500;
      font-size: 1rem;
  }

  .tree ul {
    margin-left: 32px;
  }
`