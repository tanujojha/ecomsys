import  {Link,  useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {

  let location = useLocation();
  let navigate = useNavigate();

  const handelLogout = ()=>{
    localStorage.removeItem("token");
    navigate("/")
  }



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-Commerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==="/cart" && "active"}`} to="/cart">cart</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==="/wishlist" && "active"}`} to="/wishlist">wishlist</Link>
        </li>

      </ul>
    </div>
    {!localStorage.getItem("token") ? <> <Link to="/login"><button type="button" class="btn btn-primary mx-2">Login</button></Link>
    <Link to="/signup"><button type="button" class="btn btn-primary mx-2">Sign up</button></Link> </>
    : <Link to="/"><button onClick = {handelLogout} type="button" class="btn btn-primary mx-2">logout</button></Link>}
  </div>
</nav>
)
}


export default Navbar;
