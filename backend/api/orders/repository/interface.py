from abc import ABC, abstractmethod

class OrdersCollectionBlueprint:
  @abstractmethod
  def find(self):
    pass
  
  