class ProjectUserController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  def index
    @project_owners = ProjectUser.where(role: ROLE[:owner])
    @project_viewers = ProjectUser.where(role: ROLE[:viewer])
    respond_with(@project_owners, @project_viewers)
  end

end
