import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function DetailPage() {
  const router = useRouter()
  const { category, id } = router.query
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!category || !id) return

    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://mongol-api-rest.vercel.app/${category}/${id}`)
        const data = await response.json()
        setItem(data)
      } catch (error) {
        console.error('Error fetching details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [category, id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl">
            {item.images?.[0] && (
              <div className="relative h-96">
                <image
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {item.description}
              </p>
              {/* Add more details based on category */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}