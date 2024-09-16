import Link from 'next/link'

export default function MealsPage(){
    return (
        <main>
            <h1>Meals Page here !</h1>
            <p><Link href="/meals/share">Meals share</Link></p>
        </main>
    )
}