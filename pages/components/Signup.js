import React from "react";
import PropTypes from "prop-types";

const Signup = () => {
  return (
    <section>
      <article id="signupInfo">
        <p>회원가입</p>
        <div class="line"></div>
        <article>
          <ul>
            <li>
              <p>아이디</p>
              <input type="search" placeholder="아이디를 입력해주세요" />
              <input type="submit" value="중복확인" id="idCheck" />
            </li>
            <li>
              <p>비밀번호</p>
              <input type="search" placeholder="비밀번호를 입력해주세요" />
            </li>
            <li>
              <p>비밀번호 확인</p>
              <input
                type="search"
                placeholder="비밀번호를 한번 더 입력해주세요"
              />
            </li>
          </ul>
        </article>
        <div class="line"></div>
        <button id="signupBtn">가입하기</button>
      </article>
    </section>
  );
};

Signup.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Signup;
