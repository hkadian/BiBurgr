import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Crispy Veg',
    description: 'A crispy veg patty inside the layer of sauces and bun',
    price: 0.67,
  },
  {
    id: 'm2',
    name: 'Tikki Twist Burger',
    description: 'A India specialty!',
    price: 0.73,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 1.56,
  },
  {
    id: 'm4',
    name: 'Veg Crunchy Volcano',
    description: 'A volcanic busrt of spices!',
    price: 0.73,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;