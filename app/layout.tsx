import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {title:{default:'A1 Sweets | Indian Vegetarian Restaurant',template:'%s | A1 Sweets'},description:'Enjoy Indian vegetarian meals, traditional sweets, dine-in, takeout and outdoor catering at A1 Sweets in Toronto.',openGraph:{title:'A1 Sweets | Taste tradition',description:'Indian vegetarian cuisine and traditional sweets in Toronto.',type:'website',locale:'en_CA',siteName:'A1 Sweets'}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-CA"><body>{children}</body></html>}
