package repository

import (
	"backend_golang/api/orders"
	"backend_golang/domain/models"
	"context"
	"reflect"
	"testing"

	gomock "github.com/golang/mock/gomock"
)

func Test_localDBRepository_Find(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	MockRepository := NewMockRepository(ctrl)
	MockRepository.EXPECT().Find(gomock.Any()).Return(&models.Store{}, nil)

	type args struct {
		simpleContext context.Context
	}
	tests := []struct {
		name    string
		r       orders.Repository
		args    args
		want    *models.Store
		wantErr bool
	}{
		{
			name: "Test 1",
			r:    MockRepository,
			args: args{
				simpleContext: context.Background(),
			},
			want:    &models.Store{},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := tt.r.Find(tt.args.simpleContext)
			if (err != nil) != tt.wantErr {
				t.Errorf("localDBRepository.Find() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("localDBRepository.Find() = %v, want %v", got, tt.want)
			}
		})
	}
}
