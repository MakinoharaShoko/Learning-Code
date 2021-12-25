const TestAni = ()=>{
    const style1 = {
        border:'2px solid rgba(0,0,0,0.5)',
        height:'50px',
        width:'500px',
        lineHeight:'70px',
        padding:'10px 50px 50px 10px',
        fontSize:'x-large',
        zIndex:'2',
        backgroundColor:'white',
    }

    return <div style={{overflow:'hidden',position:'relative',width:'100vw',height:'100vh'}}>
        <div id={"testElement1"} style={{position:'absolute',left:'100%',zIndex:'1'}}>
            <img src={'/img/testFigure03.png'} style={{height:'100vh'}}/>
        </div>
        <div id={"testElement2"} style={{position:'absolute',left:'100%',top:'60vh',zIndex:'2'}}>
            <div style={style1}>
                总有一天，你也能找到喜欢你的虫。
            </div>
        </div>
        <div id={"testElement3"} style={{position:'absolute',left:'100%',zIndex:'1'}}>
            <img src={'/img/k3.png'} style={{height:'100vh'}}/>
        </div>
        <div id={"testElement4"} style={{position:'absolute',left:'100%',top:'60vh',zIndex:'2'}}>
            <div style={style1}>
                メンカタカラメヤサイダブルニンニクアブラマシマシ
            </div>
        </div>
    </div>


}

export default TestAni;