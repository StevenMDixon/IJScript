class BadJSMinify {
	constructor(){
  	this.code = "";
  }
  _init(codeInput){
  	this.code = codeInput
  	return this;
  }
	_whiteSpaceStrip(){
  this.code = this.code.replace(/\s/g, "");
	return this
	}
  _semiColonStrip(){
  	this.code =  this.code.replace(/;/g, "");
    return this;
  }
  _shortenVars(){
  	return this
  }
  _removeComments(){
  	this.code = this.code.replace(/^\/\/.*/gm, "");
    this.code = this.code.replace(/^(\/\*)(.|\s)*?(\*\/)/gm, "");
    return this;
  }
  _replaceSwitch(){
    let switches = this.code.match(/switch(.|\n)*?}$/gm)
    if(!switches) return this;
    for(let i of switches){
    	let removedBreak = i.replace(/break;/g, "");
    	let finishedSwitchItems = ""
    	let switchInput = removedBreak.match(/(?<=switch.*\().*(?=\))/gm);
    	let switchItems = removedBreak.match(/(case)(.*?);/gm);
      let def = removedBreak.match(/(?<=default:).*(?=$(\s|;))/gm);
      let modifiedCases = [];
      for(let k of switchItems){
      	let c = k.match(/(?<=case\s).*(?=:)/gm);
      	let d = k.match(/(?<=case\s*.*:).*(?=;)/gm)
        modifiedCases.push(`${c}: ${d}`);
      }
      finishedSwitchItems = `({${modifiedCases.join(",")}}[${switchInput}] ${def? '||'+def:""})`
      this.code = this.code.replace(i,finishedSwitchItems.replace(/return/g, ""))
    }
  	return this
  }
  _replaceIF(){
  	let ifs = this.code.match(/ /gm);
    
  	return this
  }
  _replaceFunction(){ //still under construction
    let functions = this.code.match(/function(.|\n)*?}$/gm) //gets any number of functions defined in the body
    if(!functions) return this;
    for(let i of functions){
    	let params = i.match(/(?<=function.*\().*(?=\))/gm); //gets the paramaeter of the function
      let fname = i.match(/(?<=function).*(?=\()/gm); //gets the name of the function
      let funcbody= i.match(/(?<=\{)(.|\s)*(?=\})/gm); //gets the entire function body
      funcbody = funcbody[0];
       funcbody = funcbody.replace(/return/g, ",").replace(/;|\s*/gm, "");
      this.code = this.code.replace(i, `const ${fname[0].trim()}=(${params})=>(${funcbody})`)
    }
    return this
  }
  _stripCommasErrors(){
  	this.code = this.code.replace(/(?<=\()\s*,|(?<=,)\s*,|\s*,(?=\))|(?<=\{)\s*,/gm, ""); //large array of errors that can be produced by commas
    let y = this.code.match(/\d+(?=\()/);
   while (y !== null){
    this.code = this.code.slice(0,(y.index+y[0].length))+','+this.code.slice(y.index+y[0].length, this.code.length-1);
      y = this.code.match(/\d+(?=\()/);
    }
  	return this;
  }
  _fullStrip(code){
  	return this._init(code)._removeComments()._replaceSwitch()._replaceFunction()._stripCommasErrors().code
  }
}

let g = new BadJSMinify();
document.getElementById("minify").addEventListener('click', (e)=>{
document.getElementById("codeoutput").value = g._fullStrip(document.getElementById("codeinput").value)
})

/*
function vapp(a){
	switch(a){
  	case 1: a; return break;
    case 2: a+1; break;
    default: return 'a'
  }
  return a
}
*/



