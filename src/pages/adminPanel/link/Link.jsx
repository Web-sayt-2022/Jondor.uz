import React from 'react';

const Link = () => {
  return (
    <div className="card-body p-0 pt-3 px-3">
      <div className="card px-3 py-2" style={{ minHeight: "calc(100vh - 94px)" }}>

        <div className="d-flex mb-2" style={{ alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>Link</h3>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Link);
