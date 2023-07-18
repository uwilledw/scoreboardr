import React, { useState } from "react";
import { AppState } from "../AppState.js";

export default function HomePage() {
  const [count, setCount] = useState(0)
  let score1 = AppState.score1
  let score2 = AppState.score2
  function addOne() {
    score1++
    console.log(score1)
  }

  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-10 heroImg">
            <section className="row align-items-end">
              <div className="col-12 d-flex justify-content-around">
                <div>
                  <h1>{score1}</h1>
                </div>
                <div>
                  <h1>{count}</h1>
                </div>
              </div>
              <button onClick={() => setCount((count) => count + 1)} className="btn btn-success">{score1}</button>
              <button className="btn btn-success">-</button>
            </section>
          </div>
          {/* <div className="col-4">
            <div className="card">
              <div className="card-body">
                <button className="btn btn-success my-1" onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}