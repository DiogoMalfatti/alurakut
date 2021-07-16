import { SiteClient } from 'datocms-client'

export default async function receborDeRequests(req, res) {
  if (req.method === 'POST') {
    const TOKEN = '44a755bf9f5a4ceb194904a11d9e0f'
    const client = new SiteClient(TOKEN)

    const registroCriado = await client.items.create({
      itemType: '966631',
      ...req.body,
      // title: 'Comunidade de teste',
      // imageUrl: 'https:/github.com/diogomalfatti',
      // creatorSlug: 'diogomalfatti',
    })
    res.json({
      registroCriado: registroCriado,
    })
    return
  }
  res.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem !',
  })
}
