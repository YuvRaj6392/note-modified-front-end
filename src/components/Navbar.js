import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const history=useNavigate();
  const logout=()=>{
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    history('/login')
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Yuv-note</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?

      <form className="d-flex">
      <Link style={{marginRight:10}} className='btn btn-success' to='/login' >Login</Link>  
      <Link className='btn btn-success' to='/signup' >Sign-up</Link>  
      </form>:
      <button onClick={logout} className='btn btn-danger'>Logout</button>
      
      }
     
    </div>
  </div>
</nav>
    </>
  )
}