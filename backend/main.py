from fastapi import FastAPI
from .api.routers import OrdersRouter

global app
app = FastAPI()

app.include_router(OrdersRouter, prefix="/api/v1")