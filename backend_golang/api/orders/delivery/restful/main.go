package restful

import (
	"backend_golang/api/orders"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

type OrdersDelivery struct {
	router  fiber.Router
	usecase orders.Usecase
}

func NewOrdersDelivery(router fiber.Router, usecase orders.Usecase) {
	delivery := &OrdersDelivery{
		router:  router,
		usecase: usecase,
	}

	router.Get("/orders", delivery.RouteAll)
}

func (d *OrdersDelivery) RouteAll(c *fiber.Ctx) error {
	store, err := d.usecase.All(c.Context())
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{"error": err.Error()})
	}

	return c.Status(http.StatusOK).JSON(store)
}
