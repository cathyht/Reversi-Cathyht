function getIRIParamenterValue(requestedKey){
    let pageIRI = window.location.search.substring(1);
    let pageIRIVariables = pageIRI.split('&');
    for(let i = 0 ; i < pageIRIVariables.length; i++){
       let data = pageIRIVariables[i].split('=');
       let key = data[0];
       let value = data[1];
       if (key === requestedKey){
           return value;
       } 
    }
}

let username = getIRIParamenterValue('username');
if ((typeof username == 'undefined') || (username === null)){
    username = "Anonymous_"+Math.floor(Math.random()*1000);
}

$('#messages').prepend('<b>'+username+':</b>');
