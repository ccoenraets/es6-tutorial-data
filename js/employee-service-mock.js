let employees = [
    {
        id: 1,
        firstName: "Amy",
        lastName: "Taylor",
        phone: "617-564-3254",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
    },
    {
        id: 2,
        firstName: "Anup",
        lastName: "Gupta",
        phone: "617-564-1258",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
    }
];

export let findAll = () => new Promise(resolve => resolve(employees));