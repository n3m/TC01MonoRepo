from .interface import OrdersUsecaseBlueprint
from .ucase import OrdersUsecase
from ..repository.interface import OrdersCollectionBlueprint
  
def NewOrdersUsecase(repo: OrdersCollectionBlueprint) -> OrdersUsecaseBlueprint:
  return OrdersUsecase(repo)