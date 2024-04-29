import React from 'react'

export const Dashbord = () => {
  const item = [
    {
      title: "Dashboard",
      link: "/admin"
    },
    {
      title: "Product",
      link: "/admin"
    },
    {
      title: "Dashboard",
      link: "/admin"
    },
  ]
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div style={{ backgroundColor: "black", color: "white" }} className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span style={{ color: "red" }} className="fs-1 d-none d-sm-inline">PhoneX</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <button style={{ padding: "2px" }}>Logout</button>
            </div>
          </div>
        </div>
        <div className="col py-3">Content area...</div>
      </div>
    </div>

  )
}
