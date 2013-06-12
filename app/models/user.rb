class User
  include MongoMapper::Document

  key :login, String
  key :name, String
  key :email, String

end
