package routing

import (
	"backend_golang/api"
	_ordersDelivery "backend_golang/api/orders/delivery/restful"

	"github.com/gofiber/fiber/v2"
)

func InitializeRouters(app *fiber.App) {

	apiRouter := app.Group("/api")
	versionRouter := apiRouter.Group("/v1")

	_ordersDelivery.NewOrdersDelivery(versionRouter, api.OrdersUsecase)
}
