export const restService = {
    get,
    delete: _delete,
    post,
    put,
};

function get( url: string, param: any ) {
    return fetch( url, {method: 'GET'} )
}

function post( url: string, param: {} ) {
    return fetch( url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( param )
    } )
}

function _delete( url: string, param: {} ) {
    return fetch( url, {method: 'DELETE'} )
}

function put( url: string, param: {} ) {
    return fetch( url, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( param )
    } )
}