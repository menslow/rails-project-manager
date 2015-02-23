class Task < ActiveRecord::Base
  belongs_to :project
  accepts_nested_attributes_for :project

  def project_name
    project.name if project
  end
end
