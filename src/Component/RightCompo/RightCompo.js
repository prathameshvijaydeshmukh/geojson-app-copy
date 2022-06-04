import "./RightCompo.css";

function RightCompo() {
  return (
    <div class="btn-size bg-white">
      <div class="top-right">
        <div className="d-flex">
          <span
            className="iconify m-2"
            data-icon="bxs:down-arrow"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          ></span>
          <div className="ms-1">
            <button className="btn button-edit">
              <span class="iconify mb-1" data-icon="bi:code-slash"></span>JSON
            </button>
            <button className="btn button-edit">
              <span
                class="iconify"
                data-icon="ant-design:table-outlined"
              ></span>
              Table
            </button>
            <button className="btn button-edit">
              <span class="iconify mb-1" data-icon="bi:question-lg"></span>Help
            </button>
          </div>
        </div>

        <div class="collapse" id="collapseExample">
          <div class="card card-body"></div>
        </div>
      </div>
    </div>
  );
}

export default RightCompo;
