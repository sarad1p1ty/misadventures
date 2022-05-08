import * as React from "react"

const IndexPage = () => {
  return (
    <>
    <header><nav>
        <ul className="nav justify-content-center">
          <li className="nav-item"><a className="nav-link">Home</a></li>
          <li className="nav-item"><a className="nav-link">About</a></li>
          <li className="nav-item"><a className="nav-link">Contact</a></li>
        </ul>
    </nav></header>
    <main className="container">
      <div className="row">
        <div className="col">First</div>
        <div className="col">Second</div>
        <div className="col">Third</div>
      </div>
    </main>
    <footer></footer>
    </>
  )
}

export default IndexPage
