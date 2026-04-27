const express = require("express")
const app = express()

const WA_CHANNEL = "https://whatsapp.com/channel/0029Vb7cmHW42DcZf5Gdgk2p"
const PROFILE_PIC = "https://i.ibb.co/fzVc6n81/image.jpg"
const QRIS_IMAGE = "https://i.ibb.co/QLWNwk8/image.jpg"

app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

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
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(circle at top, #1f1f1f, #0b0b0b);
        padding: 20px;
    }

    body::before {
        content: "";
        position: absolute;
        width: 400px;
        height: 400px;
        background: #25D366;
        filter: blur(140px);
        opacity: 0.12;
        top: -120px;
        left: -120px;
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
        width: 100%;
        max-width: 340px;
        padding: 22px;
        border-radius: 18px;
        background: rgba(255,255,255,0.05);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255,255,255,0.08);
        text-align: center;
        box-shadow: 0 0 25px rgba(37, 211, 102, 0.08);
        z-index: 2;
    }

    /* FIX AVATAR BIAR PORTRAIT / RAPI */
    .avatar {
        width: 100%;
        max-width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid #25D366;
        margin-bottom: 10px;
    }

    h2 {
        color: white;
        font-size: 18px;
    }

    p {
        color: #aaa;
        font-size: 12px;
        margin-bottom: 15px;
    }

    /* BUTTON BIAR GAMPANG DIPENCET DI HP */
    .btn {
        display: block;
        width: 100%;
        padding: 14px;
        margin: 10px 0;
        border-radius: 12px;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    .wa {
        background: #25D366;
        color: black;
    }

    .qris {
        background: #ffb300;
        color: black;
        border: none;
    }

    /* POPUP */
    .popup {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.75);
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .popup-box {
        background: #1a1a1a;
        padding: 15px;
        border-radius: 12px;
        text-align: center;
        width: 100%;
        max-width: 280px;
    }

    .popup-box img {
        width: 100%;
        max-width: 240px;
        border-radius: 10px;
    }

    .close {
        margin-top: 10px;
        padding: 10px;
        background: red;
        color: white;
        border-radius: 10px;
        display: inline-block;
        width: 100%;
        cursor: pointer;
    }
</style>
</head>

<body>

<div class="card">
    <img class="avatar" src="${PROFILE_PIC}" />
    <h2>Nama Kamu</h2>
    <p>Simple Profile • Bot Owner</p>

    <a class="btn wa" href="${WA_CHANNEL}" target="_blank">
        WhatsApp Channel
    </a>

    <button class="btn qris" onclick="openQRIS()">
        QRIS Donation
    </button>
</div>

<!-- POPUP -->
<div class="popup" id="popup">
    <div class="popup-box">
        <h3 style="color:white;margin-bottom:10px;">QRIS</h3>
        <img src="${QRIS_IMAGE}" />
        <div class="close" onclick="closeQRIS()">Tutup</div>
    </div>
</div>

<script>
function openQRIS(){
    document.getElementById("popup").style.display = "flex"
}

function closeQRIS(){
    document.getElementById("popup").style.display = "none"
}
</script>

</body>
</html>
`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("Profile running on " + PORT))
