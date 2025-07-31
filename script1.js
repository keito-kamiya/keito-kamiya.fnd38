'use strict'

const button = document.getElementById("button1");
const array = ["1111-aaaa","2222-bbbb","3333-cccc"];
const PtID = document.getElementById("PtId")

button.addEventListener("click",function() {
    const PTID = PtId.value;
    if(array.includes(PTID)) {
      window.location.href = "main.html"
      } else {
        alert("診察券番号-パスワードが一致しません。再確認をお願いします。");
      }
    }
 );
