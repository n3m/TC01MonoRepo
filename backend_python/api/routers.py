from .main import API

from fastapi import APIRouter
OrdersRouter = APIRouter()
        
@OrdersRouter.get("/orders")
def getOrders():
    return API().ordersDelivery.getOrders()
      
