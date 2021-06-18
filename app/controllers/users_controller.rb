require 'csv'

class UsersController < ApplicationController
  def index
  end

  def create
    puts "HIHIHIHI"
    readThis = CSV.read(params[:file])
    readThis.each do |x|
      puts "id is #{x[0]}"
      puts "name is #{x[1]}"
    end
  end

  def show
  end

  def destroy
  end
end
