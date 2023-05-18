const express = require("express");
const app = express();
const basicAuth = require("express-basic-auth");
const cors = require("cors");

/**
 * ༼;´༎ຶ ۝ ༎ຶ༽༼;´༎ຶ ۝ ༎ຶ༽༼;´༎ຶ ۝ ༎ຶ༽
 * 아래의 코드는 프론트엔드 인증 실습을 위해 작성된 서버 코드일 뿐,
 * 한땀 한땀 이해할 필요가 없는 코드입니다. 참고만 하세요!
 * ( o̴̶̷̥᷅⌓o̴̶̷᷄ ) ( o̴̶̷̥᷅⌓o̴̶̷᷄ ) ( o̴̶̷̥᷅⌓o̴̶̷᷄ )
 */

app.use(cors());
app.use(
  basicAuth({
    users: { "user@example.com": "password1234" }, // 아이디와 비밀번호를 이곳에 설정합니다.
    unauthorizedResponse: "401 Unauthorized",
  })
);

app.get("/", (req, res) => {
  res.send("You are authenticated!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
