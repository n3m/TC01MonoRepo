package restful

import (
	"backend_golang/api/orders"
	"backend_golang/api/orders/usecase"
	"testing"

	"github.com/gofiber/fiber/v2"
	"github.com/golang/mock/gomock"
	"github.com/valyala/fasthttp"
)

func TestOrdersDelivery_RouteAll(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	// Write the expected call to All() method
	mockUsecase := usecase.NewMockUsecase(ctrl)
	mockUsecase.EXPECT().All(gomock.Any()).Return(nil, nil)

	type fields struct {
		router  fiber.Router
		usecase orders.Usecase
	}
	type args struct {
		c *fiber.Ctx
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		wantErr bool
	}{
		{
			name: "Test 1",
			fields: fields{
				router:  fiber.New().Group("/api/v1"),
				usecase: mockUsecase,
			},
			args: args{
				c: createTestCtx(),
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			d := &OrdersDelivery{
				router:  tt.fields.router,
				usecase: tt.fields.usecase,
			}
			if err := d.RouteAll(tt.args.c); (err != nil) != tt.wantErr {
				t.Errorf("OrdersDelivery.RouteAll() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func createTestCtx() *fiber.Ctx {
	app := fiber.New()
	ctx := app.AcquireCtx(&fasthttp.RequestCtx{
		Request: fasthttp.Request{},
	})
	return ctx
}
