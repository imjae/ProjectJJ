import React, { useState } from "react";

function Auth() {
  // 로그인이 된 상태를 나타내는 state
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
      {isLogged ? (
        // 로그인 상태
        <div>로그인 완료</div>
      ) : (
        // 로그아웃 상태
        <div>
          <ul class="login_box cf">
            <li>
              <a href="#">로그인</a>
            </li>
            <li>
              <a href="#">회원가입</a>
            </li>
            <li>
              <a href="#">이용안내</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Auth;
