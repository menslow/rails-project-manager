var PM = function(){

  // Private methods

  var getProjectTasks = function( projectID ) {
    if ( projectID!==null ) {
      $.ajax({
        url: "/projects/"+projectID+"/tasks.json",
      }).done(function( data ) {
        appendTasks( data );
      });
    }
  };

  var deleteTask = function( taskID ) {
    if ( taskID!==null ) {
      $.ajax({
        url: "/tasks/"+taskID+".json",
        type: 'DELETE'
      }).done(function() {
        $( "#task-"+taskID ).remove();
      });
    }
  };

  var appendTasks = function( data ) {
    $.each( data, function( i, task ) {
      $( "#task-list" ).append( '<tr id="task-'+task.id+'"><td>'+task.name+'</td><td>'+task.description+'</td><td>'+task.difficulty_level+'</td><td><a class="delete-task btn btn-danger" href="#" onclick="PM.deleteTask('+task.id+')">Delete</a></td></tr>' );
    } );
  };

  return {

    // Public methods

    init: function() {
      this.setProjectTasks();
    },

    setProjectTasks: function() {
      var projectTasks = $('#project-tasks'),
        projectID = projectTasks.data('project_id');
      if ( projectTasks.length && projectID!==null ) {
        getProjectTasks( projectID );
      }
    },

    deleteTask: function( task_id ) {
      deleteTask( task_id );
    }

  };
}();

$(document).ready(function($){
  PM.init();
});