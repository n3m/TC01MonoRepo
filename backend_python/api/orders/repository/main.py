from .localdb import OrdersCollection
from .interface import OrdersCollectionBlueprint
  
def NewOrdersCollection() -> OrdersCollectionBlueprint:
  return OrdersCollection()