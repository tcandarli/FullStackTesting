var queries = function () {

    this.q1 = `select firstname, lastname, email from users where email = 'efewtrell8c@craigslist.org'`;
    this.q2 = `select firstname, lastname, email, role, name 
    from users as "u" inner join team as "t"
    on u.team_id = t.id`;
    this.q3 = `select firstname, lastname, email, role, name as teamname, batch_number as batchnumber, location
    from users 
    inner join team on users.team_id = team.id 
    join campus on team.campus_id = campus.id
    where role = 'student-team-leader'
    limit 2`;

}

module.exports = new queries();