$(document).ready(function() {

  /*
    Functions
  */

  populateCourses = () => {

    $.map(courses, (course, i) => {
      let title = '<h2 class="group-title mb-3"><img src="./img/'+course.name+'.png" alt="'+ course.name+'" class="course-icon">'+course.name+' </h2>';
      $('#courses').append(title);

      let group = '<div class="row mb-3" id="'+course.name+'"></div>';
      $('#courses').append(group);

      $.map(course.links, (link, i) => {
        if (link.url != '#') {
          let card = '<div class="col-lg-4 col-md-6 col-sm-12 mb-3"><div class="card"><div class="card-body"><h3 class="card-title">'+link.name+'</h3><a href="'+link.url+'" class="card-link">Go to course</a></div></div></div>';
          $('#'+course.name).append(card);
        } else {
          $('#'+course.name).append('<p class="col">No courses added yet...</p>');
        };
      });
    });
  }

  /*
    DOM events
  */

  /*
    Initialization
  */

  populateCourses();

});
