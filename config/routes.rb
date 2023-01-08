Rails.application.routes.draw do
  resources :answers
  resources :survey_propmts
  resources :questions
  resources :surveys
  resources :saved_profiles
  resources :saved_companies
  resources :saved_jobs
  resources :applicantions
  resources :job_requirements
  resources :job_skill_sets
  resources :jobs
  resources :job_categories
  resources :companies
  resources :skeer_skills
  resources :experiences
  resources :user_accounts
  resources :user_types
  resources :education_details
  resources :employers
  resources :jobseekers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end
