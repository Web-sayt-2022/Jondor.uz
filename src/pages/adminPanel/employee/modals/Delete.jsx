import React from 'react';

const Delete = (deleteModal, setDeleteModal, Alert, setAlert) => {
  const deleteFunc = () => {
    console.log(1);
  }

  return (
    <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">O'chirish</h5>
            <button onClick={() => setDeleteModal({ isShow: false, id: 0 })} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
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
              <button onClick={() => { deleteFunc(deleteModal.id) }} type="button" style={{ minWidth: "80px" }} className="btn btn-danger">Ha</button>
              <button onClick={() => setDeleteModal({ isShow: false, id: 0 })} type="button" style={{ minWidth: "80px" }} className="btn btn-primary">Yo'q</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Delete);
