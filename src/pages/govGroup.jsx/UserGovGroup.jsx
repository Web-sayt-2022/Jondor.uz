/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import "./gov-group.css";
import parse from "html-react-parser"
import { useParams } from "react-router-dom";
import Employee from "../../components/employee/Employee";

const UserGovGroup = () => {
  const [govGroup, setGovGroup] = useState([])
  const { subMenuId } = useParams()

  // group o'qib olish
  useEffect(() => {
    axiosInstance.get(`subGovGroup/getBySubmenuId/?code=${subMenuId}`).then(res => {
      console.log(res.data);
      setGovGroup(res.data)
    })
  }, [subMenuId])

  return (
    <section className="right-panel mt-3 mb-3 px-1 user-gov-group">
      <div
        className="p-2 text-white bg-primary mb-2 rounded"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: "1.125rem", textTransform: "uppercase" }}>
          Tarkibiy bo'linmalar
        </h3>
      </div>

      <div className="card p-2" style={{ minHeight: "calc(100vh - 94px)" }}>

        {
          govGroup.length > 0 && (
            <div id="accordion-parent">

              {
                govGroup.map((gov, govIndex) => {
                  return (
                    <div class="card py-0" key={gov.id}>
                      <div class="card-header bg-primary px-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h6 class="card-title text-white collapsed" style={{ width: "100%", cursor: "pointer", textTransform: "uppercase" }}
                          data-toggle="collapse" href={`#accordion-item-nested-parent${gov.id}`} aria-expanded="false">
                          {gov.uzName}
                        </h6>
                      </div>

                      <div id={`accordion-item-nested-parent${gov.id}`} class="collapse" data-parent="#accordion-parent">
                        <div class="card-body">

                          <div id={`accordion-child${gov.id}`}>
                            <div class="card">
                              <div class="card-header bg-primary px-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <h6 class="card-title text-white collapsed" style={{ width: "100%", cursor: "pointer", textTransform: "uppercase" }} data-toggle="collapse"
                                  href={`#accordion-item-nested-child1`} aria-expanded="false">
                                  {gov.uzDescriptionTitle}
                                </h6>
                              </div>

                              <div id={`accordion-item-nested-child1`} class="collapse" data-parent={`#accordion-child${gov.id}`}>
                                <div class="card-body">
                                  {parse(gov.uzDescription)}
                                </div>
                              </div>
                            </div>

                            <div class="card">
                              <div class="card-header bg-primary px-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <h6 class="card-title text-white collapsed" style={{ width: "100%", cursor: "pointer", textTransform: "uppercase" }} data-toggle="collapse"
                                  href={`#accordion-item-nested-child2`} aria-expanded="false">
                                  {gov.uzTitle}
                                </h6>
                              </div>

                              <div id={`accordion-item-nested-child2`} class="collapse" data-parent={`#accordion-child${gov.id}`}>
                                <div class="card-body">
                                  {
                                    gov?.orderList.map((employee, index) => {
                                      return (
                                        <Employee key={employee.id} employee={employee} />
                                      )
                                    })
                                  }
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>

                      </div>
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>

    </section>
  );
};

export default React.memo(UserGovGroup);
