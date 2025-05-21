const express = require('express');
const myAppRoutes = express.Router();

const kakaoRoutes = require("./kakao.routes")

myAppRoutes.use('/auth/kakao', kakaoRoutes);

module.exports = myAppRoutes;
