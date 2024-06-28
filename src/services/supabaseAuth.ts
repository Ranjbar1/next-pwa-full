import supabase from './supabase'

export async function signIn(email: string, password: string) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.log('error', error)
    throw error
  }

  return data
}

export async function signUp(email: string, password: string) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  if (error) {
    console.log('error', error)
    throw error
  }
  return data
}
