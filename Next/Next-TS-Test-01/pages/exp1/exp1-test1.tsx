import axios from "axios";

const Exp1Test1 = ({Name}:any)=> {
    return <div>{Name}</div>;
}

export async function getStaticProps() {
    // 调用外部 API
    let Name = 'unset';
    await axios.get('/api/test1').then((response)=>{
        Name=response.data.data;
    })
    return {
        props: {
            Name
        },
    }
}

export default Exp1Test1;