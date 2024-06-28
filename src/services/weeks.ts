import supabase from './supabase'

export async function getAllWeeks() {
  let { data: weeks, error } = await supabase.from('pegnancy-weeks').select('*')
  if (error) {
    throw error
  }
  return weeks
}

export async function postNewWeek(week: any) {
  const { data, error } = await supabase
    .from('pegnancy-weeks')
    .insert([week])
    .select()

  if (error) {
    throw error
  }
  return data
}
