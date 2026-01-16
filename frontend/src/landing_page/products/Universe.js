import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 style={{ marginBottom: "1em" }}>The Zerodha Universe</h1>
        <p className="text-center fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="logo" style={{ width: "210px", height: "auto" }}/>
          <p className="text-small text-muted mt-3" Thematic investment platform>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="logo" style={{ width: "150px", height: "auto" }}/>
          <p className="text-small text-muted mt-3">Algo & strategy plateform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="logo" style={{ width: "200px", height: "auto" }}/>
          <p className="text-small text-muted mt-3">Options trading plateform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\zerodhaFundhouse.png" alt="logo" style={{ width: "220px", height: "auto" }}/>
          <p className="text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" alt="logo" style={{ width: "200px", height: "auto" }}/>
          <p className="text-small text-muted mt-3">Bonds trading plateform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="logo" style={{ width: "120px", height: "auto" }}/>
          <p className="text-small text-muted mt-3">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-3 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;