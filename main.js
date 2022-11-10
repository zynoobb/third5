// 랜덤번호 지정 
// 유저가 번호를 입력한다 go 라는 버튼을 누름 // 인풋창 go 
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤 번호가 유저번호보다 작으면 down!
// 랜덤 번호가 유저번호보다 크면 up!
// reset 버튼을 누르면 게임이 리셋
// 5번의 기회를 다쓰면 게임이 끝남 (더 이상 추측 불가, 버튼 비활성화)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. (기회를 깎지 않음)
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. (기회를 깎지 않음)

let computernum = 0
let userinput = document.getElementById("user-input");
let gobutton = document.getElementById("gobutton");
let resultarea = document.getElementById("result-area");
let resetbutton = document.getElementById("resetbutton");
let chances = 5;
let times = document.getElementById("times");
let gameover = false;
let history = [];
let resettimes = document.getElementById("resettimes");
let resets = 0;

gobutton.addEventListener("click", play);
resetbutton.addEventListener("click", reset);
userinput.addEventListener("focus",function(){
    userinput.value = "";
})


function randompick() {
    computernum = Math.floor(Math.random()*100)+1;
    console.log("정답", computernum);
}
function play() {
    let uservalue = userinput.value;
    if (uservalue<1 || uservalue >100){
        resultarea.textContent = "WRITING 1 to 100";
        return;
    }
    if (history.includes(uservalue)){
        resultarea.textContent = "already used number";
        return;
    }
    
    chances -- ;
    times.textContent = `more chances = ${chances}`;
   
    
    if (uservalue == computernum){
        resultarea.textContent = "You are right";
        gameover = true;
    } else if (uservalue > computernum){
        resultarea.textContent = "Down"
    } else {resultarea.textContent = "Up"}
    history.push(uservalue);
    console.log(history);

if (chances < 1){
    gameover = true;
 }
if (gameover == true){
    gobutton.disabled = true;
}
}
function reset() {
    resets ++ ;
    gameover = false;
    gobutton.disabled = false;
    chances = 5;
    history = [];
    userinput.value = "";
    randompick();
    resultarea.textContent = "do write anything";
    times.textContent = "more chances = 5";
    resettimes.textContent = `reset-times = ${resets}`;

}

randompick();