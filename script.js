function generateMealPlan() {
    const weight = document.getElementById('weight').value;
    const mealResults = document.getElementById('meal-results');
    let mealPlan = '';

    if (weight < 60) {
        mealPlan = 'High Protein Meals: Chicken Salad, Grilled Fish, Greek Yogurt';
    } else if (weight >= 60 && weight <= 80) {
        mealPlan = 'Balanced Diet: Quinoa, Vegetables, Lean Meat, Oats';
    } else {
        mealPlan = 'Weight Gain Meals: Brown Rice, Sweet Potato, Protein Smoothie';
    }

    mealResults.innerHTML = `<p>${mealPlan}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const restaurants = [
        { name: 'GreenBites Organic', image: 'static/images/restaurant1.jpg', location: 'Downtown' },
        { name: 'Healthy Hut', image: 'static/images/restaurant2.jpg', location: 'Midtown' },
        { name: 'Fresh & Fit Kitchen', image: 'static/images/restaurant3.jpg', location: 'Uptown' },
        { name: 'Vegan Delights', image: 'static/images/restaurant4.jpg', location: 'City Center' }
    ];

    const restaurantList = document.getElementById('restaurant-list');
    restaurants.forEach(resto => {
        const div = document.createElement('div');
        div.classList.add('restaurant-item');
        div.innerHTML = `
            <img src="${resto.image}" alt="${resto.name}">
            <h3>${resto.name}</h3>
            <p class="location">Available near: ${resto.location}</p>
        `;
        restaurantList.appendChild(div);
    });
});
