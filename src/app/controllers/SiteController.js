const Course= require('../models/Course');
const {multipleMongooseToObject}= require('../../util/mongoose');

class SiteController {
    // [GET] /
    async index(req, res, next) {
        // try{
        //     const courses= await Course.find({});
        //     res.json(courses);
        //     res.render('home');
        // }
        // catch(error){
        //     console.error({error: 'ERORR'});
        //     process.exit(1);
        // }
        await Course.find({})
        .then(courses=>{
            res.render('home', {
                courses: multipleMongooseToObject(courses)
            });
        })
        .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
