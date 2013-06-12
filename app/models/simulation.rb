class Simulation
  include MongoMapper::Document

  key :name, String, :required => true

  belongs_to :user

end
