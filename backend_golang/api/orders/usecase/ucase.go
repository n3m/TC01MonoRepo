package usecase

import (
	"backend_golang/api/orders"
	"backend_golang/domain/models"
	"context"
)

type ordersUsecase struct {
	repository orders.Repository
}

// NewOrdersUsecase ...
func NewOrdersUsecase(repository orders.Repository) orders.Usecase {
	return &ordersUsecase{
		repository: repository,
	}
}

// All ...
func (u *ordersUsecase) All(simpleContext context.Context) (*models.Store, error) {
	return u.repository.Find(simpleContext)
}
