class CreateApplicantions < ActiveRecord::Migration[7.0]
  def change
    create_table :applicantions do |t|
      t.integer :job_id
      t.integer :jobseeker_id
      t.date :date_applied

      t.timestamps
    end
  end
end
