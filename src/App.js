import React from 'react';
import Main from './Components/main';
import {products} from './Components/products';

function App(){
	let ProdcutData = products.map(item=><Main ProductArray={item}/>)
	return (
		<div>
			{ProdcutData}
		</div>
		)
}
export default App;