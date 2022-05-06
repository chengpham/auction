class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start_bid, :published, :reserve_bid, :created_at, :updated_at, :user
end
