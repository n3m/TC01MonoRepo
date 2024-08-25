package usecase

import (
	"backend_golang/api/orders"
	"backend_golang/api/orders/repository"
	"backend_golang/domain/models"
	"context"
	"reflect"
	"testing"

	gomock "github.com/golang/mock/gomock"
)

func Test_ordersUsecase_All(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	MockRepository := repository.NewMockRepository(ctrl)
	MockRepository.EXPECT().Find(gomock.Any()).Return(&models.Store{}, nil)

	type fields struct {
		repository orders.Repository
	}
	type args struct {
		simpleContext context.Context
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		want    *models.Store
		wantErr bool
	}{
		{
			name: "Test 1",
			fields: fields{
				repository: MockRepository,
			},
			args: args{
				simpleContext: context.Background(),
			},
			want:    &models.Store{},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			u := &ordersUsecase{
				repository: tt.fields.repository,
			}
			got, err := u.All(tt.args.simpleContext)
			if (err != nil) != tt.wantErr {
				t.Errorf("ordersUsecase.All() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("ordersUsecase.All() = %v, want %v", got, tt.want)
			}
		})
	}
}
