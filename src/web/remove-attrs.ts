function f (ele:Element){
	const list:Array<string> = ele.getAttributeNames();
	list.forEach(function(name){
		ele.removeAttribute(name);
	});
	for(let i = 0;i<ele.children.length;i++){
		f(ele.children[i]);
	}
}
export default f;