// --- 1つ目のスライダー（横スライド・ループ） ---
const sliderList1 = document.getElementById('slider_list');
const sliderItems1 = document.querySelectorAll('.img_slide_listitem');
let currentIndex1 = 0;

// コピーを除いた実際の画像枚数（この場合は 3）
const realItemsCount = sliderItems1.length - 1;

setInterval(() => {
  currentIndex1++;

  // 横にずらす計算（全4枚のうち何番目か）
  const movePercentage1 = -(currentIndex1 * (100 / sliderItems1.length));
  sliderList1.style.transform = `translateX(${movePercentage1}%)`;
  sliderList1.style.transition = 'transform 0.5s ease-in-out';

  // コピーした4枚目（一番後ろ）に到達した瞬間
  if (currentIndex1 === realItemsCount) {
    setTimeout(() => {
      // アニメーションを消して、一瞬で1枚目（0番目）の位置に戻す
      sliderList1.style.transition = 'none';
      currentIndex1 = 0;
      const resetPercentage1 = -(currentIndex1 * (100 / sliderItems1.length));
      sliderList1.style.transform = `translateX(${resetPercentage1}%)`;
    }, 500); // 0.5秒後（CSSのアニメーションが終わるタイミング）
  }
}, 3000);


// --- 2つ目のスライダー1（フェード：3枚目を確実に出す修正版） ---
const itemsConcept1 = document.querySelectorAll('.concept_frame1 .concept_slideitem1');
let currentConcept1 = 0;

if (itemsConcept1.length > 0) {
  itemsConcept1[currentConcept1].classList.add('active');
  setInterval(() => {
    itemsConcept1[currentConcept1].classList.remove('active');

    // 次の番号へ進む（3枚なので 3 で割った余り＝0, 1, 2 をループ）
    currentConcept1 = (currentConcept1 + 1) % 3;

    itemsConcept1[currentConcept1].classList.add('active');
  }, 3000);
}


// --- 2つ目のスライダー2（フェード：3枚目を確実に出す修正版） ---
const itemsConcept2 = document.querySelectorAll('.concept_frame2 .concept_slideitem2');
let currentConcept2 = 0;

if (itemsConcept2.length > 0) {
  itemsConcept2[currentConcept2].classList.add('active');
  setInterval(() => {
    itemsConcept2[currentConcept2].classList.remove('active');

    // 次の番号へ進む（3枚なので 3 で割った余り＝0, 1, 2 をループ）
    currentConcept2 = (currentConcept2 + 1) % 3;

    itemsConcept2[currentConcept2].classList.add('active');
  }, 3000);
}

// --- 3つ目のスライダー2（フェード：3枚目を確実に出す修正版） ---
const itemsConcept3 = document.querySelectorAll('.concept_frame3 .concept_slideitem3');
let currentConcept3 = 0;

if (itemsConcept3.length > 0) {
  itemsConcept3[currentConcept3].classList.add('active');
  setInterval(() => {
    itemsConcept3[currentConcept3].classList.remove('active');

    // 次の番号へ進む（3枚なので 3 で割った余り＝0, 1, 2 をループ）
    currentConcept3 = (currentConcept3 + 1) % 3;

    itemsConcept3[currentConcept3].classList.add('active');
  }, 3000);
}

const menuButton = document.querySelector('.floating_img');
const menu = document.querySelector('.floating_nav');

if (menuButton && menu) {

  // manta.svgをタップしたら開閉
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.classList.toggle('is-open');
  });

  // 開いたメニュー内をタップしても閉じない
  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // メニュー以外をタップしたら閉じる
  document.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });

}