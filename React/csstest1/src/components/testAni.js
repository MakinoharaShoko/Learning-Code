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

    return <div style={{overflow:'hidden'}}>
        <div id={"testElement1"} style={{position:'absolute',left:'100%'}}>
            <img src={'/img/testFigure03.png'} style={{height:'95vh'}}/>
        </div>
        <div id={"testElement2"} style={{position:'absolute',left:'100%'}}>
            <div style={style1}>
                总有一天，你也能找到喜欢你的虫。
            </div>
        </div>
    </div>


}

export default TestAni;