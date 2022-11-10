import React from 'react';
import { useRef } from 'react';

const CtrlEnter = ({ setCtrlEnter, ctrlEnter }) => {
  const inputRef = useRef()

  const handleFunc = () => {
    console.log(1);
  }

  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div style={{ width: "40%", margin: "0 auto" }}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Ma'lumot xatoligi</h5>
            <button onClick={() => setCtrlEnter({ isShow: false, data: {} })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
              &times;
            </button>
          </div>

          <div className="modal-body pb-0">
            <h5>Belgilangan ma'lumot: {ctrlEnter.data}</h5>

            <div className="form-group form-group-floating row mt-2">
              <div className="col-lg-12">
                <div className="form-group-feedback form-group-feedback-right">
                  <input
                    type="text"
                    className="form-control form-control-outline"
                    placeholder="placeholder"
                    ref={inputRef}
                    required={true}
                  />
                  <label className="label-floating">Xatolikni kiriting:</label>
                </div>
              </div>
            </div>

          </div>

          <div className="modal-footer px-3" style={{ display: "flex", justifyContent: "end" }}>
            <button className='btn btn-success py-2'
              type='submit' form="form1"
              value="Submit"
              onClick={() => handleFunc()}
            >Yuborish</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CtrlEnter;
