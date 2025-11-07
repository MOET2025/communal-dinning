import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hjaffbohvucceswgfynl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqYWZmYm9odnVjY2Vzd2dmeW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MjI4NTgsImV4cCI6MjA3Nzk5ODg1OH0.vXuDHPo64mOetclnfhDEMp6RsjXKqmRe7wSRa3u53Dk'
const supabase = createClient(supabaseUrl, supabaseKey)

export async function fetchAllEvents() {
  let {data: Event, error } = await supabase
  .from('Event')
  .select('*')
}