package api

import (
	_ordersRepository "backend_golang/api/orders/repository"
	_ordersUsecase "backend_golang/api/orders/usecase"
)

var (
	// Private
	ordersRepository = _ordersRepository.NewLocalDBRepository()

	// Public
	OrdersUsecase = _ordersUsecase.NewOrdersUsecase(ordersRepository)
)
