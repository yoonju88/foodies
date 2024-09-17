import fs from 'node:fs' // used to import file system, perform various file operations like reading, writing, updating and deleting files or directories.
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

export async function saveMeal(meal){
    meal.slug =slugify(meal.title, {lower: true} ) // convert the text in miniscule
    meal.instrunctions = xss (meal.instructions)

    const extension = meal.image.name.split('.').pop() 
    // .split('.') method slits the string int an array, using the period(.) as a delimiter.
    // .pop() retrives the last element, used to know the file type to handle it differently based on it type
    const fileName=`${meal.slug}.${extension}`
    const stream = fs.createWriteStream(`public/images/${fileName}`) // file name where i want to save the image file with their file name
    const bufferedImage= await meal.image.arrayBuffer() 
    stream.write(Buffer.from(bufferedImage), (error)=> {
        if (error) {
            throw new Error ('Saving image failed')
        }
    });
    meal.image = `/images/${fileName}` // Do not includ public on link file
    db.prepare(`
    INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)  
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,       
            @slug
        )  
     `).run(meal)
}

// 바이너리 데이터(0과 1로 이루어진 데이터)를 저장하기 위한 메모리 버퍼
//예를 들어, 이미지를 다운로드하거나 파일을 읽을 때 해당 데이터를 ArrayBuffer로 저장해 처리할 수 있습니다.
// ArrayBuffer는 크기가 고정된 메모리 덩어리이며, 이 메모리를 직접 다루기 위해 여러 타입의 배열 객체들(Uint8Array, Int32Array 등)을 사용하여 읽고 쓸 수 있습니다.