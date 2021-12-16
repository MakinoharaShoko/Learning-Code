import {useState} from "react";
import axios from "axios";

const Exp1Index = () => {
	const [testRes,setTestRes] = useState(0);
	const [count, setCount] = useState(0);
	return (
		<div onClick={() => {
		postTest(setTestRes);
		setCount(count + 1)
	}}>
		TestPost<br/>
	</div>
		);
}

function postTest(set:any) {
	axios.post('http://localhost/testPost', {
		testData: 123,
	},{
	headers:{'Content-Type': 'application/x-www-form-urlencoded'}
	})
		.then(function (response:any) {
			console.log(response);
			set(response);
		})
		.catch(function (error:any) {
			console.log(error);
		});
}


export default Exp1Index;
