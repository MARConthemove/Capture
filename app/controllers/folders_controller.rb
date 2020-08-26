class FoldersController < ApplicationController

  def show
    @folder = Folder.find(params[:id])
    authorize @folder

    @sources = Source.where(user: current_user).select { |source| source.folder_id == @folder.id } # all has to be replaced by some pundit thing
  end
end