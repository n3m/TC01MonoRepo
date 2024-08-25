from .interface import OrdersUsecaseBlueprint
from ..repository.interface import OrdersCollectionBlueprint

class OrdersUsecase(OrdersUsecaseBlueprint):
  repository: OrdersCollectionBlueprint | None = None
  
  def __init__(self, repo: OrdersCollectionBlueprint):
    self.repository = repo
  
  def All(self):
    return self.repository.find()
