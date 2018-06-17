// JavaScript 註解

// console.log() 用於檢查與顯示資料給開發者看

// 常數 const
const number1 = "程式現在開始運行";

// 變數 let
let number2 = 20;

number2 = 28;

// typeof-> 確認資料型別
console.log(number1);

// 文字相加
console.log(`Hello ${number1}`)

// boolean 布林(true | false)

const number3 = "10";
const number4 = 10;
const number5 = 10;
// 問是否有相等(不包括型別) ==
console.log(number3 == number4);
// 問是否有相等(包括型別) ===
console.log(number3 === number4);

// 問是否有不相等 !==
console.log(number3 !== number4);

// 建立lunchController
// 一連串動作群組
function lunchController() {
    if (budget > 100) {
        console.log(`現在預算：${budget}`);
        console.log("午餐吃麥當勞");
    } else {
        console.log(`現在預算：${budget}`);
        console.log("午餐吃泡麵");
    }

}

let budget = 50;

lunchController();

budget = budget + 100;
lunchController();

// 物件 Object{}
const student1 = {
    id: 1,
    name: "Jack",
    age: 24,
    major: "歷史系"
};

const student2 = {
    id: 2,
    name: "Jane",
    age: 19,
    major: "資管系"
};
console.log(student1.name);
console.log(student2.name);

// 建立introduce function
function introduce(student) {
    console.log(`哈囉，我叫${student.name}，今年${student.age}歲，目前主修${student.major}`);
}
// 執行方程式
introduce(student1);

// 陣列
const array1 = [1, 3, 5, 7, 9];
console.log(array1);

const students = [student1, student2];

console.log(students);
// 印出students裡面的student1
console.log(students[0]);
// 印出students裡面的student1的名字
console.log(students[0].name);