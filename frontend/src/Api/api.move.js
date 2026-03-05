const url = 'http://localhost:3000/api'

export async function getMoves() {
  const response = await fetch(url + "/movies");
  if(!response.ok) throw new Error('faild')
  return response.json();
}