# 프론트엔드 레벨2 서버 연동 예제

## Basic 인증 기초 1단계

```
git checkout step1-사용자-인증
```

- 서버에서 사용자의 이메일과 비밀번호가 일치하면 "You are authenticated!" 문자열을 받아 온다.
- 인증되지 않은 사용자는 "401 Unauthorized" 문자열을 받아 온다.

## Basic 인증 기초 2단계

```
git checkout step2-사용자-인증
```

- "/cart-items"를 접근한 경우 서버에서 사용자의 이메일과 비밀번호가 일치하면 계정별 장바구니에 있는 아이템을 받아 온다.

## Basic 인증 서버 선택 3단계

```
git checkout step3-서버-선택
```

- 클라이언트 화면에서 사용자가 선택 상자에서 서버를 고르면, 해당하는 서버에 HTTP 요청하는 코드
- [쇼핑 주문](https://github.com/woowacourse/react-shopping-cart-prod)의 요구사항 예제 코드입니다. 코드 작성에 참고하세요.
