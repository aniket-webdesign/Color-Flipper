let colors = ['#8a2be2','#BFFF00','#FFD700','#DC143C',' #ef3e42','#ff4500','#005A9C','#ff6347','#00FFFF','#FF00FF']; 


let func = () => {
    window.console.log("Button clicked");
    let num = Math.floor(Math.random()*colors.length);
    window.console.log(num);
    let bodyColor = document.getElementsByTagName('main');
    window.console.log(bodyColor);
    bodyColor[0].style.backgroundColor=colors[num];
    let insertText = document.getElementById('color-name');
    insertText.innerText = ` ${colors[num]}`;
}


