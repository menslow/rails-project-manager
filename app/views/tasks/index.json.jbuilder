json.array!(@tasks) do |task|
  json.extract! task, :id, :name, :description, :difficulty_level
  json.url task_url(task, format: :json)
end
