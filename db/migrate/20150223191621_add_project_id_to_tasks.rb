class AddProjectIdToTasks < ActiveRecord::Migration
  def change
    add_reference :tasks, :project, index: true
    
    # Not available yet in 4.0.0
    # add_foreign_key :tasks, :projects
  end
end
