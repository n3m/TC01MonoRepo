package models

type Order struct {
	ID        string       `json:"_id" bson:"_id"`
	Created   string       `json:"created" bson:"created"`
	Paid      bool         `json:"paid" bson:"paid"`
	Subtotal  float32      `json:"subtotal" bson:"subtotal"`
	Taxes     float32      `json:"taxes" bson:"taxes"`
	Discounts float32      `json:"discounts" bson:"discounts"`
	Items     []OrderItem  `json:"items" bson:"items"`
	Rounds    []OrderRound `json:"rounds" bson:"rounds"`
}

type OrderItem struct {
	Name         string  `json:"name" bson:"name"`
	PricePerUnit float32 `json:"price_per_unit" bson:"price_per_unit"`
	Total        float32 `json:"total" bson:"total"`
}

type OrderRound struct {
	Created string      `json:"created" bson:"created"`
	Items   []RoundItem `json:"items" bson:"items"`
}

type RoundItem struct {
	Name     string `json:"name" bson:"name"`
	Quantity int16  `json:"quantity" bson:"quantity"`
}
