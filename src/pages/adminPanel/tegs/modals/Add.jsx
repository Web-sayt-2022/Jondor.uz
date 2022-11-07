import React, { useRef } from 'react';
import { useState } from 'react';
import { axiosInstance } from '../../../../config';

const Add = ({ setAddCarousel, Alert, setAlert, data, setData }) => {
  const [file, setFile] = useState([])

  const uzNameRef = useRef()
  const krNameRef = useRef()
  const ruNameRef = useRef()
  const urlRef = useRef()

  const addFunc = async (e) => {
    e.preventDefault()
    
    if (file?.length > 0) {
      try {
        let formData = new FormData();
        file.forEach((f) => {
          formData.append("images", f);
        });
        const allFilesId = await axiosInstance.post("file/uploads", formData);
        console.log(allFilesId.data);
        try {
          const sendData = {
            linkTypeCode: 2,
            uzName: uzNameRef.current.value,
            krName: krNameRef.current.value,
            ruName: ruNameRef.current.value,
            url: urlRef.current.value,
            imageID: allFilesId.data[0]
          }
          console.log(sendData);
          const res = await axiosInstance.post(`link/create`, sendData)
          console.log(res.data);
          setAddCarousel(false);
          setData([...data, res.data])
          Alert(setAlert, "success", "Muvafaqqiyatli qo'shildi")
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert(setAlert, "warning", "Rasm tanlamadingiz!")
    }
  }


  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div style={{ width: "60%", margin: "0 auto" }}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Qo'shish</h5>
            <button onClick={() => setAddCarousel(false)} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>

          <div className="card-body">
            <form onSubmit={addFunc} id="form1">
              <div className="form-group form-group-floating row">
                <div className="col-lg-4">
                  <div className="form-group-feedback form-group-feedback-right">
                    <input
                      type="text"
                      className="form-control form-control-outline"
                      placeholder="Placeholder"
                      ref={uzNameRef}
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
                      ref={krNameRef}
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
                      ref={ruNameRef}
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
                      ref={urlRef}
                      required={true}
                    />
                    <label className="label-floating">Url</label>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="image_container">
                    <div className="image_wrapper">
                      <div className="image_bottom">
                        <div className="input_text_content">
                          <input
                            className='p-2'
                            style={{ height: "56px", background: "#fff" }}
                            type="text"
                            value={
                              file.length > 0 ? "Rasm tanlandi" : "Rasm tanlash"
                            }
                            disabled
                            accept=".png, .jpeg, .jpg"
                          />
                        </div>
                        <div className="buttons">
                          <button
                            className='p-2' style={{ height: "56px" }}
                            type="button"
                            onClick={() => setFile(null)}
                          >
                            <i className="fas fa-close"></i>
                            O'chirish
                          </button>
                          <label htmlFor="browser" className='p-2' style={{ height: "56px" }}>
                            <i className="fas fa-upload"></i>
                            Tanlash
                            <input
                              type="file"
                              id="browser"
                              onClick={(e) => (e.target.value = null)}
                              onChange={(e) =>
                                setFile(Object.values(e.target.files))
                              }
                              style={{ display: "none" }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0" style={{ display: "flex", justifyContent: "end" }}>
                <button className='btn btn-success py-2' type='submit' form="form1" value="Submit">Qo'shish</button>
              </div>

            </form>
          </div>


        </div>
      </div>
    </div>
  );
}

export default React.memo(Add);
