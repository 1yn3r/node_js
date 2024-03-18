const Course = require("../models/Course");
const {  mongoosesToObject } = require("../../util/mongoose");

class CourseController {


  // [GET] /course/:slug
  show(req, res, next) {

    Course.findOne({ slug: req.params.slug })
      .then((course) => 
        res.render("courses/show", { course:  mongoosesToObject(course) })
      
      )
      .catch(next);
  }
//GET /course/create
create(req, res, next) {
  res.render('courses/create')

}

//POST /course/store
store(req, res, next) {
  const course = new Course(req.body);
  course.save()
    .then(() => res.redirect('/'))
    .catch(error => {

    });
    
}

}

module.exports = new CourseController();
