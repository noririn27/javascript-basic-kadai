//イベント処理
// $('button').on('click', () => {
//   処理の内容
// });

// $(function() {
//   $('button').on('click', () => {
//     console.log('クリックされました');
//   });
// });

// $('div').on({
//   'click': () => {
//     $('div').css('background-color', 'red');
//     $('div').text('click');
//   },
//   'dblclick': () => {
//     $('div').css('background', 'green');
//     $('div').text('dblclick');
//   },
//   'mouseenter': () => {
//     $('div').css('background', 'blue');
//     $('div').text('mouseenter');
//   },
//   'mouseout': () => {
//     $('div').css('background', 'gray');
//     $('div').text('mouseout');
//   },
// });

// $(document).on('click keydown', (e) => {
//   if (e.type === 'click') {
//     $('#clickorKeydown').text('クリックされました');
//   }
//   else if (e.type === 'keydown') {
//     $('#clickorKeydown').text('キーが押されました');
//   }
// });


$(window).on('load', () => {
  console.log('loadイベントが発生しました');
});

$(window).on('scroll', () => {
  console.log('scrollイベントが発生しました')
});

// $(window).on({
//   'load': () => {
//     console.log('loadされました');
//   },
//   'scroll': () => {
//     console.log('scrollされました');
//   },
// });