Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '127.0.0.1:5500', 'localhost:5500', /https*:\/\/chengpham\.com/, 'https://chengpham.com', 'https://chengpham.github.io', 'https://chengs-biddr.herokuapp.com'
      resource(
        '/api/*', 
        headers: [:any], 
        credentials: true, 
        methods: [:get, :post, :patch, :put, :options, :delete, :head],
      )
    end
  end