"use strict";

const { GoogleAuth } = require('google-auth-library');

exports.handler = async function(event, context) {
    let body = event;
    let credentials = body.credentials;
    let scopes = body.scopes;
    let uri = body.uri;

    const auth = new GoogleAuth({
        credentials: credentials,
        scopes: scopes,
    });

    return await auth.getRequestHeaders(uri);
};
