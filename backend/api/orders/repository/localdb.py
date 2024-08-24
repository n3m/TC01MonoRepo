from .interface import OrdersCollectionBlueprint


_db = {
  "orders": {
    "5480f168-6216-4177-9e62-ea8e9689970d": {
      "_id": "5480f168-6216-4177-9e62-ea8e9689970d",
      "created": "2024-09-10 12:00:30",
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
    "72f037bb-5fc7-43cc-a5cf-4a0562f58943": {
      "_id": "72f037bb-5fc7-43cc-a5cf-4a0562f58943",
      "created": "2024-09-10 12:20:31",
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
    "c4b1492d-9b99-4d1f-bf2a-3925a444a77c": {
      "_id": "c4b1492d-9b99-4d1f-bf2a-3925a444a77c",
      "created": "2024-09-10 12:43:21",
      "items": [
        {
          "name": "Quilmes",
          "quantity": 3
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
        return _db.get("orders")
    
    def findOne(self, id: str):
        return _db["orders"].get(id)
