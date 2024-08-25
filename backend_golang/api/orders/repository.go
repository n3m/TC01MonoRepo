package orders

import (
	"backend_golang/domain/models"
	"context"
)

// Repository ...
type Repository interface {
	Find(simpleContext context.Context) (*models.Store, error)
}
