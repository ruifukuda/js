window.onload = () => {
    const prices = [120, 50, 180];
    const result = document.getElementById("result");
    const fruits = document.getElementsByClassName("fruits");
    for (let i = 0; i < fruits.length; i++) {
        fruits[i].addEventListener("change", () => {
            let sum = 0;
            for (let i = 0; i < fruits.length; i++) {
                sum += fruits[i].value * prices[i];
            }
            result.textContent = `${sum}円です！`;
        });
    }
};
/*
for(int i=0; i<3; i++){
    for(int i=0; i<3; i++){
    //javaは変数の有効範囲内に、同じ変数を宣言できない
    }
}

for(let i=0; i<3; I++){
    for(let i=0; i<3; i++){
        console.log(i);
    }
}
*/