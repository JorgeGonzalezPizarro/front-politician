const server = 'https://localhost/vhost/api-politician/public/index.php';
export const Routes = [
        {name: "fetch", route: server.concat('')},
        {name: "update", route: server.concat('/update')},
        {name: "create", route: server.concat('/create')},
];
