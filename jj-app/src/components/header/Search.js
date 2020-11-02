import React from "react";

function Search() {
  return (
    <>
      <header>
        <div class="searchBox">
          <div class="selectBox">
            <select name="" id="">
              <option value="all">전체보기</option>
              <option value="option01">빌딩매매</option>
              <option value="option02">토지매매</option>
              <option value="option03">아파트매매</option>
              <option value="option04">상가매매</option>
              <option value="option05">상가임대</option>
              <option value="option06">공장매매</option>
              <option value="option07">호텔모텔</option>
              <option value="option08">분양정보</option>
              <option value="option09">경매정보</option>
              <option value="option11">공개매수</option>
              <option value="etc">기타</option>
            </select>
            <select name="" id="">
              <option value="">서울</option>
              <option value="">인천</option>
              <option value="">부산</option>
              <option value="">대전</option>
              <option value="">대구</option>
              <option value="">울산</option>
              <option value="">세종</option>
              <option value="">광주</option>
              <option value="">경기</option>
              <option value="">강원</option>
              <option value="">충북</option>
              <option value="">충남</option>
              <option value="">경북</option>
              <option value="">경남</option>
              <option value="">전북</option>
              <option value="">전남</option>
              <option value="">제주</option>
            </select>
          </div>
          <div class="inputBox">
            <input type="text" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Search;
