import React from "react";
import PropTypes from "prop-types";

const Login = () => {
  return (
    <section>
      <article>
        <div id="loginSection">
          <div id="loginInfos">
            <p>로그인</p>
            <input type="text" placeholder="아이디를 입력해주세요" />
            <input type="text" placeholder="비밀번호를 입력해주세요" />
          </div>

          <div id="findInfo">
            <input type="button" value="아이디 찾기" />
            <input type="button" value="비밀번호 찾기" />
          </div>

          <div id="loginAndSignupBtn">
            <input type="submit" value="로그인" />
            <input type="submit" value="회원가입" />
          </div>
        </div>
      </article>
    </section>
  );
};

Login.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Login;
