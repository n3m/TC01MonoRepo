from .interface import OrdersCollectionBlueprint


_db = {
    "stock": {
        "last_updated": "2024-09-10 12:00:00",
        "beers": [
            {
                "name": "Corona",
                "price": 115,
                "quantity": 2
            },
            {
                "name": "Quilmes",
                "price": 120,
                "quantity": 0
            },
            {
                "name": "Club Colombia",
                "price": 110,
                "quantity": 3
            }
        ]
    },
  "orders": {
    "bcdf1d77-bdf8-49de-8697-570380d40334": {
    "_id": "bcdf1d77-bdf8-49de-8697-570380d40334",
    "created": "2024-09-10 12:00:00",
    "paid": False,
    "subtotal": 0,
    "taxes": 0,
    "discounts": 0,
    "items": [],
    "rounds": [
        {
            "created":  "2024-09-10 12:00:30",
            "items": [
                {
                    "name": "Corona",
                    "quantity": 2
                },
                {
                    "name": "Club Colombia",
                    "quantity": 1
                }
            ]
        },
        {
            "created":  "2024-09-10 12:20:31",
            "items": [
                {
                    "name": "Club Colombia",
                    "quantity": 1
                },
                {
                    "name": "Quilmes",
                    "price": 2
                }
            ]
        },
        {
            "created":  "2024-09-10 12:43:21",
            "items": [
                {
                    "name": "Quilmes",
                    "quantity": 3
                }
            ]
        }
      ]
    }
  }
}

class OrdersCollection(OrdersCollectionBlueprint):
    __instance = None
    
    @staticmethod
    def getInstance():
        if not OrdersCollection.__instance:
            OrdersCollection.__instance = OrdersCollection()
        return OrdersCollection.__instance
    
    def find(self):
        return _db

