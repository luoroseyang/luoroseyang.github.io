window.gogo = function(){

	function Cslide(datas){
		var slide = document.createElement("div");
		for(var data in datas){
			slide.setAttribute(data, datas[data])
		}
		return slide;
	}

	var r = 5000;
	var n = 18;
	var impressDom = document.getElementById("impress");
	var data = {
		"id": "bored",
		"class": "step head_page",
		"data-x": 0,
		"data-y": 0,
		"data-scale": 14
	}
	impressDom.appendChild(Cslide(data));
	for(var i=0; i<n; i++){
		var p_x = r * Math.sin( 2 * Math.PI * i / n);
		var p_y = -r * Math.cos( 2 * Math.PI * i / n);
		var data = {
			"id": "step" + i,
			"class": "step slide slide_" + (i + 2 ),
			"data-rotate-y": i * 360/n,
			"data-rotate-x": i * 10,
			"data-x": p_x,
			"data-y": p_y,
			"data-scale": 1,
			"data-rotate": i * 200 / n,
			"data-transition-duration": 5000
		}
		impressDom.appendChild(Cslide(data));
	}
}
gogo();
