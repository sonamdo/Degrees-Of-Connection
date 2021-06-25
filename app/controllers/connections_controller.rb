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

  def show
    @user1 = User.find_by(name:params[:user1]).id
    @user2 = User.find_by(name:params[:user2]).id

    puts "first node is #{@user1}, second node is #{@user2}"
    
    @edges = []

    Connection.all.each do |x|
      @edges.push([x.user1, x.user2])
    end

    # puts "edges are #{@edges}"
    helpers.degrees_of_separation(@user1, @user2, @edges)

  end

end


