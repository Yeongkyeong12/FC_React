import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "코트 추천",
    "강남 우동 맛집",
    "js 공부",
  ]);
  let [like, like변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map((글, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}
              <span
                onClick={() => {
                  like변경(like + 1);
                }}
              >
                👍
              </span>
              {like}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input />
        <button>저장</button>
      </div>

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        열고닫기
      </button>

      {modal === true ? (
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
