'use server'
import {redirect} from 'next/navigation'
import {saveMeal} from './meals'
import { revalidatePath } from 'next/cache'

function isInvalidText(text) {
    return !text || text.trim() === ''
}

export async function ShareMeal( prevState ,formData){
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }
    if (
        isInvalidText(meal.title) || 
        isInvalidText(meal.summary)|| 
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator)||
        isInvalidText(meal.creator_email)||
        !meal.creator_email.includes('@')||
        !meal.image || 
        meal.image.size === 0    
    ) {
       return {
        message: 'Invalid input.'
       }
    }

    await saveMeal(meal)
    revalidatePath('/meals') // 특정 경로의 캐시를 무효화하고, 다음 요청 시 최신 데이터를 가져오도록 합니다.
    redirect('/meals')
  }