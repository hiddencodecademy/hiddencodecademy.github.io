$(document).ready(function() {

  /*
    Functions
  */
  populateCourses = function() {
    let $coursesEl = $('#courses');

    $.map(courses, function(course, i) {
      let $list = $('<div id="'+course.slug+'" class="course web '+course.category+'">');
      let $details = $('<details></details>');
      let $summary = $('<summary class="clickable">'+course.name+'</details>');

      $details.append($summary);

      $.map(course.links, function(link, i) {
        let $link =  $('<a href="'+link.url+'" class="link" target="_blank">'+link.name+'</a>')
        $details.append($link);
      });

      $list.append($details);
      $coursesEl.append($list);
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

