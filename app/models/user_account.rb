class UserAccount < ApplicationRecord
    has_secure_password
    belongs_to :user_type
    has_one :jobseeker
    has_one :company
    validates :user_type, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true

  def self.authenticate(email, password)
    user_account = UserAccount.find_by(email: email)
    if user_account && user_account.authenticate(password)
      user_account
    else
      nil
    end

end
