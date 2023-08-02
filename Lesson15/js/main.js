"use strict";  //厳格モード
document.addEventListener("DOMContentLoaded", () => {
    console.log("in");
    class Fruits {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        showInfo() {
            //タグを含んだ文字列を表示させたかったらinnerHTML
            return `<p>${this.name}:${this.price}円</p>`;
        }
    }
    const fruitsList = []; //空のリスト
    //DOMの取得
    const name = document.getElementById("name");
    const price = document.getElementById("price");
    const bt = document.getElementById("bt");
    const ol = document.getElementById("list");

    bt.addEventListener("click", () => {
        const fruitsName = name.value;
        const fruitsPrice = parseInt(price.value);
        //pushでリストに追加
        fruitsList.push(new Fruits(fruitsName, fruitsPrice));
        //下で作った関数発動させる
        sortFruits();
        //商品追加したら順番入れ替わる可能性あるから一旦空っぽにする
        ol.textContent = null;
        for (let fruit of fruitsList) {
            const li = document.createElement("li");
            //タグ含んだ文字列表示させるためにtextContentではなくinnerHTML
            li.innerHTML = fruit.showInfo();
            if (fruit.price >= 1000) {
                //redというクラスをつける
                li.classList.add("red");
            }
            ol.append(li);
        }
        name.value = "";
        price.value = "";
        name.focus();
    });
    const sortFruits = () => {
        for (let i = 0; i < fruitsList.length - 1; i++) {
            for (let j = i + 1; j < fruitsList.length; j++) {
                if (fruitsList[i].price < fruitsList[j].price) {
                    const temp = fruitsList[i];
                    fruitsList[i] = fruitsList[j];
                    fruitsList[j] = temp;
                }
            }
        }
    }
});