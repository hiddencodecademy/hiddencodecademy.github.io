$(document).ready(function() {

  /*
    Functions
  */
  populateCourses = function() {
    let $coursesEl = $('#courses');

    $.map(courses, function(course, i) {

      let $panel = $('<div class="col-lg-4 col-md-6 col-sm-12"><div id="'+course.slug+'" class="panel-group course '+course.category+'"><div class="panel panel-'+course.slug+'"> </div></div></div>');
      let $head = $('<a data-toggle="collapse" href="#'+course.slug+'_col"><div class="panel-heading"><h4 class="panel-title"> </h4></div></a>');
      let $title = course.name;
      let $list = $('<div id="'+course.slug+'_col" class="panel-collapse collapse"><ul class="list-group"></ul></div>');

      $head.find('.panel-title').append($title);

      $.map(course.links, function(link, i) {
        let $link =  $('<li class="list-group-item"><a href="'+link.url+'" class="link" target="_blank">'+link.name+'</a></li>')
        $list.find('.list-group').append($link);
      });

      $panel.find('.panel').append($head);
      $panel.find('.panel').append($list);
      $coursesEl.append($panel);
    });
  }


  window.showCourse = function(type) {
    $('.course').hide();
    $('.' + type).show();
    $('#menuItems *').removeClass('active');
    $('#show_' + type).addClass('active');
  }

  window.showAllCourses = function() {
    $('.course').show();
    $('#menuItems *').removeClass('active');
  }

  /*
    DOM events
  */


  /*
    Initialization
  */
  populateCourses();

});