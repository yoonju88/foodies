import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'


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

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export function saveMeal(meal){

}