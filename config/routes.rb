Rails.application.routes.draw do
  resources :user_types
  resources :user_accounts
  resources :jobseekers
  resources :companies
  resources :job_categories
  resources :jobs do
    resources :jobskillsets, :jobrequirements
  end
  resources :applications
  resources :savedjobs
  resources :savedcompanies
  resources :savedprofiles
  resources :surveys do
    resources :questions do
      resources :surveyprompts
    end
    resources :answers
  end
  
  resources :sessions, only: [:new, :create, :destroy]
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  get 'me', to: 'users#me', as: 'me'
end
