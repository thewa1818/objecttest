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
