import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    try {
        const meals =db.prepare('SELECT * FROM meals').all()
        return meals
    } catch (error) {
        console.error("Failed to fetch meals", error)
        return []
    }
    //return  db.prepare('SELECT * FROM meals').all()
}