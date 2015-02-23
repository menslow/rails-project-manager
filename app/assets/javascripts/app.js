var PM = function(){

  var getProjectTasks = function( projectID ) {
    if ( projectID!==null ) {
      $.ajax({
        url: "/projects/"+projectID+"/tasks.json"
      }).done(function( data ) {
        appendTasks( data );
      });
    }
  };

  var appendTasks = function( data ) {
    $.each( data, function( i, task ) {
      $( "#task-list" ).append( "<tr><td>"+task.name+"</td><td>"+task.description+"</td><td>"+task.difficulty_level+"</td></tr>" );
    } );
  };

  return {

    init: function() {
      this.setProjectTasks();
    },

    setProjectTasks: function() {
      var projectTasks = $('#project-tasks'),
        projectID = projectTasks.data('project_id');
      if ( projectTasks.length && projectID!==null ) {
        getProjectTasks( projectID );
      }
    }

  };
}();

$(document).ready(function($){
  PM.init();
});