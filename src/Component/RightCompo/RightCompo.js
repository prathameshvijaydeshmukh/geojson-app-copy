import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RightCompo.css";

function RightCompo({ setJsonData }) {
  function getJsonData(event) {
    setJsonData(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <div className=" bg-white top-right right-compo">
      <div>
        <div className="d-flex justify-content-between bg-color">
          <div className="bg-white">
            <button
              className="btn shadow-none"
              data-toggle="collapse"
              data-target="#"
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

        <div className="collapse show" id="collapseExample">
          <div className="card-edit card-body">
            {/* buttons JSON,TABLE,HELP */}
            <ul
              className="nav nav-pills btn-change bg-white"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="active btn button-edit shadow-none"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <i className="fa fa-code mr-1"></i>
                  JSON
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="btn button-edit shadow-none"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <i className=" fa fa-table mr-1"></i>
                  Table
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="btn button-edit shadow-none"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <i className="fa fa-question mr-1"></i>Help
                </button>
              </li>
            </ul>
            {/* button-content */}
            <div className="tab-content tab-edit p-2" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                {/* <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"></span>
                  </div> */}
                <textarea
                  className="form-control form-edit"
                  aria-label="With textarea"
                  rows="26"
                  cols="400"
                  placeholder={`{
                    "type": "FeatureCollection",
                    "features": []
                  }`}
                  onChange={getJsonData}
                ></textarea>

                {/* </div> */}
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <span>prathamesh</span>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                {/* help-content */}
                <div className="pad2 prose">
                  <h2>Help</h2>
                  <p>
                    New here? <strong>geojson.io</strong> is a quick, simple
                    tool for creating, viewing, and sharing maps. geojson.io is
                    named after{" "}
                    <a href="http://geojson.org/" target="_blank">
                      GeoJSON
                    </a>
                    , an open source data format, and it supports GeoJSON in all
                    ways - but also accepts KML, GPX, CSV, GTFS, TopoJSON, and
                    other formats.
                  </p>

                  <p>
                    Need extra help or see a bug?{" "}
                    <a
                      target="_blank"
                      href="https://github.com/mapbox/geojson.io/issues?state=open"
                    >
                      Open an issue on geojson.io's issue tracker.
                    </a>
                  </p>
                  <h3>I've got data</h3>

                  <p>
                    If you have data, like a KML, GeoJSON, or CSV file, just
                    drag &amp; drop it onto the page or click 'Open' and 'File'
                    - your data should appear on the map!
                  </p>

                  <h3>I want to draw features</h3>

                  <p>
                    Click the drawing tools on the left-hand side to draw
                    points, polygons, lines and rectangles. After you're done
                    drawing the shapes, you can add information to each feature
                    by clicking on it, editing the feature's properties, and
                    clicking 'Save'.
                  </p>

                  <p>
                    Properties in GeoJSON are stored as 'key value pairs' - so,
                    for instance, if you wanted to add a name to each feature,
                    type 'name' in the first table field, and the name of the
                    feature in the second.
                  </p>

                  <h3>I want to use my map everywhere</h3>

                  <p>
                    You can share maps in quite a few ways! If you save your map
                    here, the URL of this page will update and you can link send
                    friends the link to share the map, or you can click
                    'Download' to grab the raw GeoJSON data and use it in other
                    software, like TileMill or Leaflet.
                  </p>

                  <h3>I'm a coder</h3>

                  <p>
                    <a href="#geojson-io-api">
                      geojson.io has an array of cli tools
                    </a>
                    that make it easy to go from a GeoJSON file on your computer
                    to geojson.io.
                  </p>
                  <h3>Protips?</h3>

                  <ul>
                    <li>
                      <strong>cmd+s</strong>: save map to github gists
                    </li>
                    <li>
                      <strong>cmd+a</strong>: download map as geojson
                    </li>
                    <li>
                      <strong>arrow keys</strong>: navigate the map
                    </li>
                  </ul>

                  <h3>Privacy &amp; License Issues</h3>

                  <ul>
                    <li>
                      <strong>Clicking save</strong> by default saves to a
                      private GitHub Gist - so it will only be accessible to
                      people you share the URL with, and creating it won't
                      appear in your GitHub timeline.
                    </li>
                    <li>
                      <strong>
                        The data you create and modify in geojson.io
                      </strong>{" "}
                      doesn't acquire any additional license: if it's secret and
                      copyrighted, it will remain that way - it doesn't have to
                      be public or open source.
                    </li>
                  </ul>
                  <br />
                  <hr />
                  <br />
                  <h2 id="geojson-io-api">Geojson.io API</h2>
                  <p>
                    You can interact with geojson.io programmatically in two
                    ways:
                  </p>
                  <ul>
                    <li>
                      <a href="#url-api">URL parameters</a>
                    </li>
                    <li>
                      <a href="#console-api">Browser console</a>
                    </li>
                    <li>
                      <a href="#protips">Protips</a>
                    </li>
                  </ul>
                  <h2 id="url-api">URL API</h2>
                  <p>
                    You can do a few interesting things with just URLs and
                    geojson.io. Here are the current URL formats.
                  </p>
                  <h3 id="-map-">
                    <code>map</code>
                  </h3>
                  <p>
                    Open the map at a specific location. The argument is numbers
                    separated by <code>/</code>
                    in the form <code>zoom/latitude/longitude</code>.
                  </p>
                  <h4 id="example-">Example:</h4>
                  <p>
                    <a href="http://geojson.io/#map=2/20.0/0.0">
                      http://geojson.io/#map=2/20.0/0.0
                    </a>
                  </p>
                  <h3 id="-data-data-application-json-">
                    <code>data=data:application/json,</code>
                  </h3>
                  <p>
                    Open the map and load a chunk of{" "}
                    <a href="http://geojson.org/">GeoJSON</a> data from a URL
                    segment directly onto the map. The GeoJSON data should be
                    encoded as per{" "}
                    <code>
                      encodeURIComponent(JSON.stringify(geojson_data))
                    </code>
                    .
                  </p>
                  <h4 id="example-">Example:</h4>
                  <p>
                    <a href="http://geojson.io/#data=data:application/json,%7B%22type%22%3A%22LineString%22%2C%22coordinates%22%3A%5B%5B0%2C0%5D%2C%5B10%2C10%5D%5D%7D">
                      http://geojson.io/#data=data:application/json,%7B%22type%22%3A%22LineString%22%2C%22coordinates%22%3A%5B%5B0%2C0%5D%2C%5B10%2C10%5D%5D%7D
                    </a>
                  </p>
                  <h3 id="-data-data-text-x-url-">
                    <code>data=data:text/x-url,</code>
                  </h3>
                  <p>
                    Load GeoJSON data from a URL on the internet onto the map.
                    The URL must refer directly to a resource that is:
                  </p>
                  <ul>
                    <li>Freely accessible (not behind a password)</li>
                    <li>
                      Supports{" "}
                      <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">
                        CORS
                      </a>
                    </li>
                    <li>Is valid GeoJSON</li>
                  </ul>
                  <p>
                    The URL should be encoded as per{" "}
                    <code>encodeURIComponent(url)</code>.
                  </p>
                  <h4 id="example-">Example:</h4>
                  <p>
                    <a href="http://geojson.io/#data=data:text/x-url,http%3A%2F%2Fapi.tiles.mapbox.com%2Fv3%2Ftmcw.map-gdv4cswo%2Fmarkers.geojson">
                      http://geojson.io/#data=data:text/x-url,http%3A%2F%2Fapi.tiles.mapbox.com%2Fv3%2Ftmcw.map-gdv4cswo%2Fmarkers.geojson
                    </a>
                  </p>
                  <h3 id="-id-gist-">
                    <code>id=gist:</code>
                  </h3>
                  <p>
                    Load GeoJSON data from a{" "}
                    <a href="https://gist.github.com/">GitHub Gist</a>, given an
                    argument in the form of <code>login/gistid</code>. The Gist
                    can be public or private, and must contain a file with a{" "}
                    <code>.geojson</code> extension that is valid GeoJSON.
                  </p>
                  <h4 id="example-">Example:</h4>
                  <p>
                    <a href="http://geojson.io/#id=gist:tmcw/e9a29ad54dbaa83dee08&amp;map=8/39.198/-76.981">
                      http://geojson.io/#id=gist:tmcw/e9a29ad54dbaa83dee08&amp;map=8/39.198/-76.981
                    </a>
                  </p>
                  <h3 id="-id-github-">
                    <code>id=github:</code>
                  </h3>
                  <p>
                    Load a file from a GitHub repository. You must have access
                    to the file, and it must be valid GeoJSON.
                  </p>
                  <p>The url is in the form:</p>
                  <pre>
                    <code>login/repository/blob/branch/filepath</code>
                  </pre>
                  <h4 id="example-">Example:</h4>
                  <p>
                    <a href="http://geojson.io/#id=github:benbalter/dc-wifi-social/blob/master/bars.geojson&amp;map=14/38.9140/-77.0302">
                      http://geojson.io/#id=github:benbalter/dc-wifi-social/blob/master/bars.geojson&amp;map=14/38.9140/-77.0302
                    </a>
                  </p>
                  <h2 id="console-api">Console API</h2>
                  <p>
                    <a href="http://debugbrowser.com/">
                      Pop open your browser console
                    </a>{" "}
                    and see the beautiful examples: geojson.io has started to
                    expose a subset of its inner workings for you to mess around
                    with:
                  </p>
                  <h3 id="-window-api-map-">
                    <code>window.api.map</code>
                  </h3>
                  <p>
                    The <a href="http://leafletjs.com/">Leaflet</a> map that you
                    see and use on the site. See the{" "}
                    <a href="http://leafletjs.com/reference.html">
                      Leaflet API
                    </a>{" "}
                    for all the things you can do with it.
                  </p>
                  <p>For instance, you could add another map layer:</p>
                  <pre></pre>
                  <h3 id="-window-api-data-">
                    <code>window.api.data</code>
                  </h3>
                  <p>
                    The data model. See the{" "}
                    <a href="https://github.com/mapbox/geojson.io/blob/gh-pages/src/core/data.js#L48-L90">
                      code to get an idea of how it works
                    </a>{" "}
                    - you'll want to use stuff like <code>data.set()</code>
                    and <code>data.get('map')</code> and{" "}
                    <code>data.mergeFeatures([arrayoffeatures])</code> to do
                    your dirty business.
                  </p>
                  <h2 id="-window-api-maplayer-">
                    <code>window.api.mapLayer</code>
                  </h2>
                  <p>
                    This is the Leaflet featureGroup that gets filled with
                    features as you draw them. You can operate on this directly
                    to do advanced stuff like selecting a feature with its id:
                  </p>
                  <pre>
                    <code className="lang-js">
                      var layers = []; window.api.mapLayer.eachLayer();
                      layers.find(l =&gt; l.feature.id == 'a').openPopup();
                    </code>
                  </pre>
                  <p>
                    That example uses{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
                      arrow functions
                    </a>
                    which are supported in Chrome &amp; Firefox.
                  </p>
                  <h2 id="-window-api-drawcontrol-">
                    <code>window.api.drawControl</code>
                  </h2>
                  <p>
                    Exposes the{" "}
                    <a href="https://github.com/Leaflet/Leaflet.draw">
                      Leaflet.Draw
                    </a>{" "}
                    control instance in the console.
                  </p>
                  <h2 id="-window-api-on-event-fn-">
                    <code>window.api.on(event, fn)</code>
                  </h2>
                  <p>
                    Exposes d3 events, including <code>change</code>.
                  </p>
                  <h2 id="protips">Protips</h2>
                  <p>
                    To include <code>turf</code> from{" "}
                    <a href="https://github.com/turfjs/turf">turf</a> so you can
                    manipulate features with its GIS features, run this in the
                    CLI, which will download the script and evaluate it.
                  </p>
                  <pre>
                    <code className="lang-js">
                      fetch('https://npmcdn.com/@turf/turf@3.1.1/turf.js').then(t
                      =&gt; t.text()).then(eval)
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightCompo;
