const server = 'https://localhost/api-politicians/public/index.php';
export const Routes = [
        {name : "fetch", route :  server.concat('?XDEBUG_SESSION_START=11556')},
        {name : "update", route :  server.concat('/update?XDEBUG_SESSION_START=11556')},
        {name : "create", route :  server.concat('/create?XDEBUG_SESSION_START=11556')},
];
