import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 로드맵
// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검정)

// 유저가 이기면 윈 컴퓨터가
//

const choice = {
  rock: {
    name: "Rock",
    img: "https://partyzzang.co.kr/web/product/big/202305/ab8fd01d0fe4824446877e623570047a.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://partyzzang.co.kr/web/product/big/202302/7e8d771c9fed84c2a67097d3f7537fae.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://partyzzang.co.kr/web/product/big/202305/b4545a42eaeff9ef2468d104bb33fa45.jpg",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    // console.log("선택 됨", userChoice);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  // 내가 마약에 win 이면 컴퓨터는 lose
  // 내가 lose 이면 컴터가 win
  // else if lose 이면 win

  // 승패에 따라 테두리색 바뀌는거
  // props로 스타일 주기 조건문에 컬러 넣어서

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    // user == computer tie 비긴거
    // user == rock, computer == scissors - user 이긴것
    // user == rock, computer == paper - user 진거지
    // user == scissors, computer == paper - user 이긴거지
    // user == scissors, computer == rock - user 진거지
    // user == paper, computer == rock - user 이긴것
    // user == paper, computer == scissors - user 진거지
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";

    // if (user.name === computer.name) {
    //   return "tie";
    // } else if (user.name === "Rock") {
    //   if (computer === "Scissors") {
    //     return "win";
    //   } else {
    //     return "lose";
    //   }
    // }
    // if (user === computer){

    // }

    // if (user === 1 && )
    // 숫자로 비교해주는건가?
    // user가 주목, 컴퓨터가 가위면 user가 이긴거
    // user가 숫자 머이면, 컴퓨터가 숫자 머이면 이긴거 이런식으로 풀어가면 될듯
    //
  };

  // 중첩삼항
  // const computeResult = (result) => {
  //   return result === "win" ? "lose" : result === "lose" ? "win" : "tie";
  // };
  // const computerJudgement = computeResult(result);

  const computeResult = (result) => {
    if (result === "win") {
      return "lose";
    } else if (result === "lose") {
      return "win";
    } else if (result === "tie") {
      return "tie";
    } else return;
  };

  // const gameResult = computeResult(result);

  const borderColorSX = (gameResult) => {
    return gameResult === "win"
      ? "border-win"
      : gameResult === "lose"
      ? "border-lose"
      : gameResult === "tie"
      ? "border-tie"
      : "";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수
    console.log("itemArray", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length); // Math.floor 소숫점 아래 버리는 것
    // console.log("randomItem", randomItem);
    let final = itemArray[randomItem];
    console.log("final", final);
    return choice[final];
  };

  // 만약에 win 이면 backgroundColor blue
  // 만약에 lose 이면 backgroundColor red
  // 비기면 그린
  return (
    <>
      <div className="main">
        <Box
          title="You"
          item={userSelect}
          result={result}
          className={`box ${borderColorSX(result)}`}
        />
        <Box
          title="Computer"
          item={computerSelect}
          // result={result === "win" ? "lose" : "win"}
          // result={computerJudgement}
          result={computeResult(result)}
          className={`box ${borderColorSX(computeResult(result))}`}
        />
      </div>
      <div className="main">
        <button className="buttonSx" onClick={() => play("scissors")}>
          가위
        </button>
        <button className="buttonSx" onClick={() => play("rock")}>
          바위
        </button>
        <button className="buttonSx" onClick={() => play("paper")}>
          보
        </button>
      </div>
    </>
  );
}

export default App;
