import './bgCSS.css'

const changeBG = (bg_name,node)=>{
    //把背景复制一份成为旧背景，方便做渐变动画
    let BG = document.getElementById(node);
    let oldBG = BG.cloneNode(true);
    //如果有旧背景节点，删除之
    if(document.getElementById('oldBG')){
        document.getElementById('oldBG').parentNode.removeChild(
            document.getElementById('oldBG')
        )
    }
    oldBG.setAttribute('id','oldBG');
    oldBG.style.animation = 'hideBG 5s';
    oldBG.style.animationFillMode = 'forwards';
    console.log(oldBG);
    BG.parentNode.appendChild(oldBG);
    BG.style.backgroundImage = "url('" + bg_name + "')";
    let newBG=BG.cloneNode(true);
    let parentNodeBG = BG.parentNode;
    parentNodeBG.removeChild(BG);
    parentNodeBG.appendChild(newBG);
}

export default changeBG;