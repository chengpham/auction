class Auction < ApplicationRecord
    has_many :bids, dependent: :destroy
    belongs_to :user
    before_validation :default_reserve_bid

    private
    def default_reserve_bid
        self.reserve_bid ||= 1
    end

end
