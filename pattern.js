const pattern = /vue\d?|riot|flux|react-router|react|redux|scss|css3|css|chai|javascript|c\+\+|c#|c|js|html|dom|zepto|thinkphp|fullpage|gulp|git|markdown|mocha|socket\.io|jquery|es2015|es6|less|jade|Web安全|WebWorker|http|webpack/gi;
function GetCode(data) {
	if (data && typeof data === "object") {
		for (let i in data) {
			if (typeof data[i] === "object")
				GetCode(data[i]);
			else if (typeof data[i] === "string")
				data[i] = data[i].replace(pattern, (val) => `<code>${val}</code>`)
		}
	}
};
module.exports = GetCode;
