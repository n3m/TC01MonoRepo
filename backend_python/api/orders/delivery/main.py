from fastapi import APIRouter
from fastapi.responses import Response

from ..usecase.main import OrdersUsecaseBlueprint

class OrdersDelivery:
    __ordersUsecase: OrdersUsecaseBlueprint | None = None

    def __init__(self, ord: OrdersUsecaseBlueprint):
        self.__ordersUsecase = ord
        
    def getOrders(self):
      try:
        serv = self.__ordersUsecase.All()
        return serv
      except Exception as e:
        return {"error": str(e)}
      