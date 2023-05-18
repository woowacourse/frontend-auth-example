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

const userCarts = {
  "user@example.com": [
    {
      id: 5,
      name: "[버거킹] 치킨너겟 100봉지",
      price: 200000,
      imageUrl:
        "https://images.unsplash.com/photo-1582981760753-b52aae38f237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      id: 4,
      name: "[간편식] 간단한 다진고기 볶음과 웨지감자",
      price: 6000,
      imageUrl:
        "https://images.unsplash.com/photo-1518510227856-30619d542ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
  ],
};

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

app.get("/cart-items", (req, res) => {
  const user = req.auth.user;
  const cart = userCarts[user];

  if (!cart) {
    res.status(404).send("Not found");
    return;
  }
  res.send(cart);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
