export default interface IEvent {
  _id: string; // varchar(50) → string
  title: string; // varchar(100) → string
  description: string; // varchar(250) → string
  location: string; // varchar(100) → string
  organizer: { _id: string; firstName: string; lastName: string }; // varchar(40) → string
  category: { _id: string; name: string }; // varchar(30) → string
  price: number; // INT → number
  created_at: Date; // varchar(70) → string (Could be a Date, depending on how you handle it in your app)
  image_url: string; // varchar(50) → string
  start_date_time: Date; // varchar(70) → string (Could be a Date, depending on your usage)
  end_date_time: Date; // varchar(70) → string (Could be a Date, depending on your usage)
  isFree: boolean; // boolean → boolean
  url: string; // varchar(50) → string
}
