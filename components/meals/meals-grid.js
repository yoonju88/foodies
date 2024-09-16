import classes from '../../components/meals/meals-grid.module.css'
import MealItem from './meal-Item'

export default function MealsGrid ({meals}) {
    return <ul className="classes.meals">
        {meals.map (meal => 
            <li key={meal.id}>
                <MealItem {...meal}/>
            </li>
        )}
    </ul>
}