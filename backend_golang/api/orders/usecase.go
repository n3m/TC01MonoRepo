package orders

import (
	"backend_golang/domain/models"
	"context"
)

// Usecase ...
type Usecase interface {
	All(simpleContext context.Context) (*models.Store, error)
}
