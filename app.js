//모듈
const express = require('express');
const bodyparser = require("body-parser")
const app = express();
const PORT = 8000;

//라우팅
// const home = require("./cip/routes/home.ctrl.js");

//앱 세팅
app.set("views","./views")
app.set("view engine","ejs")
app.use(express.static(`${__dirname}/public`))
app.use(bodyparser.json());
//URL 전달 데이터 한글 공백 문자 인식 해결
app.use(bodyparser.urlencoded({extended :true}));


app.get('/', (req, res) => {
  res.render("index");
});

app.get('/access', (req,res) => {
  res.send("로그인완료")

});

app.listen(PORT, () => {
  console.log(`로컬 호스트 웹 서버를 열었습니다. 포트 번호: ${PORT}`);
});