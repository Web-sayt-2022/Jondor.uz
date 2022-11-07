import React from 'react';

const CtrlEnter = ({setCtrlEnter, ctrlEnter}) => {
  const deleteFunc = () => {
    console.log(1);
  }

  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header bg-primary text-white">
          <h5 className="modal-title">O'chirish</h5>
          <button onClick={() => setCtrlEnter({ isShow: false, data: {} })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
            &times;
          </button>
        </div>

        <div className="modal-body pb-0">
         <h5>{ctrlEnter.data}</h5>

        </div>

        <div className="modal-footer" style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => { deleteFunc() }} type="button" style={{ minWidth: "80px" }} className="btn btn-danger">Ha</button>
          <button onClick={() => setCtrlEnter({ isShow: false, data: {} })} type="button" style={{ minWidth: "80px" }} className="btn btn-primary">Yo'q</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CtrlEnter;
