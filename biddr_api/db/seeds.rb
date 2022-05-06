User.delete_all
Auction.delete_all
Bid.delete_all

PASSWORD='supersecret'
super_user=User.create(
    first_name: 'Jon',
    last_name: 'Snow',
    email: 'js@winterfell.gov',
    password: PASSWORD,
    is_admin: true
)

10.times do 
    first_name= Faker::Name.first_name 
    last_name= Faker::Name.last_name 
    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name}.#{last_name}@example.com",
        password: PASSWORD,
        created_at: Faker::Date.backward(days: 365)
    )
end

users=User.all

50.times do
    created_at=Faker::Date.backward(days: 100)
    a=Auction.create(
        title: Faker::Hacker.say_something_smart,
        description: Faker::ChuckNorris.fact,
        start_bid: rand(1_000),
        reserve_bid: 1,
        end_date: Faker::Date.forward(days: 100),
        created_at: created_at,
        updated_at: created_at,
        published: true,
        user: users.sample
    )
    if a.valid?
        a.bids = rand(0..15).times.map do 
            Bid.new(
                amount: a.start_bid + rand(1_000),
                user: users.sample
        )
        end
    end
end

users=User.all

puts "User Count #{User.count}"
puts "Auction Count #{Auction.count}"
puts "Bid Count #{Bid.count}"