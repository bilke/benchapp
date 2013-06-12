class User
  include MongoMapper::Document

  key :login, String, :required => true
  key :name, String, :required => true
  key :email, String, :required => true

  many :simulations, :in => :user_ids

end
