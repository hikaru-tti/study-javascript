/**
 * const,let
 */
// var val1 = "変数１";
// console.log(val1);
// //var変数は上書き可能

// val1 = "上書き";
// console.log(val1);

// //再宣言も可能
// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "上書き";
// console.log(val2);
// //letは再宣言不可

//let val2 = "再宣言不可";

// const val3 = "const変数";
// console.log(val3);

//val3 = "上書き不可";

//const val3 = "再宣言も不可";

//object
// const val4 = {
//   name : "名前",
//   age : 28
// };
// val4.name = "上書き";
// val4.address = "追加";
// console.log(val4);

//オブジェクトを定義する際はconstを使う
//constで定義したオブジェクトはプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

//開発でも基本constを使う

/**
 * テンプレート文字列
 */
// const name = "名前";
// const age = 24;

// //バッククォート（＠のシフトきー）
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

/**
 * アロー関数
 */

//従来
//  function func1(str){
//   return str;
//  }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// };

// console.log(func3(10,20));

/**
 * 分割代入★★★
 */
// const myProfile = {
//   name: "つつい",
//   age: 28,
//   address: "神奈川"
// };

// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message);
// //こうもくすうが多いとめんどくさい

// const { name, address } = myProfile;
//プロパティ名で受け取れる
// const message2 = `名前は${name}です。年齢は${address}です。`;
// console.log(message2);

// const myProfile = ["つつい", 28, "神奈川"];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age, address] = myProfile;
// //配列は順番で受け取る
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const hello = (name = "ゲスト") =>{
//   console.log(`こんにちは${name}さん`);
// }
// hello();

/**
 * スプレッド構文...
 **/
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);
//結果：1 2

// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);
// //...がついていたら順番に処理するということ

//まとめる
// const arr2 =[1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// //残りをまとめて配列で受け取る事ができる
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [40, 50];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//配列をイコールでコピーをしようとすると、参照する場所も同じになるため、片方をコピーすると両方変わってしまう
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 *  */

//const nameArr = ["田中", "山田", "つつい"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index)=>console.log(`${index+1}番目は${name}です。`));
// //配列.mapでfor文と同じような事ができる
// //二つ目の引数（ここではindex）は数字が入ってくる

// //filterでは条件に合致した値を返すことができる
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num%2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "つつい") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/*
 * 三項演算子
 */
// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

/**
 * 論理演算子の本当の意味を知ろう
 */

//  const flag1 = true;
//  const flag2 = false;
//  if(flag1 || flag2){
//   console.log("１か２はtureです");
//  }

//  if(flag1 && flag2){
//   console.log("１も２もtureです");
//  }

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
