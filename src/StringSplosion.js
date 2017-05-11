'use strict' 

module.exports = class StringSplosion{
	constructor(str){
		this.str = str;
	}

	manipulate(){
		let manipulated = [];
		for(let counter = 0; counter < this.str.length; counter++){
			let substring = this.str.substr(0,(this.str.length - counter));
			manipulated.unshift(substring);

		}
		return manipulated.join('');
	}
}
