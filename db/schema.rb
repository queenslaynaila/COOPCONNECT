# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_08_165428) do
  create_table "answers", force: :cascade do |t|
    t.integer "question_id"
    t.string "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "applicantions", force: :cascade do |t|
    t.integer "job_id"
    t.integer "jobseeker_id"
    t.datetime "date_applied"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_applicantions_on_job_id"
    t.index ["jobseeker_id"], name: "index_applicantions_on_jobseeker_id"
  end

  create_table "companies", force: :cascade do |t|
    t.integer "user_account_id"
    t.string "company_name"
    t.string "contact_person_first_name"
    t.string "contact_person_last_name"
    t.text "profile_description"
    t.datetime "date_established"
    t.string "website_url"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_account_id"], name: "index_companies_on_user_account_id"
  end

  create_table "education_details", force: :cascade do |t|
    t.integer "jobseeker_id"
    t.string "education_level"
    t.datetime "start_date"
    t.datetime "end_date"
    t.string "institute_studied"
    t.string "institute_location"
    t.string "certificate_awarded"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["jobseeker_id"], name: "index_education_details_on_jobseeker_id"
  end

  create_table "employers", force: :cascade do |t|
    t.string "employer_name"
    t.string "contact_person_firstname"
    t.string "contact_person_lastname"
    t.string "contact_person_email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "experiences", force: :cascade do |t|
    t.integer "jobseeker_id"
    t.datetime "start_date"
    t.datetime "end_date"
    t.string "job_title"
    t.string "company_name"
    t.text "job_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["jobseeker_id"], name: "index_experiences_on_jobseeker_id"
  end

  create_table "job_categories", force: :cascade do |t|
    t.string "category_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "job_requirements", force: :cascade do |t|
    t.integer "job_id"
    t.string "requirement"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_job_requirements_on_job_id"
  end

  create_table "job_skill_sets", force: :cascade do |t|
    t.integer "job_id"
    t.string "skill_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_job_skill_sets_on_job_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.integer "company_id"
    t.integer "job_category_id"
    t.string "job_title"
    t.string "skill_required"
    t.string "role"
    t.string "job_location"
    t.text "job_description"
    t.integer "position_available"
    t.datetime "application_deadline"
    t.decimal "salary_range"
    t.text "job_details"
    t.datetime "posted_on"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_jobs_on_company_id"
    t.index ["job_category_id"], name: "index_jobs_on_job_category_id"
  end

  create_table "jobseekers", force: :cascade do |t|
    t.integer "user_account_id"
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "preferred_contact_method"
    t.text "about"
    t.string "experience"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_account_id"], name: "index_jobseekers_on_user_account_id"
  end

  create_table "questions", force: :cascade do |t|
    t.integer "survey_id"
    t.text "question_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["survey_id"], name: "index_questions_on_survey_id"
  end

  create_table "saved_companies", force: :cascade do |t|
    t.integer "company_id"
    t.integer "jobseeker_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_saved_companies_on_company_id"
    t.index ["jobseeker_id"], name: "index_saved_companies_on_jobseeker_id"
  end

  create_table "saved_jobs", force: :cascade do |t|
    t.integer "job_id"
    t.integer "jobseeker_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_saved_jobs_on_job_id"
    t.index ["jobseeker_id"], name: "index_saved_jobs_on_jobseeker_id"
  end

  create_table "saved_profiles", force: :cascade do |t|
    t.integer "company_id"
    t.integer "jobseeker_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_saved_profiles_on_company_id"
    t.index ["jobseeker_id"], name: "index_saved_profiles_on_jobseeker_id"
  end

  create_table "skeer_skills", force: :cascade do |t|
    t.integer "jobseeker_id"
    t.string "skill_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["jobseeker_id"], name: "index_skeer_skills_on_jobseeker_id"
  end

  create_table "survey_propmts", force: :cascade do |t|
    t.integer "question_id"
    t.string "answer_choice"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_survey_propmts_on_question_id"
  end

  create_table "surveys", force: :cascade do |t|
    t.string "survey_name"
    t.integer "company_id"
    t.string "description"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_surveys_on_company_id"
  end

  create_table "user_accounts", force: :cascade do |t|
    t.integer "user_type_id"
    t.string "email"
    t.string "password_digest"
    t.datetime "registration_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_type_id"], name: "index_user_accounts_on_user_type_id"
  end

  create_table "user_types", force: :cascade do |t|
    t.string "user_type_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "answers", "questions"
  add_foreign_key "applicantions", "jobs"
  add_foreign_key "applicantions", "jobseekers"
  add_foreign_key "companies", "user_accounts"
  add_foreign_key "education_details", "jobseekers"
  add_foreign_key "experiences", "jobseekers"
  add_foreign_key "job_requirements", "jobs"
  add_foreign_key "job_skill_sets", "jobs"
  add_foreign_key "jobs", "companies"
  add_foreign_key "jobs", "job_categories"
  add_foreign_key "jobseekers", "user_accounts"
  add_foreign_key "questions", "surveys"
  add_foreign_key "saved_companies", "companies"
  add_foreign_key "saved_companies", "jobseekers"
  add_foreign_key "saved_jobs", "jobs"
  add_foreign_key "saved_jobs", "jobseekers"
  add_foreign_key "saved_profiles", "companies"
  add_foreign_key "saved_profiles", "jobseekers"
  add_foreign_key "skeer_skills", "jobseekers"
  add_foreign_key "survey_propmts", "questions"
  add_foreign_key "surveys", "companies"
  add_foreign_key "user_accounts", "user_types"
end
