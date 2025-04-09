'use strict';

// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;
let totalTime = 70;
let time = 0;
let minutes = 0;
let seconds = 0;

// HTML要素の取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');
const pressed = document.getElementById('pressed');

// テキストを格納する配列
const textLists = [
  'Hello World', 'This is my App', 'How are you?',
  'Today is sunny', 'I love JavaScript!', 'Good morning',
  'I am Japanese', 'Let it be', 'Samurai',
  'Typing Game', 'Information Technology',
  'I want to be a programmer', 'What day is today?',
  'I want to build a web app', 'Nice to meet you',
  'Chrome Firefox Edge Safari', 'machine learning',
  'Brendan Eich', 'John Resig', 'React Vue Angular',
  'Netscape Communications', 'undefined null NaN',
  'Thank you very much', 'Google Apple Facebook Amazon',
  'ECMAScript', 'console.log', 'for while if switch',
  'var let const', 'Windows Mac Linux iOS Android',
  'programming',
];



// function ランダムなテキストを表示する関数
const createText = () => {

  // 正タイプした後、文字が切り替わる前にクリア
  typed = '';
  typedfield.textContent = typed;

  // テキストリストからランダムにテキストを抽出
  let random = Math.floor(Math.random() * textLists.length);
  untyped = textLists[random];
  untypedfield.textContent = untyped;
};


// function キー入力の判定
const keyPress = e => {

  // 誤タイプの場合
  if (e.key !== untyped.substring(1, 0)) {
    wrap.classList.add('mistyped');
    setTimeout(() => {
      wrap.classList.remove('mistyped');
    }, 100);
    return;
  }

  // 正タイプの場合
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;
  // scoreの加算
  score++;
  pressed.textContent = score;

  // テキストが無くなったら新しいテキストを表示
  if (untyped === '') {
    createText();
  }
}


// function ランク判定の関数
const rankCheck = score => {
  let text = '';
  if (score < 100) {
    text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
  } else if (score < 200) {
    text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
  } else if (score < 300) {
    text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
  } else if (score >= 300) {
    text = `あなたのランクはSです。\nおめでとうございます。`
  }
  return `${score}文字打てました！\n${text}\n 【OK】リトライ / 【キャンセル】終了`;
};

// function ゲームを終了する関数
const gameOver = id => {
  clearInterval(id);
  typedfield.textContent = "";
  untypedfield.textContent = 'タイムアップ！';

  setTimeout(() => {
    const result = confirm(rankCheck(score));
    if (result === true) { // コンファームでOKされたとき→画面をリロード
      window.location.reload();
    }
  }, 10);
};


// function カウントダウンタイマーの関数
const timer = () => {
  
  // スタート
  const id = setInterval(() => {
    time--;
    console.log(time);
    minutes = String(Math.floor(time / 60));
    seconds = String(time % 60).padStart(2, 0);
    count.textContent = `${minutes}:${seconds}`;

    // ストップ
    if (time <= 0) {
      gameOver(id);
    }
  }, 1000);
};

time = totalTime;
minutes = String(Math.floor(totalTime / 60));
seconds = String(totalTime % 60).padStart(2, 0);
count.textContent = `${minutes}:${seconds}`;

// スタートボタンをクリックしたら
start.addEventListener('click', () => {
  start.style.display = "none";
  createText();
  document.addEventListener('keypress', keyPress);
  timer();
});

untypedfield.textContent = "スタートボタンで開始";





















