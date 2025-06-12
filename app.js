import { getDatabase, ref, child, get, set, onValue, update } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-79xegBgcFgdVLNbZRQRuozdR3j0hwrA",
  authDomain: "tic-tik-tae.firebaseapp.com",
  databaseURL: "https://tic-tik-tae-default-rtdb.firebaseio.com",
  projectId: "tic-tik-tae",
  storageBucket: "tic-tik-tae.firebasestorage.app",
  messagingSenderId: "376258770437",
  appId: "1:376258770437:web:92a13cd3c4796836f94e6c",
  measurementId: "G-QN6SKE494D"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();


const url = new URLSearchParams(window.location.search);
const roomid = url.get('roomid');
console.log(roomid);
const player = url.get('player');
console.log(player);

document.getElementById('players').innerText = 'player ' + player;


let turnss = document.getElementById('turnss');
const boardRef = ref(db, `rooms/${roomid}`);
onValue(boardRef, (snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    const turn = data.turn;
    turnss.innerText = turn
  }
})





document.addEventListener("DOMContentLoaded", () => {
  const grid0 = document.getElementById("grid0");
  const grid1 = document.getElementById("grid1");
  const grid2 = document.getElementById("grid2");
  const grid3 = document.getElementById("grid3");
  const grid4 = document.getElementById("grid4");
  const grid5 = document.getElementById("grid5");
  const grid6 = document.getElementById("grid6");
  const grid7 = document.getElementById("grid7");
  const grid8 = document.getElementById("grid8");

  const gd0 = document.getElementById("gd0");
  const gd1 = document.getElementById("gd1");
  const gd2 = document.getElementById("gd2");
  const gd3 = document.getElementById("gd3");
  const gd4 = document.getElementById("gd4");
  const gd5 = document.getElementById("gd5");
  const gd6 = document.getElementById("gd6");
  const gd7 = document.getElementById("gd7");
  const gd8 = document.getElementById("gd8");



  var xo = ["x", "o"];
  let x = true;
  let y = false;
  let turns = xo[0]

  let gr0 = true;
  if (gr0 === true && grid0 && gd0) {
    grid0.addEventListener("click", () => {
      if (player === turns) {
        const val0 = player === 'x' ? xo[0] : xo[1];
        document.getElementById("gd0").innerText = val0;

        const boardRef = ref(db, `rooms/${roomid}`);
        get(boardRef).then((snapshot) => {
          if (snapshot.exists()) {
            let board = snapshot.val().board || Array(9).fill("");
            board[0] = val0
            update(boardRef, {
              board: board,
              turn: turns + " turn",
            });
          }
        });

        x = false;
        y = true;
        gr0 = false;
        player === 'x' ? winningx(0) : winningy(0)
        turns = turns === 'x' ? 'o' : 'x';
        console.log(turns + 'gr0');

        // winningx(0);
      }
    });


    if (player === "o" ? 'o' : 'x') {
      const boardRef = ref(db, `rooms/${roomid}`);
      onValue(boardRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const va = data.board[0];
          const turn = data.turn;

          if (turn && va && gr0 && document.getElementById("gd0").innerText === "") {
            document.getElementById("gd0").innerText = va;
            gr0 = false;
            x = true;
            y = false;
            turns = turns === 'x' ? 'o' : 'x';
            turnss.innerText = turn;
            console.log(turns + 'gr0');


            //winningx(0); 
          }
        }
      });
    }
  }


  let gr1 = true;
  if (gr1 === true && grid1 && gd1) {
    grid1.addEventListener("click", () => {
      if (player === turns) {
        const val1 = player === 'x' ? xo[0] : xo[1];
        document.getElementById("gd1").innerText = val1;
        const boardRef = ref(db, `rooms/${roomid}`);
        get(boardRef).then((snapshot) => {
          if (snapshot.exists()) {
            let board = snapshot.val().board || Array(9).fill("");
            board[1] = val1
            update(boardRef, {
              board: board,
              turn: turns + " turn",
            });
          }
        });
        x = false;
        y = true;
        player === 'x' ? winningx(1) : winningy(1)
        gr1 = false;

        turns = turns === 'x' ? 'o' : 'x';
        turnss.innerText = turns;
        console.log(turns + 'gr1');
        // winningx(0);
      }


    });

    if (player === "o" ? 'o' : 'x') {
      const boardRef = ref(db, `rooms/${roomid}`);
      onValue(boardRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const va = data.board[1]; // value at grid 0
          const turn = data.turn;

          if (va && gr1 && document.getElementById("gd1").innerText === "") {
            document.getElementById("gd1").innerText = va;

            x = true;
            y = false;
            //winningx(0); 
            gr1 = false;
            turns = turns === 'x' ? 'o' : 'x';
            turnss.innerText = turn;
            console.log(turns + 'gr1');

          }
        }
      });
    }
  }

  let gr2 = true;
  if (gr2 === true && grid2 && gd2) {
    grid2.addEventListener("click", () => {
      if (player === turns) {
        console.log(turns + 'gr2');

        const val2 = player === 'x' ? xo[0] : xo[1];
        document.getElementById("gd2").innerText = val2;
        const boardRef = ref(db, `rooms/${roomid}`);
        get(boardRef).then((snapshot) => {
          if (snapshot.exists()) {
            let board = snapshot.val().board || Array(9).fill("");
            board[2] = val2
            update(boardRef, {
              board: board,
              turn: turns + " turn",
            });
          }
        });
        x = false;
        y = true;
        player === 'x' ? winningx(2) : winningy(2)
        gr2 = false;
        turns = turns === 'x' ? 'o' : 'x';
        turnss.innerText = turns;
        console.log(turns + 'gr2');
      }


    });

    if (player === "o" ? 'o' : 'x') {
      const boardRef = ref(db, `rooms/${roomid}`);
      onValue(boardRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const va = data.board[2]; // value at grid 0
          const turn = data.turn;

          if (va && gr2 && document.getElementById("gd2").innerText === "") {
            document.getElementById("gd2").innerText = va;
            gr2 = false;
            x = true;
            y = false;
            //winningx(0); 
            turns = turns === 'x' ? 'o' : 'x';
            turnss.innerText = turn;
            console.log(turns + 'gr2');

          }
        }
      });
    }
  }

  let gr3 = true;
  if (gr3 === true && grid3 && gd3) {
    grid3.addEventListener("click", () => {
      if (player === turns) {
        console.log(turns + 'gr3');

        const val3 = player === 'x' ? xo[0] : xo[1];
        document.getElementById("gd3").innerText = val3;
        const boardRef = ref(db, `rooms/${roomid}`);
        get(boardRef).then((snapshot) => {
          if (snapshot.exists()) {
            let board = snapshot.val().board || Array(9).fill("");
            board[3] = val3
            update(boardRef, {
              board: board,
              turn: turns + " turn",
            });
          }
        });
        x = false;
        y = true;
        player === 'x' ? winningx(3) : winningy(3)
        gr3 = false;
        turns = turns === 'x' ? 'o' : 'x';
        turnss.innerText = turns;
        console.log(turns + 'gr3');
      }


    });

    if (player === "o" ? 'o' : 'x') {
      const boardRef = ref(db, `rooms/${roomid}`);
      onValue(boardRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const va = data.board[3]; // value at grid 0
          const turn = data.turn;

          if (va && gr3 && document.getElementById("gd3").innerText === "") {
            document.getElementById("gd3").innerText = va;
            gr3 = false;
            x = true;
            y = false;
            //winningx(0); 
            turns = turns === 'x' ? 'o' : 'x';
            turnss.innerText = turn;
            console.log(turns + 'gr3');

          }
        }
      });
    }
  }

  let gr4 = true;
  if (gr4 === true && grid4 && gd4) {
    grid4.addEventListener("click", () => {
      if (player === turns) {
        console.log(turns + 'gr4');

        const val4 = player === 'x' ? xo[0] : xo[1];
        document.getElementById("gd4").innerText = val4;
        const boardRef = ref(db, `rooms/${roomid}`);
        get(boardRef).then((snapshot) => {
          if (snapshot.exists()) {
            let board = snapshot.val().board || Array(9).fill("");
            board[4] = val4
            update(boardRef, {
              board: board,
              turn: turns + " turn",
            });
          }
        });
        x = false;
        y = true;
        player === 'x' ? winningx(4) : winningy(4)
        gr4 = false;
        turns = turns === 'x' ? 'o' : 'x';
        turnss.innerText = turns;
        console.log(turns + 'gr4');
      }


    });

    if (player === "o" ? 'o' : 'x') {
      const boardRef = ref(db, `rooms/${roomid}`);
      onValue(boardRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const va = data.board[4]; // value at grid 0
          const turn = data.turn;

          if (va && gr4 && document.getElementById("gd4").innerText === "") {
            document.getElementById("gd4").innerText = va;
            gr4 = false;
            x = true;
            y = false;
            //winningx(0); 
            turns = turns === 'x' ? 'o' : 'x';
            turnss.innerText = turn;
            console.log(turns + 'gr4');

          }
        }
      });
    }
  }


  let gr5 = true;
  if (gr5 === true && grid5 && gd5) {
    grid5.addEventListener("click", () => {
      if (player === turns) {
        console.log(turns + 'gr5');

        const val5 = player === 'x' ? xo[0] : xo[1];
        document.getElementById("gd5").innerText = val5;
        const boardRef = ref(db, `rooms/${roomid}`);
        get(boardRef).then((snapshot) => {
          if (snapshot.exists()) {
            let board = snapshot.val().board || Array(9).fill("");
            board[5] = val5
            update(boardRef, {
              board: board,
              turn: turns + " turn",
            });
          }
        });
        x = false;
        y = true;
        player === 'x' ? winningx(5) : winningy(5)
        gr5 = false;
        turns = turns === 'x' ? 'o' : 'x';
        turnss.innerText = turns;
        console.log(turns + 'gr5');
      }


    });


    if (player === "o" ? 'o' : 'x') {
      const boardRef = ref(db, `rooms/${roomid}`);
      onValue(boardRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const va = data.board[5]; // value at grid 0
          const turn = data.turn;

          if (va && gr5 && document.getElementById("gd5").innerText === "") {
            document.getElementById("gd5").innerText = va;
            gr5 = false;
            x = true;
            y = false;
            turns = turns === 'x' ? 'o' : 'x';
            turnss.innerText = turn;
            console.log(turns + 'gr5');

          }
        }
      });
    }
  }

  let gr6 = true;
  if (gr6 === true && grid6 && gd6) {
    grid6.addEventListener("click", () => {
      if (player === turns) {
        console.log(turns + 'gr6');

        const val6 = player === 'x' ? xo[0] : xo[1];
        document.getElementById("gd6").innerText = val6;
        const boardRef = ref(db, `rooms/${roomid}`);
        get(boardRef).then((snapshot) => {
          if (snapshot.exists()) {
            let board = snapshot.val().board || Array(9).fill("");
            board[6] = val6
            update(boardRef, {
              board: board,
              turn: turns + " turn",
            });
          }
        });
        x = false;
        y = true;
        player === 'x' ? winningx(6) : winningy(6)
        gr6 = false;
        turns = turns === 'x' ? 'o' : 'x';
        turnss.innerText = turns;
        console.log(turns + 'gr6');
      }


    });


    if (player === "o" ? 'o' : 'x') {
      const boardRef = ref(db, `rooms/${roomid}`);
      onValue(boardRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const va = data.board[6]; // value at grid 0
          const turn = data.turn;

          if (va && gr6 && document.getElementById("gd6").innerText === "") {
            document.getElementById("gd6").innerText = va;
            gr6 = false;
            x = true;
            y = false;
            turns = turns === 'x' ? 'o' : 'x';
            turnss.innerText = turn;
            console.log(turns + 'gr6');

          }
        }
      });
    }
  }

  let gr7 = true;
  if (gr7 === true && grid7 && gd7) {
    grid7.addEventListener("click", () => {
      if (player === turns) {
        console.log(turns + 'gr7');

        const val7 = player === 'x' ? xo[0] : xo[1];
        document.getElementById("gd7").innerText = val7;
        const boardRef = ref(db, `rooms/${roomid}`);
        get(boardRef).then((snapshot) => {
          if (snapshot.exists()) {
            let board = snapshot.val().board || Array(9).fill("");
            board[7] = val7
            update(boardRef, {
              board: board,
              turn: turns + " turn",
            });
          }
        });
        x = false;
        y = true;
        player === 'x' ? winningx(7) : winningy(7)
        gr5 = false;
        turns = turns === 'x' ? 'o' : 'x';
        turnss.innerText = turns;
        console.log(turns + 'gr7');
      }


    });


    if (player === "o" ? 'o' : 'x') {
      const boardRef = ref(db, `rooms/${roomid}`);
      onValue(boardRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const va = data.board[7]; // value at grid 0
          const turn = data.turn;

          if (va && gr7 && document.getElementById("gd7").innerText === "") {
            document.getElementById("gd7").innerText = va;
            gr7 = false;
            x = true;
            y = false;
            turns = turns === 'x' ? 'o' : 'x';
            turnss.innerText = turn;
            console.log(turns + 'gr7');

          }
        }
      });
    }
  }

  let gr8 = true;
  if (gr8 === true && grid8 && gd8) {
    grid8.addEventListener("click", () => {
      if (player === turns) {
        console.log(turns + 'gr8');

        const val8 = player === 'x' ? xo[0] : xo[1];
        document.getElementById("gd8").innerText = val8;
        const boardRef = ref(db, `rooms/${roomid}`);
        get(boardRef).then((snapshot) => {
          if (snapshot.exists()) {
            let board = snapshot.val().board || Array(9).fill("");
            board[8] = val8
            update(boardRef, {
              board: board,
              turn: turns + " turn",
            });
          }
        });
        x = false;
        y = true;
        player === 'x' ? winningx(8) : winningy(8)
        gr8 = false;
        turns = turns === 'x' ? 'o' : 'x';
        turnss.innerText = turns;
        console.log(turns + 'gr8');
      }


    });


    if (player === "o" ? 'o' : 'x') {
      const boardRef = ref(db, `rooms/${roomid}`);
      onValue(boardRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const va = data.board[8];
          const turn = data.turn;

          if (va && gr8 && document.getElementById("gd8").innerText === "") {
            document.getElementById("gd8").innerText = va;
            gr8 = false;
            x = true;
            y = false;
            turns = turns === 'x' ? 'o' : 'x';
            turnss.innerText = turn;
            console.log(turns + 'gr8');

          }
        }
      });
    }
  }







  let win = [
    [0, 1, 2],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],

  ];

  let t1 = [];
  let t2 = [];
  let t3 = [];
  let val = [];
  let val3 = [];
  let val2 = [];
  let index = true;
  let index1 = true;
  let values = true;
  let result = document.getElementById("result");




  function winningx(arr) {
    if (index) {
      val.push(arr);
      console.log(val);
      if (val.length === 3) {
        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          console.log('value:', win)
          for (let i = 0; i <= 2; i++) {
            if (wins.includes(val[i])) {
              t1[i] = 0;
              if (i === 2) {
                console.log('yessx');
                if (t1[0] === 0 && t1[1] === 0 && t1[2] === 0 && player === 'x') {
                  console.log('yessx');
                  result.innerText = "x win";
                  console.log("stop");
                  const room = ref(db, `rooms/${roomid}`)

                  const val = 'x win'
                  update(room, {
                    result: val,
                  })
                  break;
                }
              }
            }
            else {
              t1.length = 0;
            }
          }
        }
      }

      else if (val.length === 4) {
        console.log(val);
        console.log(t1);
        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          for (let i = 0; i <= 3; i++) {
            if (wins.includes(val[i])) {
              t1.push(0);
              console.log(t1);

              if (i === 3) {
                if (t1[0] === 0 && t1[1] === 0 && t1[2] === 0 && player === 'x') {
                  result.innerText = "x win";
                  console.log("stop");
                  const room = ref(db, `rooms/${roomid}`)
                  const val = 'x win'
                  update(room, {
                    result: val,
                  })
                  break;
                }
              }
            }
            /* else {
              t1.length = 0;
              console.log(t1);
            } */
          }
          t1.length = 0;
        }

      }

      if (val.length === 5) {
        console.log(val);
        console.log(t1);
        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          for (let i = 0; i <= 4; i++) {
            if (wins.includes(val[i])) {
              t1.push(0);
              console.log(t1);
              if (i === 4) {
                if (t1[0] === 0 && t1[1] === 0 && t1[2] === 0 && player === 'x') {
                  result.innerText = "x win";
                  console.log("stop");
                  const room = ref(db, `rooms/${roomid}`)

                  const val = 'x win'
                  update(room, {
                    result: val,
                  })
                  break;
                }
              }
            }
            /* else {
              t1.length = 0;
              console.log(t1);
            } */
          }
          t1.length = 0;
        }
      }
      // if (val2.length === 4 && val.length === 5) {
      //   result.innerText = "MATCH DRAW";
      //   values = false;
      //   alert("MATCH DRAW");
      // }
      /* if (val2.length === 4) {
        result.innerText = "match draw";
        alert("MATCH DRAW");
   
      } */

    }
  }




  function winningy(arr1) {
    if (index1) {
      val2.push(arr1);
      console.log(val2);
      if (val2.length === 3) {
        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          console.log('value:', wins);
          for (let i = 0; i <= 2; i++) {
            if (wins.includes(val2[i])) {
              t2[i] = 1;
              if (i === 2) {
                if (t2[0] === 1 && t2[1] === 1 && t2[2] === 1 && player === 'o') {
                  result.innerText = "o win";
                  console.log("stop");
                  const room = ref(db, `rooms/${roomid}`)
                  const val = 'o win';
                  update(room, {
                    result: val,
                  })
                  break;
                }

              }
            }
            else {
              t2.length = 0;
            }
          }
        }
      }

      if (val2.length === 4) {
        console.log(val2);
        console.log(t2);

        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          for (let i = 0; i <= 3; i++) {
            if (wins.includes(val2[i])) {
              t2.push(1);
              console.log(t2 + " " + val + " " + j + " " + i);
              if (i === 3) {
                if (t2[0] === 1 && t2[1] === 1 && t2[2] === 1 && player === 'o') {
                  result.innerText = "o win ";
                  console.log("stop");
                  const room = ref(db, `rooms/${roomid}`)
                  const val = 'o win';
                  update(room, {
                    result: val,
                  })
                  break;
                }
                /* else {
   
                  t2.length = 0;
                  console.log(t2);
                } */
              }
            }
            /* else {
              t2.length = 0;
              console.log(t2);
            } */
          }
          t2.length = 0;
        }

      }

      // if (val2.length === 5) {
      //   console.log(val2);
      //   console.log(t2);

      //   for (let j = 0; j < win.length; j++) {
      //     let wins = win[j].flat();
      //     for (let i = 0; i <= 4; i++) {
      //       if (wins.includes(val2[i])) {
      //         t2.push(1);
      //         if (i === 4) {
      //           if (t2[0] === 1 && t2[1] === 1 && t2[2] === 1) {
      //             result.innerText = "WINNING Y";
      //             console.log("stop");
      //             alert("WINNING Y");
      //             break;
      //           }
      //           /* else {

      //             t2.length = 0;
      //             console.log(t2);
      //           } */
      //         }
      //       }
      //       /* else {
      //         t2.length = 0;
      //         console.log(t2);
      //       } */
      //     }
      //     t2.length = 0;
      //   }
      // }
    }
  }

  if (player === 'x' || player === 'o')
    onValue(ref(db, `rooms/${roomid}`), (snapshot) => {
      if (snapshot.exists()) {
        const valu = snapshot.val().result
        console.log(valu);

        console.log('after:' + valu);
        document.getElementById("result").innerText = valu

      }
    })



  const reset = document.getElementById('reset');

  reset.addEventListener('click', () => {
    if (player === 'x' || player === 'o') {
      const room = ref(db, `rooms/${roomid}`);
      update(room, {
        board: Array(9).fill(""),
        result: '',
        turn: 'x turn',
        reset: 'reset',
      }).then(() => {
        turns = 'x'
        for (let i = 0; i < 9; i++) {
          document.getElementById(`gd${i}`).innerText = "";
        }
        gr0 = gr1 = gr2 = gr3 = gr4 = gr5 = gr6 = gr7 = gr8 = true;
        x = true;
        y = false;


        setTimeout(() => {
          location.reload();
        }, 500);
      });
    }
  });

  if (player === 'x' ? 'o' : 'x') {
    onValue(ref(db, `rooms/${roomid}/reset`), (snapshot) => {
      const v = snapshot.val();
      if (v === 'reset' && player) {
        turns = 'x'
        for (let i = 0; i < 9; i++) {
          document.getElementById(`gd${i}`).innerText = "";
        }
        gr0, gr1, gr2, gr3, gr4, gr5, gr6, gr7, gr8 = true;
        x = true;
        y = false;

        setTimeout(() => {
          location.reload();
        }, 500);
      }
      setTimeout(() => {
        update(ref(db, `rooms/${roomid}`), {
          reset: ''
        });
      }, 500);
    });
  }


  /*   reset.addEventListener('click', () => {
      if (player === 'o') {
        const room = ref(db, `rooms/${roomid}`);
        update(room, {
          board: Array(9).fill(""),
          result: '',
          turn: 'x turn',
          reset: 'reset',
        }).then(() => {
          turns = 'x'
          for (let i = 0; i < 9; i++) {
            document.getElementById(`gd${i}`).innerText = "";
          }
          gr0 = gr1 = gr2 = gr3 = gr4 = gr5 = gr6 = gr7 = gr8 = true;
          x = true;
          y = false;
  
  
          setTimeout(() => {
            location.reload();
          }, 500);
        });
      }
    });
    if (player === 'x') {
      onValue(ref(db, `rooms/${roomid}/reset`), (snapshot) => {
        const v = snapshot.val();
        if (v === 'reset' && player === 'x' && player === 'o') {
          turns = 'x'
          for (let i = 0; i < 9; i++) {
            document.getElementById(`gd${i}`).innerText = "";
          }
          gr0, gr1, gr2, gr3, gr4, gr5, gr6, gr7, gr8 = true;
          x = true;
          y = false;
  
          setTimeout(() => {
            location.reload();
          }, 500);
        }
        setTimeout(() => {
          update(ref(db, `rooms/${roomid}`), {
            reset: ''
          });
        }, 500);
      });
    } */













  /* get(room, (snapshot) => {
    if (snapshot.exists()) {
      //const data = snapshot.val().result
      /* if (data && player === 'o' && document.getElementById("result").innerText === " ") {
        document.getElementById("result").innerText = data
      }
    }
  })
  }*/







});
