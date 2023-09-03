const downtown = {
  name: "ダウンタウン",
  boke: "松本人志",
  tsukkomi: "浜田雅功",
};

const chidori = {
  name: "千鳥",
  boke: "だいご",
  tsukkomi: "ノブ",
  introduce() {
    console.log(
      `コンビ名は${this.name}です、ボケは${this.boke}、ツッコミは${this.tsukkomi}です`
    );
  },
};
//オブジェクトの中でアロー関数は使わない

chidori.introduce();

// console.log(downtown.boke);
// console.log(chidori.name);

const manzai = (combi) => {
  console.log(
    `コンビ名は${combi.name}です、ボケは${combi.boke}、ツッコミは${combi.tsukkomi}です。`
  );
};

manzai(downtown);
// manzai(chidori);

//分割代入
const scores = [10, 20, 30, 40, 50];

//配列の中身に一気にコンスト名決めれちゃう
const [first, second, third, fourth] = scores;

console.log(second);

// 分割代入を使って中身を入れ替える
let start = "tokyo";
let goal = "miyagi";

console.log(start);

[goal, start] = [start, goal];

console.log(start);

const moreScores = [60, 70];

//スプレッド構文
const scores2 = [10, 20, 30, 40, 50, ...moreScores];
//レスト構文
const [first2, ...others] = scores2;

console.log(first2);
console.log(others);

console.log(scores2);

//

const lists = $("#lists");

const items = [
  {
    name: "パソコン",
    price: 10000,
  },
  {
    name: "ケータイ",
    price: 20000,
  },
  {
    name: "テレビ",
    price: 30000,
  },
];

const itemList = items.map((item) => {
  return `${item.name}の値段は${item.price / 10000}万円です<br>`;
});

items.push({ name: "ケーブル", price: 20000 });

lists.append(itemList);

console.log(items);
