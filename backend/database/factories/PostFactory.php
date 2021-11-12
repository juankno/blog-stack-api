<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->title,
            'extract' => $this->faker->paragraph,
            'content' => $this->faker->paragraph,
            'user_id' => User::factory(),
        ];
    }
}
