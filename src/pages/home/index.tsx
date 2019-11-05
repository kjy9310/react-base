import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HOME_INFORMATION } from "./actions";

const HomePage : React.FC = (props:any)=>{
	const dispatch = useDispatch();
	const dispatchingTest = () => {
		dispatch({type: HOME_INFORMATION, payload: "state dispatched!"})
	}
	console.log("props : ",props)
	const {test, sideEffect} = useSelector((state: any) => state.home);
	return (
	    <main>
		<h2>HOME</h2>
		<div>
		    <span>this is {test}</span>
		    <button onClick={dispatchingTest}>Dispatch!</button>
		    <span>{sideEffect}</span>
		</div>
	    </main>
	);

}
export default HomePage
