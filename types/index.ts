export interface Trip {
  id: string
  name: string
  price: number
  maxPeople: number
  duration: string
  image: string
  rating: number
  description?: string
  active: boolean 
  created_at?: string
}

export interface BookingData {
  id?: string
  name: string
  email: string
  phone?: string
  tripId: string
  date: string
  numberOfPeople: number
  specialRequests?: string
  created_at?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  order: number
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
  marina: string
}

export interface ValueProposition {
  id: string
  title: string
  description: string
  icon: string
  order: number
} 