import "./LeftCompo.css";

function LeftCompo() {
  return (
    <>
      <div className="d-flex">
        <div className="dropdown ">
          <button className="dropbtn btn btn-edit">Open</button>
          <div className="dropdown-content edit-width">
            <a href="#">File</a>
            <a href="#">GitHub</a>
            <a href="#">Gist</a>
          </div>
        </div>
        <div className="dropdown ">
          <button className="dropbtn btn btn-edit">Save</button>
          <div className="dropdown-content edit-width-2">
            <a href="#"> GitHub</a>
            <a href="#"> GeoJSON</a>
            <a href="#"> TopoJSON</a>
            <a href="#"> KML</a>
            <a href="#"> GeoJSON</a>
            <a href="#"> WKT</a>
            <a href="#"> shapefile</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn btn btn-edit">New</button>
        </div>

        <div className="dropdown">
          <button className="dropbtn btn btn-edit">Share</button>
        </div>

        <div class="dropdown dropdown-edit">
          <button className="dropbtn btn btn-edit">Meta</button>
          <div className="dropdown-content edit-width-3">
            <a href="#"> WKT</a>
            <a href="#">Add map layer</a>
            <a href="#"> Zoom to features1</a>
            <a href="#"> Add map layer</a>
            <a href="#"> Zoom to features2</a>
            <a href="#"> Add map layer</a>
            <a href="#"> Zoom to features3</a>
          </div>
        </div>

        <div className="dropdown ">
          <button className="dropbtn bg-white text-primary bg-white btn btn-edit unsaved-edit">
            <span
              className="iconify text-primary"
              data-icon="akar-icons:file"
            ></span>
            unsaved
          </button>
        </div>
      </div>
    </>
  );
}

export default LeftCompo;
