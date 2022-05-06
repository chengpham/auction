class User < ApplicationRecord
    has_many :auctions, dependent: :nullify
    has_many :bids, dependent: :nullify

    has_secure_password

    def full_name
        "#{self.first_name} #{self.last_name}".strip.titleize
    end
end
