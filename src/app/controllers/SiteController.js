const Course= require('../models/Course');

class SiteController {
    // [GET] /
    async index(req, res) {

        try{
            const courses= await Course.find({});
            res.json(courses);
            res.render('home');
        }
        catch(error){
            console.error({error: 'ERORR'});
            process.exit(1);
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
