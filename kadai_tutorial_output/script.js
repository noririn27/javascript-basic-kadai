// アニメーション対象の要素.animate({プロパティ:値}, 再生時間);

$(document).ready(function() {
  $('.button-more').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });

  $('.button-more').on('mouseout', function () {
    $(this).animate({
      opacity: 1,
      marginLeft: 0,
    }, 100);
  });

  // document.querySelectorAll('slick-next').style.color="black";

  // カルーセル
  $('.carousel').slick({
    autoplay: true, // 自動的に切り替え
    dots: true, // 下部に〇表示
    infinite:true, // ループさせるか
    autoplaySpeed: 5000, // 画像を切り替える秒数
    arrows: true, // 矢印ボタン
  });




  // 送信ボタンクリック時の処理
  $('#submit').on('click', function (event) {
    event.preventDefault(); // formタグによる送信を拒否

    let result = inputCheck();
    let error = result.error;
    let message = result.message;

    if (error === false) {
      alert('お問い合わせを送信しました。')
    } else {
      alert(message);
    }
  });

  // フォーカスが外れたとき（blur）にフォームの入力チェックをする
  $('#name').blur(function () {
    inputCheck();
  });
  $('#furigana').blur(function () {
    inputCheck();
  });
  $('#email').blur(function () {
    inputCheck();
  });
  $('#tel').blur(function () {
    inputCheck();
  });
  $('#message').blur(function () {
    inputCheck();
  });
  $('#prefecture').blur(function () {
    inputCheck();
  });
  $('#agree').click(function () {
    inputCheck();
  });

  
  // お問い合わせフォームの入力チェック関数
  function inputCheck() {
    let result; //エラーチェックの結果
    let message = ''; // エラーメッセージのテキスト
    let error = false; // エラーがなければfalse、あればtrue

    if ($('#name').val() === '') {
      $('#name').css('background', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else {
      $('#name').css('background', '#fafafa');
    }

    if ($('#furigana').val() === '') {
      $('#furigana').css('background', '#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    } else {
      $('#furigana').css('background', '#fafafa');
    }

    if ($('#message').val() === '') {
      $('#message').css('background', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    } else {
      $('#message').css('background', '#fafafa');
    }

    if ($('#email').val() == '' || $('#email').val().indexOf('@') === -1 || $('#email').val().indexOf('.') === -1)
      // indexOf('文字列')は、指定した文字が、対象の何文字目に含まれているかを数値で返すメソッドで、含まれていない場合は-1を返す。
      {
      $('#email').css('background', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n'
    } else {
      $('#email').css('background', '#fafafa');
    }

    if ($('#tel').val() !== '' && $('#tel').val().indexOf('-') === -1) {
      $('#tel').css('background', '#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    } else {
      $('#tel').css('background', '#fafafa');
    }

    if ($('#prefecture').val() === '') {
      $('#prefecture').css('background', '#f79999');
      error = true;
      message += '都道府県を選択してください。\n';
    } else {
      $('#prefecture').css('background', '#fafafa');
    }

    if ($('#agree').prop('checked') === false) {
      error = true;
      message += '個人情報の取扱いについてご同意頂ける場合は、チェックボックスにチェックして下さい。\n';
    }

    if (error === true) {
      $('#submit').attr('src', 'images/button-submit.png');
    } else {
      $('#submit').attr('src', 'images/button-submit-blue.png');
    }

    result = {
      error: error,
      message: message,
    };
    return result;
  }
});