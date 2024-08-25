package models

type Store struct {
	Stock  Stock            `json:"stock" bson:"stock"`
	Orders map[string]Order `json:"orders" bson:"orders"`
}
