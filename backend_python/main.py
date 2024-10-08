from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api.routers import OrdersRouter

global app
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(OrdersRouter, prefix="/api/v1")