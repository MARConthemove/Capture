class Source < ApplicationRecord
  belongs_to :user
  belongs_to :folder
end
