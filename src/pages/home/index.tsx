import React from "react";
import { useSelector } from "react-redux";

const HomePage : React.FC = (props:any)=>{
	console.log("props : ",props)
	const {test} = useSelector((state: any) => state.home);

	return (
	    <main>
		<h2>HOME</h2>
		<div><span>this is {test}</span></div>
	    </main>
	);

}
export default HomePage
