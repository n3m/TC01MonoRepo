package repository

import (
	"backend_golang/api/orders"
	"backend_golang/domain/models"
	"context"
)

type localDBRepository struct {
}

// NewLocalDBRepository ...
func NewLocalDBRepository() orders.Repository {
	return &localDBRepository{}
}

func (r *localDBRepository) Find(simpleContext context.Context) (*models.Store, error) {
	return db, nil
}

var db = &models.Store{
	Stock: models.Stock{
		LastUpdated: "2024-09-10 12:00:00",
		Beers: []models.StockBeer{
			{
				Name:     "Corona",
				Price:    115,
				Quantity: 2,
			},
			{
				Name:     "Quilmes",
				Price:    120,
				Quantity: 0,
			},
			{
				Name:     "Club Colombia",
				Price:    110,
				Quantity: 3,
			},
		},
	},
	Orders: map[string]models.Order{
		"bcdf1d77-bdf8-49de-8697-570380d40334": {
			ID:        "bcdf1d77-bdf8-49de-8697-570380d40334",
			Created:   "2024-09-10 12:00:00",
			Paid:      false,
			Subtotal:  0,
			Taxes:     0,
			Discounts: 0,
			Items:     []models.OrderItem{},
			Rounds: []models.OrderRound{
				{
					Created: "2024-09-10 12:00:30",
					Items: []models.RoundItem{
						{
							Name:     "Corona",
							Quantity: 2,
						},
						{
							Name:     "Club Colombia",
							Quantity: 1,
						},
					},
				},
				{
					Created: "2024-09-10 12:20:31",
					Items: []models.RoundItem{
						{
							Name:     "Club Colombia",
							Quantity: 1,
						},
						{
							Name:     "Quilmes",
							Quantity: 2,
						},
					},
				},
				{
					Created: "2024-09-10 12:43:21",
					Items: []models.RoundItem{
						{
							Name:     "Quilmes",
							Quantity: 3,
						},
					},
				},
			},
		},
	},
}
