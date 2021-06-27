class CreateQZedIncidents < ActiveRecord::Migration[6.1]
  def change
    create_table :q_zed_incidents do |t|
      t.integer :irt_number
      t.string :rcode
      t.integer :pid_number
      t.integer :incident_type
      t.integer :incident_severity
      t.integer :incident_flags
      t.integer :response_time
      t.integer :response_type
      t.integer :response_level
      t.string :account_code

      t.timestamps
    end
  end
end
