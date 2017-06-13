//HTML-Browser
'use strict';
const render = (root) => {
	root.empty();

	const wrapper = $('<div class="wrapper"></div>');
	wrapper.append(Header());
	console.log(state.user);
	if(state.user == null){
		wrapper.append(Login());
	}else {
		wrapper.append(Dashboard());
	}
	root.append(wrapper);
}
const state = {
	user: null,
	status: null
};


$( _ => {
	const root = $('#root');
	render(root);
	state.doRender = render.bind(null,root);

});

