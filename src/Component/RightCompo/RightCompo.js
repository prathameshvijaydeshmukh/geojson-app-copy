import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RightCompo.css";

function RightCompo() {
  return (
    <div class=" bg-white top-right">
      <div>
        <div className="d-flex justify-content-between bg-color">
          <div className="bg-white">
            <button
              className="btn shadow-none"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i className="fa fa-caret-down"></i>
            </button>
          </div>
          <div className="login d-flex bg-color mr-3">
            <button className="btn text-primary px-0 shadow-none">anon</button>
            <span className="p-1 pt-2">|</span>
            <button className="btn text-primary px-0 shadow-none">login</button>
          </div>
        </div>

        <div className="collapse" id="collapseExample">
          <div className="card-edit card-body">
            <div className="btn-change bg-white">
              <button className="btn button-edit shadow-none">
                <i className="fa fa-code mr-1"></i>
                JSON
              </button>
              <button className="btn button-edit shadow-none">
                <i className=" fa fa-table mr-1"></i>
                Table
              </button>
              <button className="btn button-edit shadow-none">
                <i className="fa fa-question mr-1"></i>Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightCompo;
