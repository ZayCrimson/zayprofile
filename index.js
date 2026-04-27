const express = require("express")
const app = express()

// LINK KAMU
const WA_CHANNEL = "https://whatsapp.com/channel/0029Vb7cmHW42DcZf5Gdgk2p"
const PROFILE_PIC = "https://i.ibb.co/fzVc6n81/image.jpg"
const QRIS_IMAGE = "https://i.ibb.co/QLWNwk8/image.jpg"

app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Profile</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(circle at top, #1f1f1f, #0b0b0b);
        overflow: hidden;
    }

    body::before {
        content: "";
        position: absolute;
        width: 400px;
        height: 400px;
        background: #25D366;
        filter: blur(140px);
        opacity: 0.15;
        top: -100px;
        left: -100px;
    }

    body::after {
        content: "";
        position: absolute;
        width: 400px;
        height: 400px;
        background: #ff4fd8;
        filter: blur(150px);
        opacity: 0.08;
        bottom: -120px;
        right: -120px;
    }

    .card {
        position: relative;
        width: 320px;
        padding: 25px;
        border-radius: 18px;
        background: rgba(255,255,255,0.05);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255,255,255,0.08);
        text-align: center;
        box-shadow: 0 0 25px rgba(37, 211, 102, 0.08);
    }

    img.avatar {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        border: 2px solid #25D366;
        margin-bottom: 10px;
    }

    h2 { color: white; }
    p { color: #aaa; font-size: 12px; margin-bottom: 15px; }

    a {
        display: block;
        padding: 10px;
        margin: 8px 0;
        border-radius: 10px;
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        transition: 0.2s;
    }

    .wa { background:#25D366; color:black; }
    .wa:hover { filter: brightness(1.1); }

    .qris {
        background:#ffb300;
        color:black;
        cursor:pointer;
    }

    .qris:hover { filter: brightness(1.1); }

    /* POPUP QRIS */
    .popup {
        display:none;
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.75);
        justify-content:center;
        align-items:center;
    }

    .popup-content {
        background:#1a1a1a;
        padding:20px;
        border-radius:12px;
        text-align:center;
    }

    .popup-content img {
        width:220px;
        border-radius:10px;
    }

    .close {
        margin-top:10px;
        display:inline-block;
        padding:6px 12px;
        background:red;
        color:white;
        border-radius:8px;
        cursor:pointer;
        font-size:12px;
    }
</style>
</head>

<body>

<div class="card">
    <img class="avatar" src="${PROFILE_PIC}" />
    <h2>Nama Kamu</h2>
    <p>Simple Profile • Bot Owner</p>

    <a class="wa" href="${WA_CHANNEL}">WhatsApp Channel</a>

    <a class="qris" onclick="openQRIS()">QRIS Donation</a>
</div>

<!-- POPUP QRIS -->
<div class="popup" id="popup">
    <div class="popup-content">
        <h3 style="color:white;">QRIS Donation</h3>
        <img src="${QRIS_IMAGE}" />
        <div class="close" onclick="closeQRIS()">Tutup</div>
    </div>
</div>

<script>
function openQRIS(){
    document.getElementById('popup').style.display = 'flex'
}

function closeQRIS(){
    document.getElementById('popup').style.display = 'none'
}
</script>

</body>
</html>
`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("Profile running on " + PORT))
