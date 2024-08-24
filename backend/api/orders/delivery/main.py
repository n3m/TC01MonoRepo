from fastapi import APIRouter
from fastapi.responses import Response

from ..repository.main import OrdersCollectionBlueprint

class OrdersDelivery:
    __ordersRepository: OrdersCollectionBlueprint | None = None

    def __init__(self, ord: OrdersCollectionBlueprint):
        self.__ordersRepository = ord
        
    def getOrders(self):
      try:
        serv = self.__ordersRepository.find()
        return serv
      except Exception as e:
        return {"error": str(e)}
      