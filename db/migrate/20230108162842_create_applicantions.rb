class CreateApplicantions < ActiveRecord::Migration[7.0]
  def change
    create_table :applicantions do |t|
      t.references :job, foreign_key: true
      t.references :jobseeker, foreign_key: true
      t.datetime :date_applied


      t.timestamps
    end
  end
end
