//変数

let hoge = 'Hello World' ;

//hoge = 'Hello World2!!' ;

//定数 書き換えできない
const bigHoge = 'He..Hell...Hello World' ;

//配列
let inoki = ['いーち','にーい','さーん','だー！',]

//ループ文
//let index = 0;
//while(index < inoki.length){
    //繰り返したい文
 //   console.log(index)
 //   index++;
//}


//if// else
/*if(inoki.length > 5){
    console.log('ボンバイエ！');
} else {
    console.log('ボンバ・・')

}*/

//関数
const test = (arg) => {
    //ここに実行したい命令を描く
    if(inoki.length > arg ){
        console.log('ボンバイエ！');
    } else {
        console.log('ボンバ・・') 
    }  
};

test(3);
//console.log(index);

//オブジェクト
const unko2 = {
    color: 'pink',
    size: 'large',
    perfume: 'mint',
    goToilet: () => {
        console.log('Hello World');
    }
};

console.log (unko2);