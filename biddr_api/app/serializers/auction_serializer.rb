class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start_bid, :published, :reserve_bid, :end_date, :created_at, :updated_at
  
  belongs_to :user, key: :seller
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :full_name
  end

  has_many :bids
  class BidSerializer < ActiveModel::Serializer
    attributes :id, :amount, :created_at, :bidder
    def bidder
      object.user.full_name
    end
  end

end
