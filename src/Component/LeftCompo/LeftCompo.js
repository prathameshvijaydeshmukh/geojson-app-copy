import "./LeftCompo.css";

function LeftCompo() {
  return (
    <div className="d-flex left-compo justify-content-between bg-white">
      <div className="dropdown">
        <button className="dropbtn btn btn-edit shadow-none">Open</button>
        <div className="dropdown-content">
          <a href="#">File</a>
          <a href="#">GitHub</a>
          <a href="#">Gist</a>
        </div>
      </div>
      <div className="dropdown ">
        <button className="dropbtn btn btn-edit shadow-none">Save</button>
        <div className="dropdown-content">
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
        <button className="dropbtn btn btn-edit shadow-none">New</button>
      </div>

      <div className="dropdown">
        <button className="dropbtn btn btn-edit shadow-none">Share</button>
      </div>

      <div className="dropdown dropdown-edit">
        <button className="dropbtn btn btn-edit shadow-none">Meta</button>
        <div className="dropdown-content edit-width">
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
        <button className="dropbtn bg-white text-secondary bg-white btn btn-edit unsaved-edit shadow-none">
          <i className="fa fa-file mr-2 font-weight-light text-primary"></i>
          unsaved
        </button>
      </div>
    </div>
  );
}

export default LeftCompo;
