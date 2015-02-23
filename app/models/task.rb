class Task < ActiveRecord::Base
  belongs_to :project

  def project_name
    project.name if project
  end
end
