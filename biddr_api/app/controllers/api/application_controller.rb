class Api::ApplicationController < ApplicationController
    skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :exception
    # cookies["CSRF-TOKEN"] = {
    #     value: form_authenticity_token,
    #     domain: ".herokuapp.com"
    #   }
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid 

    private
    def authenticate_user!
        render(
            json: {errors: 'You are not logged in'},
            status: 422
        ) unless user_signed_in?
    end
    def record_invalid(error)
        invalid_record=error.record
        errors=invalid_record.errors.map do |field,message|
            {
                type: error.class.to_s,
                record_type: invalid_record.class.to_s,
                field: field,
                message: message
            }
        end
        render(
            json: { status: 422, errors: errors },
            status: 422
        )
    end

    def current_user
        current_user ||= User.find_by_id session[:user_id]
    end
    helper_method(:current_user)
    def user_signed_in?
        current_user.present?
    end
    helper_method :user_signed_in?
    def authenticate_user!
        render(json: {status: 404}, status: 404) unless user_signed_in?
    end
end
