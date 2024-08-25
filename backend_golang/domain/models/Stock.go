package models

type Stock struct {
	LastUpdated string      `json:"last_updated" bson:"last_updated"`
	Beers       []StockBeer `json:"beers" bson:"beers"`
}

type StockBeer struct {
	Name     string  `json:"name" bson:"name"`
	Price    float32 `json:"price" bson:"price"`
	Quantity int16   `json:"quantity" bson:"quantity"`
}
