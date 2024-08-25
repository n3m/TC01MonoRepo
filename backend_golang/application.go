package main

import (
	"backend_golang/routing"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
)

func main() {
	server := fiber.New(fiber.Config{
		ReadTimeout: time.Second * 15,
		BodyLimit:   100 * 1024 * 1024,
	})

	routing.InitializeRouters(server)

	log.Fatal(server.Listen(":8000")) // Podria ponerlo en un .env, pero para este caso de prueba no creo que sea necesario
}
