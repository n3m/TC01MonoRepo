from .orders.repository.main import NewOrdersCollection
from .orders.usecase.main import NewOrdersUsecase
from .orders.delivery.main import OrdersDelivery

class API:
    __instance = None
    __ordersCollection = None
    __ordersUsecase = None
    ordersDelivery = None
    
    def __new__(cls):
        if cls.__instance is None:
            cls.__instance = super(API, cls).__new__(cls)
            cls.__instance.__initialize()
        return cls.__instance

    def __initialize(self):
        self.__ordersCollection = NewOrdersCollection()
        self.__ordersUsecase = NewOrdersUsecase(self.__ordersCollection)
        self.ordersDelivery = OrdersDelivery(self.__ordersUsecase)
        
        
