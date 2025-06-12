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

const roomstatus = document.getElementById("roomstatus");

//create room
document.getElementById("create").addEventListener("click", () => {
    const roomid = Math.random().toString(36).substring(2, 8);
    const value = ref(db, 'rooms/' + roomid);
    const playerx = 'x';
    set(value, {
        player1: `${playerx}`,
        turn: "x turn",
        board: Array(9).fill(""),
        result: ""
    }).then(() => {
        roomstatus.innerText = `roomid: ${roomid}`;
        roomstatus.style.backgroundColor = ' #222222';
        onValue(value, (snapshot) => {
            const roomData = snapshot.val();
            if (roomData && roomData.player2 === "o") {
                roomstatus.innerText = "Player 2 joined!";
                window.location.href = `game.html?player=${playerx}&roomid=${roomid}`;

            }
        })

    }).catch((error) => {
        roomstatus.innerText = error.message;
    });
});




// join room


document.getElementById("joined").addEventListener("click", () => {
    const roomids = document.getElementById("roomid").value;
    const playero = 'o';
    get(ref(db, 'rooms/' + roomids))
        .then((snapshot) => {
            if (snapshot.exists()) {
                update(ref(db, 'rooms/' + roomids), {
                    player2: `${playero}`,
                })
                window.location.href = `game.html?player=${playero}&roomid=${roomids}`;
                roomstatus.innerText = 'roomid joined sucessfully';

            }
        })
        .catch((error) => {
            roomstatus.innerText = error.message;
        });
});



/* 
document.getElementById('copy').addEventListener('click', () => {
    const roomInput = document.getElementById("roomid");
    navigator.clipboard.writeText(roomInput.value)

    // Optional: Alert the copied text
    alert("Copied Room ID: " + roomInput.value);
});

*/

