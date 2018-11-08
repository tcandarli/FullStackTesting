var queries = function () {

    this.q1 = `select firstname, lastname, email from users where email = 'efewtrell8c@craigslist.org'`;
    this.q2 = `select firstname, lastname, email, role, name 
    from users as "u" inner join team as "t"
    on u.team_id = t.id;`

}

module.exports = new queries();