class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.float :start_bid
      t.float :reserve_bid
      t.datetime :end_date
      t.boolean :published, default: false

      t.timestamps
    end
  end
end
