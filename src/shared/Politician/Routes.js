const server = 'https://localhost/vhost/api-politician/public/index.php';
export const Routes = [
        {name : "fetch", route :  server.concat('?XDEBUG_SESSION_START=11556&page=1')},
        {name : "update", route :  server.concat('/update?XDEBUG_SESSION_START=11556')},
        {name : "create", route :  server.concat('/create?XDEBUG_SESSION_START=11556')},
];
