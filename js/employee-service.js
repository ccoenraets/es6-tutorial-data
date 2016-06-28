import request from './request';

export let findAll = () => {
    return request({url:"employees.json"})
        .then(data => data = JSON.parse(data))
}