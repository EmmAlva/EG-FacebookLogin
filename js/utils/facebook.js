window.fbAsyncInit = () => {
	FB.init({
		appId : '1890153674530804', //tu App ID
		cookie: true, //habilita las cookies para que el server pueda acceder ala sesión
		xfbml: true, //parsea llos plugins sociales en la pagina
		version: 'v2.8' //usa version 2.8
	});
};

//Inicializando facebook vía appID

function loginHandler(response){
	if(response.status ==='connected'){
		state.status = "Conectado";
		FB.api('/me?fields=email,name',user =>{
			state.user = user;
			state.doRender();
		});
	}
	else if(response.status === 'not_authorized'){
		state.user = null;
		state.status = "Aplicación no autorizada";
		state.doRender(); 
	}
}

function doLogin(){
	FB.login(loginHandler,{scope:'email'});
	}

//La funcion doLogin tiene una funcion loginHandler que obtiene informacion de usuarioy hace reRender()