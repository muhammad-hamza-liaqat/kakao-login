const express = require('express');
const kakaoRoutes = express.Router();
const {
    redirectToKakaoLogin,
    handleKakaoCallback
} = require("../controller/kakaoController")

kakaoRoutes.get('/login', redirectToKakaoLogin);
kakaoRoutes.get('/callback', handleKakaoCallback);

module.exports = kakaoRoutes;