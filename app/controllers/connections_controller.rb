require 'csv'

class ConnectionsController < ApplicationController
  def create
    readThis = CSV.read(params[:file])
    readThis.each do |x|
      connection = Connection.new(user1: x[0], user2: x[1])
      connection.valid?
      connection.save
    end
  end


  def index
    user = User.all.order(created_at: :desc)
    render json: user
  end

end
