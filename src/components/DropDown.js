import React from 'react';
import Nav from "./Nav";
import Sign from "./Sign";

const DropDown = () => {
	return (
	  <React.Fragment>
		  <button className={'dropBtn'}>Drop</button>
		  <div className="drop_content">
			  <Nav />
			  <hr/>
			  <Sign/>
		  </div>
	  </React.Fragment>
	);
};

export default DropDown;